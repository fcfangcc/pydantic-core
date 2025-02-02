use std::borrow::Cow;

use pyo3::prelude::*;
use pyo3::types::{PyDelta, PyDict};

use crate::build_context::BuildContext;

use super::any::{fallback_json_key, fallback_serialize, fallback_to_python};
use super::{BuildSerializer, CombinedSerializer, Extra, SerMode, TypeSerializer};

#[derive(Debug, Clone)]
pub struct TimeDeltaSerializer;

impl BuildSerializer for TimeDeltaSerializer {
    const EXPECTED_TYPE: &'static str = "timedelta";

    fn build(
        _schema: &PyDict,
        _config: Option<&PyDict>,
        _build_context: &mut BuildContext<CombinedSerializer>,
    ) -> PyResult<CombinedSerializer> {
        Ok(Self {}.into())
    }
}

impl TypeSerializer for TimeDeltaSerializer {
    fn to_python(
        &self,
        value: &PyAny,
        include: Option<&PyAny>,
        exclude: Option<&PyAny>,
        extra: &Extra,
    ) -> PyResult<PyObject> {
        match extra.mode {
            SerMode::Json => match value.cast_as::<PyDelta>() {
                Ok(py_timedelta) => extra.config.timedelta_mode.timedelta_to_json(py_timedelta),
                Err(_) => {
                    extra.warnings.fallback_slow(Self::EXPECTED_TYPE, value);
                    fallback_to_python(value, include, exclude, extra)
                }
            },
            _ => fallback_to_python(value, include, exclude, extra),
        }
    }

    fn json_key<'py>(&self, key: &'py PyAny, extra: &Extra) -> PyResult<Cow<'py, str>> {
        match key.cast_as::<PyDelta>() {
            Ok(py_timedelta) => extra.config.timedelta_mode.json_key(py_timedelta),
            Err(_) => {
                extra.warnings.fallback_slow(Self::EXPECTED_TYPE, key);
                fallback_json_key(key, extra)
            }
        }
    }

    fn serde_serialize<S: serde::ser::Serializer>(
        &self,
        value: &PyAny,
        serializer: S,
        include: Option<&PyAny>,
        exclude: Option<&PyAny>,
        extra: &Extra,
    ) -> Result<S::Ok, S::Error> {
        match value.cast_as::<PyDelta>() {
            Ok(py_timedelta) => extra
                .config
                .timedelta_mode
                .timedelta_serialize(py_timedelta, serializer),
            Err(_) => {
                extra.warnings.fallback_slow(Self::EXPECTED_TYPE, value);
                fallback_serialize(value, serializer, include, exclude, extra)
            }
        }
    }
}
