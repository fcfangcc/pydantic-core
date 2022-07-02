use pyo3::prelude::*;
use pyo3::types::PyDict;

use crate::build_tools::{is_strict, SchemaDict};
use crate::errors::{as_internal, ErrorKind, ValError, ValLineError, ValResult};
use crate::input::{GenericMapping, Input, JsonObject};
use crate::recursion_guard::RecursionGuard;

use super::any::AnyValidator;
use super::{build_validator, BuildContext, BuildValidator, CombinedValidator, Extra, Validator};

#[derive(Debug, Clone)]
pub struct DictValidator {
    strict: bool,
    key_validator: Box<CombinedValidator>,
    value_validator: Box<CombinedValidator>,
    min_items: Option<usize>,
    max_items: Option<usize>,
}

impl BuildValidator for DictValidator {
    const EXPECTED_TYPE: &'static str = "dict";

    fn build(
        schema: &PyDict,
        config: Option<&PyDict>,
        build_context: &mut BuildContext,
    ) -> PyResult<CombinedValidator> {
        Ok(Self {
            strict: is_strict(schema, config)?,
            key_validator: match schema.get_item("keys_schema") {
                Some(schema) => Box::new(build_validator(schema, config, build_context)?.0),
                None => Box::new(AnyValidator::build(schema, config, build_context)?),
            },
            value_validator: match schema.get_item("values_schema") {
                Some(d) => Box::new(build_validator(d, config, build_context)?.0),
                None => Box::new(AnyValidator::build(schema, config, build_context)?),
            },
            min_items: schema.get_as("min_items")?,
            max_items: schema.get_as("max_items")?,
        }
        .into())
    }
}

impl Validator for DictValidator {
    fn validate<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
        recursion_guard: &'s mut RecursionGuard,
    ) -> ValResult<'data, PyObject> {
        let dict = match self.strict {
            true => input.strict_dict()?,
            false => input.lax_dict()?,
        };
        self._validation_logic(py, input, dict, extra, slots, recursion_guard)
    }

    fn validate_strict<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
        recursion_guard: &'s mut RecursionGuard,
    ) -> ValResult<'data, PyObject> {
        self._validation_logic(py, input, input.strict_dict()?, extra, slots, recursion_guard)
    }

    fn get_name(&self, py: Python) -> String {
        format!(
            "{}[{}, {}]",
            Self::EXPECTED_TYPE,
            self.key_validator.get_name(py),
            self.value_validator.get_name(py)
        )
    }
}

macro_rules! build_validate {
    ($name:ident, $dict_type:ty) => {
        fn $name<'s, 'data>(
            &'s self,
            py: Python<'data>,
            input: &'data impl Input<'data>,
            dict: &'data $dict_type,
            extra: &Extra,
            slots: &'data [CombinedValidator],
            recursion_guard: &'s mut RecursionGuard,
        ) -> ValResult<'data, PyObject> {
            if let Some(min_length) = self.min_items {
                if dict.len() < min_length {
                    return Err(ValError::new(ErrorKind::TooShort { min_length }, input));
                }
            }
            if let Some(max_length) = self.max_items {
                if dict.len() > max_length {
                    return Err(ValError::new(ErrorKind::TooLong { max_length }, input));
                }
            }
            let output = PyDict::new(py);
            let mut errors: Vec<ValLineError> = Vec::new();

            let key_validator = self.key_validator.as_ref();
            let value_validator = self.value_validator.as_ref();

            for (key, value) in dict.iter() {
                let output_key = match key_validator.validate(py, key, extra, slots, recursion_guard) {
                    Ok(value) => Some(value),
                    Err(ValError::LineErrors(line_errors)) => {
                        for err in line_errors {
                            // these are added in reverse order so [key] is shunted along by the second call
                            errors.push(
                                err.with_outer_location("[key]".into())
                                    .with_outer_location(key.as_loc_item()),
                            );
                        }
                        None
                    }
                    Err(err) => return Err(err),
                };
                let output_value = match value_validator.validate(py, value, extra, slots, recursion_guard) {
                    Ok(value) => Some(value),
                    Err(ValError::LineErrors(line_errors)) => {
                        for err in line_errors {
                            errors.push(err.with_outer_location(key.as_loc_item()));
                        }
                        None
                    }
                    Err(err) => return Err(err),
                };
                if let (Some(key), Some(value)) = (output_key, output_value) {
                    output.set_item(key, value).map_err(as_internal)?;
                }
            }

            if errors.is_empty() {
                Ok(output.into())
            } else {
                Err(ValError::LineErrors(errors))
            }
        }
    };
}

impl DictValidator {
    build_validate!(validate_dict, PyDict);
    build_validate!(validate_json_object, JsonObject);

    fn _validation_logic<'s, 'data>(
        &'s self,
        py: Python<'data>,
        input: &'data impl Input<'data>,
        dict: GenericMapping<'data>,
        extra: &Extra,
        slots: &'data [CombinedValidator],
        recursion_guard: &'s mut RecursionGuard,
    ) -> ValResult<'data, PyObject> {
        match dict {
            GenericMapping::PyDict(py_dict) => self.validate_dict(py, input, py_dict, extra, slots, recursion_guard),
            GenericMapping::PyGetAttr(_) => unreachable!(),
            GenericMapping::JsonObject(json_object) => {
                self.validate_json_object(py, input, json_object, extra, slots, recursion_guard)
            }
        }
    }
}
