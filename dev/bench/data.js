window.BENCHMARK_DATA = {
  "lastUpdate": 1674025981805,
  "repoUrl": "https://github.com/fcfangcc/pydantic-core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "6b430f9de18cfd75141ee518d25fba625137b5dd",
          "message": "temporarily remove paths restriction on benchmarks",
          "timestamp": "2022-05-11T10:32:59+01:00",
          "tree_id": "0ef483164d7dc40843bccf3a93b4297be801364a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6b430f9de18cfd75141ee518d25fba625137b5dd"
        },
        "date": 1652261877752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25350.024953455166,
            "unit": "iter/sec",
            "range": "stddev: 0.001305452273109351",
            "extra": "mean: 39.447692924803285 usec\nrounds: 54345"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 215947.6208061508,
            "unit": "iter/sec",
            "range": "stddev: 0.00001279990227496455",
            "extra": "mean: 4.630752569845017 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 940784.8753177086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010477713747522003",
            "extra": "mean: 1.0629422583591523 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 170268.86398776842,
            "unit": "iter/sec",
            "range": "stddev: 0.0004811225320834584",
            "extra": "mean: 5.8730643793559745 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1676.6594747657155,
            "unit": "iter/sec",
            "range": "stddev: 0.027675612373301333",
            "extra": "mean: 596.424029476667 usec\nrounds: 9058"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17358.965045785382,
            "unit": "iter/sec",
            "range": "stddev: 0.000029691219797545142",
            "extra": "mean: 57.607121009947086 usec\nrounds: 20081"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3120.596545716897,
            "unit": "iter/sec",
            "range": "stddev: 0.0001095284458401033",
            "extra": "mean: 320.45155000012 usec\nrounds: 3540"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5910.097709442715,
            "unit": "iter/sec",
            "range": "stddev: 0.00007716428180793458",
            "extra": "mean: 169.2019403337908 usec\nrounds: 6771"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2501.5343584087886,
            "unit": "iter/sec",
            "range": "stddev: 0.00006278202012118965",
            "extra": "mean: 399.75465323454284 usec\nrounds: 2829"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4411.128098346912,
            "unit": "iter/sec",
            "range": "stddev: 0.00006489568629268579",
            "extra": "mean: 226.69937886744978 usec\nrounds: 5139"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 768.739356314636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003579689462154051",
            "extra": "mean: 1.3008310187135932 msec\nrounds: 855"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1378.8414408907752,
            "unit": "iter/sec",
            "range": "stddev: 0.00010030355235325868",
            "extra": "mean: 725.2465514482711 usec\nrounds: 1623"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1500.8985567655768,
            "unit": "iter/sec",
            "range": "stddev: 0.00009544097699597142",
            "extra": "mean: 666.2675471918577 usec\nrounds: 1727"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 267.20326498035223,
            "unit": "iter/sec",
            "range": "stddev: 0.08880268475463554",
            "extra": "mean: 3.7424692399381088 msec\nrounds: 1292"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27273.29488253122,
            "unit": "iter/sec",
            "range": "stddev: 0.000017312752550409826",
            "extra": "mean: 36.66590356270113 usec\nrounds: 32363"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "22c1cae28b8eac6039f51d7a33c236d20bba3fed",
          "message": "tweaks to benchmarks CI",
          "timestamp": "2022-05-11T10:40:22+01:00",
          "tree_id": "586e12010011afafe3d6e41d99968d9a93093ba8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/22c1cae28b8eac6039f51d7a33c236d20bba3fed"
        },
        "date": 1652262182317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 34478.43001360939,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853902776968035",
            "extra": "mean: 29.003640815584646 usec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 22047.052882601965,
            "unit": "iter/sec",
            "range": "stddev: 0.0017989817789205095",
            "extra": "mean: 45.35753623510977 usec\nrounds: 40320"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 304774.7114874032,
            "unit": "iter/sec",
            "range": "stddev: 4.850711985617787e-7",
            "extra": "mean: 3.2811121208832037 usec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1219172.8936220936,
            "unit": "iter/sec",
            "range": "stddev: 4.7599405274193255e-8",
            "extra": "mean: 820.2282098224388 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 191828.7480400903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004203535846785866",
            "extra": "mean: 5.212982987258082 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2191.7446912232904,
            "unit": "iter/sec",
            "range": "stddev: 0.019210177770001724",
            "extra": "mean: 456.25752123613654 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 22880.06102813421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010866602842384837",
            "extra": "mean: 43.706177128214875 usec\nrounds: 22989"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3867.060942662483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017846776508847355",
            "extra": "mean: 258.59432132752914 usec\nrounds: 3887"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 8181.079786855855,
            "unit": "iter/sec",
            "range": "stddev: 0.000001259592010680422",
            "extra": "mean: 122.23325356228057 usec\nrounds: 8211"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3429.0223473492,
            "unit": "iter/sec",
            "range": "stddev: 0.000002707741346858946",
            "extra": "mean: 291.62831230104064 usec\nrounds: 3455"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6206.210226807806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015960080522008193",
            "extra": "mean: 161.12892787300163 usec\nrounds: 6239"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1083.6496892849405,
            "unit": "iter/sec",
            "range": "stddev: 0.000004191645523801962",
            "extra": "mean: 922.8074440365154 usec\nrounds: 1090"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1904.825536775508,
            "unit": "iter/sec",
            "range": "stddev: 0.000008904548536466302",
            "extra": "mean: 524.9824620121387 usec\nrounds: 1948"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1992.8849188928682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001021306419722112",
            "extra": "mean: 501.7851209168377 usec\nrounds: 2051"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 329.2671309190059,
            "unit": "iter/sec",
            "range": "stddev: 0.07157791471822271",
            "extra": "mean: 3.0370477527135344 msec\nrounds: 1290"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 37822.93552312102,
            "unit": "iter/sec",
            "range": "stddev: 6.427638900628171e-7",
            "extra": "mean: 26.43898434030071 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18c4102a3c89515fd3999d7a5e05121df6ef3abf",
          "message": "add benchmarks to CI (#66)\n\n* add benchmarks to CI\r\n\r\n* improving benchmarks\r\n\r\n* decrease warmup iterations\r\n\r\n* add link to benchmarks to readme\r\n\r\n* remove benchmarks from ci.yml",
          "timestamp": "2022-05-11T11:10:40+01:00",
          "tree_id": "daa9781b24da75fe5a2b37456432b0e61eacf7a8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/18c4102a3c89515fd3999d7a5e05121df6ef3abf"
        },
        "date": 1652263966333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 35948.72849252688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112228789003178",
            "extra": "mean: 27.81739555010639 usec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 24233.791619751304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010573158437508264",
            "extra": "mean: 41.26469417955086 usec\nrounds: 34723"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 252491.87851524877,
            "unit": "iter/sec",
            "range": "stddev: 1.63212302457631e-7",
            "extra": "mean: 3.9605234270519594 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 984497.5109723401,
            "unit": "iter/sec",
            "range": "stddev: 4.589521201877868e-8",
            "extra": "mean: 1.015746600529712 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 212081.125326338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003119399855076994",
            "extra": "mean: 4.715176791245636 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 2528.0329095564457,
            "unit": "iter/sec",
            "range": "stddev: 0.013044415433749774",
            "extra": "mean: 395.5644707866775 usec\nrounds: 8592"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19320.4844170213,
            "unit": "iter/sec",
            "range": "stddev: 9.700711282877019e-7",
            "extra": "mean: 51.758536608895916 usec\nrounds: 19763"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3797.688620750334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021026532075322585",
            "extra": "mean: 263.3180599736541 usec\nrounds: 3835"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7027.210504976325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015235936252939916",
            "extra": "mean: 142.30397670481753 usec\nrounds: 7083"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3102.381270728865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025815862512631983",
            "extra": "mean: 322.33304443752746 usec\nrounds: 3128"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5517.800116951731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020278599697715628",
            "extra": "mean: 181.23164645413846 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 919.2315866008385,
            "unit": "iter/sec",
            "range": "stddev: 0.000004035725505970004",
            "extra": "mean: 1.0878651414686795 msec\nrounds: 926"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1621.6838047974477,
            "unit": "iter/sec",
            "range": "stddev: 0.000004152889618443191",
            "extra": "mean: 616.6430206934838 usec\nrounds: 1643"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1719.9167879850604,
            "unit": "iter/sec",
            "range": "stddev: 0.000006697017179830309",
            "extra": "mean: 581.4234775692452 usec\nrounds: 1761"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 422.58846569927977,
            "unit": "iter/sec",
            "range": "stddev: 0.04453661325612685",
            "extra": "mean: 2.3663684202673316 msec\nrounds: 1273"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 34154.59513672076,
            "unit": "iter/sec",
            "range": "stddev: 7.825404243656271e-7",
            "extra": "mean: 29.278637208170743 usec\nrounds: 35089"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69098c4f8a4b20f08a8b982f66079bba10481600",
          "message": "List as enum (#54)\n\n* use enum dispatch for sequences\r\n\r\n* rename ListInput GenericSequence\r\n\r\n* implement generic dict as enum\r\n\r\n* more enum dispatch on sequences\r\n\r\n* more enum dispatch on mappings\r\n\r\n* a few more inlines\r\n\r\n* tweak dict validator\r\n\r\n* incorporate enumerate\r\n\r\n* remove unenecessary iterator\r\n\r\n* more list and dict tests",
          "timestamp": "2022-05-11T11:13:05+01:00",
          "tree_id": "dd48feedd71ddc6c8e903078fbdc6ea0e03e7d39",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/69098c4f8a4b20f08a8b982f66079bba10481600"
        },
        "date": 1652264131174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 26425.928721566695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008253042824140784",
            "extra": "mean: 37.8416217850418 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15692.497237175516,
            "unit": "iter/sec",
            "range": "stddev: 0.0022479104248595686",
            "extra": "mean: 63.72472047540022 usec\nrounds: 30212"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 202749.6986856139,
            "unit": "iter/sec",
            "range": "stddev: 0.000009514269588002117",
            "extra": "mean: 4.932189820664601 usec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 967009.3276073326,
            "unit": "iter/sec",
            "range": "stddev: 9.963077551663712e-7",
            "extra": "mean: 1.0341161883869452 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 160385.82002064548,
            "unit": "iter/sec",
            "range": "stddev: 0.000484811131064702",
            "extra": "mean: 6.234965160082686 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1393.2334570120404,
            "unit": "iter/sec",
            "range": "stddev: 0.027217136197092463",
            "extra": "mean: 717.7547990733889 usec\nrounds: 7988"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17714.985874435533,
            "unit": "iter/sec",
            "range": "stddev: 0.00005837626954685201",
            "extra": "mean: 56.44938173183069 usec\nrounds: 20834"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2930.935027629462,
            "unit": "iter/sec",
            "range": "stddev: 0.00007522970552979807",
            "extra": "mean: 341.18804769575496 usec\nrounds: 3732"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5072.416889774781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007534671856079127",
            "extra": "mean: 197.1446791007749 usec\nrounds: 6407"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2325.300805720719,
            "unit": "iter/sec",
            "range": "stddev: 0.00008595765958114616",
            "extra": "mean: 430.0518872826234 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 3893.5109545926093,
            "unit": "iter/sec",
            "range": "stddev: 0.00012570944997130018",
            "extra": "mean: 256.83759764960854 usec\nrounds: 4936"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 791.3929305485312,
            "unit": "iter/sec",
            "range": "stddev: 0.00014191811760875798",
            "extra": "mean: 1.2635948103641494 msec\nrounds: 907"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1517.635066037196,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983328680023544",
            "extra": "mean: 658.9199356148052 usec\nrounds: 1724"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.3250879528025,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173224075931947",
            "extra": "mean: 687.6041734297945 usec\nrounds: 1799"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 277.75573655824604,
            "unit": "iter/sec",
            "range": "stddev: 0.07403441379634378",
            "extra": "mean: 3.600285676873131 msec\nrounds: 1241"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 24912.50305087494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950293516996522",
            "extra": "mean: 40.14048680527424 usec\nrounds: 30770"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6d4184389f3dda4cecc1dc3402dc63d76a8ccab",
          "message": "implement __reduce__ to make SchemaValidator picklable (#53)\n\n* attempt at implementing __reduce__\r\n\r\n* python version\r\n\r\n* remove loc\r\n\r\n* back to rust\r\n\r\n* use array\r\n\r\n* minimize changes\r\n\r\n* again use array\r\n\r\n* remove import\r\n\r\n* test all protocol versions\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* Update src/validators/mod.rs\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* pointlessly tweak layout\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:22:54+01:00",
          "tree_id": "009c56dc5106873a6189dc7f72b41e81c90c6b15",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f6d4184389f3dda4cecc1dc3402dc63d76a8ccab"
        },
        "date": 1652268315085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 27646.82615096265,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975823425689881",
            "extra": "mean: 36.17051717038343 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 15149.687370138572,
            "unit": "iter/sec",
            "range": "stddev: 0.0022246765055872137",
            "extra": "mean: 66.0079627762545 usec\nrounds: 27778"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 210741.81608731038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067515951706193614",
            "extra": "mean: 4.745142746543001 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 883093.3428389295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014495441739468722",
            "extra": "mean: 1.1323831258711896 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 161641.09455036782,
            "unit": "iter/sec",
            "range": "stddev: 0.00042499719434656096",
            "extra": "mean: 6.186545585958117 usec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1572.7391911969876,
            "unit": "iter/sec",
            "range": "stddev: 0.022113796840178408",
            "extra": "mean: 635.833331805584 usec\nrounds: 7200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 16907.91211195713,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580116911805513",
            "extra": "mean: 59.143908093348124 usec\nrounds: 17953"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2832.9325369466587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000803674449148478",
            "extra": "mean: 352.99110972752015 usec\nrounds: 2971"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5210.640827559687,
            "unit": "iter/sec",
            "range": "stddev: 0.00011717054010032895",
            "extra": "mean: 191.91497420257474 usec\nrounds: 5737"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2324.545962760404,
            "unit": "iter/sec",
            "range": "stddev: 0.00010386925226006375",
            "extra": "mean: 430.19153676466675 usec\nrounds: 2448"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4094.5118114319876,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619113276618101",
            "extra": "mean: 244.22936019087138 usec\nrounds: 4406"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 695.119966686474,
            "unit": "iter/sec",
            "range": "stddev: 0.00026569760420190066",
            "extra": "mean: 1.4386005983497214 msec\nrounds: 727"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1321.9664933888203,
            "unit": "iter/sec",
            "range": "stddev: 0.00011226090217757379",
            "extra": "mean: 756.4488245360371 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 653.3834516478503,
            "unit": "iter/sec",
            "range": "stddev: 0.033256881933444185",
            "extra": "mean: 1.5304948380280732 msec\nrounds: 1562"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 302.54897093272393,
            "unit": "iter/sec",
            "range": "stddev: 0.06511875669096467",
            "extra": "mean: 3.3052500456938065 msec\nrounds: 1138"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26686.354120505068,
            "unit": "iter/sec",
            "range": "stddev: 0.000025274712767584005",
            "extra": "mean: 37.47233494258503 usec\nrounds: 27548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1755071+adriangb@users.noreply.github.com",
            "name": "Adrian Garcia Badaracco",
            "username": "adriangb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d0da7806d338ed9f2d34561921ed1dc0a1eb67b",
          "message": "add types (#50)\n\n* add types\r\n\r\n* guard versions\r\n\r\n* move TypedDict\r\n\r\n* remove mypy in favor of pyright, add test for typing\r\n\r\n* revert unecessary change\r\n\r\n* Update pydantic_core/_types.py\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* pr feedback\r\n\r\n* fix filename\r\n\r\n* Update Makefile\r\n\r\n* a few tweaks\r\n\r\n* :-( fix tests\r\n\r\n* fix pyright complaint with pytest\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-05-11T12:25:50+01:00",
          "tree_id": "082d7ece6733b164470ad48b37be1e2ac9ddf592",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6d0da7806d338ed9f2d34561921ed1dc0a1eb67b"
        },
        "date": 1652268498810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 25888.45636406876,
            "unit": "iter/sec",
            "range": "stddev: 0.0011369151152302384",
            "extra": "mean: 38.62725478634273 usec\nrounds: 52911"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 17969.151835993896,
            "unit": "iter/sec",
            "range": "stddev: 0.0015764323353242965",
            "extra": "mean: 55.650929388715284 usec\nrounds: 30675"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 206548.13777352165,
            "unit": "iter/sec",
            "range": "stddev: 0.000005368090415345586",
            "extra": "mean: 4.841486400117011 usec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 924146.7842567787,
            "unit": "iter/sec",
            "range": "stddev: 0.000001241803955507628",
            "extra": "mean: 1.0820791859426202 usec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 172170.43180692432,
            "unit": "iter/sec",
            "range": "stddev: 0.00044408414093048194",
            "extra": "mean: 5.808198245802231 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 1574.7511305022754,
            "unit": "iter/sec",
            "range": "stddev: 0.023881813937707237",
            "extra": "mean: 635.0209760961052 usec\nrounds: 8827"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18199.33484699339,
            "unit": "iter/sec",
            "range": "stddev: 0.000019786986406034487",
            "extra": "mean: 54.947063088143814 usec\nrounds: 23697"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2909.444171372192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006072032027683822",
            "extra": "mean: 343.7082621621044 usec\nrounds: 3700"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5538.861457677753,
            "unit": "iter/sec",
            "range": "stddev: 0.000033933606324276596",
            "extra": "mean: 180.54251900701345 usec\nrounds: 6366"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2379.620570168635,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199910384062807",
            "extra": "mean: 420.2350629071649 usec\nrounds: 3068"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4364.255145223726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004341270610409454",
            "extra": "mean: 229.13417449811746 usec\nrounds: 5129"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.2700752827271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001432222183208433",
            "extra": "mean: 1.2558553071895056 msec\nrounds: 918"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1470.3445720979482,
            "unit": "iter/sec",
            "range": "stddev: 0.00008388658171775615",
            "extra": "mean: 680.1126885333815 usec\nrounds: 1875"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1454.207870762067,
            "unit": "iter/sec",
            "range": "stddev: 0.00010392745442016923",
            "extra": "mean: 687.6595981260625 usec\nrounds: 2028"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 272.6086190203901,
            "unit": "iter/sec",
            "range": "stddev: 0.080465091017438",
            "extra": "mean: 3.668262594166928 msec\nrounds: 1200"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 26621.840067271758,
            "unit": "iter/sec",
            "range": "stddev: 0.000022022978230362823",
            "extra": "mean: 37.56314354954659 usec\nrounds: 34246"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6339ef58bba2171a3df38092cc40719b5dbb7d5d",
          "message": "fix memory leak in create_class (#58)",
          "timestamp": "2022-05-11T14:11:13+01:00",
          "tree_id": "e5861ba166c3eb8e13faf27a72d3db0ab804a4db",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/6339ef58bba2171a3df38092cc40719b5dbb7d5d"
        },
        "date": 1652274782216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56125.25611919934,
            "unit": "iter/sec",
            "range": "stddev: 0.000002154338167947614",
            "extra": "mean: 17.81729063073121 usec\nrounds: 57475"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34160.19355471772,
            "unit": "iter/sec",
            "range": "stddev: 6.911352924156852e-7",
            "extra": "mean: 29.273838814707016 usec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 234944.5620142351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023605789465374043",
            "extra": "mean: 4.2563232424992705 usec\nrounds: 129887"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1024324.3809719951,
            "unit": "iter/sec",
            "range": "stddev: 4.427042584890591e-8",
            "extra": "mean: 976.2532441637159 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 765535.4243188262,
            "unit": "iter/sec",
            "range": "stddev: 4.470620026427993e-8",
            "extra": "mean: 1.3062752790175831 usec\nrounds: 78132"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10427.019403788283,
            "unit": "iter/sec",
            "range": "stddev: 0.00000194715001742517",
            "extra": "mean: 95.90468390580398 usec\nrounds: 10538"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20393.04444770523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023794466795897523",
            "extra": "mean: 49.03632719304582 usec\nrounds: 21009"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3683.5354149789714,
            "unit": "iter/sec",
            "range": "stddev: 0.000002198173636732866",
            "extra": "mean: 271.47831833882583 usec\nrounds: 3757"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6820.068456141803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015401239190294125",
            "extra": "mean: 146.62609421456048 usec\nrounds: 6931"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3014.1975643744013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020176237266691643",
            "extra": "mean: 331.7632566024419 usec\nrounds: 3067"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5382.471981961838,
            "unit": "iter/sec",
            "range": "stddev: 0.000001745317168273361",
            "extra": "mean: 185.78824067292473 usec\nrounds: 5468"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 929.9173587121096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033152685632784797",
            "extra": "mean: 1.0753643758031912 msec\nrounds: 934"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1850.5713348190318,
            "unit": "iter/sec",
            "range": "stddev: 0.000003248757742732661",
            "extra": "mean: 540.3736571429117 usec\nrounds: 1855"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1474.6477681124256,
            "unit": "iter/sec",
            "range": "stddev: 0.0010653025899753955",
            "extra": "mean: 678.1280395385652 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 935.8844736930756,
            "unit": "iter/sec",
            "range": "stddev: 0.001402963879981752",
            "extra": "mean: 1.0685079495484302 msec\nrounds: 1328"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 30496.26866248678,
            "unit": "iter/sec",
            "range": "stddev: 8.639986591884395e-7",
            "extra": "mean: 32.79089684929528 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e50eecc6853047adc478d82b7c2992fdc1a6c3d3",
          "message": "prevent segfault on recursive schema (#67)\n\n* prevent segfault on recursive schema, fix #62\r\n\r\n* linting\r\n\r\n* use RecursionError",
          "timestamp": "2022-05-11T16:36:47+01:00",
          "tree_id": "d7f035fc984c71bb47dd761f2fc6fae0495e928c",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/e50eecc6853047adc478d82b7c2992fdc1a6c3d3"
        },
        "date": 1652283520286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55709.571435547376,
            "unit": "iter/sec",
            "range": "stddev: 6.481608376856237e-7",
            "extra": "mean: 17.950236812662254 usec\nrounds: 58143"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34565.2795029435,
            "unit": "iter/sec",
            "range": "stddev: 8.692515433221771e-7",
            "extra": "mean: 28.930765623198337 usec\nrounds: 35716"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 241221.31519455774,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016244103551572994",
            "extra": "mean: 4.1455706316560255 usec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 997906.3101180287,
            "unit": "iter/sec",
            "range": "stddev: 1.0637072850682701e-7",
            "extra": "mean: 1.0020980826162114 usec\nrounds: 106395"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 830043.0768864807,
            "unit": "iter/sec",
            "range": "stddev: 1.1702857145750747e-7",
            "extra": "mean: 1.2047567503978138 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10442.104444550348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026421794288242446",
            "extra": "mean: 95.76613653983244 usec\nrounds: 10583"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20855.224381190576,
            "unit": "iter/sec",
            "range": "stddev: 0.000002627183840884538",
            "extra": "mean: 47.94961596778142 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3663.0218690554293,
            "unit": "iter/sec",
            "range": "stddev: 0.000002769266335433024",
            "extra": "mean: 272.9986431279119 usec\nrounds: 3696"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6729.568454447578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018087208691076866",
            "extra": "mean: 148.59793860022316 usec\nrounds: 6873"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2989.564243855891,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025352383145618274",
            "extra": "mean: 334.4969093924592 usec\nrounds: 3013"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5372.706200664851,
            "unit": "iter/sec",
            "range": "stddev: 0.000002161086198724889",
            "extra": "mean: 186.12594149969598 usec\nrounds: 5453"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 931.5784065113894,
            "unit": "iter/sec",
            "range": "stddev: 0.000005302604681338501",
            "extra": "mean: 1.073446950906514 msec\nrounds: 937"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1880.300090318752,
            "unit": "iter/sec",
            "range": "stddev: 0.000003566986056951173",
            "extra": "mean: 531.8300015772897 usec\nrounds: 1902"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1404.8927403231994,
            "unit": "iter/sec",
            "range": "stddev: 0.00133086584340705",
            "extra": "mean: 711.7981119113387 usec\nrounds: 1805"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 948.7103590527059,
            "unit": "iter/sec",
            "range": "stddev: 0.0016930162646991893",
            "extra": "mean: 1.0540624864668993 msec\nrounds: 1330"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32360.621031643448,
            "unit": "iter/sec",
            "range": "stddev: 7.493183377878723e-7",
            "extra": "mean: 30.90175553250854 usec\nrounds: 32896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "82fec734e74537c29153019d83acb29829e79c6c",
          "message": "parse strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:47:30+01:00",
          "tree_id": "c2c0ed9db7b7ecc4804f25b40263455f48c22464",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/82fec734e74537c29153019d83acb29829e79c6c"
        },
        "date": 1653389430856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 64086.09499215597,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013476486408914612",
            "extra": "mean: 15.604008952681516 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 40153.137587415746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017862361528299602",
            "extra": "mean: 24.90465403414468 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 279512.08887102816,
            "unit": "iter/sec",
            "range": "stddev: 4.21640008115128e-7",
            "extra": "mean: 3.577662791040919 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1259386.6117416825,
            "unit": "iter/sec",
            "range": "stddev: 8.73830345989386e-8",
            "extra": "mean: 794.0373437961391 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1020671.9227982287,
            "unit": "iter/sec",
            "range": "stddev: 9.542437246556943e-8",
            "extra": "mean: 979.7467508062863 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12307.841938735806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036890542666971796",
            "extra": "mean: 81.24901221332344 usec\nrounds: 12691"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 24292.789814105196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022057831277830815",
            "extra": "mean: 41.16447751173342 usec\nrounds: 24391"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3040.1844579265758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010293146530047925",
            "extra": "mean: 328.92741010918996 usec\nrounds: 3304"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7451.954583948222,
            "unit": "iter/sec",
            "range": "stddev: 0.000005148469156432471",
            "extra": "mean: 134.192981013872 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3378.4360368103967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009029967955373785",
            "extra": "mean: 295.99494828503737 usec\nrounds: 3674"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 6140.793835723087,
            "unit": "iter/sec",
            "range": "stddev: 0.000005836808675612388",
            "extra": "mean: 162.84539535958035 usec\nrounds: 6680"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1071.3721165641903,
            "unit": "iter/sec",
            "range": "stddev: 0.00003069582720802522",
            "extra": "mean: 933.3825143843809 usec\nrounds: 1182"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 2064.3741253487347,
            "unit": "iter/sec",
            "range": "stddev: 0.000013973007226040953",
            "extra": "mean: 484.4083190739809 usec\nrounds: 2244"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1354.388385646058,
            "unit": "iter/sec",
            "range": "stddev: 0.00200552327167778",
            "extra": "mean: 738.3406492540092 usec\nrounds: 2278"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 931.1960432882586,
            "unit": "iter/sec",
            "range": "stddev: 0.0024575087700413937",
            "extra": "mean: 1.07388772451049 msec\nrounds: 1677"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 36854.50335359227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017147740033953777",
            "extra": "mean: 27.133726112267045 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "8f26e13100a91deadebafe58e7d7bf8d5244b9fc",
          "message": "parse longer strings as ints in benchmarks",
          "timestamp": "2022-05-24T11:55:47+01:00",
          "tree_id": "4af27a74b5479d969e010fbf02e8960488a73e8b",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/8f26e13100a91deadebafe58e7d7bf8d5244b9fc"
        },
        "date": 1653389846281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55691.651898372584,
            "unit": "iter/sec",
            "range": "stddev: 4.6122949876646734e-7",
            "extra": "mean: 17.95601254250499 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34857.93643657332,
            "unit": "iter/sec",
            "range": "stddev: 5.352251937475953e-7",
            "extra": "mean: 28.68787146420949 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 247168.06790147963,
            "unit": "iter/sec",
            "range": "stddev: 1.4497463481118679e-7",
            "extra": "mean: 4.045830064094674 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1098799.7608589416,
            "unit": "iter/sec",
            "range": "stddev: 3.635833604369633e-8",
            "extra": "mean: 910.0839257712566 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 892779.3150418202,
            "unit": "iter/sec",
            "range": "stddev: 3.2199636709558666e-8",
            "extra": "mean: 1.1200976357223995 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10768.835327802735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015697880561416354",
            "extra": "mean: 92.8605526558868 usec\nrounds: 10882"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21260.02314876261,
            "unit": "iter/sec",
            "range": "stddev: 9.087576133163245e-7",
            "extra": "mean: 47.03663740169552 usec\nrounds: 21368"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3642.481443061177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026963406455467546",
            "extra": "mean: 274.5381179374219 usec\nrounds: 3646"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6862.012965501256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710134474737006",
            "extra": "mean: 145.72983248902273 usec\nrounds: 6907"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2999.013680789453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023197147019880625",
            "extra": "mean: 333.44296039915446 usec\nrounds: 3005"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5303.614705359805,
            "unit": "iter/sec",
            "range": "stddev: 0.000019881365910791523",
            "extra": "mean: 188.55064999148698 usec\nrounds: 5397"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 934.5958367385317,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504622997816105",
            "extra": "mean: 1.0699812268474358 msec\nrounds: 961"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1803.5640571036258,
            "unit": "iter/sec",
            "range": "stddev: 0.000003232822699377603",
            "extra": "mean: 554.4577116966485 usec\nrounds: 1821"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1364.2742095173735,
            "unit": "iter/sec",
            "range": "stddev: 0.0014005945568061216",
            "extra": "mean: 732.990474366411 usec\nrounds: 1853"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 944.6270277142688,
            "unit": "iter/sec",
            "range": "stddev: 0.0018184115736810226",
            "extra": "mean: 1.0586188735460154 msec\nrounds: 1376"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32076.68487655751,
            "unit": "iter/sec",
            "range": "stddev: 5.614303075727336e-7",
            "extra": "mean: 31.17529145696806 usec\nrounds: 32787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d7042df471e03ca64087b7b6e6533ded24b34b",
          "message": "Switch from setuptools-rust to maturin (#70)\n\n* Switch from setuptools-rust to maturin\r\n\r\n* Update project metadata\r\n\r\n* Fix CI lint job\r\n\r\n* Build wheels on CI\r\n\r\n* Change `mimalloc` to optional dependency\r\n\r\nEnabled by default.\r\n\r\n* fix clippy errors\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-08T09:54:54+01:00",
          "tree_id": "896b00dd95e2ff37f90e93bf28137b8e7805a5f4",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a8d7042df471e03ca64087b7b6e6533ded24b34b"
        },
        "date": 1654678699778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55409.0363429414,
            "unit": "iter/sec",
            "range": "stddev: 5.542860656464437e-7",
            "extra": "mean: 18.047597756631816 usec\nrounds: 57147"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33566.91287803917,
            "unit": "iter/sec",
            "range": "stddev: 7.642613967549552e-7",
            "extra": "mean: 29.791241262887787 usec\nrounds: 34365"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 255187.289782605,
            "unit": "iter/sec",
            "range": "stddev: 1.869520650607709e-7",
            "extra": "mean: 3.9186904678987102 usec\nrounds: 131597"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 936917.195705996,
            "unit": "iter/sec",
            "range": "stddev: 4.056023478080951e-8",
            "extra": "mean: 1.067330180920298 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 776848.2797704606,
            "unit": "iter/sec",
            "range": "stddev: 5.358308530974423e-8",
            "extra": "mean: 1.2872526412692764 usec\nrounds: 80000"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10509.95984531618,
            "unit": "iter/sec",
            "range": "stddev: 0.000001325223228286849",
            "extra": "mean: 95.14784211527271 usec\nrounds: 10628"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 20275.501873252815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010082256779005542",
            "extra": "mean: 49.32060405958125 usec\nrounds: 20791"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3742.2875128440696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022728157543627434",
            "extra": "mean: 267.21624048602786 usec\nrounds: 3784"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6748.231900822012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018186302423010747",
            "extra": "mean: 148.1869643333076 usec\nrounds: 6841"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3008.384377143372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022970080924944757",
            "extra": "mean: 332.4043322381416 usec\nrounds: 3043"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5346.290310810537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018753331278366446",
            "extra": "mean: 187.04558523092857 usec\nrounds: 5403"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 927.3437898913975,
            "unit": "iter/sec",
            "range": "stddev: 0.000005120801304529557",
            "extra": "mean: 1.07834873204587 msec\nrounds: 933"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1822.9066904548197,
            "unit": "iter/sec",
            "range": "stddev: 0.000003559616864633661",
            "extra": "mean: 548.5744307353974 usec\nrounds: 1848"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1327.7668268891325,
            "unit": "iter/sec",
            "range": "stddev: 0.0015211780575642656",
            "extra": "mean: 753.1442868948096 usec\nrounds: 1816"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 879.0550737639638,
            "unit": "iter/sec",
            "range": "stddev: 0.001988989551263764",
            "extra": "mean: 1.1375851523365546 msec\nrounds: 1326"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32949.370797906005,
            "unit": "iter/sec",
            "range": "stddev: 8.634346056137345e-7",
            "extra": "mean: 30.34959320265842 usec\nrounds: 33899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4afcb67701bf9765bf442bd850ad3d6b2572fed",
          "message": "improving coverage (#78)\n\n* improving coverage\r\n\r\n* improving to_loc and function coverage",
          "timestamp": "2022-06-08T15:09:42+01:00",
          "tree_id": "171e18fd5953e618bc0e3d73c3845363f0026824",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a4afcb67701bf9765bf442bd850ad3d6b2572fed"
        },
        "date": 1654697485474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 47490.01824546574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012883146343932272",
            "extra": "mean: 21.057056555152577 usec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28905.881455235834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014820035519265808",
            "extra": "mean: 34.59503566942312 usec\nrounds: 31848"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 211417.78693842815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017243557680592826",
            "extra": "mean: 4.729970994783107 usec\nrounds: 117634"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 866611.0355725328,
            "unit": "iter/sec",
            "range": "stddev: 1.827038840024979e-7",
            "extra": "mean: 1.1539202236659067 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 741514.133008035,
            "unit": "iter/sec",
            "range": "stddev: 6.917137666394715e-8",
            "extra": "mean: 1.3485919626957594 usec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9508.609003098773,
            "unit": "iter/sec",
            "range": "stddev: 0.000004512050466906279",
            "extra": "mean: 105.16785364442987 usec\nrounds: 10331"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 17450.85549193271,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949816194837994",
            "extra": "mean: 57.30378092135862 usec\nrounds: 19121"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3011.0326386626316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071292317785244575",
            "extra": "mean: 332.1119761903863 usec\nrounds: 3276"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5850.062775606873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243834966959953",
            "extra": "mean: 170.938336622595 usec\nrounds: 7195"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2502.9685014590727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001527680174484164",
            "extra": "mean: 399.525603065745 usec\nrounds: 3066"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4483.976622429334,
            "unit": "iter/sec",
            "range": "stddev: 0.000008554539027128086",
            "extra": "mean: 223.01632773861758 usec\nrounds: 5541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 796.6257388035033,
            "unit": "iter/sec",
            "range": "stddev: 0.000021287208505593248",
            "extra": "mean: 1.2552946148864785 msec\nrounds: 927"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1420.3251044285128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867773564847241",
            "extra": "mean: 704.0641588901321 usec\nrounds: 1693"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1125.8181936665628,
            "unit": "iter/sec",
            "range": "stddev: 0.001772403411194497",
            "extra": "mean: 888.242884708766 usec\nrounds: 1648"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 771.4874019863694,
            "unit": "iter/sec",
            "range": "stddev: 0.002382660954010357",
            "extra": "mean: 1.296197445901609 msec\nrounds: 1220"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27101.37960097393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014554689213091879",
            "extra": "mean: 36.898490583264014 usec\nrounds: 27398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f0d57fdfd6668009c57dd78566f4f68a8d34456",
          "message": "Dates (#77)\n\n* starting date parsing\r\n\r\n* basic date parsing working\r\n\r\n* fix tests\r\n\r\n* improve coverage\r\n\r\n* datetime parsing working\r\n\r\n* working on datetime fallback for date errors\r\n\r\n* fixing date parsing from datetimes\r\n\r\n* adding datetime benchmarks\r\n\r\n* fix edge case, more tests\r\n\r\n* Dates rust type (#82)\r\n\r\n* using speedate types for all dates\r\n\r\n* using enum\r\n\r\n* more datetime tests\r\n\r\n* speedup by creating Date and DateTime from attributes\r\n\r\n* implementing time types\r\n\r\n* lax datetime tests and datetime from date\r\n\r\n* python types and alter error kinds\r\n\r\n* improving coverage\r\n\r\n* more coverage",
          "timestamp": "2022-06-14T18:28:27+01:00",
          "tree_id": "b2fe98d2114dd410c2cbe5e70d3428e821cc2377",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/1f0d57fdfd6668009c57dd78566f4f68a8d34456"
        },
        "date": 1655227963043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 44951.408362400754,
            "unit": "iter/sec",
            "range": "stddev: 0.000029479797973792624",
            "extra": "mean: 22.24624403173187 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 25500.4026614016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003624576244899851",
            "extra": "mean: 39.21506704337806 usec\nrounds: 33784"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 223015.27365318066,
            "unit": "iter/sec",
            "range": "stddev: 0.00000549868096340926",
            "extra": "mean: 4.483997816020158 usec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 820031.0191967003,
            "unit": "iter/sec",
            "range": "stddev: 0.000001246490052311279",
            "extra": "mean: 1.2194660648076434 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 669240.5590327448,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014793451657822216",
            "extra": "mean: 1.494231015294955 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 8143.740795165615,
            "unit": "iter/sec",
            "range": "stddev: 0.00005626431981319232",
            "extra": "mean: 122.79369213146272 usec\nrounds: 10917"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 15729.633997955161,
            "unit": "iter/sec",
            "range": "stddev: 0.00002242866141570268",
            "extra": "mean: 63.57427007710408 usec\nrounds: 19724"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2996.345627621753,
            "unit": "iter/sec",
            "range": "stddev: 0.00009872145468640298",
            "extra": "mean: 333.73986992071934 usec\nrounds: 4036"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5535.879539445415,
            "unit": "iter/sec",
            "range": "stddev: 0.00010128785380913604",
            "extra": "mean: 180.63976878011695 usec\nrounds: 7508"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2456.976536114886,
            "unit": "iter/sec",
            "range": "stddev: 0.00011467720129090663",
            "extra": "mean: 407.0042938144041 usec\nrounds: 3104"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4417.442295899923,
            "unit": "iter/sec",
            "range": "stddev: 0.00007786881858835192",
            "extra": "mean: 226.37533962314717 usec\nrounds: 5777"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1367.0264322280136,
            "unit": "iter/sec",
            "range": "stddev: 0.0001502986379644913",
            "extra": "mean: 731.5147508670884 usec\nrounds: 1730"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1476.6064290894626,
            "unit": "iter/sec",
            "range": "stddev: 0.00017572868234705215",
            "extra": "mean: 677.2285290784233 usec\nrounds: 1943"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1043.1719591552412,
            "unit": "iter/sec",
            "range": "stddev: 0.001538220183021385",
            "extra": "mean: 958.6147242778632 usec\nrounds: 1730"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 693.932431287944,
            "unit": "iter/sec",
            "range": "stddev: 0.0021421707146670197",
            "extra": "mean: 1.4410624938569194 msec\nrounds: 1221"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 28132.962162228625,
            "unit": "iter/sec",
            "range": "stddev: 0.000027210033430449346",
            "extra": "mean: 35.545492658522896 usec\nrounds: 37594"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 910725.2006097652,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015348990111109133",
            "extra": "mean: 1.0980260558623292 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 677885.9405396375,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018684984381216238",
            "extra": "mean: 1.4751744212365938 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7208150.970974403,
            "unit": "iter/sec",
            "range": "stddev: 1.4747707705914138e-7",
            "extra": "mean: 138.7318334517043 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2516557.184810979,
            "unit": "iter/sec",
            "range": "stddev: 0.000001515203299405589",
            "extra": "mean: 397.3682799801138 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 977956.1817558334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013857404973896535",
            "extra": "mean: 1.0225407013682466 usec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2547902.8890081085,
            "unit": "iter/sec",
            "range": "stddev: 9.297636623643342e-7",
            "extra": "mean: 392.47963661145496 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7203519.166717624,
            "unit": "iter/sec",
            "range": "stddev: 2.442148310776175e-7",
            "extra": "mean: 138.8210368926597 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3904754.0355954147,
            "unit": "iter/sec",
            "range": "stddev: 1.4901339338383852e-7",
            "extra": "mean: 256.0980770835058 nsec\nrounds: 45249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1550993.544031086,
            "unit": "iter/sec",
            "range": "stddev: 7.205232143637735e-7",
            "extra": "mean: 644.7480093314961 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2432198.248969916,
            "unit": "iter/sec",
            "range": "stddev: 7.085106721808482e-7",
            "extra": "mean: 411.1506948185708 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2914079.2096738177,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010265311071243363",
            "extra": "mean: 343.1615711338875 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3747770.7283358853,
            "unit": "iter/sec",
            "range": "stddev: 1.976300792771448e-7",
            "extra": "mean: 266.82528694705644 nsec\nrounds: 48075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dharmasw@outlook.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b46ec563945e526541d95c131e92932cbf038df",
          "message": "Add `bytes` type validator (#80)\n\n* init bytes type\r\n\r\n* single quote lint\r\n\r\n* Remove int and float coercion to bytes\r\n\r\n* Finish tests\r\n\r\n* fix json string test\r\n\r\n* Remove config setting for `BytesValidator`\r\n\r\n* Add `bytes` case to `test_typing`\r\n\r\n* Add benchmark for bytes type\r\n\r\n* use slice for validation logic\r\n\r\n* using enum for bytes\r\n\r\n* use IntoPy\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-14T20:58:04+01:00",
          "tree_id": "f8b973b16ef405a602b606c10ee564ac1c4a3a3b",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/2b46ec563945e526541d95c131e92932cbf038df"
        },
        "date": 1655236804325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 55908.00536143587,
            "unit": "iter/sec",
            "range": "stddev: 0.000002761368336719595",
            "extra": "mean: 17.886526151937776 usec\nrounds: 57472"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34140.52101934881,
            "unit": "iter/sec",
            "range": "stddev: 7.075140600490311e-7",
            "extra": "mean: 29.290707058432403 usec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 260578.8809894506,
            "unit": "iter/sec",
            "range": "stddev: 1.7625084532100696e-7",
            "extra": "mean: 3.837609541505724 usec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 928995.0815584206,
            "unit": "iter/sec",
            "range": "stddev: 3.947602553279822e-8",
            "extra": "mean: 1.0764319637973827 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 797988.0358731027,
            "unit": "iter/sec",
            "range": "stddev: 4.4192983818854214e-8",
            "extra": "mean: 1.2531516201318327 usec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9981.128295067549,
            "unit": "iter/sec",
            "range": "stddev: 0.00000515169941088928",
            "extra": "mean: 100.18907386394159 usec\nrounds: 10560"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 19374.725748471148,
            "unit": "iter/sec",
            "range": "stddev: 0.000003961967751069529",
            "extra": "mean: 51.61363381254104 usec\nrounds: 20921"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3795.3488446080582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020120988484837086",
            "extra": "mean: 263.48039164322694 usec\nrounds: 3853"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6752.745066799651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017608101936053257",
            "extra": "mean: 148.0879242601014 usec\nrounds: 6826"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3047.920087597972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021964883013783746",
            "extra": "mean: 328.09259142620357 usec\nrounds: 3079"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5369.085361702856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017409258694767312",
            "extra": "mean: 186.25146233153583 usec\nrounds: 5429"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1553.9542077963158,
            "unit": "iter/sec",
            "range": "stddev: 0.000003888497158823085",
            "extra": "mean: 643.5196062940065 usec\nrounds: 1557"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1868.7413954459792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037168765276226506",
            "extra": "mean: 535.1195207838524 usec\nrounds: 1684"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1272.0619440895748,
            "unit": "iter/sec",
            "range": "stddev: 0.001424342147400412",
            "extra": "mean: 786.1252391413283 usec\nrounds: 1819"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 889.0118583472067,
            "unit": "iter/sec",
            "range": "stddev: 0.0018575473630782497",
            "extra": "mean: 1.1248443883067378 msec\nrounds: 1334"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 32530.483003902053,
            "unit": "iter/sec",
            "range": "stddev: 0.000006033329287272015",
            "extra": "mean: 30.74039816377916 usec\nrounds: 33004"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 9603721.450682122,
            "unit": "iter/sec",
            "range": "stddev: 4.254317722547356e-9",
            "extra": "mean: 104.12630198976201 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1103757.73505572,
            "unit": "iter/sec",
            "range": "stddev: 5.342671668282513e-8",
            "extra": "mean: 905.995915805805 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 759140.4059324171,
            "unit": "iter/sec",
            "range": "stddev: 4.487090271157516e-8",
            "extra": "mean: 1.3172793757063248 usec\nrounds: 76342"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8888042.58184235,
            "unit": "iter/sec",
            "range": "stddev: 3.748733068424146e-9",
            "extra": "mean: 112.51071209354647 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2752157.4676707764,
            "unit": "iter/sec",
            "range": "stddev: 2.123816169095272e-8",
            "extra": "mean: 363.3513022956639 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1093790.4872649496,
            "unit": "iter/sec",
            "range": "stddev: 7.480481357781747e-8",
            "extra": "mean: 914.251871489903 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2633781.134181071,
            "unit": "iter/sec",
            "range": "stddev: 2.793412336528609e-8",
            "extra": "mean: 379.68227011061396 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8985337.949797373,
            "unit": "iter/sec",
            "range": "stddev: 4.8490241997716985e-9",
            "extra": "mean: 111.29241944909953 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4528653.665170486,
            "unit": "iter/sec",
            "range": "stddev: 5.842717727014262e-9",
            "extra": "mean: 220.8161793628617 nsec\nrounds: 45249"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1784931.453420881,
            "unit": "iter/sec",
            "range": "stddev: 3.700340768884946e-8",
            "extra": "mean: 560.2456038768779 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2765328.633991798,
            "unit": "iter/sec",
            "range": "stddev: 1.9331573602642435e-8",
            "extra": "mean: 361.6206723889814 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3417624.5892452653,
            "unit": "iter/sec",
            "range": "stddev: 1.50478137514685e-8",
            "extra": "mean: 292.6008910244365 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4476375.109031075,
            "unit": "iter/sec",
            "range": "stddev: 6.3346250107729105e-9",
            "extra": "mean: 223.39504077367326 nsec\nrounds: 45249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "b551729922df2187d36c756505e9befe7c7fdbba",
          "message": "add basic string benchmark",
          "timestamp": "2022-06-14T21:37:13+01:00",
          "tree_id": "a17936782c19ee131f0ea3086ef299f235721fdc",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/b551729922df2187d36c756505e9befe7c7fdbba"
        },
        "date": 1655239171508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 51769.41327059836,
            "unit": "iter/sec",
            "range": "stddev: 0.000015175247882486426",
            "extra": "mean: 19.31642521758953 usec\nrounds: 54946"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 30679.2056392186,
            "unit": "iter/sec",
            "range": "stddev: 0.00001920624233161118",
            "extra": "mean: 32.59536807307864 usec\nrounds: 33113"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 232498.3344354321,
            "unit": "iter/sec",
            "range": "stddev: 0.000005701217049116291",
            "extra": "mean: 4.3011060807307135 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 932160.0099341867,
            "unit": "iter/sec",
            "range": "stddev: 9.96912036184853e-7",
            "extra": "mean: 1.072777194196857 usec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4580258.1013105335,
            "unit": "iter/sec",
            "range": "stddev: 5.132935920884571e-8",
            "extra": "mean: 218.32830768063803 nsec\nrounds: 41842"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 846120.8687381326,
            "unit": "iter/sec",
            "range": "stddev: 4.268643632792098e-7",
            "extra": "mean: 1.1818642429789012 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 9076.661730958873,
            "unit": "iter/sec",
            "range": "stddev: 0.000051501967524699586",
            "extra": "mean: 110.17266365553522 usec\nrounds: 9853"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18253.58543623469,
            "unit": "iter/sec",
            "range": "stddev: 0.00004403230397974539",
            "extra": "mean: 54.78375760714536 usec\nrounds: 20409"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3286.9362300293633,
            "unit": "iter/sec",
            "range": "stddev: 0.00015378419062271774",
            "extra": "mean: 304.23468239633803 usec\nrounds: 3539"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6358.333732903298,
            "unit": "iter/sec",
            "range": "stddev: 0.00003382095455050798",
            "extra": "mean: 157.27390885841203 usec\nrounds: 6649"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2696.96372172031,
            "unit": "iter/sec",
            "range": "stddev: 0.000039975985627828996",
            "extra": "mean: 370.7873383488195 usec\nrounds: 2858"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4815.383262123888,
            "unit": "iter/sec",
            "range": "stddev: 0.00002965654613328545",
            "extra": "mean: 207.66778998997825 usec\nrounds: 5095"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1390.021978669138,
            "unit": "iter/sec",
            "range": "stddev: 0.00021363977766459622",
            "extra": "mean: 719.4130850775753 usec\nrounds: 1481"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1566.378027871163,
            "unit": "iter/sec",
            "range": "stddev: 0.00018503885415610874",
            "extra": "mean: 638.4154924332554 usec\nrounds: 1718"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1237.7433532389593,
            "unit": "iter/sec",
            "range": "stddev: 0.0014121413943261219",
            "extra": "mean: 807.9219309747643 usec\nrounds: 1753"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 871.1735346686917,
            "unit": "iter/sec",
            "range": "stddev: 0.0019324942763609767",
            "extra": "mean: 1.1478769271615916 msec\nrounds: 1318"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 29036.772699658508,
            "unit": "iter/sec",
            "range": "stddev: 0.00003208198197804892",
            "extra": "mean: 34.439089024923234 usec\nrounds: 30396"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 7964734.164328085,
            "unit": "iter/sec",
            "range": "stddev: 2.9359414094971765e-7",
            "extra": "mean: 125.55346849854952 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1153046.559814882,
            "unit": "iter/sec",
            "range": "stddev: 4.1143375064119983e-7",
            "extra": "mean: 867.2676671104142 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 823556.8094687536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014953665935230568",
            "extra": "mean: 1.2142453179943749 usec\nrounds: 88488"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8199350.318573936,
            "unit": "iter/sec",
            "range": "stddev: 8.795041023797243e-8",
            "extra": "mean: 121.96088240490174 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2832197.8350074114,
            "unit": "iter/sec",
            "range": "stddev: 4.086346091478673e-7",
            "extra": "mean: 353.08267933810606 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1052576.9691920548,
            "unit": "iter/sec",
            "range": "stddev: 7.280896075376725e-7",
            "extra": "mean: 950.0492878609228 nsec\nrounds: 120482"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2782902.852958954,
            "unit": "iter/sec",
            "range": "stddev: 1.3838034503268624e-7",
            "extra": "mean: 359.33701348472584 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7769689.957872687,
            "unit": "iter/sec",
            "range": "stddev: 1.066707401930174e-7",
            "extra": "mean: 128.7052643568983 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4067114.946789692,
            "unit": "iter/sec",
            "range": "stddev: 2.1882022813943772e-7",
            "extra": "mean: 245.8745359014931 nsec\nrounds: 44053"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1660830.5807344061,
            "unit": "iter/sec",
            "range": "stddev: 7.669255270646515e-7",
            "extra": "mean: 602.1083737256628 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2624802.5686123767,
            "unit": "iter/sec",
            "range": "stddev: 4.3660540059213864e-7",
            "extra": "mean: 380.9810352820438 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3144600.0633962727,
            "unit": "iter/sec",
            "range": "stddev: 8.342807369472395e-7",
            "extra": "mean: 318.0054632833735 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4051006.2352373535,
            "unit": "iter/sec",
            "range": "stddev: 4.027575685700822e-7",
            "extra": "mean: 246.85224902925248 nsec\nrounds: 37594"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "4c062dc352cce5dab43dcd5e37120453985fbb1d",
          "message": "linting",
          "timestamp": "2022-06-15T10:49:21+01:00",
          "tree_id": "8b86c25fc31abad45c7a30cdd704a04e15ed463d",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/4c062dc352cce5dab43dcd5e37120453985fbb1d"
        },
        "date": 1655286782115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 56419.447091023016,
            "unit": "iter/sec",
            "range": "stddev: 4.91905111010753e-7",
            "extra": "mean: 17.724384969364785 usec\nrounds: 58480"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33986.87409607218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038583401446571475",
            "extra": "mean: 29.42312367925501 usec\nrounds: 35212"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 259147.85206880092,
            "unit": "iter/sec",
            "range": "stddev: 1.5187115831435967e-7",
            "extra": "mean: 3.8588010358446296 usec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 949537.7585320113,
            "unit": "iter/sec",
            "range": "stddev: 3.525978393147724e-8",
            "extra": "mean: 1.0531440071917129 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 5087587.305746694,
            "unit": "iter/sec",
            "range": "stddev: 5.530593257194579e-9",
            "extra": "mean: 196.55682348108482 nsec\nrounds: 51547"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 775517.6519292436,
            "unit": "iter/sec",
            "range": "stddev: 3.326841670883074e-7",
            "extra": "mean: 1.289461300477658 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10036.104122289888,
            "unit": "iter/sec",
            "range": "stddev: 0.000005057078012318647",
            "extra": "mean: 99.64025759547769 usec\nrounds: 10730"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 18063.279579660975,
            "unit": "iter/sec",
            "range": "stddev: 0.000002812117338519014",
            "extra": "mean: 55.36093241484163 usec\nrounds: 20833"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3812.6397693156264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019502406644598124",
            "extra": "mean: 262.28546637111253 usec\nrounds: 3836"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6735.999058942983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015624098454054286",
            "extra": "mean: 148.4560777472734 usec\nrounds: 6817"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3071.334385415889,
            "unit": "iter/sec",
            "range": "stddev: 0.000002251373555757314",
            "extra": "mean: 325.59137967798654 usec\nrounds: 3100"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5323.732229530065,
            "unit": "iter/sec",
            "range": "stddev: 0.000001578451938295082",
            "extra": "mean: 187.83814754114178 usec\nrounds: 5368"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1585.099708818505,
            "unit": "iter/sec",
            "range": "stddev: 0.000005203052988202751",
            "extra": "mean: 630.8751395490293 usec\nrounds: 1598"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1866.34223695924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030516950913894454",
            "extra": "mean: 535.8074099149477 usec\nrounds: 1876"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1286.6682557194795,
            "unit": "iter/sec",
            "range": "stddev: 0.0014008815913797653",
            "extra": "mean: 777.2011126837197 usec\nrounds: 1837"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 892.948513946424,
            "unit": "iter/sec",
            "range": "stddev: 0.001956229079280775",
            "extra": "mean: 1.1198853958336943 msec\nrounds: 1344"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 33132.682099314836,
            "unit": "iter/sec",
            "range": "stddev: 6.840163317028668e-7",
            "extra": "mean: 30.181679738528604 usec\nrounds: 34247"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 9526607.134311978,
            "unit": "iter/sec",
            "range": "stddev: 3.5108011202331664e-9",
            "extra": "mean: 104.96916540182367 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1065758.542188734,
            "unit": "iter/sec",
            "range": "stddev: 4.320743144746741e-8",
            "extra": "mean: 938.2988363819621 nsec\nrounds: 105275"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 730099.6788580811,
            "unit": "iter/sec",
            "range": "stddev: 9.364735322912825e-8",
            "extra": "mean: 1.3696759893992903 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7903256.672607624,
            "unit": "iter/sec",
            "range": "stddev: 3.79745130868683e-9",
            "extra": "mean: 126.53011807973353 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2650824.7610715823,
            "unit": "iter/sec",
            "range": "stddev: 1.812102808805782e-8",
            "extra": "mean: 377.24108160040595 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 951787.5578817505,
            "unit": "iter/sec",
            "range": "stddev: 4.82932396136862e-8",
            "extra": "mean: 1.0506546253095428 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2237583.8860920114,
            "unit": "iter/sec",
            "range": "stddev: 2.724415481548168e-8",
            "extra": "mean: 446.91061918014265 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 9109271.942393636,
            "unit": "iter/sec",
            "range": "stddev: 3.7169151889489023e-9",
            "extra": "mean: 109.77825739799142 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4589221.951515126,
            "unit": "iter/sec",
            "range": "stddev: 4.996427598464531e-9",
            "extra": "mean: 217.90186017701905 nsec\nrounds: 45872"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1749566.9931377617,
            "unit": "iter/sec",
            "range": "stddev: 3.27041235432484e-8",
            "extra": "mean: 571.5699964176675 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2773594.704153626,
            "unit": "iter/sec",
            "range": "stddev: 1.6749476787089845e-8",
            "extra": "mean: 360.5429439647809 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2881789.4459652025,
            "unit": "iter/sec",
            "range": "stddev: 1.77001029225182e-8",
            "extra": "mean: 347.00661472676643 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4532338.633318441,
            "unit": "iter/sec",
            "range": "stddev: 5.251575158791685e-9",
            "extra": "mean: 220.6366471934108 nsec\nrounds: 45872"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a76e783249fd25330fc96b72bd012860eebca1a4",
          "message": "Add rust bench marks (#87)\n\n* rust benchmarks\r\n\r\n* tweaking model dict creation\r\n\r\n* run the rust bencharmks on CI",
          "timestamp": "2022-06-15T15:34:09+01:00",
          "tree_id": "1b43fc63dda0ddca9d82dbd91a414675bf8005f7",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/a76e783249fd25330fc96b72bd012860eebca1a4"
        },
        "date": 1655303809791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 51336.21540904401,
            "unit": "iter/sec",
            "range": "stddev: 5.630299437091309e-7",
            "extra": "mean: 19.479425821168498 usec\nrounds: 53189"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34806.93993268898,
            "unit": "iter/sec",
            "range": "stddev: 0.00003624601366032269",
            "extra": "mean: 28.729902770362436 usec\nrounds: 35843"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 554461.5116243543,
            "unit": "iter/sec",
            "range": "stddev: 7.342931482114175e-8",
            "extra": "mean: 1.8035516966189833 usec\nrounds: 57143"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1241435.3779105393,
            "unit": "iter/sec",
            "range": "stddev: 4.74057391146352e-8",
            "extra": "mean: 805.5191738483685 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4644057.447576591,
            "unit": "iter/sec",
            "range": "stddev: 4.58286117732519e-9",
            "extra": "mean: 215.32894700124567 nsec\nrounds: 47170"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1009488.3561613795,
            "unit": "iter/sec",
            "range": "stddev: 4.344795625389642e-8",
            "extra": "mean: 990.6008265442987 nsec\nrounds: 104167"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14123.45022318781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033296241897646673",
            "extra": "mean: 70.80422872579712 usec\nrounds: 14266"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28245.042975987883,
            "unit": "iter/sec",
            "range": "stddev: 8.534621005512962e-7",
            "extra": "mean: 35.40444250165013 usec\nrounds: 28653"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3473.5451660931785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016803927682459187",
            "extra": "mean: 287.8903115357317 usec\nrounds: 3502"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6591.4557931598865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015965713298341313",
            "extra": "mean: 151.7115537720399 usec\nrounds: 6667"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2885.1302745635835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022249113944773913",
            "extra": "mean: 346.60479937990465 usec\nrounds: 2901"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5176.320085091475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024020382939926764",
            "extra": "mean: 193.187435004288 usec\nrounds: 5108"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1509.1425580337059,
            "unit": "iter/sec",
            "range": "stddev: 0.00000734850160202607",
            "extra": "mean: 662.6279238343934 usec\nrounds: 1523"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1771.7540483060016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036951270271263467",
            "extra": "mean: 564.4124256163624 usec\nrounds: 1788"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1564.5373769152272,
            "unit": "iter/sec",
            "range": "stddev: 0.0016816326355398187",
            "extra": "mean: 639.1665771332889 usec\nrounds: 2379"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1023.6088298456068,
            "unit": "iter/sec",
            "range": "stddev: 0.0020695773241903533",
            "extra": "mean: 976.9356914895236 usec\nrounds: 1598"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27692.65338433483,
            "unit": "iter/sec",
            "range": "stddev: 8.270537429410865e-7",
            "extra": "mean: 36.11066033006717 usec\nrounds: 28248"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8161814.324260263,
            "unit": "iter/sec",
            "range": "stddev: 3.231789983387325e-9",
            "extra": "mean: 122.52177766739251 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1284924.082933113,
            "unit": "iter/sec",
            "range": "stddev: 3.408704821048778e-8",
            "extra": "mean: 778.2560956570377 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 924694.3950427432,
            "unit": "iter/sec",
            "range": "stddev: 3.909451064422613e-8",
            "extra": "mean: 1.0814383707321338 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8032034.703662466,
            "unit": "iter/sec",
            "range": "stddev: 3.426109477518152e-9",
            "extra": "mean: 124.50145410145383 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2877434.6948560122,
            "unit": "iter/sec",
            "range": "stddev: 1.6394297066452894e-8",
            "extra": "mean: 347.5317795353298 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1149054.3833069156,
            "unit": "iter/sec",
            "range": "stddev: 4.100195578466945e-8",
            "extra": "mean: 870.2808278945513 nsec\nrounds: 119048"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2720919.296554317,
            "unit": "iter/sec",
            "range": "stddev: 1.7536870298099354e-8",
            "extra": "mean: 367.52284467483173 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7388235.176528162,
            "unit": "iter/sec",
            "range": "stddev: 3.33039402235875e-9",
            "extra": "mean: 135.3503206256345 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4123705.233029786,
            "unit": "iter/sec",
            "range": "stddev: 2.1326071773391066e-7",
            "extra": "mean: 242.50035914068283 nsec\nrounds: 42017"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1653570.1802693803,
            "unit": "iter/sec",
            "range": "stddev: 3.911804335989332e-8",
            "extra": "mean: 604.7520764050872 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2445228.481419185,
            "unit": "iter/sec",
            "range": "stddev: 9.747404557145793e-7",
            "extra": "mean: 408.9597383634339 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3184912.594904888,
            "unit": "iter/sec",
            "range": "stddev: 2.607924691628572e-8",
            "extra": "mean: 313.9803590204424 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3931575.21920986,
            "unit": "iter/sec",
            "range": "stddev: 1.207308174926975e-8",
            "extra": "mean: 254.3509774694697 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "9f8570a85029dd89547d4b384ae3331749389f53",
          "message": "remove bounds checks from recursive validators",
          "timestamp": "2022-06-15T18:02:57+01:00",
          "tree_id": "03911af4a3918b1a5d6078590559bd0822a12224",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/9f8570a85029dd89547d4b384ae3331749389f53"
        },
        "date": 1655312763874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 54302.9189706591,
            "unit": "iter/sec",
            "range": "stddev: 6.157963383097183e-7",
            "extra": "mean: 18.415216326406302 usec\nrounds: 56498"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34210.1144137315,
            "unit": "iter/sec",
            "range": "stddev: 8.295802510426481e-7",
            "extra": "mean: 29.231121179723765 usec\nrounds: 35336"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 569858.2200037848,
            "unit": "iter/sec",
            "range": "stddev: 6.355678686428327e-8",
            "extra": "mean: 1.754822453896246 usec\nrounds: 56498"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1174825.9979493194,
            "unit": "iter/sec",
            "range": "stddev: 3.856258160391826e-8",
            "extra": "mean: 851.1898798163131 nsec\nrounds: 120482"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4744265.522753339,
            "unit": "iter/sec",
            "range": "stddev: 6.2568532586496256e-9",
            "extra": "mean: 210.7807826530035 nsec\nrounds: 48310"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 941028.9643229999,
            "unit": "iter/sec",
            "range": "stddev: 4.621322877345621e-8",
            "extra": "mean: 1.06266654684711 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13662.929138252062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012798370369689607",
            "extra": "mean: 73.19074774385697 usec\nrounds: 13851"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 26026.88406064439,
            "unit": "iter/sec",
            "range": "stddev: 9.73789866625618e-7",
            "extra": "mean: 38.42181022015286 usec\nrounds: 26810"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3546.3281504688257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024773264780459415",
            "extra": "mean: 281.98180133663027 usec\nrounds: 3589"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6504.639879184889,
            "unit": "iter/sec",
            "range": "stddev: 0.000001820686986229424",
            "extra": "mean: 153.73641255683356 usec\nrounds: 6610"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2910.3010821060307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028379722320734715",
            "extra": "mean: 343.60706050260376 usec\nrounds: 2942"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5116.127362154299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022358521425942536",
            "extra": "mean: 195.46034123335824 usec\nrounds: 5190"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1447.4034930926762,
            "unit": "iter/sec",
            "range": "stddev: 0.000004538729766452413",
            "extra": "mean: 690.8923494880434 usec\nrounds: 1465"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1811.078572461979,
            "unit": "iter/sec",
            "range": "stddev: 0.000004847368534420569",
            "extra": "mean: 552.1571593885078 usec\nrounds: 1832"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1370.9879808830967,
            "unit": "iter/sec",
            "range": "stddev: 0.002216530839363131",
            "extra": "mean: 729.4009969043408 usec\nrounds: 2261"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 884.5657491891639,
            "unit": "iter/sec",
            "range": "stddev: 0.0028162969719980517",
            "extra": "mean: 1.1304982144251559 msec\nrounds: 1539"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 29585.413760579613,
            "unit": "iter/sec",
            "range": "stddev: 8.684898265422686e-7",
            "extra": "mean: 33.8004399090888 usec\nrounds: 30304"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8926874.794400148,
            "unit": "iter/sec",
            "range": "stddev: 5.07255075375532e-9",
            "extra": "mean: 112.02128662409648 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1225471.0620623166,
            "unit": "iter/sec",
            "range": "stddev: 4.035388985558546e-8",
            "extra": "mean: 816.0127406988754 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 771903.281810523,
            "unit": "iter/sec",
            "range": "stddev: 5.2059837155840234e-8",
            "extra": "mean: 1.2954990910964965 usec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8675640.068061715,
            "unit": "iter/sec",
            "range": "stddev: 4.820339656793053e-9",
            "extra": "mean: 115.2652705915853 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2393828.998449791,
            "unit": "iter/sec",
            "range": "stddev: 3.331022245690731e-8",
            "extra": "mean: 417.7407829248868 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 954152.5681405844,
            "unit": "iter/sec",
            "range": "stddev: 5.091622097769235e-8",
            "extra": "mean: 1.0480504202266439 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2295564.2743630256,
            "unit": "iter/sec",
            "range": "stddev: 2.5521230460622298e-8",
            "extra": "mean: 435.62274041666643 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7708858.062014087,
            "unit": "iter/sec",
            "range": "stddev: 4.8436315068262636e-9",
            "extra": "mean: 129.72089925066243 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3701500.5716486042,
            "unit": "iter/sec",
            "range": "stddev: 1.986168240179439e-8",
            "extra": "mean: 270.16070392078495 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1560246.2752789778,
            "unit": "iter/sec",
            "range": "stddev: 4.577678805949464e-8",
            "extra": "mean: 640.924459070728 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2200455.085298168,
            "unit": "iter/sec",
            "range": "stddev: 2.750439151391651e-8",
            "extra": "mean: 454.4514481032227 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3003427.3656147514,
            "unit": "iter/sec",
            "range": "stddev: 1.988842307931578e-8",
            "extra": "mean: 332.9529495031809 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3642970.419505216,
            "unit": "iter/sec",
            "range": "stddev: 3.096722097782345e-8",
            "extra": "mean: 274.5012681532403 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "17d4a54f03b39968cc7ed2bf462325bf44a4df41",
          "message": "remove bounds checks from recursive validators",
          "timestamp": "2022-06-15T18:04:55+01:00",
          "tree_id": "30e6058e7f23c8e34a03f7de165fdc297ffa805c",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/17d4a54f03b39968cc7ed2bf462325bf44a4df41"
        },
        "date": 1655312851296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 54473.830666907044,
            "unit": "iter/sec",
            "range": "stddev: 5.146115475966343e-7",
            "extra": "mean: 18.357438567423934 usec\nrounds: 55866"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34248.94661979434,
            "unit": "iter/sec",
            "range": "stddev: 6.051937465959462e-7",
            "extra": "mean: 29.1979782940841 usec\nrounds: 35336"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 570405.0743766411,
            "unit": "iter/sec",
            "range": "stddev: 4.467585889118238e-8",
            "extra": "mean: 1.7531400839882532 usec\nrounds: 58824"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1170479.3799462316,
            "unit": "iter/sec",
            "range": "stddev: 3.600559011670169e-8",
            "extra": "mean: 854.3508045785269 nsec\nrounds: 120497"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4766722.245692469,
            "unit": "iter/sec",
            "range": "stddev: 5.089416300554276e-9",
            "extra": "mean: 209.78776367830196 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 940865.554438489,
            "unit": "iter/sec",
            "range": "stddev: 3.8582668744839027e-8",
            "extra": "mean: 1.0628511111739811 usec\nrounds: 98049"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13541.375428492942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018750451464365071",
            "extra": "mean: 73.84774207617497 usec\nrounds: 13756"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 25852.18748730651,
            "unit": "iter/sec",
            "range": "stddev: 9.180560856079898e-7",
            "extra": "mean: 38.68144622156259 usec\nrounds: 26386"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3536.0896897140674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021634191047964174",
            "extra": "mean: 282.7982567605239 usec\nrounds: 3587"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6478.631078736878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014084656423586937",
            "extra": "mean: 154.35359535782788 usec\nrounds: 6549"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2893.6833558284557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023353496027157518",
            "extra": "mean: 345.5803130587182 usec\nrounds: 2910"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5139.092931979906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017441128960701855",
            "extra": "mean: 194.58686839016477 usec\nrounds: 5182"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1456.3307375197403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034585709639550195",
            "extra": "mean: 686.6572092703943 usec\nrounds: 1467"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1812.9938737880545,
            "unit": "iter/sec",
            "range": "stddev: 0.000004533614167364163",
            "extra": "mean: 551.5738439372707 usec\nrounds: 1839"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1651.484179884104,
            "unit": "iter/sec",
            "range": "stddev: 0.0011782694368788688",
            "extra": "mean: 605.5159426778021 usec\nrounds: 2233"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1074.6476187898409,
            "unit": "iter/sec",
            "range": "stddev: 0.0015597044841624717",
            "extra": "mean: 930.5375850793756 usec\nrounds: 1528"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 29447.429089483972,
            "unit": "iter/sec",
            "range": "stddev: 6.791422619092252e-7",
            "extra": "mean: 33.95882190466372 usec\nrounds: 30304"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8906143.873869829,
            "unit": "iter/sec",
            "range": "stddev: 3.574124877431792e-9",
            "extra": "mean: 112.28203969787742 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1240836.6662055613,
            "unit": "iter/sec",
            "range": "stddev: 2.7632104031389842e-8",
            "extra": "mean: 805.9078420517195 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 764210.8252277699,
            "unit": "iter/sec",
            "range": "stddev: 4.361921991648289e-8",
            "extra": "mean: 1.3085394330838522 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8661471.980266096,
            "unit": "iter/sec",
            "range": "stddev: 3.378624130958621e-9",
            "extra": "mean: 115.45381688917244 nsec\nrounds: 88504"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2557332.1473032716,
            "unit": "iter/sec",
            "range": "stddev: 1.7493103767613652e-8",
            "extra": "mean: 391.0325066906021 nsec\nrounds: 188715"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 952606.982547436,
            "unit": "iter/sec",
            "range": "stddev: 4.2473176221293395e-8",
            "extra": "mean: 1.0497508608701414 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2480049.5397761855,
            "unit": "iter/sec",
            "range": "stddev: 2.1338668547210204e-8",
            "extra": "mean: 403.21775188832424 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7674667.3782583,
            "unit": "iter/sec",
            "range": "stddev: 4.113608353402918e-9",
            "extra": "mean: 130.2988065428369 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3684403.3510326473,
            "unit": "iter/sec",
            "range": "stddev: 1.2993146494821095e-8",
            "extra": "mean: 271.4143661061357 nsec\nrounds: 188715"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1559378.7172248217,
            "unit": "iter/sec",
            "range": "stddev: 3.787671146175233e-8",
            "extra": "mean: 641.2810364501634 nsec\nrounds: 163962"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2212366.182450746,
            "unit": "iter/sec",
            "range": "stddev: 2.326229887266129e-8",
            "extra": "mean: 452.0047395101264 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3013473.833042231,
            "unit": "iter/sec",
            "range": "stddev: 1.5356661624730637e-8",
            "extra": "mean: 331.84293456779653 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3637241.311390926,
            "unit": "iter/sec",
            "range": "stddev: 1.2301784894628778e-8",
            "extra": "mean: 274.9336418419471 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "bbf54fbef3da20c7e9c1f5c499c35abd96b1f1e9",
          "message": "move unboxing outside loop for dicts",
          "timestamp": "2022-06-15T22:50:46+01:00",
          "tree_id": "f5130492f4be41c925c2acf0db42a79c3ce61e14",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/bbf54fbef3da20c7e9c1f5c499c35abd96b1f1e9"
        },
        "date": 1655329995695,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 52573.702724830335,
            "unit": "iter/sec",
            "range": "stddev: 0.000003456257857975183",
            "extra": "mean: 19.0209163169271 usec\nrounds: 64099"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36000.12350941187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004826973555851521",
            "extra": "mean: 27.777682477632613 usec\nrounds: 42734"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 557086.185376222,
            "unit": "iter/sec",
            "range": "stddev: 3.3319191062687074e-7",
            "extra": "mean: 1.7950543852112355 usec\nrounds: 65356"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1321513.5770344744,
            "unit": "iter/sec",
            "range": "stddev: 1.7706834540316501e-7",
            "extra": "mean: 756.7080788108202 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4468809.777655313,
            "unit": "iter/sec",
            "range": "stddev: 3.9841830408140926e-8",
            "extra": "mean: 223.77323040246722 nsec\nrounds: 55863"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 990805.4580156873,
            "unit": "iter/sec",
            "range": "stddev: 2.1917748968402668e-7",
            "extra": "mean: 1.0092798661028712 usec\nrounds: 119048"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14030.808361431082,
            "unit": "iter/sec",
            "range": "stddev: 0.00001032846572611284",
            "extra": "mean: 71.27173105356306 usec\nrounds: 17985"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 27204.13834126991,
            "unit": "iter/sec",
            "range": "stddev: 0.000005596108740970845",
            "extra": "mean: 36.75911317076912 usec\nrounds: 34364"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3249.079129769623,
            "unit": "iter/sec",
            "range": "stddev: 0.00003454372383002721",
            "extra": "mean: 307.77951538253404 usec\nrounds: 4193"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6419.528904215998,
            "unit": "iter/sec",
            "range": "stddev: 0.000022172154321252704",
            "extra": "mean: 155.7746705281215 usec\nrounds: 7855"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2907.343548107511,
            "unit": "iter/sec",
            "range": "stddev: 0.000048219436056715855",
            "extra": "mean: 343.9565993674652 usec\nrounds: 3477"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5263.473538227345,
            "unit": "iter/sec",
            "range": "stddev: 0.00002769417566710107",
            "extra": "mean: 189.98860595331962 usec\nrounds: 6215"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1527.906942386949,
            "unit": "iter/sec",
            "range": "stddev: 0.00009170135782005476",
            "extra": "mean: 654.4901212620747 usec\nrounds: 1806"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1783.6814125513827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000769601435994608",
            "extra": "mean: 560.6382355970159 usec\nrounds: 2135"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1608.4361013578175,
            "unit": "iter/sec",
            "range": "stddev: 0.0015543927315424839",
            "extra": "mean: 621.7219317297188 usec\nrounds: 2827"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1041.8422380891288,
            "unit": "iter/sec",
            "range": "stddev: 0.0019282516677016873",
            "extra": "mean: 959.8382206447371 usec\nrounds: 1831"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 27829.335105146652,
            "unit": "iter/sec",
            "range": "stddev: 0.000006184658281268646",
            "extra": "mean: 35.93330549298908 usec\nrounds: 33333"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8068381.999729011,
            "unit": "iter/sec",
            "range": "stddev: 2.5501100701794656e-8",
            "extra": "mean: 123.9405868529453 nsec\nrounds: 99991"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1308866.214587023,
            "unit": "iter/sec",
            "range": "stddev: 1.7312408818430932e-7",
            "extra": "mean: 764.0200265354739 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 897344.4377719385,
            "unit": "iter/sec",
            "range": "stddev: 2.2985880976095083e-7",
            "extra": "mean: 1.1143992851651336 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7752196.05404945,
            "unit": "iter/sec",
            "range": "stddev: 2.567374458588374e-8",
            "extra": "mean: 128.99570560753787 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2994199.650651525,
            "unit": "iter/sec",
            "range": "stddev: 8.236272512735142e-8",
            "extra": "mean: 333.9790650841514 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1073439.1398543532,
            "unit": "iter/sec",
            "range": "stddev: 2.0161064784277444e-7",
            "extra": "mean: 931.5851852910946 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2855820.9653613395,
            "unit": "iter/sec",
            "range": "stddev: 8.643544247551885e-8",
            "extra": "mean: 350.1620066974751 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7562357.804404749,
            "unit": "iter/sec",
            "range": "stddev: 2.602725423284555e-8",
            "extra": "mean: 132.2338913158633 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4078227.2412517625,
            "unit": "iter/sec",
            "range": "stddev: 4.087385583521545e-8",
            "extra": "mean: 245.20458053066284 nsec\nrounds: 49503"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1608118.8163276443,
            "unit": "iter/sec",
            "range": "stddev: 1.5490081493242793e-7",
            "extra": "mean: 621.8445986990605 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2535166.4148734,
            "unit": "iter/sec",
            "range": "stddev: 9.792409382879224e-8",
            "extra": "mean: 394.45142304393363 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3185615.190934034,
            "unit": "iter/sec",
            "range": "stddev: 7.849457368989228e-8",
            "extra": "mean: 313.9111098056885 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4030914.8118825913,
            "unit": "iter/sec",
            "range": "stddev: 4.3990928042404855e-8",
            "extra": "mean: 248.08264294050994 nsec\nrounds: 48779"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "beltowski.t@gmail.com",
            "name": "Tom",
            "username": "czotomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6ee7b4d50759198cd4e7294324e3c98f5a184d9",
          "message": "Tuple validator (#73)\n\n* add well-known vscode config to gitignore\r\n\r\n* force removal of profdata to avoid shell error\r\n\r\n* add tuple validation\r\n\r\n* split tuple types\r\n\r\n* implement fixed size tuple validator\r\n\r\n* restore strict tuple validator\r\n\r\n* fix tuple error context\r\n\r\n* add fix length tuple error tests\r\n\r\n* add fix length tuple test for json\r\n\r\n* mark tuple -> string json input non-covered for obvious reasons\r\n\r\n* restore build-coverage make target\r\n\r\n* bump general coverage for json inputs by covering error match arms\r\n\r\n* fix post-merge set validation error\r\n\r\n* remove py unused import\r\n\r\n* refine validator name\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* use validators' collection length instead of input length\r\n\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>\r\n\r\n* fix field name after GH suggestion commit\r\n\r\n* address review comments\r\n\r\n* cleanup\r\n\r\n* improve coverage\r\n\r\n* improve coverage\r\n\r\n* cover tuple schema with nonsense items attempt\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\nCo-authored-by: Samuel Colvin <samcolvin@gmail.com>",
          "timestamp": "2022-06-16T21:13:44+01:00",
          "tree_id": "29f93e1edd5a7860c1dc5a582275ffab2504c47b",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/d6ee7b4d50759198cd4e7294324e3c98f5a184d9"
        },
        "date": 1655410696274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 45126.28808900799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001526564818629136",
            "extra": "mean: 22.160032263845412 usec\nrounds: 51544"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28690.38531322294,
            "unit": "iter/sec",
            "range": "stddev: 0.000025747143495621516",
            "extra": "mean: 34.854882187278115 usec\nrounds: 32679"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 483144.5989632918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012492580947979936",
            "extra": "mean: 2.069773732637711 usec\nrounds: 54345"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1224017.871872753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012258664456569472",
            "extra": "mean: 816.9815351388694 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 3845843.333342673,
            "unit": "iter/sec",
            "range": "stddev: 3.0123159274422534e-7",
            "extra": "mean: 260.0209923608332 nsec\nrounds: 44248"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 877172.5162055353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010186552179614482",
            "extra": "mean: 1.1400265985599929 usec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 11696.40662129578,
            "unit": "iter/sec",
            "range": "stddev: 0.00003359628740715285",
            "extra": "mean: 85.4963436530403 usec\nrounds: 12920"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 23388.938933875837,
            "unit": "iter/sec",
            "range": "stddev: 0.000043290307661240296",
            "extra": "mean: 42.75525293503716 usec\nrounds: 27173"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2945.7169947389966,
            "unit": "iter/sec",
            "range": "stddev: 0.00006595113830186472",
            "extra": "mean: 339.4759244645646 usec\nrounds: 3270"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5626.65482732707,
            "unit": "iter/sec",
            "range": "stddev: 0.00006040084792891963",
            "extra": "mean: 177.7254924441576 usec\nrounds: 6419"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2448.879176589852,
            "unit": "iter/sec",
            "range": "stddev: 0.00007764262343841424",
            "extra": "mean: 408.35007686762816 usec\nrounds: 2758"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4288.789957037076,
            "unit": "iter/sec",
            "range": "stddev: 0.00012699585404795307",
            "extra": "mean: 233.16600020460154 usec\nrounds: 4866"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1185.5484370272977,
            "unit": "iter/sec",
            "range": "stddev: 0.00009760409063690138",
            "extra": "mean: 843.4914751416222 usec\nrounds: 1408"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1377.0043500498696,
            "unit": "iter/sec",
            "range": "stddev: 0.00020452089468354313",
            "extra": "mean: 726.2141183241607 usec\nrounds: 1648"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1334.5463252931877,
            "unit": "iter/sec",
            "range": "stddev: 0.001706448983826796",
            "extra": "mean: 749.3183121839619 usec\nrounds: 2175"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 836.2347597665051,
            "unit": "iter/sec",
            "range": "stddev: 0.0024526509835704796",
            "extra": "mean: 1.1958364422440675 msec\nrounds: 1515"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 24533.949325739395,
            "unit": "iter/sec",
            "range": "stddev: 0.00002505798100862602",
            "extra": "mean: 40.75984615126217 usec\nrounds: 27397"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 7002695.098279312,
            "unit": "iter/sec",
            "range": "stddev: 1.903709004361188e-7",
            "extra": "mean: 142.8021620198329 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1090931.1111756405,
            "unit": "iter/sec",
            "range": "stddev: 9.034043589917103e-7",
            "extra": "mean: 916.6481638994749 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 805208.4579320785,
            "unit": "iter/sec",
            "range": "stddev: 0.000003166459176097168",
            "extra": "mean: 1.241914426194866 usec\nrounds: 98030"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7026313.869604199,
            "unit": "iter/sec",
            "range": "stddev: 9.521004291965031e-8",
            "extra": "mean: 142.32213626637798 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2513462.2342337575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013629019824290985",
            "extra": "mean: 397.8575792310157 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 963948.9615389254,
            "unit": "iter/sec",
            "range": "stddev: 9.217424354659701e-7",
            "extra": "mean: 1.0373993228887746 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2438274.060436807,
            "unit": "iter/sec",
            "range": "stddev: 4.4810427431463276e-7",
            "extra": "mean: 410.1261692546281 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6468889.528444296,
            "unit": "iter/sec",
            "range": "stddev: 2.840772107250287e-7",
            "extra": "mean: 154.58603761943715 nsec\nrounds: 70922"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3477652.3304696297,
            "unit": "iter/sec",
            "range": "stddev: 7.347085649417453e-7",
            "extra": "mean: 287.55030836100815 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1467232.7575134886,
            "unit": "iter/sec",
            "range": "stddev: 6.609545823705152e-7",
            "extra": "mean: 681.5551212849308 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2087559.4719301236,
            "unit": "iter/sec",
            "range": "stddev: 5.0797356698513e-7",
            "extra": "mean: 479.0282688696664 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2620058.545376767,
            "unit": "iter/sec",
            "range": "stddev: 4.857315436884752e-7",
            "extra": "mean: 381.6708606624662 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 2920384.7352528097,
            "unit": "iter/sec",
            "range": "stddev: 8.523994617318151e-7",
            "extra": "mean: 342.42063654474845 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc26fb4e5f29c7cba7a9791a51ec08e29048605a",
          "message": "assorted tweaks (#89)\n\n* fix heterogenious error context, ref #73\r\n\r\n* linting and correct trait order",
          "timestamp": "2022-06-16T21:49:47+01:00",
          "tree_id": "269ab4d8e4f158ee636541dc1aae18f7671a97d3",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/fc26fb4e5f29c7cba7a9791a51ec08e29048605a"
        },
        "date": 1655412747246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 43894.695565645285,
            "unit": "iter/sec",
            "range": "stddev: 0.000002134111874466817",
            "extra": "mean: 22.78179600322054 usec\nrounds: 62501"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29172.170279943242,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026279285308463856",
            "extra": "mean: 34.27924595269247 usec\nrounds: 36629"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 469237.9251356582,
            "unit": "iter/sec",
            "range": "stddev: 1.547490386241784e-7",
            "extra": "mean: 2.1311150408632566 usec\nrounds: 68028"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1186064.99175628,
            "unit": "iter/sec",
            "range": "stddev: 1.1598188677333161e-7",
            "extra": "mean: 843.1241179449485 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 3907232.332004931,
            "unit": "iter/sec",
            "range": "stddev: 3.610454108895115e-8",
            "extra": "mean: 255.9356380752502 nsec\nrounds: 56498"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 924759.3442163705,
            "unit": "iter/sec",
            "range": "stddev: 1.3652058702361408e-7",
            "extra": "mean: 1.0813624174269465 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12873.601867794041,
            "unit": "iter/sec",
            "range": "stddev: 0.000004345911345793736",
            "extra": "mean: 77.67833822030069 usec\nrounds: 18553"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 24089.858577614094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030058881873537933",
            "extra": "mean: 41.511244110385384 usec\nrounds: 34722"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2868.3212925798584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072856771822468135",
            "extra": "mean: 348.6359783288324 usec\nrounds: 4153"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5508.878333606037,
            "unit": "iter/sec",
            "range": "stddev: 0.000006780782755375517",
            "extra": "mean: 181.5251562009745 usec\nrounds: 7023"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2441.8921748487924,
            "unit": "iter/sec",
            "range": "stddev: 0.000021108086545850878",
            "extra": "mean: 409.51849156153764 usec\nrounds: 2785"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4308.754564657352,
            "unit": "iter/sec",
            "range": "stddev: 0.000009225423092334814",
            "extra": "mean: 232.08562590278885 usec\nrounds: 6231"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1234.628312984717,
            "unit": "iter/sec",
            "range": "stddev: 0.000023872252652331857",
            "extra": "mean: 809.9603657901686 usec\nrounds: 1520"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1462.4840751394765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001634225349473664",
            "extra": "mean: 683.7681291706581 usec\nrounds: 2098"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1332.7242996358561,
            "unit": "iter/sec",
            "range": "stddev: 0.0019692765560834044",
            "extra": "mean: 750.3427380090786 usec\nrounds: 2481"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 863.8542735149197,
            "unit": "iter/sec",
            "range": "stddev: 0.002481282522876363",
            "extra": "mean: 1.1576026543587261 msec\nrounds: 1652"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_optional_core",
            "value": 23526.472574369403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028324711414280216",
            "extra": "mean: 42.50530957579406 usec\nrounds: 29240"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6773885.591755826,
            "unit": "iter/sec",
            "range": "stddev: 1.8869267357986565e-8",
            "extra": "mean: 147.62575872510098 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1203925.5154349823,
            "unit": "iter/sec",
            "range": "stddev: 1.1388781232425072e-7",
            "extra": "mean: 830.6161695047612 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 805893.8148680731,
            "unit": "iter/sec",
            "range": "stddev: 1.4793831743389186e-7",
            "extra": "mean: 1.2408582638939243 usec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6490279.604583775,
            "unit": "iter/sec",
            "range": "stddev: 1.491486001808248e-8",
            "extra": "mean: 154.07656694697567 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2411449.4784601564,
            "unit": "iter/sec",
            "range": "stddev: 6.491584786825901e-8",
            "extra": "mean: 414.6883477889533 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 882740.6843830113,
            "unit": "iter/sec",
            "range": "stddev: 1.189197552674847e-7",
            "extra": "mean: 1.1328355174872118 usec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2349114.6852266523,
            "unit": "iter/sec",
            "range": "stddev: 6.939350220720422e-8",
            "extra": "mean: 425.6922858166652 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6239771.401370993,
            "unit": "iter/sec",
            "range": "stddev: 1.528489928737379e-8",
            "extra": "mean: 160.26228136819336 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3487530.997610888,
            "unit": "iter/sec",
            "range": "stddev: 2.3704973251437066e-8",
            "extra": "mean: 286.73580268822616 nsec\nrounds: 38315"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1243223.0379456559,
            "unit": "iter/sec",
            "range": "stddev: 1.2490764259778924e-7",
            "extra": "mean: 804.3608986306663 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2136368.254748998,
            "unit": "iter/sec",
            "range": "stddev: 6.759436215755851e-8",
            "extra": "mean: 468.08409447999867 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2695126.3701774287,
            "unit": "iter/sec",
            "range": "stddev: 7.104969436275826e-8",
            "extra": "mean: 371.04011561973607 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3433848.523190131,
            "unit": "iter/sec",
            "range": "stddev: 2.9021235633208408e-8",
            "extra": "mean: 291.2184370528966 nsec\nrounds: 42919"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187860c6d353ee392e8a1f2c921b20301994543c",
          "message": "refactor: rename optional into nullable (#91)",
          "timestamp": "2022-06-18T21:22:52+01:00",
          "tree_id": "a1f864b1c65cb18af060378ae8ab8c888b7dea2a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/187860c6d353ee392e8a1f2c921b20301994543c"
        },
        "date": 1655583998790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 59309.06411529751,
            "unit": "iter/sec",
            "range": "stddev: 0.000006347718498490044",
            "extra": "mean: 16.860829198990366 usec\nrounds: 65790"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 39821.50787168686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011740481215165119",
            "extra": "mean: 25.11205761525171 usec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 592063.207281762,
            "unit": "iter/sec",
            "range": "stddev: 8.577798279808955e-8",
            "extra": "mean: 1.6890088553064877 usec\nrounds: 67564"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1555038.6906734353,
            "unit": "iter/sec",
            "range": "stddev: 8.059593111888412e-8",
            "extra": "mean: 643.0708161774194 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4724799.945299319,
            "unit": "iter/sec",
            "range": "stddev: 1.6825697976739374e-8",
            "extra": "mean: 211.6491727856165 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1221470.8956254388,
            "unit": "iter/sec",
            "range": "stddev: 9.179165305415135e-8",
            "extra": "mean: 818.6850817174129 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 16035.452483086794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027378173438695956",
            "extra": "mean: 62.36181991463842 usec\nrounds: 17575"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 31968.222391611424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019614592903862264",
            "extra": "mean: 31.28106366847609 usec\nrounds: 35088"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3831.5497398978505,
            "unit": "iter/sec",
            "range": "stddev: 0.000007810302869375497",
            "extra": "mean: 260.99100047874106 usec\nrounds: 4176"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 7392.723909465751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035059517970137193",
            "extra": "mean: 135.26813827303704 usec\nrounds: 8071"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3187.7758897406184,
            "unit": "iter/sec",
            "range": "stddev: 0.000007062139046944295",
            "extra": "mean: 313.69833846173157 usec\nrounds: 3445"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5891.782449069838,
            "unit": "iter/sec",
            "range": "stddev: 0.000005816231879923779",
            "extra": "mean: 169.72792336517355 usec\nrounds: 6407"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1653.0990828834351,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944484703926808",
            "extra": "mean: 604.9244176312407 usec\nrounds: 1815"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1980.8540100640123,
            "unit": "iter/sec",
            "range": "stddev: 0.000009713073216751689",
            "extra": "mean: 504.832761485378 usec\nrounds: 2046"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1598.1309066141785,
            "unit": "iter/sec",
            "range": "stddev: 0.0019219299912028253",
            "extra": "mean: 625.73096850909 usec\nrounds: 2858"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1035.055103020216,
            "unit": "iter/sec",
            "range": "stddev: 0.002442713236921276",
            "extra": "mean: 966.1321383586944 usec\nrounds: 1937"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 31906.585693959045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018152808953930515",
            "extra": "mean: 31.34149199139576 usec\nrounds: 35212"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 9123575.1671163,
            "unit": "iter/sec",
            "range": "stddev: 1.143868314592463e-8",
            "extra": "mean: 109.60615566633666 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1573524.7361842385,
            "unit": "iter/sec",
            "range": "stddev: 4.103760994681907e-8",
            "extra": "mean: 635.5159070613045 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 1016923.8420482742,
            "unit": "iter/sec",
            "range": "stddev: 1.003627190926481e-7",
            "extra": "mean: 983.3578077839802 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 9044713.972796764,
            "unit": "iter/sec",
            "range": "stddev: 1.2682231381619362e-8",
            "extra": "mean: 110.56181577528103 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 3088820.761602798,
            "unit": "iter/sec",
            "range": "stddev: 5.049598264974602e-8",
            "extra": "mean: 323.7481476521737 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1228164.3316820806,
            "unit": "iter/sec",
            "range": "stddev: 7.701676336094219e-8",
            "extra": "mean: 814.2232877179545 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2999341.9896817734,
            "unit": "iter/sec",
            "range": "stddev: 4.809583651790912e-8",
            "extra": "mean: 333.40646163040685 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8552973.083591484,
            "unit": "iter/sec",
            "range": "stddev: 1.249487307647546e-8",
            "extra": "mean: 116.91840839752192 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4397622.280220543,
            "unit": "iter/sec",
            "range": "stddev: 1.727974725291742e-8",
            "extra": "mean: 227.39560978163686 nsec\nrounds: 47394"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1835636.163549719,
            "unit": "iter/sec",
            "range": "stddev: 4.842005794125582e-8",
            "extra": "mean: 544.770265402698 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2737946.513219342,
            "unit": "iter/sec",
            "range": "stddev: 4.2667883937699276e-8",
            "extra": "mean: 365.2372298628296 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3646649.4665190983,
            "unit": "iter/sec",
            "range": "stddev: 2.7058152211893324e-8",
            "extra": "mean: 274.22432816229514 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4332185.111002608,
            "unit": "iter/sec",
            "range": "stddev: 1.079345068854848e-8",
            "extra": "mean: 230.83039491093913 nsec\nrounds: 44643"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "beltowski.t@gmail.com",
            "name": "Tom",
            "username": "czotomo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8faeed750b7dad3f2a6129fff0515da73eec5ac6",
          "message": "reuse error kinds where appropriate (#81)\n\n* gather comparison errors under unified enumerations\r\n\r\n* use unified comparison error kind for int and float\r\n\r\n* unify  and  errors\r\n\r\n* make str and bytes toolong/tooshort error kinds standalone\r\n\r\n* remove unnecessary variables from errors\r\n\r\n* linting\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-20T13:43:51+01:00",
          "tree_id": "36797af0cd48f74c0d7ea7856d6783504c83f09a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/8faeed750b7dad3f2a6129fff0515da73eec5ac6"
        },
        "date": 1655729265004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 51772.4269472669,
            "unit": "iter/sec",
            "range": "stddev: 6.888295403498451e-7",
            "extra": "mean: 19.315300807098644 usec\nrounds: 52911"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34535.18420641012,
            "unit": "iter/sec",
            "range": "stddev: 6.975833112639021e-7",
            "extra": "mean: 28.95597701240547 usec\nrounds: 35715"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 558260.5106217816,
            "unit": "iter/sec",
            "range": "stddev: 4.390097301509847e-8",
            "extra": "mean: 1.791278410300485 usec\nrounds: 57143"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1398783.0384997411,
            "unit": "iter/sec",
            "range": "stddev: 4.985162290522199e-8",
            "extra": "mean: 714.9071532011951 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4704179.042437619,
            "unit": "iter/sec",
            "range": "stddev: 4.5169368261981795e-9",
            "extra": "mean: 212.5769429646017 nsec\nrounds: 47847"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1064161.3395231147,
            "unit": "iter/sec",
            "range": "stddev: 3.550977596947719e-8",
            "extra": "mean: 939.707131672704 nsec\nrounds: 111124"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13996.670729862582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010290193782129407",
            "extra": "mean: 71.44556154103498 usec\nrounds: 14145"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28478.87924576215,
            "unit": "iter/sec",
            "range": "stddev: 7.977020883752198e-7",
            "extra": "mean: 35.11374135795062 usec\nrounds: 28986"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3440.5053920916794,
            "unit": "iter/sec",
            "range": "stddev: 0.000001830990792891697",
            "extra": "mean: 290.6549724638109 usec\nrounds: 3450"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6566.332074862109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019691025888922132",
            "extra": "mean: 152.29202370503012 usec\nrounds: 6623"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2881.3667510929163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027476251000732846",
            "extra": "mean: 347.0575204009331 usec\nrounds: 2892"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5083.215948962027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024293007761729663",
            "extra": "mean: 196.7258542703062 usec\nrounds: 5222"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1479.3348478429223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057409651746522686",
            "extra": "mean: 675.9794791950857 usec\nrounds: 1490"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1754.0269663003332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047752368983045535",
            "extra": "mean: 570.1166625215811 usec\nrounds: 1769"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1445.7939655042512,
            "unit": "iter/sec",
            "range": "stddev: 0.002150172120634905",
            "extra": "mean: 691.6614841805823 usec\nrounds: 2402"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 923.4352766980749,
            "unit": "iter/sec",
            "range": "stddev: 0.002728964416400621",
            "extra": "mean: 1.0829129287498063 msec\nrounds: 1600"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 28444.010500015116,
            "unit": "iter/sec",
            "range": "stddev: 8.679965830239219e-7",
            "extra": "mean: 35.15678634696991 usec\nrounds: 28902"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8082299.742073702,
            "unit": "iter/sec",
            "range": "stddev: 5.284350098995377e-8",
            "extra": "mean: 123.72716082198079 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1342950.7292981423,
            "unit": "iter/sec",
            "range": "stddev: 3.3005752234127105e-8",
            "extra": "mean: 744.6289563600195 nsec\nrounds: 138909"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 897390.0291783238,
            "unit": "iter/sec",
            "range": "stddev: 3.88140547301346e-8",
            "extra": "mean: 1.114342668723104 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7618172.104548739,
            "unit": "iter/sec",
            "range": "stddev: 4.598515863715718e-9",
            "extra": "mean: 131.26508383860636 nsec\nrounds: 78126"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2809736.5509344796,
            "unit": "iter/sec",
            "range": "stddev: 2.3789744103366482e-8",
            "extra": "mean: 355.90525370338145 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1100599.4541759305,
            "unit": "iter/sec",
            "range": "stddev: 5.2898535097236375e-8",
            "extra": "mean: 908.595762250894 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2831571.977099312,
            "unit": "iter/sec",
            "range": "stddev: 1.5784672715799817e-8",
            "extra": "mean: 353.1607206490403 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7313757.049133086,
            "unit": "iter/sec",
            "range": "stddev: 4.3501816587903384e-9",
            "extra": "mean: 136.72863253215678 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4147217.007994853,
            "unit": "iter/sec",
            "range": "stddev: 4.737585937957262e-9",
            "extra": "mean: 241.12555433503155 nsec\nrounds: 41843"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1522550.7829450541,
            "unit": "iter/sec",
            "range": "stddev: 3.903443668914981e-8",
            "extra": "mean: 656.7925426207578 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2516260.2525824574,
            "unit": "iter/sec",
            "range": "stddev: 1.8548087647733423e-8",
            "extra": "mean: 397.41517157229447 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3196082.9676603293,
            "unit": "iter/sec",
            "range": "stddev: 1.828418691907255e-8",
            "extra": "mean: 312.8829914978768 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3935432.1385580017,
            "unit": "iter/sec",
            "range": "stddev: 1.2381389620376212e-8",
            "extra": "mean: 254.1017008533947 nsec\nrounds: 188715"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "4a1992254805da4aadfa8ad537a0309cd27d9b4f",
          "message": "benchmarks for list[any] and dict[any, any]",
          "timestamp": "2022-06-20T15:30:09+01:00",
          "tree_id": "5116edd12bbcf44d5f711a871f85a4880e766326",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/4a1992254805da4aadfa8ad537a0309cd27d9b4f"
        },
        "date": 1655735561289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 51287.988815998346,
            "unit": "iter/sec",
            "range": "stddev: 6.476523251050498e-7",
            "extra": "mean: 19.49774251409266 usec\nrounds: 52632"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34931.64675813734,
            "unit": "iter/sec",
            "range": "stddev: 7.474685416887214e-7",
            "extra": "mean: 28.627336321241412 usec\nrounds: 35588"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 547859.8630219089,
            "unit": "iter/sec",
            "range": "stddev: 4.855812388665389e-8",
            "extra": "mean: 1.8252842880002151 usec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1398801.4146568696,
            "unit": "iter/sec",
            "range": "stddev: 3.8037715761243675e-8",
            "extra": "mean: 714.8977614133285 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 4629132.688396197,
            "unit": "iter/sec",
            "range": "stddev: 5.046241051637532e-9",
            "extra": "mean: 216.02318777917426 nsec\nrounds: 46512"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1060472.7107099986,
            "unit": "iter/sec",
            "range": "stddev: 4.209281481758325e-8",
            "extra": "mean: 942.9757030993264 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14027.661187197798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010187419372783292",
            "extra": "mean: 71.287721214185 usec\nrounds: 14165"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28056.9333722619,
            "unit": "iter/sec",
            "range": "stddev: 7.56991183323341e-7",
            "extra": "mean: 35.64181397631418 usec\nrounds: 28491"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3456.967010991912,
            "unit": "iter/sec",
            "range": "stddev: 0.000002302767590122544",
            "extra": "mean: 289.2709119931893 usec\nrounds: 3477"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 20260.4798282428,
            "unit": "iter/sec",
            "range": "stddev: 8.613716840064434e-7",
            "extra": "mean: 49.35717260782815 usec\nrounds: 20619"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6560.705133051149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018911751243801346",
            "extra": "mean: 152.42264051195605 usec\nrounds: 6640"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2859.1786167381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022596777860918034",
            "extra": "mean: 349.75079701066454 usec\nrounds: 2877"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5133.917496716663,
            "unit": "iter/sec",
            "range": "stddev: 0.000001963370384400201",
            "extra": "mean: 194.7830288740593 usec\nrounds: 5195"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1482.7009909659023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037974223940841493",
            "extra": "mean: 674.4448179997182 usec\nrounds: 1500"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7061.047382234633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015536282311074833",
            "extra": "mean: 141.62204923252148 usec\nrounds: 7231"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1690.799689406897,
            "unit": "iter/sec",
            "range": "stddev: 0.000004329968165878472",
            "extra": "mean: 591.4361152684992 usec\nrounds: 1657"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1575.2613120117521,
            "unit": "iter/sec",
            "range": "stddev: 0.0017748439618664729",
            "extra": "mean: 634.8153111961526 usec\nrounds: 2349"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 950.5521432820427,
            "unit": "iter/sec",
            "range": "stddev: 0.0024399389006858783",
            "extra": "mean: 1.0520201412067989 msec\nrounds: 1558"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 28471.835225680443,
            "unit": "iter/sec",
            "range": "stddev: 7.036970792129335e-7",
            "extra": "mean: 35.122428606149015 usec\nrounds: 28819"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 7934317.320898362,
            "unit": "iter/sec",
            "range": "stddev: 4.472049647430104e-9",
            "extra": "mean: 126.03478781537778 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1376700.2863826072,
            "unit": "iter/sec",
            "range": "stddev: 3.972031683024279e-8",
            "extra": "mean: 726.3745129502443 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 889699.5225854672,
            "unit": "iter/sec",
            "range": "stddev: 4.6654946685166313e-8",
            "extra": "mean: 1.1239749765109863 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7482657.045556723,
            "unit": "iter/sec",
            "range": "stddev: 4.36102891582483e-9",
            "extra": "mean: 133.6423671314152 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2736784.3327446016,
            "unit": "iter/sec",
            "range": "stddev: 2.0514444660856154e-8",
            "extra": "mean: 365.39232852050986 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1057586.9582768332,
            "unit": "iter/sec",
            "range": "stddev: 5.673759228375364e-8",
            "extra": "mean: 945.5487250232499 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2794717.5689499904,
            "unit": "iter/sec",
            "range": "stddev: 1.9702153634529536e-8",
            "extra": "mean: 357.8179101572615 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7147720.867241858,
            "unit": "iter/sec",
            "range": "stddev: 4.491622656862024e-9",
            "extra": "mean: 139.9047358694743 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4074330.0852368176,
            "unit": "iter/sec",
            "range": "stddev: 6.21879299970837e-9",
            "extra": "mean: 245.4391222801057 nsec\nrounds: 41323"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1578367.749081167,
            "unit": "iter/sec",
            "range": "stddev: 3.9685616420582324e-8",
            "extra": "mean: 633.5659104680453 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2535187.8627838013,
            "unit": "iter/sec",
            "range": "stddev: 2.0004337008913238e-8",
            "extra": "mean: 394.4480859509242 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3173953.6387892296,
            "unit": "iter/sec",
            "range": "stddev: 1.6814497922419294e-8",
            "extra": "mean: 315.064463379692 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3878865.4978233054,
            "unit": "iter/sec",
            "range": "stddev: 1.1084045317449952e-8",
            "extra": "mean: 257.8073409766509 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77b7ae6a4f5dc2e7bb539aff7719439027c0bfe8",
          "message": "stop using `dyn Input` and other related changes (#93)\n\n* working on impl input instead of dyn\r\n\r\n* sequences working\r\n\r\n* more types working\r\n\r\n* dict working, simplify sequence generators\r\n\r\n* Working!!!\r\n\r\n* improving list, set & tuple validators\r\n\r\n* stop using \"dyn Input\"\r\n\r\n* remove to_py\r\n\r\n* add more rust benchmarks\r\n\r\n* improve how InputValue works\r\n\r\n* reverse some input merges\r\n\r\n* cleanup\r\n\r\n* tweak literals errors\r\n\r\n* use \"impl Input\" instead of generic param\r\n\r\n* use dedicated function macros",
          "timestamp": "2022-06-20T17:25:35+01:00",
          "tree_id": "b9d4b077b68a7cc6b799579a09156cc9b8a64b13",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/77b7ae6a4f5dc2e7bb539aff7719439027c0bfe8"
        },
        "date": 1655742482836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 54382.6910005072,
            "unit": "iter/sec",
            "range": "stddev: 6.256719044052835e-7",
            "extra": "mean: 18.388203702363192 usec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35744.914979725836,
            "unit": "iter/sec",
            "range": "stddev: 7.606873941830084e-7",
            "extra": "mean: 27.976007232558533 usec\nrounds: 36364"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 536774.1759600013,
            "unit": "iter/sec",
            "range": "stddev: 5.6455524170405665e-8",
            "extra": "mean: 1.862980830274908 usec\nrounds: 54946"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1274512.7839823563,
            "unit": "iter/sec",
            "range": "stddev: 1.4046513705019194e-7",
            "extra": "mean: 784.6135500303116 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 3465756.939284924,
            "unit": "iter/sec",
            "range": "stddev: 2.0358958616885298e-8",
            "extra": "mean: 288.53725680163336 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1030528.3556115003,
            "unit": "iter/sec",
            "range": "stddev: 1.6742883767621446e-7",
            "extra": "mean: 970.3760159097089 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14750.193881963369,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022349548106818094",
            "extra": "mean: 67.79571902595845 usec\nrounds: 14948"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28966.76549102354,
            "unit": "iter/sec",
            "range": "stddev: 8.248933706871259e-7",
            "extra": "mean: 34.52232180737916 usec\nrounds: 29325"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3533.0219422624727,
            "unit": "iter/sec",
            "range": "stddev: 0.000009579503521021767",
            "extra": "mean: 283.0438124478845 usec\nrounds: 3599"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 28412.630361511034,
            "unit": "iter/sec",
            "range": "stddev: 0.000001098869551594215",
            "extra": "mean: 35.19561502319204 usec\nrounds: 29155"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6796.07307855974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016893401846605878",
            "extra": "mean: 147.14379737245633 usec\nrounds: 6850"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2855.0851950914243,
            "unit": "iter/sec",
            "range": "stddev: 0.000014150934434455833",
            "extra": "mean: 350.2522452637279 usec\nrounds: 2956"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5316.582494321223,
            "unit": "iter/sec",
            "range": "stddev: 0.000002731818952660282",
            "extra": "mean: 188.09075210779207 usec\nrounds: 5337"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1440.4916404478074,
            "unit": "iter/sec",
            "range": "stddev: 0.000004745695966283584",
            "extra": "mean: 694.2074302417533 usec\nrounds: 1455"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7354.069329991387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019551143634402948",
            "extra": "mean: 135.9791368734854 usec\nrounds: 7474"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1729.048652055179,
            "unit": "iter/sec",
            "range": "stddev: 0.000004647166505298884",
            "extra": "mean: 578.3527252465577 usec\nrounds: 1707"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1461.010598788558,
            "unit": "iter/sec",
            "range": "stddev: 0.002265126381131059",
            "extra": "mean: 684.4577314012513 usec\nrounds: 2379"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 893.1599906198898,
            "unit": "iter/sec",
            "range": "stddev: 0.002946724518320824",
            "extra": "mean: 1.1196202365781733 msec\nrounds: 1602"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32257.54961429725,
            "unit": "iter/sec",
            "range": "stddev: 7.973287466869466e-7",
            "extra": "mean: 31.00049482855877 usec\nrounds: 32680"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 5218615.05474972,
            "unit": "iter/sec",
            "range": "stddev: 5.493024086689111e-9",
            "extra": "mean: 191.62172137795073 nsec\nrounds: 52911"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1337848.0542348104,
            "unit": "iter/sec",
            "range": "stddev: 4.5638251842630975e-8",
            "extra": "mean: 747.4690394271146 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 904797.6819723003,
            "unit": "iter/sec",
            "range": "stddev: 4.6330209775210346e-8",
            "extra": "mean: 1.1052194539441327 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 5037657.464613583,
            "unit": "iter/sec",
            "range": "stddev: 5.5061619578061234e-9",
            "extra": "mean: 198.5049612889506 nsec\nrounds: 51021"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2168399.5911029647,
            "unit": "iter/sec",
            "range": "stddev: 2.5143736268526542e-8",
            "extra": "mean: 461.16961288079284 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 971530.3306027894,
            "unit": "iter/sec",
            "range": "stddev: 7.93718250705855e-8",
            "extra": "mean: 1.0293039429644406 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2121355.5317162327,
            "unit": "iter/sec",
            "range": "stddev: 2.622622816322468e-8",
            "extra": "mean: 471.3967013307616 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 4991296.716718094,
            "unit": "iter/sec",
            "range": "stddev: 6.064178738981522e-9",
            "extra": "mean: 200.34873836503343 nsec\nrounds: 50506"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3192598.1820028797,
            "unit": "iter/sec",
            "range": "stddev: 2.092836869614435e-8",
            "extra": "mean: 313.2245096284918 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1467886.3165356943,
            "unit": "iter/sec",
            "range": "stddev: 4.707959245648393e-8",
            "extra": "mean: 681.251666927041 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2151759.5507646394,
            "unit": "iter/sec",
            "range": "stddev: 2.7407716958620113e-8",
            "extra": "mean: 464.7359411721021 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2610719.977867945,
            "unit": "iter/sec",
            "range": "stddev: 2.0674744055787406e-8",
            "extra": "mean: 383.0361005689851 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3094770.48726448,
            "unit": "iter/sec",
            "range": "stddev: 2.103475929235945e-8",
            "extra": "mean: 323.1257387624778 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dswijj@gmail.com",
            "name": "dswij",
            "username": "dswij"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4f19a0980967d53268c9697f25a4b9324ca2c2a",
          "message": "Add `frozenset` type (#86)\n\n* Add `frozenset` type\r\n\r\n* Use total=false\r\n\r\n* Add dict keys and simple values testcase for frozenset, set\r\n\r\n* Remove string case from frozenset\r\n\r\n* fix test\r\n\r\n* Fix error message for frozenset JSON\r\n\r\n* fix lint\r\n\r\n* fix rust lint\r\n\r\n* `frozenset` test check for instance type\r\n\r\n* update to match changes, more tests\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-20T18:12:38+01:00",
          "tree_id": "68e7eebe515159dd534d4d19a8026d2fda6a4634",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/e4f19a0980967d53268c9697f25a4b9324ca2c2a"
        },
        "date": 1655745334266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 45522.33572081712,
            "unit": "iter/sec",
            "range": "stddev: 0.0000671792988385436",
            "extra": "mean: 21.96723837135416 usec\nrounds: 63292"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28059.7514948192,
            "unit": "iter/sec",
            "range": "stddev: 0.000017369861133846098",
            "extra": "mean: 35.638234365141635 usec\nrounds: 37736"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 444817.1337682659,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015180987754937506",
            "extra": "mean: 2.2481148410995897 usec\nrounds: 59881"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1207633.4544914782,
            "unit": "iter/sec",
            "range": "stddev: 8.146019970581837e-7",
            "extra": "mean: 828.0658309694985 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 3702599.4333861144,
            "unit": "iter/sec",
            "range": "stddev: 3.136581292101736e-7",
            "extra": "mean: 270.0805253150274 nsec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 869884.9065234987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037425997555231725",
            "extra": "mean: 1.1495773665006053 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10594.477957889563,
            "unit": "iter/sec",
            "range": "stddev: 0.00008698852710813386",
            "extra": "mean: 94.38879423552095 usec\nrounds: 14225"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 23854.695338308873,
            "unit": "iter/sec",
            "range": "stddev: 0.000020311872031424236",
            "extra": "mean: 41.92046831107812 usec\nrounds: 30121"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2924.532081561905,
            "unit": "iter/sec",
            "range": "stddev: 0.00010741528450013635",
            "extra": "mean: 341.93504195239666 usec\nrounds: 3647"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 21825.46315826076,
            "unit": "iter/sec",
            "range": "stddev: 0.00003826668377022053",
            "extra": "mean: 45.818042565640035 usec\nrounds: 29155"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5538.375564531471,
            "unit": "iter/sec",
            "range": "stddev: 0.000046121728497603985",
            "extra": "mean: 180.55835837571928 usec\nrounds: 7068"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2395.2681138250587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000634702262272316",
            "extra": "mean: 417.48979758390266 usec\nrounds: 3063"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4100.601223883015,
            "unit": "iter/sec",
            "range": "stddev: 0.00022974006098533742",
            "extra": "mean: 243.86667842162467 usec\nrounds: 5728"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13073.512140881561,
            "unit": "iter/sec",
            "range": "stddev: 0.00003146298220362934",
            "extra": "mean: 76.49053974355883 usec\nrounds: 16921"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1132.9783389529898,
            "unit": "iter/sec",
            "range": "stddev: 0.00028837738673541364",
            "extra": "mean: 882.6294074819841 usec\nrounds: 1497"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 5750.048297538242,
            "unit": "iter/sec",
            "range": "stddev: 0.0001744172038432915",
            "extra": "mean: 173.9115826954233 usec\nrounds: 7316"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1385.3824387313614,
            "unit": "iter/sec",
            "range": "stddev: 0.00013912967160656863",
            "extra": "mean: 721.8223445330602 usec\nrounds: 1756"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1296.8435112067834,
            "unit": "iter/sec",
            "range": "stddev: 0.00198814390256591",
            "extra": "mean: 771.1030601290094 usec\nrounds: 2478"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 815.6127500181874,
            "unit": "iter/sec",
            "range": "stddev: 0.002546827230512279",
            "extra": "mean: 1.2260720543881896 msec\nrounds: 1618"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 27499.683534551554,
            "unit": "iter/sec",
            "range": "stddev: 0.00006503544505532703",
            "extra": "mean: 36.36405483516076 usec\nrounds: 38023"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6894428.85460778,
            "unit": "iter/sec",
            "range": "stddev: 1.9961246626906367e-7",
            "extra": "mean: 145.0446470749205 nsec\nrounds: 82652"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1140546.701998121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015518777336300952",
            "extra": "mean: 876.7725146616151 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 748755.8281862232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021874338417085798",
            "extra": "mean: 1.3355488696794893 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6317391.1431716,
            "unit": "iter/sec",
            "range": "stddev: 1.5740023265572448e-7",
            "extra": "mean: 158.29319054924534 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2137567.79904359,
            "unit": "iter/sec",
            "range": "stddev: 0.00000169014092548082",
            "extra": "mean: 467.82141855216423 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 843558.5194015031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025598899963348994",
            "extra": "mean: 1.1854542121268177 usec\nrounds: 106395"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2159055.5423561204,
            "unit": "iter/sec",
            "range": "stddev: 8.507070349865207e-7",
            "extra": "mean: 463.16548156457884 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6427423.541115861,
            "unit": "iter/sec",
            "range": "stddev: 1.315340334744739e-7",
            "extra": "mean: 155.58333655833692 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3239571.888017368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010994147222075187",
            "extra": "mean: 308.68276258916444 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1146632.7032911694,
            "unit": "iter/sec",
            "range": "stddev: 0.000001112098966145321",
            "extra": "mean: 872.1188547384833 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2135540.1795884,
            "unit": "iter/sec",
            "range": "stddev: 5.274176476294438e-7",
            "extra": "mean: 468.2655983521 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2100311.2339884746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024897988550636148",
            "extra": "mean: 476.11991204799097 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3247886.947305957,
            "unit": "iter/sec",
            "range": "stddev: 5.783018885728283e-7",
            "extra": "mean: 307.8924901709564 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b39cad87a9e0086566a38b63095bce90dcea6877",
          "message": "changes to benchmarks (#95)",
          "timestamp": "2022-06-20T23:15:22+01:00",
          "tree_id": "aefed726fa55fc67f0535378460317940b8dd497",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/b39cad87a9e0086566a38b63095bce90dcea6877"
        },
        "date": 1655763496139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 44880.20193232513,
            "unit": "iter/sec",
            "range": "stddev: 9.760005079626325e-7",
            "extra": "mean: 22.281539675509933 usec\nrounds: 45872"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29419.350981946496,
            "unit": "iter/sec",
            "range": "stddev: 9.094082316758209e-7",
            "extra": "mean: 33.99123252629403 usec\nrounds: 30031"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 464956.12433494977,
            "unit": "iter/sec",
            "range": "stddev: 5.9449252458745745e-8",
            "extra": "mean: 2.1507405702642166 usec\nrounds: 47170"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1092186.8029576985,
            "unit": "iter/sec",
            "range": "stddev: 4.344777817370121e-8",
            "extra": "mean: 915.5942896326271 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 851699.4326454893,
            "unit": "iter/sec",
            "range": "stddev: 5.3438837543511565e-8",
            "extra": "mean: 1.1741231256824147 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 3335199.4726999197,
            "unit": "iter/sec",
            "range": "stddev: 1.7026635996951483e-8",
            "extra": "mean: 299.83214143066317 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12804.361043592642,
            "unit": "iter/sec",
            "range": "stddev: 0.000001420188054281956",
            "extra": "mean: 78.09839136802569 usec\nrounds: 13021"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 23679.427922644947,
            "unit": "iter/sec",
            "range": "stddev: 8.856559281486821e-7",
            "extra": "mean: 42.23074996857027 usec\nrounds: 23809"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2941.493205114277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030363278545057685",
            "extra": "mean: 339.96338943137215 usec\nrounds: 2971"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5644.377547701486,
            "unit": "iter/sec",
            "range": "stddev: 0.000001704222859550817",
            "extra": "mean: 177.1674540813135 usec\nrounds: 5673"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 24114.219214849672,
            "unit": "iter/sec",
            "range": "stddev: 8.180629484193477e-7",
            "extra": "mean: 41.469308671797855 usec\nrounds: 26316"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2383.3249829455403,
            "unit": "iter/sec",
            "range": "stddev: 0.00022697692352943797",
            "extra": "mean: 419.5818896523732 usec\nrounds: 2474"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4470.49907678307,
            "unit": "iter/sec",
            "range": "stddev: 0.00000486030784443194",
            "extra": "mean: 223.6886716280435 usec\nrounds: 4501"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13120.382364531833,
            "unit": "iter/sec",
            "range": "stddev: 0.00000196649022351444",
            "extra": "mean: 76.2172909459779 usec\nrounds: 13298"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1178.201974782879,
            "unit": "iter/sec",
            "range": "stddev: 0.000004331705398388418",
            "extra": "mean: 848.7509114761767 usec\nrounds: 1220"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 6019.012059957244,
            "unit": "iter/sec",
            "range": "stddev: 0.000002444031186446163",
            "extra": "mean: 166.1402220229317 usec\nrounds: 6139"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1450.053378839003,
            "unit": "iter/sec",
            "range": "stddev: 0.00000465459467787321",
            "extra": "mean: 689.6297850777453 usec\nrounds: 1461"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1356.764461377121,
            "unit": "iter/sec",
            "range": "stddev: 0.0021027546772514035",
            "extra": "mean: 737.047607353303 usec\nrounds: 2040"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 828.0437290602646,
            "unit": "iter/sec",
            "range": "stddev: 0.002734240111885968",
            "extra": "mean: 1.2076656883023391 msec\nrounds: 1325"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 26616.618637171756,
            "unit": "iter/sec",
            "range": "stddev: 9.75408262661365e-7",
            "extra": "mean: 37.57051237918847 usec\nrounds: 26738"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 5852713.289942466,
            "unit": "iter/sec",
            "range": "stddev: 5.739966419719448e-9",
            "extra": "mean: 170.8609238929018 nsec\nrounds: 59877"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1098592.2002568168,
            "unit": "iter/sec",
            "range": "stddev: 4.7481784045111584e-8",
            "extra": "mean: 910.2558708916921 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 773852.6245409813,
            "unit": "iter/sec",
            "range": "stddev: 6.433072730171182e-8",
            "extra": "mean: 1.2922357155448194 usec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 5494816.075856233,
            "unit": "iter/sec",
            "range": "stddev: 7.82746695289085e-9",
            "extra": "mean: 181.98971288487314 nsec\nrounds: 55866"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2017964.12318541,
            "unit": "iter/sec",
            "range": "stddev: 3.4010903176334205e-8",
            "extra": "mean: 495.54894881985194 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 849791.7875204985,
            "unit": "iter/sec",
            "range": "stddev: 5.605414338243725e-8",
            "extra": "mean: 1.176758842207489 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 1972277.1076092124,
            "unit": "iter/sec",
            "range": "stddev: 3.3557245214803654e-8",
            "extra": "mean: 507.02814332886254 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 5491181.750000466,
            "unit": "iter/sec",
            "range": "stddev: 5.500642594996529e-9",
            "extra": "mean: 182.11016235263494 nsec\nrounds: 55866"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3105693.101650852,
            "unit": "iter/sec",
            "range": "stddev: 1.8728426382288803e-8",
            "extra": "mean: 321.9893168020755 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1246923.2882864743,
            "unit": "iter/sec",
            "range": "stddev: 5.421411488084916e-8",
            "extra": "mean: 801.9739541270202 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2031122.7947783165,
            "unit": "iter/sec",
            "range": "stddev: 3.282241142903609e-8",
            "extra": "mean: 492.3385245699808 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2430675.0419516815,
            "unit": "iter/sec",
            "range": "stddev: 2.867424402351371e-8",
            "extra": "mean: 411.40834654584773 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3003713.882869138,
            "unit": "iter/sec",
            "range": "stddev: 2.10395569876613e-8",
            "extra": "mean: 332.92118989868743 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d17f70094ac18e47ea0a6c701bd55ff991f8fde6",
          "message": "String enum (#96)\n\n* implement EitherString\r\n\r\n* linting",
          "timestamp": "2022-06-20T23:41:39+01:00",
          "tree_id": "dea3acba44fa291d59a29f49a20abe7b43bc31c0",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/d17f70094ac18e47ea0a6c701bd55ff991f8fde6"
        },
        "date": 1655765064168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 71881.59374825376,
            "unit": "iter/sec",
            "range": "stddev: 0.000018372903997315166",
            "extra": "mean: 13.911767225170815 usec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 30372.546873891748,
            "unit": "iter/sec",
            "range": "stddev: 0.00001583913704944447",
            "extra": "mean: 32.92446972432201 usec\nrounds: 37175"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 562352.1872253555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010720517427333814",
            "extra": "mean: 1.7782450619316776 usec\nrounds: 63699"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1477396.7433889078,
            "unit": "iter/sec",
            "range": "stddev: 8.81997596431041e-7",
            "extra": "mean: 676.8662544267976 nsec\nrounds: 181852"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1151603.2880214981,
            "unit": "iter/sec",
            "range": "stddev: 5.369706960097923e-7",
            "extra": "mean: 868.354589120532 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8197107.519959055,
            "unit": "iter/sec",
            "range": "stddev: 8.27927878390669e-8",
            "extra": "mean: 121.9942519437912 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 11618.016715928105,
            "unit": "iter/sec",
            "range": "stddev: 0.00003625692487028315",
            "extra": "mean: 86.07321063921495 usec\nrounds: 14926"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 25485.84476907428,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642335050965902",
            "extra": "mean: 39.23746727098671 usec\nrounds: 31547"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3414.183797307697,
            "unit": "iter/sec",
            "range": "stddev: 0.00014595433141202372",
            "extra": "mean: 292.89577227463974 usec\nrounds: 3917"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6450.248793938138,
            "unit": "iter/sec",
            "range": "stddev: 0.00005234317801949257",
            "extra": "mean: 155.03277965646646 usec\nrounds: 7452"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 25437.65903559388,
            "unit": "iter/sec",
            "range": "stddev: 0.000028833582719609297",
            "extra": "mean: 39.3117935341747 usec\nrounds: 29942"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2766.1797794582435,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251482919942851",
            "extra": "mean: 361.50940276045617 usec\nrounds: 3188"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4985.490028154428,
            "unit": "iter/sec",
            "range": "stddev: 0.00005704886288725194",
            "extra": "mean: 200.5820880901829 usec\nrounds: 5676"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16166.904873090036,
            "unit": "iter/sec",
            "range": "stddev: 0.000019610359911977005",
            "extra": "mean: 61.85475870922635 usec\nrounds: 18658"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1406.9942707375437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001045244463237739",
            "extra": "mean: 710.7349481073593 usec\nrounds: 1638"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 6951.41206671967,
            "unit": "iter/sec",
            "range": "stddev: 0.000056580613444042305",
            "extra": "mean: 143.85566420203514 usec\nrounds: 7844"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1627.0801755161986,
            "unit": "iter/sec",
            "range": "stddev: 0.00013670684139994776",
            "extra": "mean: 614.5978637363371 usec\nrounds: 1820"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1516.6584663166036,
            "unit": "iter/sec",
            "range": "stddev: 0.0015571823939317538",
            "extra": "mean: 659.3442242989789 usec\nrounds: 2461"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1050.236499781747,
            "unit": "iter/sec",
            "range": "stddev: 0.0018778293507658414",
            "extra": "mean: 952.1664884126701 usec\nrounds: 1726"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 33485.60380038402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010465875682272956",
            "extra": "mean: 29.863579762851156 usec\nrounds: 37881"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8487401.059351847,
            "unit": "iter/sec",
            "range": "stddev: 6.590720086269008e-8",
            "extra": "mean: 117.821697479318 nsec\nrounds: 92602"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1419944.840615543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011351144678440226",
            "extra": "mean: 704.2527085535859 nsec\nrounds: 163962"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 911513.7119283936,
            "unit": "iter/sec",
            "range": "stddev: 8.821040317581647e-7",
            "extra": "mean: 1.0970762007347525 usec\nrounds: 103104"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7638902.758882041,
            "unit": "iter/sec",
            "range": "stddev: 5.631240785769188e-8",
            "extra": "mean: 130.90885321684107 nsec\nrounds: 86965"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2871531.552935317,
            "unit": "iter/sec",
            "range": "stddev: 2.1426891024229106e-7",
            "extra": "mean: 348.24621689322646 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1097321.0112172337,
            "unit": "iter/sec",
            "range": "stddev: 6.835632114915392e-7",
            "extra": "mean: 911.3103547437446 nsec\nrounds: 126599"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2767310.1634279313,
            "unit": "iter/sec",
            "range": "stddev: 5.248598522915388e-7",
            "extra": "mean: 361.3617342991567 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6677207.045630155,
            "unit": "iter/sec",
            "range": "stddev: 9.418861505282791e-8",
            "extra": "mean: 149.7632158425643 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3603359.829043906,
            "unit": "iter/sec",
            "range": "stddev: 3.331413024810016e-7",
            "extra": "mean: 277.51877343465605 nsec\nrounds: 46512"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1595282.734196531,
            "unit": "iter/sec",
            "range": "stddev: 5.965998843707167e-7",
            "extra": "mean: 626.8481307822176 nsec\nrounds: 188715"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2684015.0203689737,
            "unit": "iter/sec",
            "range": "stddev: 9.211709078649324e-7",
            "extra": "mean: 372.5761563966692 nsec\nrounds: 185220"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3121214.114269941,
            "unit": "iter/sec",
            "range": "stddev: 2.6336732168804225e-7",
            "extra": "mean: 320.3881449298108 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4121437.460251743,
            "unit": "iter/sec",
            "range": "stddev: 1.2547343817109378e-7",
            "extra": "mean: 242.63379212822642 nsec\nrounds: 45249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7b6ea7fbb3464b44331002b81b76f554977d663",
          "message": "add model field (#97)\n\n* add model field\r\n\r\n* add test for missing schema key\r\n\r\n* forgot some files\r\n\r\n* fix merge with main\r\n\r\n* remove demo.py\r\n\r\n* tweak\r\n\r\n* use get_as_req",
          "timestamp": "2022-06-20T23:49:12+01:00",
          "tree_id": "c212e5526d0a99b2a0eac4e725ffb73a9497fe68",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f7b6ea7fbb3464b44331002b81b76f554977d663"
        },
        "date": 1655765535803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 59872.91471910649,
            "unit": "iter/sec",
            "range": "stddev: 0.00002414046877206228",
            "extra": "mean: 16.70204306390453 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29796.46423687011,
            "unit": "iter/sec",
            "range": "stddev: 0.000041166097018284396",
            "extra": "mean: 33.56102898821804 usec\nrounds: 42017"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 466202.7434479409,
            "unit": "iter/sec",
            "range": "stddev: 0.000002497284613198873",
            "extra": "mean: 2.144989522378807 usec\nrounds: 58477"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1334374.2311054661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016448274230547683",
            "extra": "mean: 749.4149517346918 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 878858.4308077239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051219844864126474",
            "extra": "mean: 1.1378396849206038 usec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 6997366.9501227485,
            "unit": "iter/sec",
            "range": "stddev: 2.1577736404443719e-7",
            "extra": "mean: 142.91089878923435 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13049.387024695916,
            "unit": "iter/sec",
            "range": "stddev: 0.00005531569569013089",
            "extra": "mean: 76.63195199188313 usec\nrounds: 18726"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 23809.480898358517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005055377882202784",
            "extra": "mean: 42.000075695431995 usec\nrounds: 35088"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3020.5770135340117,
            "unit": "iter/sec",
            "range": "stddev: 0.00015472354231487544",
            "extra": "mean: 331.0625736471526 usec\nrounds: 4250"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5779.800298203017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000905808972481176",
            "extra": "mean: 173.0163584217447 usec\nrounds: 8211"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 24725.31633944959,
            "unit": "iter/sec",
            "range": "stddev: 0.00001875770831975204",
            "extra": "mean: 40.44437637404404 usec\nrounds: 35842"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2491.2727737035193,
            "unit": "iter/sec",
            "range": "stddev: 0.00018620805238061996",
            "extra": "mean: 401.4012478101315 usec\nrounds: 3539"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4323.686221939585,
            "unit": "iter/sec",
            "range": "stddev: 0.00018569863862862157",
            "extra": "mean: 231.28412855810907 usec\nrounds: 6464"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13126.711123379344,
            "unit": "iter/sec",
            "range": "stddev: 0.00010835665235595265",
            "extra": "mean: 76.18054443347572 usec\nrounds: 19231"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1193.6041411865504,
            "unit": "iter/sec",
            "range": "stddev: 0.0002699593010378962",
            "extra": "mean: 837.7987018425637 usec\nrounds: 1791"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 6126.440604505508,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483265065234847",
            "extra": "mean: 163.22691503196484 usec\nrounds: 8921"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1500.96488800103,
            "unit": "iter/sec",
            "range": "stddev: 0.00017167441707434622",
            "extra": "mean: 666.2381032322414 usec\nrounds: 2073"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1381.3416682260574,
            "unit": "iter/sec",
            "range": "stddev: 0.001980595506768823",
            "extra": "mean: 723.9338557593915 usec\nrounds: 2891"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 784.0115005717113,
            "unit": "iter/sec",
            "range": "stddev: 0.0027781436157178654",
            "extra": "mean: 1.2754914937737356 msec\nrounds: 1847"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 26204.565774310424,
            "unit": "iter/sec",
            "range": "stddev: 0.000030429783909302162",
            "extra": "mean: 38.16128870871607 usec\nrounds: 39216"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6816920.0284229405,
            "unit": "iter/sec",
            "range": "stddev: 2.7648257395356964e-7",
            "extra": "mean: 146.6938141903555 nsec\nrounds: 70922"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1050525.8681206875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025228296734606358",
            "extra": "mean: 951.9042132574434 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 772395.517355718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015131478395417597",
            "extra": "mean: 1.2946734898506376 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 5913020.471236135,
            "unit": "iter/sec",
            "range": "stddev: 1.8667237746252897e-7",
            "extra": "mean: 169.11830508017786 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2413470.945571845,
            "unit": "iter/sec",
            "range": "stddev: 5.213684430560166e-7",
            "extra": "mean: 414.34101447707127 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 870015.5270511034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015853326242466533",
            "extra": "mean: 1.1494047737165063 usec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2272595.7831329755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011642353293027467",
            "extra": "mean: 440.0254578583752 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 5864811.376775368,
            "unit": "iter/sec",
            "range": "stddev: 4.225138106254651e-7",
            "extra": "mean: 170.50846749475718 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3421193.1931149135,
            "unit": "iter/sec",
            "range": "stddev: 3.227939312958255e-7",
            "extra": "mean: 292.2956826911891 nsec\nrounds: 50506"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1307507.2469089276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018989615939219656",
            "extra": "mean: 764.8141166055772 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2213719.1748740324,
            "unit": "iter/sec",
            "range": "stddev: 3.683795146341519e-7",
            "extra": "mean: 451.72848089760845 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2511698.545764671,
            "unit": "iter/sec",
            "range": "stddev: 0.000002096819053025126",
            "extra": "mean: 398.1369506652512 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3152370.276060701,
            "unit": "iter/sec",
            "range": "stddev: 0.000001533446789991574",
            "extra": "mean: 317.22161815623707 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1b75cf6c27a5f87a8127f27c9be85c940342fc5",
          "message": "improvements to `with_prefix_location` (#99)\n\n* improvements to with_prefix_location as suggested in #35\r\n\r\n* avoid clone and better benches",
          "timestamp": "2022-06-21T14:11:00+01:00",
          "tree_id": "02383881bde4eb2e20576beb1763175d2ac2c233",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/e1b75cf6c27a5f87a8127f27c9be85c940342fc5"
        },
        "date": 1655817314944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 71782.31931666483,
            "unit": "iter/sec",
            "range": "stddev: 5.258123753152076e-7",
            "extra": "mean: 13.931007099234842 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35358.96203932916,
            "unit": "iter/sec",
            "range": "stddev: 8.525259489626276e-7",
            "extra": "mean: 28.281373160437155 usec\nrounds: 35336"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 549309.5515397391,
            "unit": "iter/sec",
            "range": "stddev: 5.561737073328622e-8",
            "extra": "mean: 1.8204671613606858 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1481080.8225757044,
            "unit": "iter/sec",
            "range": "stddev: 4.4687993147992045e-8",
            "extra": "mean: 675.1825995969067 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1138250.7006222692,
            "unit": "iter/sec",
            "range": "stddev: 4.384551495947014e-8",
            "extra": "mean: 878.541080144877 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8295646.708399177,
            "unit": "iter/sec",
            "range": "stddev: 3.8988658001036806e-9",
            "extra": "mean: 120.54515279529437 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14568.191404093039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012576366411132122",
            "extra": "mean: 68.64270054270723 usec\nrounds: 14750"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28742.643209612983,
            "unit": "iter/sec",
            "range": "stddev: 9.536960769187894e-7",
            "extra": "mean: 34.79151143850089 usec\nrounds: 29069"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3562.708674868575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020852500295460695",
            "extra": "mean: 280.6853131309955 usec\nrounds: 3564"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6741.4463984824515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020979221632703643",
            "extra": "mean: 148.3361197123969 usec\nrounds: 6808"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 28390.045249786916,
            "unit": "iter/sec",
            "range": "stddev: 8.592013453643294e-7",
            "extra": "mean: 35.22361416481031 usec\nrounds: 28818"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2933.5429849237853,
            "unit": "iter/sec",
            "range": "stddev: 0.000003686897641495027",
            "extra": "mean: 340.8847271504973 usec\nrounds: 2965"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5275.1516009271545,
            "unit": "iter/sec",
            "range": "stddev: 0.000002154270929912324",
            "extra": "mean: 189.56801162344624 usec\nrounds: 5334"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16003.332649261109,
            "unit": "iter/sec",
            "range": "stddev: 0.000001236517849431389",
            "extra": "mean: 62.48698454981945 usec\nrounds: 16181"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1429.964067658337,
            "unit": "iter/sec",
            "range": "stddev: 0.00002303622347680204",
            "extra": "mean: 699.3182714287135 usec\nrounds: 1470"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7318.787273025418,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015497206999764797",
            "extra": "mean: 136.63465854318005 usec\nrounds: 7386"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1712.5875963878136,
            "unit": "iter/sec",
            "range": "stddev: 0.000004744482314057904",
            "extra": "mean: 583.911738067704 usec\nrounds: 1718"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1490.0566637731768,
            "unit": "iter/sec",
            "range": "stddev: 0.0022000834019697806",
            "extra": "mean: 671.1154174954413 usec\nrounds: 2412"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 891.3535128919323,
            "unit": "iter/sec",
            "range": "stddev: 0.0029617820502682627",
            "extra": "mean: 1.1218893351926913 msec\nrounds: 1614"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 31252.856411406527,
            "unit": "iter/sec",
            "range": "stddev: 7.230895015107945e-7",
            "extra": "mean: 31.997075302052217 usec\nrounds: 32363"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8155989.17557863,
            "unit": "iter/sec",
            "range": "stddev: 5.195545586448954e-9",
            "extra": "mean: 122.60928484232845 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1374426.565346783,
            "unit": "iter/sec",
            "range": "stddev: 3.786531533509473e-8",
            "extra": "mean: 727.5761580957151 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 891957.6528854895,
            "unit": "iter/sec",
            "range": "stddev: 5.016452537640527e-8",
            "extra": "mean: 1.1211294580689883 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7587887.942117869,
            "unit": "iter/sec",
            "range": "stddev: 4.5671407279058675e-9",
            "extra": "mean: 131.78897838618562 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2602768.792862925,
            "unit": "iter/sec",
            "range": "stddev: 3.264569167145999e-8",
            "extra": "mean: 384.2062355839113 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1087520.5240446003,
            "unit": "iter/sec",
            "range": "stddev: 5.517637602241757e-8",
            "extra": "mean: 919.5228760193029 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2434777.9679799033,
            "unit": "iter/sec",
            "range": "stddev: 3.006494653684521e-8",
            "extra": "mean: 410.7150685407429 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7528558.0907035675,
            "unit": "iter/sec",
            "range": "stddev: 4.709529567601815e-9",
            "extra": "mean: 132.8275597999717 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4155755.6536433133,
            "unit": "iter/sec",
            "range": "stddev: 8.483984267290388e-9",
            "extra": "mean: 240.63012442119398 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1662527.8628988431,
            "unit": "iter/sec",
            "range": "stddev: 5.006345828101765e-8",
            "extra": "mean: 601.4936785815565 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2578044.162362456,
            "unit": "iter/sec",
            "range": "stddev: 2.2087158543159644e-8",
            "extra": "mean: 387.8909502790683 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3084682.7335881195,
            "unit": "iter/sec",
            "range": "stddev: 1.65763247707562e-8",
            "extra": "mean: 324.18244803885733 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3905322.8705559107,
            "unit": "iter/sec",
            "range": "stddev: 1.6268422764451082e-8",
            "extra": "mean: 256.06077477991 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b02c5c725dd1f1ea4c4b02b095beac83c29ecb9",
          "message": "bit of cleanup of mod.rs (#103)",
          "timestamp": "2022-06-21T15:39:29+01:00",
          "tree_id": "fbb8b1cdca94205bf7c5ed43fc67e8542b0c1365",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/8b02c5c725dd1f1ea4c4b02b095beac83c29ecb9"
        },
        "date": 1655822523667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 71248.38648649037,
            "unit": "iter/sec",
            "range": "stddev: 5.090891356308076e-7",
            "extra": "mean: 14.035405562336672 usec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34715.696114576574,
            "unit": "iter/sec",
            "range": "stddev: 7.616489474396746e-7",
            "extra": "mean: 28.805414032303265 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 551968.0094152823,
            "unit": "iter/sec",
            "range": "stddev: 5.227656934749908e-8",
            "extra": "mean: 1.8116991980372579 usec\nrounds: 55863"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1463793.462958198,
            "unit": "iter/sec",
            "range": "stddev: 3.2896664873680715e-8",
            "extra": "mean: 683.1564871039495 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1152821.6233528797,
            "unit": "iter/sec",
            "range": "stddev: 4.0882616525613934e-8",
            "extra": "mean: 867.4368868023467 nsec\nrounds: 119048"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8341789.395385165,
            "unit": "iter/sec",
            "range": "stddev: 3.90035339820339e-9",
            "extra": "mean: 119.8783561417714 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14409.253958283634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011222320499907263",
            "extra": "mean: 69.39984560582451 usec\nrounds: 14599"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28403.323341261766,
            "unit": "iter/sec",
            "range": "stddev: 0.000001524416784419131",
            "extra": "mean: 35.20714769835722 usec\nrounds: 28653"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3588.5371414809033,
            "unit": "iter/sec",
            "range": "stddev: 0.000002141966033825372",
            "extra": "mean: 278.665082894286 usec\nrounds: 3607"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6739.639994783661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016021841934756228",
            "extra": "mean: 148.37587775815604 usec\nrounds: 6798"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27837.799440677176,
            "unit": "iter/sec",
            "range": "stddev: 8.084324911810605e-7",
            "extra": "mean: 35.92237964538171 usec\nrounds: 28819"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2958.233837190686,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033934321508173164",
            "extra": "mean: 338.0395381284866 usec\nrounds: 3003"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5294.443647932053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019430720943512166",
            "extra": "mean: 188.87725821590112 usec\nrounds: 5325"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16048.100773316539,
            "unit": "iter/sec",
            "range": "stddev: 0.000001155470296780843",
            "extra": "mean: 62.312669525525266 usec\nrounds: 16207"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1467.5853438740996,
            "unit": "iter/sec",
            "range": "stddev: 0.000003743536829288725",
            "extra": "mean: 681.3913781397013 usec\nrounds: 1473"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7249.966121452187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014664892597153388",
            "extra": "mean: 137.93167902413558 usec\nrounds: 7337"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1715.1957004143596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059585880085226334",
            "extra": "mean: 583.0238495574694 usec\nrounds: 1695"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1502.0471763766184,
            "unit": "iter/sec",
            "range": "stddev: 0.00217059506239106",
            "extra": "mean: 665.7580505642276 usec\nrounds: 2393"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 860.1009797924684,
            "unit": "iter/sec",
            "range": "stddev: 0.0030586441071480826",
            "extra": "mean: 1.1626541807233932 msec\nrounds: 1577"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 31746.64116773899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017242015942489784",
            "extra": "mean: 31.499395312919034 usec\nrounds: 31747"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8238912.74593633,
            "unit": "iter/sec",
            "range": "stddev: 4.790056652661403e-9",
            "extra": "mean: 121.3752385583903 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1335647.4305990434,
            "unit": "iter/sec",
            "range": "stddev: 3.749021420386397e-8",
            "extra": "mean: 748.7005755346214 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 861226.0538713466,
            "unit": "iter/sec",
            "range": "stddev: 4.725053870708583e-8",
            "extra": "mean: 1.1611353320130473 usec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6820430.815614485,
            "unit": "iter/sec",
            "range": "stddev: 5.887904210331466e-9",
            "extra": "mean: 146.6183041854643 nsec\nrounds: 69931"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2897631.6662047817,
            "unit": "iter/sec",
            "range": "stddev: 2.184473838738022e-8",
            "extra": "mean: 345.1094256260386 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1063384.8131257952,
            "unit": "iter/sec",
            "range": "stddev: 4.7337007065640317e-8",
            "extra": "mean: 940.3933436481452 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2802503.866003521,
            "unit": "iter/sec",
            "range": "stddev: 1.7305196956070454e-8",
            "extra": "mean: 356.82377181774797 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7591135.382537069,
            "unit": "iter/sec",
            "range": "stddev: 4.264411268643259e-9",
            "extra": "mean: 131.73259988235407 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4175847.853815839,
            "unit": "iter/sec",
            "range": "stddev: 6.952807597792271e-9",
            "extra": "mean: 239.47232634115826 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1631422.6981192243,
            "unit": "iter/sec",
            "range": "stddev: 4.855888881476847e-8",
            "extra": "mean: 612.9619265153195 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2589254.995699334,
            "unit": "iter/sec",
            "range": "stddev: 2.0951540495004145e-8",
            "extra": "mean: 386.21147846057323 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2780412.76270865,
            "unit": "iter/sec",
            "range": "stddev: 1.9142049709279095e-8",
            "extra": "mean: 359.6588295856455 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3518533.927400782,
            "unit": "iter/sec",
            "range": "stddev: 1.623967260284157e-8",
            "extra": "mean: 284.20928165900415 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3082c5be70c15c948e9d58783d63693192552fc1",
          "message": "Support build on stable Rust toolchain (#104)\n\n* Support build on stable Rust toolchain\r\n\r\n* Add stable Rust CI\r\n\r\n* Only report coverage to codecov on nightly Rust\r\n\r\n* empty commit to trigger build",
          "timestamp": "2022-06-21T17:14:44+01:00",
          "tree_id": "8f14304d7cc964414d6436bf216b4033756c42e9",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/3082c5be70c15c948e9d58783d63693192552fc1"
        },
        "date": 1655828236041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 77383.05839447722,
            "unit": "iter/sec",
            "range": "stddev: 4.49389235579402e-7",
            "extra": "mean: 12.922725215928779 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34449.04152686083,
            "unit": "iter/sec",
            "range": "stddev: 7.318137906732639e-7",
            "extra": "mean: 29.02838382949707 usec\nrounds: 35336"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 582557.0060043356,
            "unit": "iter/sec",
            "range": "stddev: 5.9481296426892e-8",
            "extra": "mean: 1.7165702063370794 usec\nrounds: 60241"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1306518.6995676106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014203325428355536",
            "extra": "mean: 765.3927956262721 nsec\nrounds: 135154"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1032829.0023114409,
            "unit": "iter/sec",
            "range": "stddev: 8.117942954716254e-8",
            "extra": "mean: 968.2144844517298 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8801612.700921964,
            "unit": "iter/sec",
            "range": "stddev: 4.191424912293988e-9",
            "extra": "mean: 113.61554228531944 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13871.608667859835,
            "unit": "iter/sec",
            "range": "stddev: 0.000001441183155470536",
            "extra": "mean: 72.08969225876265 usec\nrounds: 14145"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 27133.697362071343,
            "unit": "iter/sec",
            "range": "stddev: 7.680815973709658e-7",
            "extra": "mean: 36.854542403713964 usec\nrounds: 27474"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3497.7406359698866,
            "unit": "iter/sec",
            "range": "stddev: 0.000001934754716510447",
            "extra": "mean: 285.89884273186266 usec\nrounds: 3529"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6729.8988509416995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028315695005541036",
            "extra": "mean: 148.5906433586401 usec\nrounds: 6836"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27457.763904180923,
            "unit": "iter/sec",
            "range": "stddev: 7.201688162709975e-7",
            "extra": "mean: 36.41957165520432 usec\nrounds: 28986"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2917.4527461444586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037352749625829536",
            "extra": "mean: 342.7647633098921 usec\nrounds: 2949"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5348.8080649240055,
            "unit": "iter/sec",
            "range": "stddev: 0.00000179737605630505",
            "extra": "mean: 186.9575404205886 usec\nrounds: 5418"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17435.8493219189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010148984592200634",
            "extra": "mean: 57.35309944109709 usec\nrounds: 17890"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1389.157993094926,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036663967955815204",
            "extra": "mean: 719.8605234038822 usec\nrounds: 1410"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7807.732860982361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015194709937218636",
            "extra": "mean: 128.07815249383174 usec\nrounds: 8020"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1676.7895143405594,
            "unit": "iter/sec",
            "range": "stddev: 0.000005821640414108452",
            "extra": "mean: 596.3777751754822 usec\nrounds: 1708"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1701.5809365459263,
            "unit": "iter/sec",
            "range": "stddev: 0.001309825161665042",
            "extra": "mean: 587.6887655017576 usec\nrounds: 2290"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1035.7536495445395,
            "unit": "iter/sec",
            "range": "stddev: 0.0017404355689925924",
            "extra": "mean: 965.4805468846172 usec\nrounds: 1525"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32720.82225455075,
            "unit": "iter/sec",
            "range": "stddev: 7.356821406328974e-7",
            "extra": "mean: 30.561579174891364 usec\nrounds: 34247"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8573430.833552388,
            "unit": "iter/sec",
            "range": "stddev: 3.815399383648148e-9",
            "extra": "mean: 116.63942001918551 nsec\nrounds: 87727"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1271809.1707239586,
            "unit": "iter/sec",
            "range": "stddev: 4.716495022586026e-8",
            "extra": "mean: 786.2814823319231 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 816442.8496209902,
            "unit": "iter/sec",
            "range": "stddev: 5.564413906988077e-8",
            "extra": "mean: 1.2248254736558117 usec\nrounds: 83341"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8134529.738345623,
            "unit": "iter/sec",
            "range": "stddev: 8.700178856553906e-9",
            "extra": "mean: 122.93273639227337 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2675096.253897829,
            "unit": "iter/sec",
            "range": "stddev: 2.012407694163485e-8",
            "extra": "mean: 373.818324683522 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 929851.9314379185,
            "unit": "iter/sec",
            "range": "stddev: 4.8209255221197946e-8",
            "extra": "mean: 1.0754400417855507 usec\nrounds: 95248"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2349652.1403702702,
            "unit": "iter/sec",
            "range": "stddev: 2.5397023816921713e-8",
            "extra": "mean: 425.59491374019353 nsec\nrounds: 185220"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7875757.5747711975,
            "unit": "iter/sec",
            "range": "stddev: 4.603287842290374e-9",
            "extra": "mean: 126.9719122897699 nsec\nrounds: 80652"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3836631.315925008,
            "unit": "iter/sec",
            "range": "stddev: 1.5833304080477207e-8",
            "extra": "mean: 260.64532076595196 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1573052.7947919725,
            "unit": "iter/sec",
            "range": "stddev: 3.916077956866779e-8",
            "extra": "mean: 635.7065721575772 nsec\nrounds: 161317"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2447616.1581073087,
            "unit": "iter/sec",
            "range": "stddev: 2.3477822852026957e-8",
            "extra": "mean: 408.56079360579747 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2908809.014667231,
            "unit": "iter/sec",
            "range": "stddev: 1.9977068375694012e-8",
            "extra": "mean: 343.78331301836965 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3734461.980752322,
            "unit": "iter/sec",
            "range": "stddev: 6.859313558925774e-8",
            "extra": "mean: 267.7761897573875 nsec\nrounds: 188715"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b4213abed9ebfe808c9eca7bc2a5941444d61c5",
          "message": "Sophisticated aliases (#88)\n\n* working on more sophisticated aliases\r\n\r\n* improving alias generation and testing aliases\r\n\r\n* completing tests for aliases, using try_fold to build keys\r\n\r\n* linting\r\n\r\n* improving coverage\r\n\r\n* fix python types for config\r\n\r\n* allow empty models again\r\n\r\n* support apbfn with PathChoices\r\n\r\n* rename to LookupKey and use impl better",
          "timestamp": "2022-06-21T20:04:02+01:00",
          "tree_id": "97583b43a7a1eb0cc0d296a42e00b0ae6e1ad8b6",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/7b4213abed9ebfe808c9eca7bc2a5941444d61c5"
        },
        "date": 1655838432191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 53141.315299940245,
            "unit": "iter/sec",
            "range": "stddev: 0.000033931759637888804",
            "extra": "mean: 18.81775026372229 usec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 24679.21325635325,
            "unit": "iter/sec",
            "range": "stddev: 0.00003378205799442624",
            "extra": "mean: 40.519930259226015 usec\nrounds: 33223"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 424621.83799033804,
            "unit": "iter/sec",
            "range": "stddev: 0.000002599634009257582",
            "extra": "mean: 2.3550366715307307 usec\nrounds: 52084"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1118885.65410326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013522419193710706",
            "extra": "mean: 893.7463773292304 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 867960.3351263459,
            "unit": "iter/sec",
            "range": "stddev: 0.000001363615625808636",
            "extra": "mean: 1.152126381275771 usec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 6254783.536655401,
            "unit": "iter/sec",
            "range": "stddev: 1.9668691699968515e-7",
            "extra": "mean: 159.87763511547303 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 10036.525422889643,
            "unit": "iter/sec",
            "range": "stddev: 0.00004967231697729286",
            "extra": "mean: 99.63607502247399 usec\nrounds: 13316"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 21223.15457891388,
            "unit": "iter/sec",
            "range": "stddev: 0.000023131530253791023",
            "extra": "mean: 47.11834879596754 usec\nrounds: 27701"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2698.229043073758,
            "unit": "iter/sec",
            "range": "stddev: 0.00017475719268070735",
            "extra": "mean: 370.61345943442365 usec\nrounds: 3254"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5047.024260798119,
            "unit": "iter/sec",
            "range": "stddev: 0.00007340402020044742",
            "extra": "mean: 198.13655499287486 usec\nrounds: 5528"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 19723.005601399436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000504457529242633",
            "extra": "mean: 50.702211428112435 usec\nrounds: 25446"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2161.9135508813065,
            "unit": "iter/sec",
            "range": "stddev: 0.000179170183172461",
            "extra": "mean: 462.55318562222294 usec\nrounds: 2796"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 3859.9866833719675,
            "unit": "iter/sec",
            "range": "stddev: 0.00006317026572139872",
            "extra": "mean: 259.06825127345525 usec\nrounds: 4907"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 12411.631580387424,
            "unit": "iter/sec",
            "range": "stddev: 0.00005052062411539116",
            "extra": "mean: 80.56958454843094 usec\nrounds: 16529"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1049.9226780438867,
            "unit": "iter/sec",
            "range": "stddev: 0.00012050521044486168",
            "extra": "mean: 952.4510908394724 usec\nrounds: 1310"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 5245.715693588701,
            "unit": "iter/sec",
            "range": "stddev: 0.00005562118095867776",
            "extra": "mean: 190.63175711603992 usec\nrounds: 6921"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1242.7718547215707,
            "unit": "iter/sec",
            "range": "stddev: 0.00012540241830016544",
            "extra": "mean: 804.6529185552236 usec\nrounds: 1412"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1180.657929786779,
            "unit": "iter/sec",
            "range": "stddev: 0.002232827507941166",
            "extra": "mean: 846.985375502111 usec\nrounds: 1992"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 707.1744979706554,
            "unit": "iter/sec",
            "range": "stddev: 0.0033381281617791956",
            "extra": "mean: 1.4140781417735677 msec\nrounds: 1319"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 24580.71932769963,
            "unit": "iter/sec",
            "range": "stddev: 0.000022975635062135775",
            "extra": "mean: 40.68229194875984 usec\nrounds: 30865"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6405595.544344256,
            "unit": "iter/sec",
            "range": "stddev: 1.4632884547729378e-7",
            "extra": "mean: 156.11350936483473 nsec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1047395.9543676806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015565388715583748",
            "extra": "mean: 954.7487708253627 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 697027.1615055562,
            "unit": "iter/sec",
            "range": "stddev: 0.000002704090600688461",
            "extra": "mean: 1.4346643218896533 usec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 5914279.872767068,
            "unit": "iter/sec",
            "range": "stddev: 1.353776953660451e-7",
            "extra": "mean: 169.0822926058198 nsec\nrounds: 69445"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2168480.4994832207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010665063190861465",
            "extra": "mean: 461.15240613794293 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 801167.0234882418,
            "unit": "iter/sec",
            "range": "stddev: 0.000003011158186739422",
            "extra": "mean: 1.248179181971577 usec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2065002.6257358792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010707130845411802",
            "extra": "mean: 484.2608854518244 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 5804310.165368324,
            "unit": "iter/sec",
            "range": "stddev: 2.6412082421798757e-7",
            "extra": "mean: 172.28576204734918 nsec\nrounds: 64517"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3022555.185513214,
            "unit": "iter/sec",
            "range": "stddev: 2.0944021394717972e-7",
            "extra": "mean: 330.84590309315934 nsec\nrounds: 41153"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1194056.9096952348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016500288647822417",
            "extra": "mean: 837.4810211140577 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 1952365.1522739239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011545074205930452",
            "extra": "mean: 512.1992670453857 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2414097.598147245,
            "unit": "iter/sec",
            "range": "stddev: 8.910495869429785e-7",
            "extra": "mean: 414.23345964445645 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 2910400.174939202,
            "unit": "iter/sec",
            "range": "stddev: 7.786054523519348e-7",
            "extra": "mean: 343.5953614247323 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9330a17ea51e566539ba761709f8f5b9aec7553d",
          "message": "feat: allow fields to be optional i.e. not required (#100)\n\n* feat: allow fields to be optional i.e. not required\r\n\r\n* changes after @samuelcolvin review\r\n\r\n* use SchemaDict on config, tweak error message\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2022-06-21T20:31:58+01:00",
          "tree_id": "d8f5251459f06cb7c50d56e3846533eb0b127890",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/9330a17ea51e566539ba761709f8f5b9aec7553d"
        },
        "date": 1655840084737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 57792.33686303401,
            "unit": "iter/sec",
            "range": "stddev: 7.205005684675405e-7",
            "extra": "mean: 17.303332141940686 usec\nrounds: 62112"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 28800.84061696099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011322217066404076",
            "extra": "mean: 34.72120877649293 usec\nrounds: 26526"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 470934.5458334834,
            "unit": "iter/sec",
            "range": "stddev: 7.458465463665526e-8",
            "extra": "mean: 2.1234373414467322 usec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1217355.9353446914,
            "unit": "iter/sec",
            "range": "stddev: 4.578658806437503e-8",
            "extra": "mean: 821.4524371765485 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 913307.8746428711,
            "unit": "iter/sec",
            "range": "stddev: 5.4747256801346607e-8",
            "extra": "mean: 1.0949210313015714 usec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 6933152.189383694,
            "unit": "iter/sec",
            "range": "stddev: 6.354076910475016e-9",
            "extra": "mean: 144.2345375788924 nsec\nrounds: 70423"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 12729.468135632218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013558291562338924",
            "extra": "mean: 78.55787762261713 usec\nrounds: 12821"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 23583.213697068182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012032117432347053",
            "extra": "mean: 42.40304196218677 usec\nrounds: 25642"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3000.9046004590455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028760960520574686",
            "extra": "mean: 333.2328524695623 usec\nrounds: 3057"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5639.7587128734385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025849487652581072",
            "extra": "mean: 177.31255021910383 usec\nrounds: 5705"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 23036.215001504814,
            "unit": "iter/sec",
            "range": "stddev: 9.303961326174758e-7",
            "extra": "mean: 43.40990913371299 usec\nrounds: 23364"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2490.607246613616,
            "unit": "iter/sec",
            "range": "stddev: 0.000003835508652844528",
            "extra": "mean: 401.50850815987224 usec\nrounds: 2696"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4469.963177687095,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031681984930000842",
            "extra": "mean: 223.71548942321104 usec\nrounds: 4869"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13499.071522642698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017017414503582953",
            "extra": "mean: 74.07916895044579 usec\nrounds: 14815"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1249.6137746973577,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065500972537092235",
            "extra": "mean: 800.2472605923288 usec\nrounds: 1251"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 6100.917015687797,
            "unit": "iter/sec",
            "range": "stddev: 0.000002058616425524917",
            "extra": "mean: 163.90978559921672 usec\nrounds: 6208"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1436.0084658321286,
            "unit": "iter/sec",
            "range": "stddev: 0.000005177331929745195",
            "extra": "mean: 696.3747246577177 usec\nrounds: 1460"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1364.781372223819,
            "unit": "iter/sec",
            "range": "stddev: 0.002096845204076127",
            "extra": "mean: 732.7180897630275 usec\nrounds: 2061"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 760.3128944374274,
            "unit": "iter/sec",
            "range": "stddev: 0.0033117563958230457",
            "extra": "mean: 1.3152479818718876 msec\nrounds: 1324"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 26667.81832386559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010113196804047811",
            "extra": "mean: 37.49838055200335 usec\nrounds: 26882"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6918294.323652916,
            "unit": "iter/sec",
            "range": "stddev: 5.63807025213925e-9",
            "extra": "mean: 144.5442985247091 nsec\nrounds: 69931"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1106277.061333347,
            "unit": "iter/sec",
            "range": "stddev: 5.459872828995568e-8",
            "extra": "mean: 903.9326900572092 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 755312.3418871505,
            "unit": "iter/sec",
            "range": "stddev: 5.355891066533685e-8",
            "extra": "mean: 1.3239555936575258 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6107371.503540552,
            "unit": "iter/sec",
            "range": "stddev: 5.755629169256774e-9",
            "extra": "mean: 163.7365598965025 nsec\nrounds: 62501"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2375088.4644289115,
            "unit": "iter/sec",
            "range": "stddev: 2.763420363941688e-8",
            "extra": "mean: 421.03694871863706 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 924831.710479471,
            "unit": "iter/sec",
            "range": "stddev: 6.361565595297464e-8",
            "extra": "mean: 1.081277802943739 usec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2285526.455148402,
            "unit": "iter/sec",
            "range": "stddev: 2.6860731115900688e-8",
            "extra": "mean: 437.535954898694 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6201662.11406541,
            "unit": "iter/sec",
            "range": "stddev: 5.951926045181926e-9",
            "extra": "mean: 161.24709498954255 nsec\nrounds: 64103"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3351581.9088673596,
            "unit": "iter/sec",
            "range": "stddev: 2.1032284618812917e-8",
            "extra": "mean: 298.3665705295169 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1376375.3161124694,
            "unit": "iter/sec",
            "range": "stddev: 5.0361318619324933e-8",
            "extra": "mean: 726.5460142252997 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2137701.590650018,
            "unit": "iter/sec",
            "range": "stddev: 3.1083377724959875e-8",
            "extra": "mean: 467.7921391716406 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2623580.761360326,
            "unit": "iter/sec",
            "range": "stddev: 2.461013747721297e-8",
            "extra": "mean: 381.15845897631897 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3245681.0433459054,
            "unit": "iter/sec",
            "range": "stddev: 2.3485461195670933e-8",
            "extra": "mean: 308.10174710434006 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "477ee17cd365dce5c10437e6969375bcec7085c7",
          "message": "cleanup mod and fix a few things (#107)\n\n* cleanup mod and fix a few things\r\n\r\n* tweak order\r\n\r\n* linting\r\n\r\n* improve coverage",
          "timestamp": "2022-06-21T21:40:58+01:00",
          "tree_id": "3d6dc38b642ab614db426ccbb8c0773accff733a",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/477ee17cd365dce5c10437e6969375bcec7085c7"
        },
        "date": 1655844205906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 75055.36815502495,
            "unit": "iter/sec",
            "range": "stddev: 4.492373886895975e-7",
            "extra": "mean: 13.323497367097387 usec\nrounds: 76342"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34676.53151819623,
            "unit": "iter/sec",
            "range": "stddev: 7.269139524370747e-7",
            "extra": "mean: 28.83794763254388 usec\nrounds: 35461"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 575929.3791409028,
            "unit": "iter/sec",
            "range": "stddev: 5.446500414840431e-8",
            "extra": "mean: 1.7363239942570887 usec\nrounds: 59881"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1243359.2581718613,
            "unit": "iter/sec",
            "range": "stddev: 3.5640085031311384e-8",
            "extra": "mean: 804.2727742822863 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 975431.1797917169,
            "unit": "iter/sec",
            "range": "stddev: 3.899335929013728e-8",
            "extra": "mean: 1.025187651079263 usec\nrounds: 101021"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 9089400.6694152,
            "unit": "iter/sec",
            "range": "stddev: 4.222686805114265e-9",
            "extra": "mean: 110.01825492914134 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 13441.352838176132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011492326011110364",
            "extra": "mean: 74.39727325361179 usec\nrounds: 13643"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 26275.44504888082,
            "unit": "iter/sec",
            "range": "stddev: 7.124492129836776e-7",
            "extra": "mean: 38.05834680020364 usec\nrounds: 26955"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3591.11383637563,
            "unit": "iter/sec",
            "range": "stddev: 0.000002179613752487787",
            "extra": "mean: 278.4651352097656 usec\nrounds: 3624"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6843.197635120218,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016776785829818351",
            "extra": "mean: 146.1305157793287 usec\nrounds: 7003"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 28602.530480424735,
            "unit": "iter/sec",
            "range": "stddev: 7.88122226512466e-7",
            "extra": "mean: 34.9619415906012 usec\nrounds: 29413"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2953.564931671573,
            "unit": "iter/sec",
            "range": "stddev: 0.000002211891268603715",
            "extra": "mean: 338.5739007383355 usec\nrounds: 2982"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5394.988001538222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020602097055588327",
            "extra": "mean: 185.35722409667628 usec\nrounds: 5453"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17554.12892471641,
            "unit": "iter/sec",
            "range": "stddev: 9.831374832077038e-7",
            "extra": "mean: 56.96665464225849 usec\nrounds: 18019"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1281.5896545813896,
            "unit": "iter/sec",
            "range": "stddev: 0.00001557284179053779",
            "extra": "mean: 780.2809553161021 usec\nrounds: 1298"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7662.501502090496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043145279923068545",
            "extra": "mean: 130.50568404158597 usec\nrounds: 7789"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1729.866745143146,
            "unit": "iter/sec",
            "range": "stddev: 0.000004262833042257001",
            "extra": "mean: 578.079209168941 usec\nrounds: 1745"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1685.0205302533066,
            "unit": "iter/sec",
            "range": "stddev: 0.0013614491060304711",
            "extra": "mean: 593.4645792414598 usec\nrounds: 2322"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1002.5606110424787,
            "unit": "iter/sec",
            "range": "stddev: 0.0020227164788960434",
            "extra": "mean: 997.4459289400804 usec\nrounds: 1548"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32604.495181785016,
            "unit": "iter/sec",
            "range": "stddev: 7.658087538516023e-7",
            "extra": "mean: 30.670617484630306 usec\nrounds: 34247"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8972789.134387476,
            "unit": "iter/sec",
            "range": "stddev: 4.616083648963412e-9",
            "extra": "mean: 111.44806648454428 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1213211.0404366136,
            "unit": "iter/sec",
            "range": "stddev: 3.827033534138214e-8",
            "extra": "mean: 824.2589019302607 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 836464.9350689799,
            "unit": "iter/sec",
            "range": "stddev: 4.279394814187192e-8",
            "extra": "mean: 1.1955073764300732 usec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8090648.746484799,
            "unit": "iter/sec",
            "range": "stddev: 4.459590937913328e-9",
            "extra": "mean: 123.59948272794016 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2648521.7492666044,
            "unit": "iter/sec",
            "range": "stddev: 2.1638066700911975e-8",
            "extra": "mean: 377.5691101183811 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 973555.8279385362,
            "unit": "iter/sec",
            "range": "stddev: 6.394397902356639e-8",
            "extra": "mean: 1.027162460849686 usec\nrounds: 111124"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2569554.082733985,
            "unit": "iter/sec",
            "range": "stddev: 1.9228349090877133e-8",
            "extra": "mean: 389.1725831810792 nsec\nrounds: 185220"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8199732.745556907,
            "unit": "iter/sec",
            "range": "stddev: 4.369269565563482e-9",
            "extra": "mean: 121.95519427642502 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4113943.4888884868,
            "unit": "iter/sec",
            "range": "stddev: 1.253861378081881e-7",
            "extra": "mean: 243.07577454608094 nsec\nrounds: 42554"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1555037.4750800887,
            "unit": "iter/sec",
            "range": "stddev: 4.299453928110078e-8",
            "extra": "mean: 643.0713188750501 nsec\nrounds: 166695"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2423351.5983732105,
            "unit": "iter/sec",
            "range": "stddev: 2.2054153757990325e-8",
            "extra": "mean: 412.65163530965145 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3190500.2190950005,
            "unit": "iter/sec",
            "range": "stddev: 1.6461675342814325e-8",
            "extra": "mean: 313.43047526316036 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3825777.0953555256,
            "unit": "iter/sec",
            "range": "stddev: 1.7968852752057617e-8",
            "extra": "mean: 261.38480498879784 nsec\nrounds: 196117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d87f66d40f6463aae68d0a64a6241e4d7d86b621",
          "message": "perf: use `Cow` in `EitherString` (#112)",
          "timestamp": "2022-06-22T11:26:59+01:00",
          "tree_id": "38b2fef17fee87f712baf0536626f443d82046b8",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/d87f66d40f6463aae68d0a64a6241e4d7d86b621"
        },
        "date": 1655893868420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 70647.6698867877,
            "unit": "iter/sec",
            "range": "stddev: 4.446563577022288e-7",
            "extra": "mean: 14.154748509080223 usec\nrounds: 71943"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35949.11372574655,
            "unit": "iter/sec",
            "range": "stddev: 6.017360060637486e-7",
            "extra": "mean: 27.81709745694803 usec\nrounds: 36765"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 564892.3419815912,
            "unit": "iter/sec",
            "range": "stddev: 4.5314268030438484e-8",
            "extra": "mean: 1.770248816778834 usec\nrounds: 57472"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1494479.2210686742,
            "unit": "iter/sec",
            "range": "stddev: 3.379159452861027e-8",
            "extra": "mean: 669.1294103672135 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1126839.947491783,
            "unit": "iter/sec",
            "range": "stddev: 6.452934268622712e-8",
            "extra": "mean: 887.4374770128851 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8327665.676771814,
            "unit": "iter/sec",
            "range": "stddev: 3.837492002617506e-9",
            "extra": "mean: 120.08166979957161 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14093.960083991335,
            "unit": "iter/sec",
            "range": "stddev: 9.883998059126771e-7",
            "extra": "mean: 70.95237917807451 usec\nrounds: 14389"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 27289.65803074927,
            "unit": "iter/sec",
            "range": "stddev: 8.613250559467432e-7",
            "extra": "mean: 36.643918325148164 usec\nrounds: 28491"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3441.8674092911515,
            "unit": "iter/sec",
            "range": "stddev: 0.000002746561490661352",
            "extra": "mean: 290.53995435749476 usec\nrounds: 3637"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6818.567163540483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013203580926250465",
            "extra": "mean: 146.65837792829754 usec\nrounds: 5718"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27850.342482618125,
            "unit": "iter/sec",
            "range": "stddev: 6.762813735328716e-7",
            "extra": "mean: 35.906201175950244 usec\nrounds: 28572"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2945.016247129555,
            "unit": "iter/sec",
            "range": "stddev: 0.000002529556118359241",
            "extra": "mean: 339.5567005698793 usec\nrounds: 2979"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5364.901235277872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019214630135729205",
            "extra": "mean: 186.39672123399407 usec\nrounds: 4667"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 15990.608098468969,
            "unit": "iter/sec",
            "range": "stddev: 0.00000106992532483688",
            "extra": "mean: 62.53670866311492 usec\nrounds: 16208"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1477.7863793097692,
            "unit": "iter/sec",
            "range": "stddev: 0.000007837681881988566",
            "extra": "mean: 676.6877906041269 usec\nrounds: 1490"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7416.615521662654,
            "unit": "iter/sec",
            "range": "stddev: 0.000001264231756897044",
            "extra": "mean: 134.83239047233505 usec\nrounds: 7514"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1825.4959726769648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037718072716107784",
            "extra": "mean: 547.796333143134 usec\nrounds: 1759"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1534.1114738924186,
            "unit": "iter/sec",
            "range": "stddev: 0.0018530585720288326",
            "extra": "mean: 651.8431137619704 usec\nrounds: 2347"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 932.6401837065413,
            "unit": "iter/sec",
            "range": "stddev: 0.0025528623508204503",
            "extra": "mean: 1.0722248702878683 msec\nrounds: 1565"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32422.774630894528,
            "unit": "iter/sec",
            "range": "stddev: 6.878208158017142e-7",
            "extra": "mean: 30.842517686538 usec\nrounds: 32680"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8340403.491611144,
            "unit": "iter/sec",
            "range": "stddev: 4.045455469737887e-9",
            "extra": "mean: 119.8982760252589 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1398128.1384620655,
            "unit": "iter/sec",
            "range": "stddev: 3.408053510405e-8",
            "extra": "mean: 715.2420243113745 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 919730.4657444247,
            "unit": "iter/sec",
            "range": "stddev: 4.405681554958947e-8",
            "extra": "mean: 1.0872750629066934 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7485774.305757665,
            "unit": "iter/sec",
            "range": "stddev: 4.028821427316544e-9",
            "extra": "mean: 133.5867151686376 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2815319.4863350308,
            "unit": "iter/sec",
            "range": "stddev: 1.7536059621560686e-8",
            "extra": "mean: 355.1994737562025 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1069686.1992381162,
            "unit": "iter/sec",
            "range": "stddev: 4.448063842934938e-8",
            "extra": "mean: 934.8536053957899 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2643488.7091228915,
            "unit": "iter/sec",
            "range": "stddev: 1.9128662597472815e-8",
            "extra": "mean: 378.2879785144753 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7786649.007216711,
            "unit": "iter/sec",
            "range": "stddev: 3.756191525066062e-9",
            "extra": "mean: 128.42494879025395 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4171469.0669467305,
            "unit": "iter/sec",
            "range": "stddev: 6.608087662285428e-9",
            "extra": "mean: 239.72370020039662 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1600490.197210358,
            "unit": "iter/sec",
            "range": "stddev: 4.116285015164304e-8",
            "extra": "mean: 624.8085753628544 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2546432.21799824,
            "unit": "iter/sec",
            "range": "stddev: 1.8955738208510918e-8",
            "extra": "mean: 392.7063100017615 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3088190.9164815424,
            "unit": "iter/sec",
            "range": "stddev: 1.5376019594996713e-8",
            "extra": "mean: 323.8141769866844 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3917062.399551088,
            "unit": "iter/sec",
            "range": "stddev: 1.456802665945915e-8",
            "extra": "mean: 255.29335455953307 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f486dd51d5108c11fe11a00f5ccd43c4c3e84e17",
          "message": "Error benchmarks and validator names (#114)\n\n* improve error benchmarks, tweak validator names\r\n\r\n* improve validator names",
          "timestamp": "2022-06-22T15:51:44+01:00",
          "tree_id": "bae8c4a4622f3813b666a036990b9183942fde26",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f486dd51d5108c11fe11a00f5ccd43c4c3e84e17"
        },
        "date": 1655909653653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 73867.87717069923,
            "unit": "iter/sec",
            "range": "stddev: 4.362060035171243e-7",
            "extra": "mean: 13.537684285811107 usec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35493.92832892068,
            "unit": "iter/sec",
            "range": "stddev: 8.514540696945652e-7",
            "extra": "mean: 28.173832739308082 usec\nrounds: 37038"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 527504.0339283062,
            "unit": "iter/sec",
            "range": "stddev: 5.506685574022855e-8",
            "extra": "mean: 1.8957201000970143 usec\nrounds: 54348"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1258840.7719638883,
            "unit": "iter/sec",
            "range": "stddev: 4.351239071527793e-8",
            "extra": "mean: 794.3816424375143 nsec\nrounds: 131597"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 941783.6867662864,
            "unit": "iter/sec",
            "range": "stddev: 1.552001358948325e-7",
            "extra": "mean: 1.0618149518318298 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8862813.649941953,
            "unit": "iter/sec",
            "range": "stddev: 3.6685977634306384e-9",
            "extra": "mean: 112.83098567771756 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14077.937571220738,
            "unit": "iter/sec",
            "range": "stddev: 9.098717331257687e-7",
            "extra": "mean: 71.03313215738939 usec\nrounds: 14286"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 26371.288068233243,
            "unit": "iter/sec",
            "range": "stddev: 0.000007946256201659402",
            "extra": "mean: 37.920028684704114 usec\nrounds: 26739"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3553.305229862895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019298864431923684",
            "extra": "mean: 281.42811700940905 usec\nrounds: 3598"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6887.283265801117,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013997270543382222",
            "extra": "mean: 145.19513157902352 usec\nrounds: 7068"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27390.44918253799,
            "unit": "iter/sec",
            "range": "stddev: 8.060722234152674e-7",
            "extra": "mean: 36.50907633298405 usec\nrounds: 29070"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2888.7017829889137,
            "unit": "iter/sec",
            "range": "stddev: 0.000002215701530230624",
            "extra": "mean: 346.1762670999251 usec\nrounds: 2924"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5402.03380919045,
            "unit": "iter/sec",
            "range": "stddev: 0.000001740588711882089",
            "extra": "mean: 185.11546490114625 usec\nrounds: 5513"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17459.318673466154,
            "unit": "iter/sec",
            "range": "stddev: 9.804178261448833e-7",
            "extra": "mean: 57.27600364610749 usec\nrounds: 17826"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1424.910659862729,
            "unit": "iter/sec",
            "range": "stddev: 0.000015997780820186397",
            "extra": "mean: 701.7983850975868 usec\nrounds: 1436"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7621.670802325937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016164575376895157",
            "extra": "mean: 131.204827122004 usec\nrounds: 7728"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1799.0739493201784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030247983255786",
            "extra": "mean: 555.8415207878882 usec\nrounds: 1828"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1671.207198103961,
            "unit": "iter/sec",
            "range": "stddev: 0.0012898948404365031",
            "extra": "mean: 598.3698497316985 usec\nrounds: 2236"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1043.836491646149,
            "unit": "iter/sec",
            "range": "stddev: 0.0016141081413408589",
            "extra": "mean: 958.004446101498 usec\nrounds: 1475"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32647.265001653606,
            "unit": "iter/sec",
            "range": "stddev: 6.779391021838681e-7",
            "extra": "mean: 30.630437188210077 usec\nrounds: 33672"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8776287.60116699,
            "unit": "iter/sec",
            "range": "stddev: 3.416722919295318e-9",
            "extra": "mean: 113.94339445619022 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1094260.6186255014,
            "unit": "iter/sec",
            "range": "stddev: 3.768366158795524e-8",
            "extra": "mean: 913.8590779738852 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 762061.1190013973,
            "unit": "iter/sec",
            "range": "stddev: 4.069949348999613e-8",
            "extra": "mean: 1.3122307057343858 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8187597.263700537,
            "unit": "iter/sec",
            "range": "stddev: 4.004104730578912e-9",
            "extra": "mean: 122.13595366158636 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2470805.8584042783,
            "unit": "iter/sec",
            "range": "stddev: 1.8327504967892983e-8",
            "extra": "mean: 404.72625422879105 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 959823.7767070684,
            "unit": "iter/sec",
            "range": "stddev: 5.098419874213647e-8",
            "extra": "mean: 1.0418579162840211 usec\nrounds: 105264"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2376558.1238048077,
            "unit": "iter/sec",
            "range": "stddev: 2.013325484253818e-8",
            "extra": "mean: 420.776580207864 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8141468.550713583,
            "unit": "iter/sec",
            "range": "stddev: 3.5802560436394615e-9",
            "extra": "mean: 122.82796325625506 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3437343.3950379277,
            "unit": "iter/sec",
            "range": "stddev: 2.177479532551218e-8",
            "extra": "mean: 290.9223446930403 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1515949.3262474504,
            "unit": "iter/sec",
            "range": "stddev: 1.314296248042588e-7",
            "extra": "mean: 659.652656382352 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2232853.861562982,
            "unit": "iter/sec",
            "range": "stddev: 2.202460852607463e-8",
            "extra": "mean: 447.8573440090317 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2760741.6460918,
            "unit": "iter/sec",
            "range": "stddev: 1.5779175483593362e-8",
            "extra": "mean: 362.22150718707917 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3372950.447583035,
            "unit": "iter/sec",
            "range": "stddev: 1.5416140383700977e-8",
            "extra": "mean: 296.47633890253064 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "em.jolibois@gmail.com",
            "name": "Eric Jolibois",
            "username": "PrettyWood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35478b5a3018d1cd6bbe7cc74a850910acf9bf55",
          "message": "perf: support strict union (#101)\n\n* support strict union\r\n\r\n* some stricts have been forgotten\r\n\r\n* add test\r\n\r\n* add benchmark\r\n\r\n* split implem\r\n\r\n* Revert \"split implem\"\r\n\r\nThis reverts commit 40009427f9ba28094b9be638f9df7c15b26b6925.",
          "timestamp": "2022-06-22T18:40:10+01:00",
          "tree_id": "5d94a0ba3deda0fe6a9201b189b89359d011f4af",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/35478b5a3018d1cd6bbe7cc74a850910acf9bf55"
        },
        "date": 1655919788157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 71820.89838761644,
            "unit": "iter/sec",
            "range": "stddev: 5.547253692054629e-7",
            "extra": "mean: 13.923523966562119 usec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36407.85711377976,
            "unit": "iter/sec",
            "range": "stddev: 7.571601445539162e-7",
            "extra": "mean: 27.466598676073048 usec\nrounds: 37314"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 566399.509081635,
            "unit": "iter/sec",
            "range": "stddev: 4.8732831299013476e-8",
            "extra": "mean: 1.7655382534163453 usec\nrounds: 57472"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1375765.8395616561,
            "unit": "iter/sec",
            "range": "stddev: 2.5158444809989893e-7",
            "extra": "mean: 726.8678805962859 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1091878.3422616047,
            "unit": "iter/sec",
            "range": "stddev: 4.1989634972503345e-8",
            "extra": "mean: 915.8529492654008 nsec\nrounds: 111112"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8345102.304647821,
            "unit": "iter/sec",
            "range": "stddev: 4.636886135945632e-9",
            "extra": "mean: 119.83076581846926 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14377.406187335991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014243534686329547",
            "extra": "mean: 69.55357503085828 usec\nrounds: 14514"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 28294.39736989222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010403602391091621",
            "extra": "mean: 35.342685936265596 usec\nrounds: 28819"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3535.6632924235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021127315214142906",
            "extra": "mean: 282.83236193414666 usec\nrounds: 3578"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6672.429378166953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017989740783201603",
            "extra": "mean: 149.8704509742926 usec\nrounds: 6721"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27531.598671555148,
            "unit": "iter/sec",
            "range": "stddev: 9.253496396415124e-7",
            "extra": "mean: 36.32190095205663 usec\nrounds: 28986"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2941.6236731158997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034378028186155115",
            "extra": "mean: 339.9483112470179 usec\nrounds: 2943"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5211.5238725181935,
            "unit": "iter/sec",
            "range": "stddev: 0.000008898675990728185",
            "extra": "mean: 191.88245596902595 usec\nrounds: 5303"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16121.506257380974,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014186908812312418",
            "extra": "mean: 62.02894345199078 usec\nrounds: 16287"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1439.7194839973608,
            "unit": "iter/sec",
            "range": "stddev: 0.000017846310937570242",
            "extra": "mean: 694.579750510505 usec\nrounds: 1471"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7402.952570160564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017977226283957845",
            "extra": "mean: 135.08123826576275 usec\nrounds: 7542"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1812.5350148013158,
            "unit": "iter/sec",
            "range": "stddev: 0.000004620117593602797",
            "extra": "mean: 551.71347964807 usec\nrounds: 1818"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1522.3676860627475,
            "unit": "iter/sec",
            "range": "stddev: 0.0020445971095186585",
            "extra": "mean: 656.8715358024112 usec\nrounds: 2430"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 912.0403739365479,
            "unit": "iter/sec",
            "range": "stddev: 0.0026529156730630697",
            "extra": "mean: 1.0964426889171592 msec\nrounds: 1588"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 32043.346411674447,
            "unit": "iter/sec",
            "range": "stddev: 7.043391266673429e-7",
            "extra": "mean: 31.20772678210872 usec\nrounds: 32787"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8256552.418205632,
            "unit": "iter/sec",
            "range": "stddev: 4.183848775192066e-9",
            "extra": "mean: 121.11592700543794 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1246229.9244206348,
            "unit": "iter/sec",
            "range": "stddev: 4.634876983653416e-8",
            "extra": "mean: 802.4201476825408 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 861013.8392045754,
            "unit": "iter/sec",
            "range": "stddev: 5.251914929502088e-8",
            "extra": "mean: 1.1614215178281098 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7394386.938959598,
            "unit": "iter/sec",
            "range": "stddev: 4.1336660959141135e-9",
            "extra": "mean: 135.23771588580502 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2655986.9991135364,
            "unit": "iter/sec",
            "range": "stddev: 2.523610394069855e-8",
            "extra": "mean: 376.50786706914744 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1103690.5052680364,
            "unit": "iter/sec",
            "range": "stddev: 5.2082717902738284e-8",
            "extra": "mean: 906.0511032999358 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2541553.1110606617,
            "unit": "iter/sec",
            "range": "stddev: 2.0685542656803516e-8",
            "extra": "mean: 393.4602018150739 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7289916.105593786,
            "unit": "iter/sec",
            "range": "stddev: 4.4922391999912236e-9",
            "extra": "mean: 137.17578988771422 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3717765.801606182,
            "unit": "iter/sec",
            "range": "stddev: 1.2763375756144425e-8",
            "extra": "mean: 268.9787505086899 nsec\nrounds: 42017"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1598679.7281725756,
            "unit": "iter/sec",
            "range": "stddev: 4.742516583127222e-8",
            "extra": "mean: 625.5161571000646 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2529455.32495736,
            "unit": "iter/sec",
            "range": "stddev: 2.1980165475355315e-8",
            "extra": "mean: 395.34202882879157 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3075512.18615185,
            "unit": "iter/sec",
            "range": "stddev: 1.910986496331483e-8",
            "extra": "mean: 325.14909370250456 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3540366.154716543,
            "unit": "iter/sec",
            "range": "stddev: 1.3470004457101686e-8",
            "extra": "mean: 282.45666021519105 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4315962.16911122,
            "unit": "iter/sec",
            "range": "stddev: 5.944855450543167e-9",
            "extra": "mean: 231.6980457235729 nsec\nrounds: 43479"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2990584.394588833,
            "unit": "iter/sec",
            "range": "stddev: 1.9215478283573324e-8",
            "extra": "mean: 334.38280551767775 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3204671.6594717903,
            "unit": "iter/sec",
            "range": "stddev: 1.728776043442563e-8",
            "extra": "mean: 312.0444483108576 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 593600.139920894,
            "unit": "iter/sec",
            "range": "stddev: 6.392792943734313e-8",
            "extra": "mean: 1.6846357215033254 usec\nrounds: 60241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59ed7e071d6bc0b24f88b8e946081178885a1ee7",
          "message": "changes to `LocItem` and `Location` (#113)\n\n* changes to LocItem and Location\r\n\r\n* using Cow for error location\r\n\r\n* fix display errors\r\n\r\n* revert Cow, it was slower\r\n\r\n* reversing location in errors\r\n\r\n* intern the keys used to lookup in models\r\n\r\n* linting\r\n\r\n* LookupKey structure to be slightly cleaner",
          "timestamp": "2022-06-22T18:59:28+01:00",
          "tree_id": "63e281aec4cbd28a30574e2e1d3997dbe6f9ff40",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/59ed7e071d6bc0b24f88b8e946081178885a1ee7"
        },
        "date": 1655920956157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 63088.02052861944,
            "unit": "iter/sec",
            "range": "stddev: 0.000001588774015805805",
            "extra": "mean: 15.850869810479423 usec\nrounds: 68961"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 30199.518216449793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017673966897784038",
            "extra": "mean: 33.113111038152134 usec\nrounds: 38167"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 465866.52067213535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017624428071490179",
            "extra": "mean: 2.1465375931226616 usec\nrounds: 51544"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1609536.6184423114,
            "unit": "iter/sec",
            "range": "stddev: 7.158944012722693e-8",
            "extra": "mean: 621.2968307416251 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1174513.9440930414,
            "unit": "iter/sec",
            "range": "stddev: 3.2544946138405273e-7",
            "extra": "mean: 851.4160304602102 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 7226635.094382734,
            "unit": "iter/sec",
            "range": "stddev: 1.3748584602830137e-8",
            "extra": "mean: 138.37698831333987 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 16501.059112336243,
            "unit": "iter/sec",
            "range": "stddev: 0.000003442726858137864",
            "extra": "mean: 60.602170635968264 usec\nrounds: 20365"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 30124.290620275853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022067228028556734",
            "extra": "mean: 33.19580243748302 usec\nrounds: 32572"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2930.0269298555095,
            "unit": "iter/sec",
            "range": "stddev: 0.000010435766007048122",
            "extra": "mean: 341.29379147013975 usec\nrounds: 3189"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5610.893444951529,
            "unit": "iter/sec",
            "range": "stddev: 0.00000623631167961105",
            "extra": "mean: 178.2247354741271 usec\nrounds: 5043"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 23554.581034816296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021072862884620547",
            "extra": "mean: 42.45458658432042 usec\nrounds: 29324"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2472.077289977014,
            "unit": "iter/sec",
            "range": "stddev: 0.00001334485454936032",
            "extra": "mean: 404.51809660421185 usec\nrounds: 2650"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4455.602228586125,
            "unit": "iter/sec",
            "range": "stddev: 0.00000945418667305439",
            "extra": "mean: 224.43655171555233 usec\nrounds: 4109"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13472.513136405794,
            "unit": "iter/sec",
            "range": "stddev: 0.00000350352621351605",
            "extra": "mean: 74.22520133216813 usec\nrounds: 16366"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1246.669990864668,
            "unit": "iter/sec",
            "range": "stddev: 0.00003604916695875535",
            "extra": "mean: 802.1368985599933 usec\nrounds: 1528"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 6197.408051310501,
            "unit": "iter/sec",
            "range": "stddev: 0.000007000324733790827",
            "extra": "mean: 161.35777920715427 usec\nrounds: 7541"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1527.5197169611101,
            "unit": "iter/sec",
            "range": "stddev: 0.000024295516481697007",
            "extra": "mean: 654.6560341554397 usec\nrounds: 1581"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1653.744431029269,
            "unit": "iter/sec",
            "range": "stddev: 0.0016856295814392482",
            "extra": "mean: 604.6883552482249 usec\nrounds: 2601"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 969.6597005192725,
            "unit": "iter/sec",
            "range": "stddev: 0.0022695520949603267",
            "extra": "mean: 1.0312896364203645 msec\nrounds: 1620"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 26330.32211730667,
            "unit": "iter/sec",
            "range": "stddev: 0.000002050660607237436",
            "extra": "mean: 37.97902644505476 usec\nrounds: 32785"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 7036144.416465172,
            "unit": "iter/sec",
            "range": "stddev: 9.546445416135933e-9",
            "extra": "mean: 142.12329094047675 nsec\nrounds: 70922"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1311435.251740646,
            "unit": "iter/sec",
            "range": "stddev: 6.940485103565389e-8",
            "extra": "mean: 762.523348882559 nsec\nrounds: 149232"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 745772.0375703103,
            "unit": "iter/sec",
            "range": "stddev: 1.2078707535923069e-7",
            "extra": "mean: 1.3408923231527767 usec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 5992283.615956519,
            "unit": "iter/sec",
            "range": "stddev: 1.4124204206374874e-8",
            "extra": "mean: 166.88128668291216 nsec\nrounds: 68494"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2384721.4635446006,
            "unit": "iter/sec",
            "range": "stddev: 4.3004933415875855e-8",
            "extra": "mean: 419.3361846603158 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 940372.1234460907,
            "unit": "iter/sec",
            "range": "stddev: 1.1986636608678954e-7",
            "extra": "mean: 1.0634088092014573 usec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2320250.2824346353,
            "unit": "iter/sec",
            "range": "stddev: 6.266560769811968e-8",
            "extra": "mean: 430.987987619791 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6462011.62873259,
            "unit": "iter/sec",
            "range": "stddev: 1.3626117439449084e-8",
            "extra": "mean: 154.75057264735906 nsec\nrounds: 68489"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3446395.7874003607,
            "unit": "iter/sec",
            "range": "stddev: 4.412196137145415e-8",
            "extra": "mean: 290.1582005339106 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1359913.8311080602,
            "unit": "iter/sec",
            "range": "stddev: 9.365798059634597e-8",
            "extra": "mean: 735.3407084516216 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2119178.1693423344,
            "unit": "iter/sec",
            "range": "stddev: 5.936768107654267e-8",
            "extra": "mean: 471.88104071048565 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2598695.8816493587,
            "unit": "iter/sec",
            "range": "stddev: 1.8449158210123717e-8",
            "extra": "mean: 384.8083983437478 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3262507.332556073,
            "unit": "iter/sec",
            "range": "stddev: 2.3427248006120533e-8",
            "extra": "mean: 306.51272106607905 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3538601.43408245,
            "unit": "iter/sec",
            "range": "stddev: 3.8993203619277976e-8",
            "extra": "mean: 282.59752295589453 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2554519.7327177376,
            "unit": "iter/sec",
            "range": "stddev: 4.46962897173772e-8",
            "extra": "mean: 391.46301639142155 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2674642.1655833027,
            "unit": "iter/sec",
            "range": "stddev: 4.9524170416898316e-8",
            "extra": "mean: 373.88178982142705 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 506320.64690435067,
            "unit": "iter/sec",
            "range": "stddev: 1.4365564270957803e-7",
            "extra": "mean: 1.9750330272210217 usec\nrounds: 55863"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee7d0c41676d4b1155aa6c39989bbe51c003da68",
          "message": "check `items()` exists before calling it a mapping (#117)\n\n* check items() exists before calling it a mapping\r\n\r\n* linting",
          "timestamp": "2022-06-23T12:37:46+01:00",
          "tree_id": "af77b28539e727447f5ec75f05ec0f786669dc5c",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/ee7d0c41676d4b1155aa6c39989bbe51c003da68"
        },
        "date": 1655984534389,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 76944.1751092707,
            "unit": "iter/sec",
            "range": "stddev: 9.292444529370945e-7",
            "extra": "mean: 12.99643538422331 usec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35510.22926891352,
            "unit": "iter/sec",
            "range": "stddev: 6.825351672057334e-7",
            "extra": "mean: 28.160899565788586 usec\nrounds: 36631"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 580284.0138892607,
            "unit": "iter/sec",
            "range": "stddev: 5.282351724969233e-8",
            "extra": "mean: 1.723294069911833 usec\nrounds: 59881"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1844732.2847512509,
            "unit": "iter/sec",
            "range": "stddev: 3.2531337301547e-8",
            "extra": "mean: 542.0840781429179 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1239166.0019875614,
            "unit": "iter/sec",
            "range": "stddev: 3.9478886000670144e-8",
            "extra": "mean: 806.99438041118 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8976193.052396376,
            "unit": "iter/sec",
            "range": "stddev: 4.426691091629329e-9",
            "extra": "mean: 111.40580356990151 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 18035.988450581142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011677842498083746",
            "extra": "mean: 55.44470172732777 usec\nrounds: 18349"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 34324.02369281348,
            "unit": "iter/sec",
            "range": "stddev: 7.14576332053751e-7",
            "extra": "mean: 29.134113440475595 usec\nrounds: 34723"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3503.6574904449494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026790668892594622",
            "extra": "mean: 285.4160267455265 usec\nrounds: 3552"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6915.009634916274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016319463927540236",
            "extra": "mean: 144.612958303146 usec\nrounds: 6859"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 26498.265979262054,
            "unit": "iter/sec",
            "range": "stddev: 9.465577482749808e-7",
            "extra": "mean: 37.73831845384205 usec\nrounds: 28249"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2938.6038092603417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026731557302223883",
            "extra": "mean: 340.297660014163 usec\nrounds: 2956"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5410.663028194509,
            "unit": "iter/sec",
            "range": "stddev: 0.000001821954862564499",
            "extra": "mean: 184.82023271253158 usec\nrounds: 5423"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17010.197147799623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010402493561231009",
            "extra": "mean: 58.788266315264686 usec\nrounds: 17637"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1407.2400631364242,
            "unit": "iter/sec",
            "range": "stddev: 0.000027359288753299747",
            "extra": "mean: 710.6108091971338 usec\nrounds: 1457"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7523.805322973347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015201780819286866",
            "extra": "mean: 132.91146661471672 usec\nrounds: 7728"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1764.8397302133947,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041088365820102545",
            "extra": "mean: 566.6236898911413 usec\nrounds: 1751"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1946.0732974630412,
            "unit": "iter/sec",
            "range": "stddev: 0.0014163897835703773",
            "extra": "mean: 513.8552598731146 usec\nrounds: 2836"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1097.982226630614,
            "unit": "iter/sec",
            "range": "stddev: 0.002023203039460278",
            "extra": "mean: 910.7615549194338 usec\nrounds: 1748"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 30972.628214659024,
            "unit": "iter/sec",
            "range": "stddev: 9.071783742507756e-7",
            "extra": "mean: 32.28657229439478 usec\nrounds: 33004"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8960659.87095233,
            "unit": "iter/sec",
            "range": "stddev: 4.248251952055779e-9",
            "extra": "mean: 111.5989240080999 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1389562.2398560974,
            "unit": "iter/sec",
            "range": "stddev: 3.595589190866179e-8",
            "extra": "mean: 719.6511040075991 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 779463.9476783304,
            "unit": "iter/sec",
            "range": "stddev: 4.678827496451686e-8",
            "extra": "mean: 1.282932973331619 usec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8332602.422279477,
            "unit": "iter/sec",
            "range": "stddev: 4.5969032395849006e-9",
            "extra": "mean: 120.0105260423336 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2610901.2147807977,
            "unit": "iter/sec",
            "range": "stddev: 1.8974197583746138e-8",
            "extra": "mean: 383.0095119412737 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 996842.2744846755,
            "unit": "iter/sec",
            "range": "stddev: 6.276651231281141e-8",
            "extra": "mean: 1.0031677283318985 usec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2527216.7301564445,
            "unit": "iter/sec",
            "range": "stddev: 1.968528461727592e-8",
            "extra": "mean: 395.69222064249317 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8025084.734046701,
            "unit": "iter/sec",
            "range": "stddev: 4.678214593868091e-9",
            "extra": "mean: 124.60927618076853 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4002753.3247035067,
            "unit": "iter/sec",
            "range": "stddev: 7.355927237809147e-9",
            "extra": "mean: 249.82803557443634 nsec\nrounds: 40984"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1501449.4489598395,
            "unit": "iter/sec",
            "range": "stddev: 4.0341965094656544e-8",
            "extra": "mean: 666.0230890172857 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2347268.608578083,
            "unit": "iter/sec",
            "range": "stddev: 2.118312525764122e-8",
            "extra": "mean: 426.02708371156285 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2988243.7599796355,
            "unit": "iter/sec",
            "range": "stddev: 2.1214532040601983e-8",
            "extra": "mean: 334.64472122131156 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3742634.5842876,
            "unit": "iter/sec",
            "range": "stddev: 1.3614365433227606e-8",
            "extra": "mean: 267.19146031435076 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4266748.252446369,
            "unit": "iter/sec",
            "range": "stddev: 5.781145622220204e-9",
            "extra": "mean: 234.3705184449112 nsec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2933372.4064545967,
            "unit": "iter/sec",
            "range": "stddev: 1.8369774091831463e-8",
            "extra": "mean: 340.90454993017545 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2946911.217154971,
            "unit": "iter/sec",
            "range": "stddev: 1.8012363906920224e-8",
            "extra": "mean: 339.3383533846084 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 515413.4529527087,
            "unit": "iter/sec",
            "range": "stddev: 6.219057996435609e-8",
            "extra": "mean: 1.9401899470633295 usec\nrounds: 55556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1d9ea2122cbf2fc10b08b0c11a32007034aef49",
          "message": "Isinstance methods and error cleanup (#115)\n\n* working on isintance checks\r\n\r\n* isinstance tests and remove message from errors\r\n\r\n* improve benchmarks\r\n\r\n* cleanup error methods\r\n\r\n* more tests for error cases\r\n\r\n* linting\r\n\r\n* fix error message\r\n\r\n* tweak error message\r\n\r\n* better exception strings\r\n\r\n* better exception strings",
          "timestamp": "2022-06-23T13:26:31+01:00",
          "tree_id": "058413739778579be8199bbe9834a9787dad6f6e",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/f1d9ea2122cbf2fc10b08b0c11a32007034aef49"
        },
        "date": 1655987384519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 62855.86929376053,
            "unit": "iter/sec",
            "range": "stddev: 0.0000178624730949283",
            "extra": "mean: 15.90941325346154 usec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 29015.519566421022,
            "unit": "iter/sec",
            "range": "stddev: 0.000027812465149396066",
            "extra": "mean: 34.46431478543216 usec\nrounds: 33445"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 449497.3231769322,
            "unit": "iter/sec",
            "range": "stddev: 0.000005732535953075063",
            "extra": "mean: 2.2247073529434642 usec\nrounds: 55556"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1582306.385564474,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013792165905952839",
            "extra": "mean: 631.9888544493194 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1161781.091916853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013399348310572811",
            "extra": "mean: 860.7473533165697 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 6843497.094620813,
            "unit": "iter/sec",
            "range": "stddev: 1.381727717334644e-7",
            "extra": "mean: 146.12412136271936 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 14238.860511938543,
            "unit": "iter/sec",
            "range": "stddev: 0.00004876084669429908",
            "extra": "mean: 70.23033894893149 usec\nrounds: 17392"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 27716.88767913889,
            "unit": "iter/sec",
            "range": "stddev: 0.000034355666962674914",
            "extra": "mean: 36.0790869298305 usec\nrounds: 34246"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 2689.875981591231,
            "unit": "iter/sec",
            "range": "stddev: 0.00017606800550987964",
            "extra": "mean: 371.7643515328306 usec\nrounds: 3425"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 5515.384892622131,
            "unit": "iter/sec",
            "range": "stddev: 0.00013001866187444121",
            "extra": "mean: 181.31100901728345 usec\nrounds: 6654"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 20903.644584390287,
            "unit": "iter/sec",
            "range": "stddev: 0.00004892221055814948",
            "extra": "mean: 47.838547769164904 usec\nrounds: 26042"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 2366.305807814418,
            "unit": "iter/sec",
            "range": "stddev: 0.00007134618946888801",
            "extra": "mean: 422.59964739030335 usec\nrounds: 2836"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 4117.187602953016,
            "unit": "iter/sec",
            "range": "stddev: 0.00012140512230452514",
            "extra": "mean: 242.88424440090097 usec\nrounds: 5090"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 13492.642539794235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002974294655662545",
            "extra": "mean: 74.11446623970595 usec\nrounds: 15773"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1169.7101912184578,
            "unit": "iter/sec",
            "range": "stddev: 0.00023310474148339512",
            "extra": "mean: 854.9126163963101 usec\nrounds: 1293"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 5515.301661866948,
            "unit": "iter/sec",
            "range": "stddev: 0.00006983006183489452",
            "extra": "mean: 181.31374515995134 usec\nrounds: 6663"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1378.597989828849,
            "unit": "iter/sec",
            "range": "stddev: 0.00030487218232134577",
            "extra": "mean: 725.3746250740933 usec\nrounds: 1691"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1414.0924558873032,
            "unit": "iter/sec",
            "range": "stddev: 0.0021820840711616043",
            "extra": "mean: 707.1673396153776 usec\nrounds: 2653"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 820.7297249329073,
            "unit": "iter/sec",
            "range": "stddev: 0.0030610993894920244",
            "extra": "mean: 1.2184279058270342 msec\nrounds: 1699"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 26795.461781029502,
            "unit": "iter/sec",
            "range": "stddev: 0.00002103649635897596",
            "extra": "mean: 37.31975243315173 usec\nrounds: 32468"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 6937093.215267741,
            "unit": "iter/sec",
            "range": "stddev: 1.162148570280335e-7",
            "extra": "mean: 144.15259662350763 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1276262.116642569,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016893820487471178",
            "extra": "mean: 783.5381047202615 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 752038.9072393642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011381763031966047",
            "extra": "mean: 1.3297184366042596 usec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6416805.45075469,
            "unit": "iter/sec",
            "range": "stddev: 2.448373074019908e-7",
            "extra": "mean: 155.8407852122858 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2235725.6953741466,
            "unit": "iter/sec",
            "range": "stddev: 5.730880559676026e-7",
            "extra": "mean: 447.2820624053792 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 926048.1578124225,
            "unit": "iter/sec",
            "range": "stddev: 0.000003158990803147576",
            "extra": "mean: 1.0798574475459704 usec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2163421.901267779,
            "unit": "iter/sec",
            "range": "stddev: 9.553180878386692e-7",
            "extra": "mean: 462.2306908393304 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6274184.063102461,
            "unit": "iter/sec",
            "range": "stddev: 2.3276311009558352e-7",
            "extra": "mean: 159.38327437367838 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3251986.378407749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012843125673510432",
            "extra": "mean: 307.50436306866226 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1323937.7861417409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019185618377025195",
            "extra": "mean: 755.3225011531124 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 1997385.2062479989,
            "unit": "iter/sec",
            "range": "stddev: 9.757435338154434e-7",
            "extra": "mean: 500.65455420024114 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2545009.7558673145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016842077423624075",
            "extra": "mean: 392.9258022271155 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3180441.8785751713,
            "unit": "iter/sec",
            "range": "stddev: 7.594707156418257e-7",
            "extra": "mean: 314.42171816982636 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3211889.6299691596,
            "unit": "iter/sec",
            "range": "stddev: 3.7851618205820487e-7",
            "extra": "mean: 311.34320141928663 nsec\nrounds: 40001"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2389028.905792171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013153271940514165",
            "extra": "mean: 418.5801174592372 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2426437.229603935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023344000220906426",
            "extra": "mean: 412.12687795874893 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 567004.1722706411,
            "unit": "iter/sec",
            "range": "stddev: 0.000003028914608357801",
            "extra": "mean: 1.7636554524729307 usec\nrounds: 70922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab8e6fa5d7d4f9d9f623f46389a73c843d9a284b",
          "message": "Improve string usage, lots of 🐄 (#119)\n\n* avoid creating unnecessary strings\r\n\r\n* more Cow usage\r\n\r\n* tweaks and cleanup\r\n\r\n* tweaks to models",
          "timestamp": "2022-06-23T17:49:19+01:00",
          "tree_id": "ced278430c7ec51b7ed23e3d09dc9ae52bd43027",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/ab8e6fa5d7d4f9d9f623f46389a73c843d9a284b"
        },
        "date": 1656003117678,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 68435.24743603797,
            "unit": "iter/sec",
            "range": "stddev: 4.291426146025701e-7",
            "extra": "mean: 14.612353099689392 usec\nrounds: 69445"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36894.867098611474,
            "unit": "iter/sec",
            "range": "stddev: 7.749190991416086e-7",
            "extra": "mean: 27.104041256666697 usec\nrounds: 37594"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 579254.2086444683,
            "unit": "iter/sec",
            "range": "stddev: 5.15900990152212e-8",
            "extra": "mean: 1.7263577632698137 usec\nrounds: 59524"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 2001924.2962189785,
            "unit": "iter/sec",
            "range": "stddev: 3.373019790255264e-8",
            "extra": "mean: 499.51938836524556 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1385341.5118678429,
            "unit": "iter/sec",
            "range": "stddev: 3.346426802547769e-8",
            "extra": "mean: 721.8436691839001 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8022973.182131636,
            "unit": "iter/sec",
            "range": "stddev: 1.038518842711604e-8",
            "extra": "mean: 124.64207187258931 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 18424.048847913065,
            "unit": "iter/sec",
            "range": "stddev: 8.275518303919709e-7",
            "extra": "mean: 54.27688605554649 usec\nrounds: 18588"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 35592.00684059753,
            "unit": "iter/sec",
            "range": "stddev: 6.98377334841814e-7",
            "extra": "mean: 28.09619599362865 usec\nrounds: 35843"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3679.0273775843048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017025775274772289",
            "extra": "mean: 271.81096995712284 usec\nrounds: 3728"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6727.576036425082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012949874542425148",
            "extra": "mean: 148.64194690416056 usec\nrounds: 6799"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 27908.497786704924,
            "unit": "iter/sec",
            "range": "stddev: 6.177350759214057e-7",
            "extra": "mean: 35.83138037893178 usec\nrounds: 28490"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3030.192344735311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021237896784528945",
            "extra": "mean: 330.01205409861547 usec\nrounds: 3013"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5331.60149704472,
            "unit": "iter/sec",
            "range": "stddev: 0.000001695996675289853",
            "extra": "mean: 187.56090464643594 usec\nrounds: 5380"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 15809.544139684163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010292083960969512",
            "extra": "mean: 63.25293070847378 usec\nrounds: 16077"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1446.8022139627774,
            "unit": "iter/sec",
            "range": "stddev: 0.000043183915033023185",
            "extra": "mean: 691.1794786800951 usec\nrounds: 1454"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7177.966018552109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015901925465441821",
            "extra": "mean: 139.31523183801772 usec\nrounds: 7268"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1689.286402990632,
            "unit": "iter/sec",
            "range": "stddev: 0.000003894340579791914",
            "extra": "mean: 591.9659320229226 usec\nrounds: 1780"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1865.197883804913,
            "unit": "iter/sec",
            "range": "stddev: 0.0016640973212630266",
            "extra": "mean: 536.1361433458462 usec\nrounds: 2923"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1088.0672136872868,
            "unit": "iter/sec",
            "range": "stddev: 0.0021828599862594882",
            "extra": "mean: 919.0608699725074 usec\nrounds: 1815"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 31395.403739405258,
            "unit": "iter/sec",
            "range": "stddev: 6.282898601185206e-7",
            "extra": "mean: 31.85179615144977 usec\nrounds: 31646"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 8030643.462331351,
            "unit": "iter/sec",
            "range": "stddev: 3.551659804928696e-9",
            "extra": "mean: 124.52302292957087 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1597017.9256897569,
            "unit": "iter/sec",
            "range": "stddev: 2.88403530945979e-8",
            "extra": "mean: 626.1670479177244 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 908029.6621616218,
            "unit": "iter/sec",
            "range": "stddev: 1.1025348350140976e-7",
            "extra": "mean: 1.1012856095684385 usec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7518023.514722294,
            "unit": "iter/sec",
            "range": "stddev: 3.9368978999993925e-9",
            "extra": "mean: 133.0136834557852 nsec\nrounds: 78125"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2868614.833573925,
            "unit": "iter/sec",
            "range": "stddev: 2.508951005855044e-8",
            "extra": "mean: 348.60030293948313 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1075402.7975443297,
            "unit": "iter/sec",
            "range": "stddev: 9.407145886760463e-8",
            "extra": "mean: 929.8841348410917 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2785639.0404172977,
            "unit": "iter/sec",
            "range": "stddev: 3.852763337598639e-8",
            "extra": "mean: 358.9840555404062 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7671343.962566916,
            "unit": "iter/sec",
            "range": "stddev: 3.359121050967585e-9",
            "extra": "mean: 130.3552552042998 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4270642.991439535,
            "unit": "iter/sec",
            "range": "stddev: 6.5225973177299156e-9",
            "extra": "mean: 234.15677732938386 nsec\nrounds: 43104"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1642954.0275069654,
            "unit": "iter/sec",
            "range": "stddev: 3.991386187598163e-8",
            "extra": "mean: 608.6597575201374 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2616565.503143758,
            "unit": "iter/sec",
            "range": "stddev: 1.9862159650477877e-8",
            "extra": "mean: 382.180380654982 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3141959.415402836,
            "unit": "iter/sec",
            "range": "stddev: 1.4712626734974425e-8",
            "extra": "mean: 318.2727297795855 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4141215.1434481037,
            "unit": "iter/sec",
            "range": "stddev: 5.248356332988129e-9",
            "extra": "mean: 241.47501768472236 nsec\nrounds: 41842"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4387230.372853109,
            "unit": "iter/sec",
            "range": "stddev: 5.726752037728358e-9",
            "extra": "mean: 227.93423527233898 nsec\nrounds: 43669"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3382159.405316481,
            "unit": "iter/sec",
            "range": "stddev: 1.786319240781298e-8",
            "extra": "mean: 295.6690918905307 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3196369.6582572157,
            "unit": "iter/sec",
            "range": "stddev: 1.4521364269004247e-8",
            "extra": "mean: 312.85492821954244 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 742935.0866881505,
            "unit": "iter/sec",
            "range": "stddev: 4.621411538897048e-8",
            "extra": "mean: 1.346012616603692 usec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5d8d13133dc9118223aad126557319ee32f566a",
          "message": "Proper implementation of `from_attributes` (#121)\n\n* working on try_instance\r\n\r\n* rename to \"from_attributes\", fix tests\r\n\r\n* separate typed_dict input method and custom logic for inspecting attributes\r\n\r\n* improvements and tests for from_attributes in models\r\n\r\n* clean up extra wording\r\n\r\n* omit methods from IterAttributes\r\n\r\n* allow errors inside properties in IterAttributes\r\n\r\n* improve coverage\r\n\r\n* improve coverage, more\r\n\r\n* better support for strict models\r\n\r\n* small tweaks",
          "timestamp": "2022-06-24T18:12:44+01:00",
          "tree_id": "675c49fac40aa3c3b674e4fff605e0c043ebb2db",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/d5d8d13133dc9118223aad126557319ee32f566a"
        },
        "date": 1656091031115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 73826.8719182045,
            "unit": "iter/sec",
            "range": "stddev: 4.868250552171758e-7",
            "extra": "mean: 13.545203447166726 usec\nrounds: 76929"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35332.69476645799,
            "unit": "iter/sec",
            "range": "stddev: 9.370186179178052e-7",
            "extra": "mean: 28.302398291718163 usec\nrounds: 36767"
          },
          {
            "name": "tests/test_benchmarks.py::test_bool_core",
            "value": 568824.2474238193,
            "unit": "iter/sec",
            "range": "stddev: 5.671096422963698e-8",
            "extra": "mean: 1.7580122586702571 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_dict",
            "value": 1696471.5948078563,
            "unit": "iter/sec",
            "range": "stddev: 3.077329209694445e-8",
            "extra": "mean: 589.4587348594807 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_small_class_core_model",
            "value": 1184796.8802266812,
            "unit": "iter/sec",
            "range": "stddev: 4.723139365212163e-8",
            "extra": "mean: 844.0265303604523 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_core_string_lax",
            "value": 8846638.282511368,
            "unit": "iter/sec",
            "range": "stddev: 4.30898553747752e-9",
            "extra": "mean: 113.03728807104193 nsec\nrounds: 92602"
          },
          {
            "name": "tests/test_benchmarks.py::test_recursive_model_core",
            "value": 17818.159243585385,
            "unit": "iter/sec",
            "range": "stddev: 8.45269125807977e-7",
            "extra": "mean: 56.122520083549276 usec\nrounds: 18149"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_dict_models_core",
            "value": 33866.06587929119,
            "unit": "iter/sec",
            "range": "stddev: 6.600483477518803e-7",
            "extra": "mean: 29.528082876951213 usec\nrounds: 33785"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_py",
            "value": 3744.195036725065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018255065209354129",
            "extra": "mean: 267.08010405213025 usec\nrounds: 3825"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_ints_core_json",
            "value": 6883.348076683035,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017392112903847288",
            "extra": "mean: 145.2781391932576 usec\nrounds: 6940"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_any_core_py",
            "value": 26892.271918176113,
            "unit": "iter/sec",
            "range": "stddev: 8.057438739408875e-7",
            "extra": "mean: 37.18540415784335 usec\nrounds: 28573"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core",
            "value": 3056.397619568558,
            "unit": "iter/sec",
            "range": "stddev: 0.000003129706891946141",
            "extra": "mean: 327.1825608021381 usec\nrounds: 3092"
          },
          {
            "name": "tests/test_benchmarks.py::test_set_of_ints_core_json",
            "value": 5426.951685860512,
            "unit": "iter/sec",
            "range": "stddev: 0.000001836429193738",
            "extra": "mean: 184.26550628881031 usec\nrounds: 5406"
          },
          {
            "name": "tests/test_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17474.396132348054,
            "unit": "iter/sec",
            "range": "stddev: 9.227312434138527e-7",
            "extra": "mean: 57.22658410775245 usec\nrounds: 17858"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core",
            "value": 1461.0907892146367,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882465754055752",
            "extra": "mean: 684.4201656609705 usec\nrounds: 1491"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_any_core",
            "value": 7500.932843786333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015149938030920703",
            "extra": "mean: 133.31675150623244 usec\nrounds: 7634"
          },
          {
            "name": "tests/test_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1772.7263056501565,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031294729083521",
            "extra": "mean: 564.1028718379879 usec\nrounds: 1779"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_dict",
            "value": 1944.3776118018473,
            "unit": "iter/sec",
            "range": "stddev: 0.0013515213436643648",
            "extra": "mean: 514.3033914452985 usec\nrounds: 2782"
          },
          {
            "name": "tests/test_benchmarks.py::test_many_models_core_model",
            "value": 1113.3054518651495,
            "unit": "iter/sec",
            "range": "stddev: 0.0019616945674711065",
            "extra": "mean: 898.226087301265 usec\nrounds: 1764"
          },
          {
            "name": "tests/test_benchmarks.py::test_list_of_nullable_core",
            "value": 31661.74837571702,
            "unit": "iter/sec",
            "range": "stddev: 7.41572821913728e-7",
            "extra": "mean: 31.58385279718002 usec\nrounds: 33335"
          },
          {
            "name": "tests/test_benchmarks.py::test_bytes_core",
            "value": 9010238.448213717,
            "unit": "iter/sec",
            "range": "stddev: 3.899345188269293e-9",
            "extra": "mean: 110.98485414653794 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1324647.547019242,
            "unit": "iter/sec",
            "range": "stddev: 2.833646737314623e-8",
            "extra": "mean: 754.9177909630253 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 800516.8949505663,
            "unit": "iter/sec",
            "range": "stddev: 4.0419633487788374e-8",
            "extra": "mean: 1.2491928731398034 usec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8442834.062718863,
            "unit": "iter/sec",
            "range": "stddev: 4.213298238239732e-9",
            "extra": "mean: 118.44364020079789 nsec\nrounds: 86965"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2654373.6298617283,
            "unit": "iter/sec",
            "range": "stddev: 1.9279070941840527e-8",
            "extra": "mean: 376.73671436075 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 934477.615391377,
            "unit": "iter/sec",
            "range": "stddev: 6.122968214071619e-8",
            "extra": "mean: 1.0701165908411796 usec\nrounds: 105275"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2535307.3401583526,
            "unit": "iter/sec",
            "range": "stddev: 1.7581309504162374e-8",
            "extra": "mean: 394.429497426272 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8341406.843721282,
            "unit": "iter/sec",
            "range": "stddev: 4.063610293058779e-9",
            "extra": "mean: 119.88385397509624 nsec\nrounds: 85478"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4143594.7271617646,
            "unit": "iter/sec",
            "range": "stddev: 5.867309350434858e-9",
            "extra": "mean: 241.3363434037034 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1512085.339515139,
            "unit": "iter/sec",
            "range": "stddev: 3.866820524045398e-8",
            "extra": "mean: 661.3383344622216 nsec\nrounds: 161317"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2409135.9458074425,
            "unit": "iter/sec",
            "range": "stddev: 2.128059466270623e-8",
            "extra": "mean: 415.086579792491 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2944422.3120985143,
            "unit": "iter/sec",
            "range": "stddev: 1.635519813491139e-8",
            "extra": "mean: 339.62519435172044 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3762243.453699841,
            "unit": "iter/sec",
            "range": "stddev: 1.5167096882026026e-8",
            "extra": "mean: 265.79885440861597 nsec\nrounds: 188715"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4235333.590307658,
            "unit": "iter/sec",
            "range": "stddev: 5.361831062690893e-9",
            "extra": "mean: 236.1089105917104 nsec\nrounds: 43106"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3339127.9313429287,
            "unit": "iter/sec",
            "range": "stddev: 1.4378531699932936e-8",
            "extra": "mean: 299.47939119431175 nsec\nrounds: 192345"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3172755.4865081334,
            "unit": "iter/sec",
            "range": "stddev: 1.374786775278406e-8",
            "extra": "mean: 315.18344361861733 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 676826.735077168,
            "unit": "iter/sec",
            "range": "stddev: 4.311080560187072e-8",
            "extra": "mean: 1.4774830073548568 usec\nrounds: 68971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad39470f00390b38a8bda22e9b5959badf4e88fd",
          "message": "add complete benchmark (#123)\n\n* add complete benchmark\r\n\r\n* fixing tests\r\n\r\n* extending benchmarks\r\n\r\n* tweaks and test readme\r\n\r\n* skip complete benchmarks for <py3.10",
          "timestamp": "2022-06-26T12:22:39+01:00",
          "tree_id": "e060b1d3319f3d43365a31bbc7ba951faeac1ab6",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/ad39470f00390b38a8bda22e9b5959badf4e88fd"
        },
        "date": 1656242832706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 18762.6879904906,
            "unit": "iter/sec",
            "range": "stddev: 9.457688468796933e-7",
            "extra": "mean: 53.29726745479246 usec\nrounds: 19121"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 15454.758004009125,
            "unit": "iter/sec",
            "range": "stddev: 0.000010854370413791748",
            "extra": "mean: 64.70499245220078 usec\nrounds: 15899"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2809.7106553271396,
            "unit": "iter/sec",
            "range": "stddev: 0.000005651355866588875",
            "extra": "mean: 355.90853389263606 usec\nrounds: 2862"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9160.312193374919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014015458412177764",
            "extra": "mean: 109.1665850344312 usec\nrounds: 9355"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 74867.21745675498,
            "unit": "iter/sec",
            "range": "stddev: 3.9274670020649346e-7",
            "extra": "mean: 13.356980985404233 usec\nrounds: 77520"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 35730.25725133067,
            "unit": "iter/sec",
            "range": "stddev: 6.694414245189359e-7",
            "extra": "mean: 27.98748391218923 usec\nrounds: 36767"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 603789.4922525064,
            "unit": "iter/sec",
            "range": "stddev: 5.0231833738806594e-8",
            "extra": "mean: 1.656206364687362 usec\nrounds: 61354"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2117378.1692425082,
            "unit": "iter/sec",
            "range": "stddev: 2.196343176064933e-8",
            "extra": "mean: 472.2821905539638 nsec\nrounds: 196117"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1177435.0152388765,
            "unit": "iter/sec",
            "range": "stddev: 4.2229263368720736e-8",
            "extra": "mean: 849.3037722316158 nsec\nrounds: 126583"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 9056948.647760758,
            "unit": "iter/sec",
            "range": "stddev: 4.168715849919607e-9",
            "extra": "mean: 110.41246217595877 nsec\nrounds: 93458"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 17677.131879200242,
            "unit": "iter/sec",
            "range": "stddev: 7.449667373202321e-7",
            "extra": "mean: 56.570263028735326 usec\nrounds: 17922"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 39977.07963095609,
            "unit": "iter/sec",
            "range": "stddev: 6.014359920062583e-7",
            "extra": "mean: 25.01433344384801 usec\nrounds: 45249"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3872.626606852776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017953731713472619",
            "extra": "mean: 258.2226745616161 usec\nrounds: 3927"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6851.375685721472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014026378769930876",
            "extra": "mean: 145.9560890937623 usec\nrounds: 6959"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 26881.277745606163,
            "unit": "iter/sec",
            "range": "stddev: 8.537446008709075e-7",
            "extra": "mean: 37.200612614608815 usec\nrounds: 28491"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 3148.672522409713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032720914136986883",
            "extra": "mean: 317.59415845338185 usec\nrounds: 3206"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 5378.98041607516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017828371370490255",
            "extra": "mean: 185.90883822731269 usec\nrounds: 5415"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 17451.84214402779,
            "unit": "iter/sec",
            "range": "stddev: 9.761380780836724e-7",
            "extra": "mean: 57.30054121204684 usec\nrounds: 17422"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 1455.3112488725621,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687810721395497",
            "extra": "mean: 687.138232989476 usec\nrounds: 1455"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7877.945210441188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013941142358603474",
            "extra": "mean: 126.9366533134339 usec\nrounds: 8013"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1844.6275696207356,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039542086220119",
            "extra": "mean: 542.1148509699466 usec\nrounds: 1805"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 2626.203983459473,
            "unit": "iter/sec",
            "range": "stddev: 0.0012311998331463955",
            "extra": "mean: 380.77773329804705 usec\nrounds: 3832"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 1054.4433078572679,
            "unit": "iter/sec",
            "range": "stddev: 0.0021762000765632268",
            "extra": "mean: 948.3677240382871 usec\nrounds: 1743"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 31924.412772953892,
            "unit": "iter/sec",
            "range": "stddev: 7.255075203944306e-7",
            "extra": "mean: 31.323990424255886 usec\nrounds: 32896"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 9209301.093115488,
            "unit": "iter/sec",
            "range": "stddev: 3.4859510553019554e-9",
            "extra": "mean: 108.58587311775837 nsec\nrounds: 94340"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1341641.8213101488,
            "unit": "iter/sec",
            "range": "stddev: 3.7593493978855566e-8",
            "extra": "mean: 745.3554176061068 nsec\nrounds: 149254"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 797723.5980622268,
            "unit": "iter/sec",
            "range": "stddev: 3.7984771141135543e-8",
            "extra": "mean: 1.253567028014893 usec\nrounds: 82652"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8437498.653113158,
            "unit": "iter/sec",
            "range": "stddev: 3.6348000976223176e-9",
            "extra": "mean: 118.5185374377149 nsec\nrounds: 86957"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2597145.5143938395,
            "unit": "iter/sec",
            "range": "stddev: 3.945676708945228e-8",
            "extra": "mean: 385.03810990092546 nsec\nrounds: 196117"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 945306.2341647765,
            "unit": "iter/sec",
            "range": "stddev: 4.653560644717976e-8",
            "extra": "mean: 1.0578582514942458 usec\nrounds: 98049"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2510495.2429921567,
            "unit": "iter/sec",
            "range": "stddev: 2.257549787467324e-8",
            "extra": "mean: 398.3277812582768 nsec\nrounds: 185220"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8272787.798744327,
            "unit": "iter/sec",
            "range": "stddev: 3.645079583407431e-9",
            "extra": "mean: 120.87823649378899 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3892337.511263441,
            "unit": "iter/sec",
            "range": "stddev: 1.0453357186810662e-8",
            "extra": "mean: 256.91502782216685 nsec\nrounds: 188715"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1509212.5478947363,
            "unit": "iter/sec",
            "range": "stddev: 7.023508206378615e-8",
            "extra": "mean: 662.5971944078269 nsec\nrounds: 166667"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2394621.448885142,
            "unit": "iter/sec",
            "range": "stddev: 1.8051766756360184e-8",
            "extra": "mean: 417.6025402536547 nsec\nrounds: 188715"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3166849.9621842965,
            "unit": "iter/sec",
            "range": "stddev: 1.435023593921181e-8",
            "extra": "mean: 315.77119596479463 nsec\nrounds: 192345"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3713780.138566597,
            "unit": "iter/sec",
            "range": "stddev: 1.2552814784890365e-8",
            "extra": "mean: 269.26742098030854 nsec\nrounds: 188715"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4360283.73429298,
            "unit": "iter/sec",
            "range": "stddev: 5.263810146183398e-9",
            "extra": "mean: 229.34287329401042 nsec\nrounds: 44844"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3368986.4486346887,
            "unit": "iter/sec",
            "range": "stddev: 1.3567232059591662e-8",
            "extra": "mean: 296.825177318386 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3194970.19139255,
            "unit": "iter/sec",
            "range": "stddev: 1.384035547128092e-8",
            "extra": "mean: 312.99196552567923 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 679335.2971160201,
            "unit": "iter/sec",
            "range": "stddev: 4.3905188458450834e-8",
            "extra": "mean: 1.4720271480745806 usec\nrounds: 69935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc31e18c068113f598192c1a4a3ac45c489a3a0d",
          "message": "Fix extra behaviour (#125)\n\n* fix extra_behaviour when using aliases\r\n\r\n* fields_set as vec\r\n\r\n* fields_set as a vec\r\n\r\n* avoid unnecessary population of vecs\r\n\r\n* change how extra logic is stored",
          "timestamp": "2022-06-26T16:02:48+01:00",
          "tree_id": "b03aa1901ae537f9160045800ad1a5d5eeca5e97",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/cc31e18c068113f598192c1a4a3ac45c489a3a0d"
        },
        "date": 1656255938686,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 17915.11216817484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016741240989717104",
            "extra": "mean: 55.81879647822926 usec\nrounds: 18116"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 15081.102403693982,
            "unit": "iter/sec",
            "range": "stddev: 0.000001962522216244252",
            "extra": "mean: 66.30814997682523 usec\nrounds: 15129"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2744.3345020214583,
            "unit": "iter/sec",
            "range": "stddev: 0.000006586889939042967",
            "extra": "mean: 364.3870669786816 usec\nrounds: 2777"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 8998.755512412265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028854465207392172",
            "extra": "mean: 111.12647728018266 usec\nrounds: 9133"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 68624.69644370278,
            "unit": "iter/sec",
            "range": "stddev: 6.845049707275611e-7",
            "extra": "mean: 14.572013456123099 usec\nrounds: 69931"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36191.44440389999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010674110489250828",
            "extra": "mean: 27.63083973217272 usec\nrounds: 37038"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 589535.2532687151,
            "unit": "iter/sec",
            "range": "stddev: 6.03647860842516e-8",
            "extra": "mean: 1.6962514021944588 usec\nrounds: 60976"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2579901.1809631865,
            "unit": "iter/sec",
            "range": "stddev: 2.408134962754319e-8",
            "extra": "mean: 387.61174551114647 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1132754.3872781529,
            "unit": "iter/sec",
            "range": "stddev: 5.006556719182088e-8",
            "extra": "mean: 882.8039080939873 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8348038.508992113,
            "unit": "iter/sec",
            "range": "stddev: 5.646983208261383e-9",
            "extra": "mean: 119.78861847872011 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 14312.40831283672,
            "unit": "iter/sec",
            "range": "stddev: 0.000001958380401512847",
            "extra": "mean: 69.86944322313006 usec\nrounds: 14557"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 54907.99973097071,
            "unit": "iter/sec",
            "range": "stddev: 6.557226188806578e-7",
            "extra": "mean: 18.21228245245934 usec\nrounds: 56498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3763.0372489326055,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025168352063529974",
            "extra": "mean: 265.74278537467376 usec\nrounds: 3788"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6774.180490746256,
            "unit": "iter/sec",
            "range": "stddev: 0.00000191457663653385",
            "extra": "mean: 147.61933216365162 usec\nrounds: 6840"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 28920.64198889299,
            "unit": "iter/sec",
            "range": "stddev: 8.435669601670318e-7",
            "extra": "mean: 34.57737903550175 usec\nrounds: 29240"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 3039.2344977709736,
            "unit": "iter/sec",
            "range": "stddev: 0.000003358795300315656",
            "extra": "mean: 329.03022150262416 usec\nrounds: 3088"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 5327.656620232704,
            "unit": "iter/sec",
            "range": "stddev: 0.000002196110482951286",
            "extra": "mean: 187.69978459240895 usec\nrounds: 5348"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 15934.966690246196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012991566158967723",
            "extra": "mean: 62.755073131850395 usec\nrounds: 16313"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 1536.5032592397229,
            "unit": "iter/sec",
            "range": "stddev: 0.000004623707788528121",
            "extra": "mean: 650.8284274612016 usec\nrounds: 1544"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7431.568089172016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024778366019625237",
            "extra": "mean: 134.56110312129488 usec\nrounds: 7593"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1826.120189861734,
            "unit": "iter/sec",
            "range": "stddev: 0.000005745732774185044",
            "extra": "mean: 547.6090815663758 usec\nrounds: 1839"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 5013.183128281056,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032909763453327514",
            "extra": "mean: 199.47406157151187 usec\nrounds: 5116"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 715.9070072249859,
            "unit": "iter/sec",
            "range": "stddev: 0.0041688089928193055",
            "extra": "mean: 1.3968294623574387 msec\nrounds: 1408"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 31928.000791813734,
            "unit": "iter/sec",
            "range": "stddev: 8.005780371217892e-7",
            "extra": "mean: 31.320470283137727 usec\nrounds: 32574"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8687982.210550506,
            "unit": "iter/sec",
            "range": "stddev: 4.909268894612085e-9",
            "extra": "mean: 115.10152481503937 nsec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1239071.4186270416,
            "unit": "iter/sec",
            "range": "stddev: 5.266229665629067e-8",
            "extra": "mean: 807.05598157368 nsec\nrounds: 131579"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 836578.4332258875,
            "unit": "iter/sec",
            "range": "stddev: 5.267338924761618e-8",
            "extra": "mean: 1.1953451825719832 usec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7693758.914576152,
            "unit": "iter/sec",
            "range": "stddev: 5.464636832044694e-9",
            "extra": "mean: 129.9754789698147 nsec\nrounds: 78126"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2761057.383616697,
            "unit": "iter/sec",
            "range": "stddev: 4.286501472564712e-8",
            "extra": "mean: 362.180085765558 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 995632.1896571136,
            "unit": "iter/sec",
            "range": "stddev: 7.104983058593742e-8",
            "extra": "mean: 1.0043869718036078 usec\nrounds: 105264"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2649929.422986191,
            "unit": "iter/sec",
            "range": "stddev: 2.4965471116769563e-8",
            "extra": "mean: 377.3685409601354 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7978202.828773179,
            "unit": "iter/sec",
            "range": "stddev: 5.8392253979971245e-9",
            "extra": "mean: 125.34151129783484 nsec\nrounds: 81301"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4221669.15895644,
            "unit": "iter/sec",
            "range": "stddev: 6.860727792245104e-9",
            "extra": "mean: 236.87313295938026 nsec\nrounds: 42554"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1652187.625428032,
            "unit": "iter/sec",
            "range": "stddev: 5.06408741626138e-8",
            "extra": "mean: 605.258134493629 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2543467.9083919055,
            "unit": "iter/sec",
            "range": "stddev: 2.322525672802134e-8",
            "extra": "mean: 393.1639934208067 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3206336.187213869,
            "unit": "iter/sec",
            "range": "stddev: 2.0933431133537525e-8",
            "extra": "mean: 311.8824544928762 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3981222.263843391,
            "unit": "iter/sec",
            "range": "stddev: 1.61265724256452e-8",
            "extra": "mean: 251.17914392330786 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4385502.868304707,
            "unit": "iter/sec",
            "range": "stddev: 8.342121367532632e-9",
            "extra": "mean: 228.02402142461574 nsec\nrounds: 44248"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3342147.533960161,
            "unit": "iter/sec",
            "range": "stddev: 1.7877057963116212e-8",
            "extra": "mean: 299.20881404507793 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3182738.0325185494,
            "unit": "iter/sec",
            "range": "stddev: 2.3008035060603382e-8",
            "extra": "mean: 314.1948818227589 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 760265.0311952096,
            "unit": "iter/sec",
            "range": "stddev: 6.359577838428397e-8",
            "extra": "mean: 1.315330784618373 usec\nrounds: 80001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e323999c01a2c9a4dcd542e40f733b166d0ec41",
          "message": "Renaming schema keys (#126)\n\n* rename Model -> TypedDict\r\n\r\n* rename items -> items_schema\r\n\r\n* rename keys,values -> keys,values_schema\r\n\r\n* explicitly prevent schema on plain functions\r\n\r\n* rename model -> schema on model_class\r\n\r\n* fix linting and bench",
          "timestamp": "2022-06-26T17:10:23+01:00",
          "tree_id": "c282557ad5f4ff6b83b35c485c6453d86b5318d1",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/0e323999c01a2c9a4dcd542e40f733b166d0ec41"
        },
        "date": 1656260014492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 17100.031899430458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021974183906816514",
            "extra": "mean: 58.47942307249769 usec\nrounds: 17302"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 14710.536746650136,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024906869969975964",
            "extra": "mean: 67.97848489299473 usec\nrounds: 14993"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2220.861106547846,
            "unit": "iter/sec",
            "range": "stddev: 0.000006511700960975756",
            "extra": "mean: 450.27579484897257 usec\nrounds: 2252"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9012.529657584588,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023049918826261737",
            "extra": "mean: 110.95663903401856 usec\nrounds: 9192"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 107315.90736938815,
            "unit": "iter/sec",
            "range": "stddev: 3.24747911245804e-7",
            "extra": "mean: 9.318283044077862 usec\nrounds: 109891"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 37160.23269557042,
            "unit": "iter/sec",
            "range": "stddev: 0.000001166053247159154",
            "extra": "mean: 26.910488106798162 usec\nrounds: 37879"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 595271.5203584422,
            "unit": "iter/sec",
            "range": "stddev: 8.17892708401236e-8",
            "extra": "mean: 1.6799056662377962 usec\nrounds: 59881"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2620791.718326633,
            "unit": "iter/sec",
            "range": "stddev: 3.170983273023807e-8",
            "extra": "mean: 381.56408729746454 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1177954.1532644047,
            "unit": "iter/sec",
            "range": "stddev: 5.360710558745781e-8",
            "extra": "mean: 848.9294742321312 nsec\nrounds: 123457"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8319826.173860516,
            "unit": "iter/sec",
            "range": "stddev: 5.891338873280863e-9",
            "extra": "mean: 120.19481887029586 nsec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 14406.089113304857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015838892125977586",
            "extra": "mean: 69.41509191946078 usec\nrounds: 14578"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 474592.58193110477,
            "unit": "iter/sec",
            "range": "stddev: 8.483740744775387e-8",
            "extra": "mean: 2.1070704390936754 usec\nrounds: 48077"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 27836.600735720967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013049460368154756",
            "extra": "mean: 35.92392654167585 usec\nrounds: 26042"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6429.122128239921,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022641776149808165",
            "extra": "mean: 155.5422311247596 usec\nrounds: 6490"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 27744.98037498881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013073699568077374",
            "extra": "mean: 36.04255567978225 usec\nrounds: 25907"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 10562.167676104982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017320706571161302",
            "extra": "mean: 94.67753501606695 usec\nrounds: 10538"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4286.042427759862,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035695816688721196",
            "extra": "mean: 233.3154691897576 usec\nrounds: 4333"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 25650.17668930003,
            "unit": "iter/sec",
            "range": "stddev: 0.000001146772678177656",
            "extra": "mean: 38.98608622127542 usec\nrounds: 26316"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 7322.035612610984,
            "unit": "iter/sec",
            "range": "stddev: 0.000002361407886821831",
            "extra": "mean: 136.57404209802903 usec\nrounds: 7435"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7324.2538722820855,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018407572500784365",
            "extra": "mean: 136.5326786096808 usec\nrounds: 7452"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1809.318617480235,
            "unit": "iter/sec",
            "range": "stddev: 0.000007505326266647667",
            "extra": "mean: 552.6942520453692 usec\nrounds: 1833"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 52974.07203853681,
            "unit": "iter/sec",
            "range": "stddev: 7.141621090403143e-7",
            "extra": "mean: 18.87715936340583 usec\nrounds: 55866"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 53028.78183585555,
            "unit": "iter/sec",
            "range": "stddev: 6.614312081003977e-7",
            "extra": "mean: 18.85768379698753 usec\nrounds: 55866"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 55909.34717214719,
            "unit": "iter/sec",
            "range": "stddev: 6.659369399789014e-7",
            "extra": "mean: 17.8860968796677 usec\nrounds: 57143"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8497737.709872913,
            "unit": "iter/sec",
            "range": "stddev: 4.912089008760285e-9",
            "extra": "mean: 117.67837913354772 nsec\nrounds: 86207"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1281587.457937507,
            "unit": "iter/sec",
            "range": "stddev: 4.8493806116177896e-8",
            "extra": "mean: 780.2822927190856 nsec\nrounds: 140846"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 782028.5099047909,
            "unit": "iter/sec",
            "range": "stddev: 7.512003843503206e-8",
            "extra": "mean: 1.2787257591439503 usec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7592233.301620238,
            "unit": "iter/sec",
            "range": "stddev: 6.284437723526159e-9",
            "extra": "mean: 131.7135499230859 nsec\nrounds: 77520"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2798209.353217178,
            "unit": "iter/sec",
            "range": "stddev: 2.406273308436356e-8",
            "extra": "mean: 357.37140212601906 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1099002.1568917092,
            "unit": "iter/sec",
            "range": "stddev: 6.870022080610968e-8",
            "extra": "mean: 909.916321573143 nsec\nrounds: 117648"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2677594.573625504,
            "unit": "iter/sec",
            "range": "stddev: 2.7520503408779496e-8",
            "extra": "mean: 373.469534876214 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 7724501.578604944,
            "unit": "iter/sec",
            "range": "stddev: 6.012663953577932e-9",
            "extra": "mean: 129.45819090384822 nsec\nrounds: 78741"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4437647.613225267,
            "unit": "iter/sec",
            "range": "stddev: 8.639063105090222e-9",
            "extra": "mean: 225.34461659821878 nsec\nrounds: 45044"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1590972.3129637677,
            "unit": "iter/sec",
            "range": "stddev: 5.991462000642247e-8",
            "extra": "mean: 628.5464504011923 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2667654.7395007373,
            "unit": "iter/sec",
            "range": "stddev: 2.5655252179699245e-8",
            "extra": "mean: 374.8611037222908 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3194745.9769755704,
            "unit": "iter/sec",
            "range": "stddev: 2.0802447307379446e-8",
            "extra": "mean: 313.0139320009633 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4211874.225083533,
            "unit": "iter/sec",
            "range": "stddev: 7.832880337646781e-9",
            "extra": "mean: 237.42399382313155 nsec\nrounds: 42736"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4393508.74306204,
            "unit": "iter/sec",
            "range": "stddev: 9.287405989741633e-9",
            "extra": "mean: 227.60851485255085 nsec\nrounds: 44844"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3426907.5579587184,
            "unit": "iter/sec",
            "range": "stddev: 2.1725928655309603e-8",
            "extra": "mean: 291.8082799391862 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3358938.8951475834,
            "unit": "iter/sec",
            "range": "stddev: 2.1347794358792265e-8",
            "extra": "mean: 297.71306689860734 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 737771.1252514739,
            "unit": "iter/sec",
            "range": "stddev: 7.16852635841424e-8",
            "extra": "mean: 1.3554339086652911 usec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1919da1536c510e5ec08673a4559fc50924bddf2",
          "message": "simplify recursive reference schemas, fix #60 (#130)",
          "timestamp": "2022-06-28T19:29:45+01:00",
          "tree_id": "620c9777149a807ea131ea879309084dea65e909",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/1919da1536c510e5ec08673a4559fc50924bddf2"
        },
        "date": 1656441294877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 15868.937593567634,
            "unit": "iter/sec",
            "range": "stddev: 0.000007597117560373951",
            "extra": "mean: 63.01619085107142 usec\nrounds: 20964"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 14390.967705021614,
            "unit": "iter/sec",
            "range": "stddev: 0.000008980911761749703",
            "extra": "mean: 69.48803030466519 usec\nrounds: 18215"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2026.1787019078713,
            "unit": "iter/sec",
            "range": "stddev: 0.00004650016023291581",
            "extra": "mean: 493.53988325826816 usec\nrounds: 2664"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 8404.716116033898,
            "unit": "iter/sec",
            "range": "stddev: 0.00001425588150505637",
            "extra": "mean: 118.98081817329603 usec\nrounds: 10906"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 97856.69967625929,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018710374688642336",
            "extra": "mean: 10.21902438267706 usec\nrounds: 128206"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 33606.84557321261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034174742686833275",
            "extra": "mean: 29.755842386977296 usec\nrounds: 44844"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 539659.7185021141,
            "unit": "iter/sec",
            "range": "stddev: 2.7103814705448727e-7",
            "extra": "mean: 1.8530195338195647 usec\nrounds: 61350"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2485337.8079654924,
            "unit": "iter/sec",
            "range": "stddev: 9.328035392322777e-8",
            "extra": "mean: 402.3597906067361 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1061329.9215039574,
            "unit": "iter/sec",
            "range": "stddev: 1.9102660292783483e-7",
            "extra": "mean: 942.2140841776056 nsec\nrounds: 140846"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 7905189.324672194,
            "unit": "iter/sec",
            "range": "stddev: 2.3510862280587982e-8",
            "extra": "mean: 126.4991841345564 nsec\nrounds: 103093"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 13775.032275927844,
            "unit": "iter/sec",
            "range": "stddev: 0.00000878195221340063",
            "extra": "mean: 72.59511121055743 usec\nrounds: 17858"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 413690.8349575109,
            "unit": "iter/sec",
            "range": "stddev: 3.2223606207480753e-7",
            "extra": "mean: 2.4172640907133647 usec\nrounds: 57804"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 26354.95406602517,
            "unit": "iter/sec",
            "range": "stddev: 0.000005318240095717024",
            "extra": "mean: 37.94353036984136 usec\nrounds: 34014"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6016.23134710105,
            "unit": "iter/sec",
            "range": "stddev: 0.000019855133108939522",
            "extra": "mean: 166.21701232979592 usec\nrounds: 7705"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 26196.649417179866,
            "unit": "iter/sec",
            "range": "stddev: 0.000004987666050206655",
            "extra": "mean: 38.172820656377375 usec\nrounds: 34130"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 9740.140762166893,
            "unit": "iter/sec",
            "range": "stddev: 0.000012456142187051544",
            "extra": "mean: 102.66792076396334 usec\nrounds: 12772"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 3920.619321431098,
            "unit": "iter/sec",
            "range": "stddev: 0.000027461997133039034",
            "extra": "mean: 255.06174357039635 usec\nrounds: 5171"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 22878.870284376313,
            "unit": "iter/sec",
            "range": "stddev: 0.000004347489375212114",
            "extra": "mean: 43.70845184094982 usec\nrounds: 30960"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 6567.578658164784,
            "unit": "iter/sec",
            "range": "stddev: 0.00001393269181451898",
            "extra": "mean: 152.26311736012548 usec\nrounds: 8819"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 6277.663917869129,
            "unit": "iter/sec",
            "range": "stddev: 0.00001083427300944842",
            "extra": "mean: 159.29492452654853 usec\nrounds: 8811"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1644.8974366340371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000470362668509863",
            "extra": "mean: 607.9406397801347 usec\nrounds: 2182"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 48641.43495992858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022425790270992187",
            "extra": "mean: 20.55860401371408 usec\nrounds: 67568"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 48083.668201213586,
            "unit": "iter/sec",
            "range": "stddev: 0.000002416181453481708",
            "extra": "mean: 20.79708219879034 usec\nrounds: 67568"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 48584.3796985367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023322148829232577",
            "extra": "mean: 20.582747092891644 usec\nrounds: 68966"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 7752090.09277306,
            "unit": "iter/sec",
            "range": "stddev: 2.0299325990983675e-8",
            "extra": "mean: 128.99746881588516 nsec\nrounds: 90910"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1116657.0968922675,
            "unit": "iter/sec",
            "range": "stddev: 1.4701348350657785e-7",
            "extra": "mean: 895.5300627048368 nsec\nrounds: 136987"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 693351.5925268148,
            "unit": "iter/sec",
            "range": "stddev: 2.1174354810275642e-7",
            "extra": "mean: 1.4422697095938861 usec\nrounds: 80646"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7022742.743156155,
            "unit": "iter/sec",
            "range": "stddev: 2.0993327375274913e-8",
            "extra": "mean: 142.3945083242865 nsec\nrounds: 78741"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2627830.643100234,
            "unit": "iter/sec",
            "range": "stddev: 7.721016379642111e-8",
            "extra": "mean: 380.54202717578124 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1012011.9684811115,
            "unit": "iter/sec",
            "range": "stddev: 1.811221063423725e-7",
            "extra": "mean: 988.1306063016883 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2489239.6329798596,
            "unit": "iter/sec",
            "range": "stddev: 8.048386566224573e-8",
            "extra": "mean: 401.72910102837335 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6340141.463322815,
            "unit": "iter/sec",
            "range": "stddev: 1.8552940769173935e-8",
            "extra": "mean: 157.72518732976363 nsec\nrounds: 76336"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3619216.971491962,
            "unit": "iter/sec",
            "range": "stddev: 3.133990347285389e-8",
            "extra": "mean: 276.3028599492379 nsec\nrounds: 43291"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1466483.1563631394,
            "unit": "iter/sec",
            "range": "stddev: 1.5027313323866378e-7",
            "extra": "mean: 681.9035020354643 nsec\nrounds: 172414"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2269405.07194325,
            "unit": "iter/sec",
            "range": "stddev: 9.246451039890194e-8",
            "extra": "mean: 440.6441196256463 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2720159.069064489,
            "unit": "iter/sec",
            "range": "stddev: 8.0525984056204e-8",
            "extra": "mean: 367.62555961230584 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3654784.4404799812,
            "unit": "iter/sec",
            "range": "stddev: 3.887692312222037e-8",
            "extra": "mean: 273.61394804138865 nsec\nrounds: 48077"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4064194.927107917,
            "unit": "iter/sec",
            "range": "stddev: 3.643893321829875e-8",
            "extra": "mean: 246.05119044118598 nsec\nrounds: 53476"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3233028.0984303127,
            "unit": "iter/sec",
            "range": "stddev: 4.1071729379702134e-8",
            "extra": "mean: 309.30754993606655 nsec\nrounds: 42554"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3143909.160759961,
            "unit": "iter/sec",
            "range": "stddev: 7.185522376348029e-8",
            "extra": "mean: 318.07534787620824 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 724733.3915362606,
            "unit": "iter/sec",
            "range": "stddev: 2.533023568490388e-7",
            "extra": "mean: 1.3798177532295932 usec\nrounds: 95239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd32acfc016c7ff062c826e7abd1d4eeb0ecc97a",
          "message": "use ahash for hashsets, seems to be significantly quicker (#132)",
          "timestamp": "2022-06-28T20:45:38+01:00",
          "tree_id": "1aa0bc5a67eb4f55e364494a82f9efbb14cd1128",
          "url": "https://github.com/samuelcolvin/pydantic-core/commit/dd32acfc016c7ff062c826e7abd1d4eeb0ecc97a"
        },
        "date": 1656445713408,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 18293.198052264856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016450531124523674",
            "extra": "mean: 54.66512728626974 usec\nrounds: 18588"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 15549.673315098195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013384230227611087",
            "extra": "mean: 64.31003274062579 usec\nrounds: 15699"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2203.979780330897,
            "unit": "iter/sec",
            "range": "stddev: 0.000011824651249492292",
            "extra": "mean: 453.7246706727336 usec\nrounds: 2247"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9259.632554537118,
            "unit": "iter/sec",
            "range": "stddev: 0.000003495482948443693",
            "extra": "mean: 107.99564605941205 usec\nrounds: 9479"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 110524.7481604369,
            "unit": "iter/sec",
            "range": "stddev: 3.768741030615059e-7",
            "extra": "mean: 9.047747374627875 usec\nrounds: 112360"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36105.74903392887,
            "unit": "iter/sec",
            "range": "stddev: 7.207913322069519e-7",
            "extra": "mean: 27.696420286428395 usec\nrounds: 36901"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 585521.5689446742,
            "unit": "iter/sec",
            "range": "stddev: 5.427412576805732e-8",
            "extra": "mean: 1.7078790142658922 usec\nrounds: 60241"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2413698.5044244407,
            "unit": "iter/sec",
            "range": "stddev: 2.3751408546330077e-8",
            "extra": "mean: 414.3019512031234 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1059339.099715637,
            "unit": "iter/sec",
            "range": "stddev: 4.20112507343243e-8",
            "extra": "mean: 943.984792280229 nsec\nrounds: 108708"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8901365.437442325,
            "unit": "iter/sec",
            "range": "stddev: 4.138080089283051e-9",
            "extra": "mean: 112.34231501087504 nsec\nrounds: 90099"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 13802.985298162956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011001158639082054",
            "extra": "mean: 72.44809571253332 usec\nrounds: 13948"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 481369.09823937254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041810160129200755",
            "extra": "mean: 2.077407967519361 usec\nrounds: 50003"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 27269.655617426462,
            "unit": "iter/sec",
            "range": "stddev: 8.767533582340494e-7",
            "extra": "mean: 36.6707968017373 usec\nrounds: 29326"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6529.711738441158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016452744084505896",
            "extra": "mean: 153.1461173259588 usec\nrounds: 6614"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 27062.24583195128,
            "unit": "iter/sec",
            "range": "stddev: 8.662174171674222e-7",
            "extra": "mean: 36.95184820246297 usec\nrounds: 28986"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 12974.855930523823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018959900142918839",
            "extra": "mean: 77.07214672399277 usec\nrounds: 13263"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4494.728775990616,
            "unit": "iter/sec",
            "range": "stddev: 0.000001916864680911848",
            "extra": "mean: 222.48283485795093 usec\nrounds: 4481"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 27232.895900787127,
            "unit": "iter/sec",
            "range": "stddev: 8.230981075062698e-7",
            "extra": "mean: 36.72029605823509 usec\nrounds: 27856"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 7586.171956357405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014768130876914647",
            "extra": "mean: 131.81878894294962 usec\nrounds: 7723"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7588.539396194517,
            "unit": "iter/sec",
            "range": "stddev: 0.000001478632060251099",
            "extra": "mean: 131.77766468491654 usec\nrounds: 7906"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1819.3066802693506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037146360553813406",
            "extra": "mean: 549.6599396050965 usec\nrounds: 1838"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 53880.23060912442,
            "unit": "iter/sec",
            "range": "stddev: 0.000001010865278553821",
            "extra": "mean: 18.559682998659138 usec\nrounds: 55249"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 53972.82913407278,
            "unit": "iter/sec",
            "range": "stddev: 5.841268140246559e-7",
            "extra": "mean: 18.527841064546028 usec\nrounds: 56180"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 53338.73125894924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027209544799738884",
            "extra": "mean: 18.748102483825363 usec\nrounds: 57804"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 9004526.717616953,
            "unit": "iter/sec",
            "range": "stddev: 4.414482103093082e-9",
            "extra": "mean: 111.05525380286907 nsec\nrounds: 93458"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1137927.0010746582,
            "unit": "iter/sec",
            "range": "stddev: 3.6777048850654855e-8",
            "extra": "mean: 878.790993669984 nsec\nrounds: 125001"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 651328.0858084863,
            "unit": "iter/sec",
            "range": "stddev: 7.892703951963843e-8",
            "extra": "mean: 1.5353245496216972 usec\nrounds: 68498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8261529.317408968,
            "unit": "iter/sec",
            "range": "stddev: 3.9544619323841055e-9",
            "extra": "mean: 121.04296451412547 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2620481.304757965,
            "unit": "iter/sec",
            "range": "stddev: 1.7773679479799316e-8",
            "extra": "mean: 381.6092861202255 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 961844.5698219129,
            "unit": "iter/sec",
            "range": "stddev: 5.863597992375032e-8",
            "extra": "mean: 1.0396690186506812 usec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2539114.54963737,
            "unit": "iter/sec",
            "range": "stddev: 1.9313292122854187e-8",
            "extra": "mean: 393.8380803429396 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8287360.264409022,
            "unit": "iter/sec",
            "range": "stddev: 4.370244278267466e-9",
            "extra": "mean: 120.66568462024128 nsec\nrounds: 85471"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4289794.922753566,
            "unit": "iter/sec",
            "range": "stddev: 5.117677770808426e-9",
            "extra": "mean: 233.11137665251084 nsec\nrounds: 43860"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1583081.032798477,
            "unit": "iter/sec",
            "range": "stddev: 3.573836265473281e-8",
            "extra": "mean: 631.6796040654718 nsec\nrounds: 166695"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2140324.7982140845,
            "unit": "iter/sec",
            "range": "stddev: 4.631069780059184e-8",
            "extra": "mean: 467.21880755412303 nsec\nrounds: 192345"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2975495.686139399,
            "unit": "iter/sec",
            "range": "stddev: 1.7833680418371863e-8",
            "extra": "mean: 336.07845733342833 nsec\nrounds: 192345"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3790742.2543474017,
            "unit": "iter/sec",
            "range": "stddev: 1.3650759402439902e-8",
            "extra": "mean: 263.80057859398016 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3807430.062562112,
            "unit": "iter/sec",
            "range": "stddev: 1.4000977900850966e-8",
            "extra": "mean: 262.64435158864876 nsec\nrounds: 188715"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3124157.58701471,
            "unit": "iter/sec",
            "range": "stddev: 1.6756753031372012e-8",
            "extra": "mean: 320.0862863492063 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3156925.7030470367,
            "unit": "iter/sec",
            "range": "stddev: 2.013444610532998e-8",
            "extra": "mean: 316.7638690489601 nsec\nrounds: 196117"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 682837.0986359769,
            "unit": "iter/sec",
            "range": "stddev: 5.121560365250057e-8",
            "extra": "mean: 1.4644781339472213 usec\nrounds: 69450"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b95b3d2782d05f5e4c5e53754a0e4c38e99f296d",
          "message": "Recursion guard (#134)\n\n* adding recursion_guard argument\r\n\r\n* fix linting, start on logic\r\n\r\n* basic recursion implementation working\r\n\r\n* make recursion guard option-al\r\n\r\n* more tests\r\n\r\n* move RecursionGuard, optimise recursion check\r\n\r\n* tests for recursion across a wrap validator\r\n\r\n* bump\r\n\r\n* tweaks",
          "timestamp": "2022-06-29T18:08:36+01:00",
          "tree_id": "4cda17654d0aecf4895a730e8f39aa657b023a68",
          "url": "https://github.com/fcfangcc/pydantic-core/commit/b95b3d2782d05f5e4c5e53754a0e4c38e99f296d"
        },
        "date": 1656557664009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 14590.549450451716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027219549209839837",
            "extra": "mean: 68.5375148753593 usec\nrounds: 16000"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 12501.376555776293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075091390525994465",
            "extra": "mean: 79.99119101311666 usec\nrounds: 15601"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 1806.499802251273,
            "unit": "iter/sec",
            "range": "stddev: 0.000011505565837244483",
            "extra": "mean: 553.5566617576116 usec\nrounds: 2173"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 7491.058019741658,
            "unit": "iter/sec",
            "range": "stddev: 0.000004780502032620274",
            "extra": "mean: 133.49249162997228 usec\nrounds: 8244"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 87454.99246774042,
            "unit": "iter/sec",
            "range": "stddev: 7.257249504935794e-7",
            "extra": "mean: 11.434452988705825 usec\nrounds: 98040"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 31016.551804098166,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013677760556047444",
            "extra": "mean: 32.24085018592788 usec\nrounds: 34129"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 484185.7350154121,
            "unit": "iter/sec",
            "range": "stddev: 1.5679242331178456e-7",
            "extra": "mean: 2.065323134660737 usec\nrounds: 51814"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 1978858.7068572028,
            "unit": "iter/sec",
            "range": "stddev: 5.757633863671787e-8",
            "extra": "mean: 505.3417894535163 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 880896.4978711329,
            "unit": "iter/sec",
            "range": "stddev: 1.0673037715551458e-7",
            "extra": "mean: 1.135207146828753 usec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 6882577.835360509,
            "unit": "iter/sec",
            "range": "stddev: 1.2830342094583783e-8",
            "extra": "mean: 145.29439752388478 nsec\nrounds: 73530"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 9897.801048460413,
            "unit": "iter/sec",
            "range": "stddev: 0.000004136607604244871",
            "extra": "mean: 101.03254198623728 usec\nrounds: 10718"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 394214.90872036037,
            "unit": "iter/sec",
            "range": "stddev: 1.2455955997266957e-7",
            "extra": "mean: 2.536687420691829 usec\nrounds: 42554"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 23562.990297937307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023784301144222173",
            "extra": "mean: 42.439435205621564 usec\nrounds: 29069"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 5368.708272945617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030107607368778886",
            "extra": "mean: 186.26454431120283 usec\nrounds: 6680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 23433.498074789353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021793839407103634",
            "extra": "mean: 42.67395319334922 usec\nrounds: 25381"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 8644.744480919619,
            "unit": "iter/sec",
            "range": "stddev: 0.000006100270268909435",
            "extra": "mean: 115.67721894003523 usec\nrounds: 10834"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 3602.778636298016,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069394009261873",
            "extra": "mean: 277.56354218518845 usec\nrounds: 4421"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 21150.329157525393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018647559600489683",
            "extra": "mean: 47.28058804910821 usec\nrounds: 29069"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 6197.390840311988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057061232050326486",
            "extra": "mean: 161.35822731968577 usec\nrounds: 7716"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 6172.9060704902395,
            "unit": "iter/sec",
            "range": "stddev: 0.000004420825611507267",
            "extra": "mean: 161.99825310489166 usec\nrounds: 8858"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1527.3309210715431,
            "unit": "iter/sec",
            "range": "stddev: 0.000021284913442026118",
            "extra": "mean: 654.7369572655683 usec\nrounds: 1872"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 46339.535236271724,
            "unit": "iter/sec",
            "range": "stddev: 0.000001717082309510357",
            "extra": "mean: 21.57984526390463 usec\nrounds: 57472"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 45923.77733307438,
            "unit": "iter/sec",
            "range": "stddev: 0.00000125890946772156",
            "extra": "mean: 21.77521227723135 usec\nrounds: 57472"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 47224.2150223306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012269840972738558",
            "extra": "mean: 21.175576968873628 usec\nrounds: 51547"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 6923191.710887762,
            "unit": "iter/sec",
            "range": "stddev: 1.3057290508482278e-8",
            "extra": "mean: 144.44204952860412 nsec\nrounds: 75188"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1018551.1079850054,
            "unit": "iter/sec",
            "range": "stddev: 1.3054532021681217e-7",
            "extra": "mean: 981.7867676547559 nsec\nrounds: 131579"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 645896.9743932541,
            "unit": "iter/sec",
            "range": "stddev: 8.80114019716599e-8",
            "extra": "mean: 1.5482345322013438 usec\nrounds: 71429"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6190651.610932478,
            "unit": "iter/sec",
            "range": "stddev: 5.9528982387881105e-9",
            "extra": "mean: 161.53388412843503 nsec\nrounds: 59877"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2327836.080794891,
            "unit": "iter/sec",
            "range": "stddev: 5.542030582620589e-8",
            "extra": "mean: 429.5835124520455 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 925843.676710009,
            "unit": "iter/sec",
            "range": "stddev: 7.475856561410442e-8",
            "extra": "mean: 1.080095944007882 usec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2259358.544324307,
            "unit": "iter/sec",
            "range": "stddev: 4.6813645288599875e-8",
            "extra": "mean: 442.6035002335202 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6301848.665208143,
            "unit": "iter/sec",
            "range": "stddev: 1.429633889001135e-8",
            "extra": "mean: 158.68359478716005 nsec\nrounds: 63695"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3370230.6430059187,
            "unit": "iter/sec",
            "range": "stddev: 2.7650229608032066e-8",
            "extra": "mean: 296.71559781078486 nsec\nrounds: 38022"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1360206.701011142,
            "unit": "iter/sec",
            "range": "stddev: 9.624671056931066e-8",
            "extra": "mean: 735.1823801900866 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2190007.424184016,
            "unit": "iter/sec",
            "range": "stddev: 6.578507960845873e-8",
            "extra": "mean: 456.6194566090377 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2650470.5460418877,
            "unit": "iter/sec",
            "range": "stddev: 5.859141866865628e-8",
            "extra": "mean: 377.2914969734856 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3293905.645627978,
            "unit": "iter/sec",
            "range": "stddev: 3.0656719451244535e-8",
            "extra": "mean: 303.5909669505736 nsec\nrounds: 36765"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3504039.5592936343,
            "unit": "iter/sec",
            "range": "stddev: 4.455113748032999e-8",
            "extra": "mean: 285.3849059289264 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2749181.870632813,
            "unit": "iter/sec",
            "range": "stddev: 5.4900997564971894e-8",
            "extra": "mean: 363.7445782259021 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2765539.8743318277,
            "unit": "iter/sec",
            "range": "stddev: 5.31561585182978e-8",
            "extra": "mean: 361.59305070284205 nsec\nrounds: 178572"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 629540.5537026983,
            "unit": "iter/sec",
            "range": "stddev: 1.4282053641633577e-7",
            "extra": "mean: 1.5884600191654907 usec\nrounds: 69926"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3a6bf352bfb0127b4dd775aa60a3ea4c269e31d",
          "message": "Error improvements (#138)\n\n* making val_line_error a function\r\n\r\n* simplify context\r\n\r\n* simplify location\r\n\r\n* better error creation\r\n\r\n* cleanup\r\n\r\n* update context! macro\r\n\r\n* more cleanup\r\n\r\n* move error context into enum (#139)\r\n\r\n* move error context into enum\r\n\r\n* tweak\r\n\r\n* simplify error rendering\r\n\r\n* use static strings where possible\r\n\r\n* tweak error kind rendering\r\n\r\n* improve coverage\r\n\r\n* improve coverage\r\n\r\n* cleanup\r\n\r\n* remove unused code\r\n\r\n* correct imports\r\n\r\n* cleanup location logic",
          "timestamp": "2022-07-02T14:46:57+01:00",
          "tree_id": "cc1381884843d9d6d97da0f5a76b709b7357c841",
          "url": "https://github.com/fcfangcc/pydantic-core/commit/d3a6bf352bfb0127b4dd775aa60a3ea4c269e31d"
        },
        "date": 1656827476190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 16790.91008666499,
            "unit": "iter/sec",
            "range": "stddev: 0.000015350514169686486",
            "extra": "mean: 59.5560332845913 usec\nrounds: 17065"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 14317.028328593624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020839676036427254",
            "extra": "mean: 69.84689678952608 usec\nrounds: 14514"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2199.2712726988393,
            "unit": "iter/sec",
            "range": "stddev: 0.000004715058573207213",
            "extra": "mean: 454.6960679265584 usec\nrounds: 2223"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 8790.268987648906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023107517048159745",
            "extra": "mean: 113.76216147709327 usec\nrounds: 8961"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 103617.75292461616,
            "unit": "iter/sec",
            "range": "stddev: 4.101011446561464e-7",
            "extra": "mean: 9.65085587918046 usec\nrounds: 106383"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 36948.674638978395,
            "unit": "iter/sec",
            "range": "stddev: 7.989900156232367e-7",
            "extra": "mean: 27.064570238875806 usec\nrounds: 37593"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 557463.1804189469,
            "unit": "iter/sec",
            "range": "stddev: 5.3070109419585364e-8",
            "extra": "mean: 1.7938404456575343 usec\nrounds: 56498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2419431.781892537,
            "unit": "iter/sec",
            "range": "stddev: 2.084635829285702e-8",
            "extra": "mean: 413.3201884356637 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1058082.522659953,
            "unit": "iter/sec",
            "range": "stddev: 4.455037288312479e-8",
            "extra": "mean: 945.1058670598081 nsec\nrounds: 111112"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 7735834.743209359,
            "unit": "iter/sec",
            "range": "stddev: 4.2335411191273806e-9",
            "extra": "mean: 129.26853186434357 nsec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 10478.51559438736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013628926268462226",
            "extra": "mean: 95.4333646776871 usec\nrounds: 10571"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 475837.5700164774,
            "unit": "iter/sec",
            "range": "stddev: 1.7143469326198808e-7",
            "extra": "mean: 2.1015574704727737 usec\nrounds: 48310"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 28151.45816865332,
            "unit": "iter/sec",
            "range": "stddev: 7.264633154870942e-7",
            "extra": "mean: 35.52213864053057 usec\nrounds: 28491"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6503.48618849731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019770184181380816",
            "extra": "mean: 153.7636847401469 usec\nrounds: 5459"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 28186.82888274506,
            "unit": "iter/sec",
            "range": "stddev: 7.257192933646574e-7",
            "extra": "mean: 35.47756309019079 usec\nrounds: 28491"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 10089.87035832006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014833138854503243",
            "extra": "mean: 99.10930115919722 usec\nrounds: 10267"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4243.969730380085,
            "unit": "iter/sec",
            "range": "stddev: 0.000002332114764284304",
            "extra": "mean: 235.6284477812336 usec\nrounds: 3763"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 23991.31854698763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011960212455416674",
            "extra": "mean: 41.68174408761543 usec\nrounds: 24692"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 6909.875981298732,
            "unit": "iter/sec",
            "range": "stddev: 0.000001704430404421965",
            "extra": "mean: 144.7203976896915 usec\nrounds: 7013"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 6902.819370578883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018652838370712745",
            "extra": "mean: 144.86834238516926 usec\nrounds: 6998"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1719.2464192989894,
            "unit": "iter/sec",
            "range": "stddev: 0.00000421430182087116",
            "extra": "mean: 581.6501862529649 usec\nrounds: 1702"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 56116.13521829155,
            "unit": "iter/sec",
            "range": "stddev: 5.950908019939523e-7",
            "extra": "mean: 17.820186584660615 usec\nrounds: 57143"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 56183.352328935274,
            "unit": "iter/sec",
            "range": "stddev: 5.20522200879656e-7",
            "extra": "mean: 17.798866720257717 usec\nrounds: 57143"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 56939.525167266314,
            "unit": "iter/sec",
            "range": "stddev: 5.650643897054902e-7",
            "extra": "mean: 17.56249278620408 usec\nrounds: 57804"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 7907380.304217258,
            "unit": "iter/sec",
            "range": "stddev: 4.566360024445814e-9",
            "extra": "mean: 126.46413369881205 nsec\nrounds: 80001"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1194221.2831528597,
            "unit": "iter/sec",
            "range": "stddev: 3.891623345473902e-8",
            "extra": "mean: 837.3657496370203 nsec\nrounds: 121952"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 775786.2767367042,
            "unit": "iter/sec",
            "range": "stddev: 4.8259354819526104e-8",
            "extra": "mean: 1.2890148098606704 usec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 7373773.814183832,
            "unit": "iter/sec",
            "range": "stddev: 5.203459552156305e-9",
            "extra": "mean: 135.61576815344102 nsec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2763341.723468777,
            "unit": "iter/sec",
            "range": "stddev: 1.782444198470591e-8",
            "extra": "mean: 361.88068652772927 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1133046.7122598658,
            "unit": "iter/sec",
            "range": "stddev: 4.509050797210297e-8",
            "extra": "mean: 882.576145518601 nsec\nrounds: 116280"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2661460.2429140606,
            "unit": "iter/sec",
            "range": "stddev: 2.0597179800472102e-8",
            "extra": "mean: 375.7335855992985 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6836934.970317735,
            "unit": "iter/sec",
            "range": "stddev: 4.869278227557726e-9",
            "extra": "mean: 146.26437202363095 nsec\nrounds: 69931"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4162375.3507510656,
            "unit": "iter/sec",
            "range": "stddev: 5.5816214923925275e-9",
            "extra": "mean: 240.2474346335659 nsec\nrounds: 41842"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1601178.5789967005,
            "unit": "iter/sec",
            "range": "stddev: 3.8994404223046904e-8",
            "extra": "mean: 624.539956454055 nsec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2782072.3056862364,
            "unit": "iter/sec",
            "range": "stddev: 1.914750860642412e-8",
            "extra": "mean: 359.44428833009994 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3025140.564274379,
            "unit": "iter/sec",
            "range": "stddev: 2.1020795245196356e-8",
            "extra": "mean: 330.5631519439373 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3868203.224244989,
            "unit": "iter/sec",
            "range": "stddev: 1.4353432316179537e-8",
            "extra": "mean: 258.51795834559226 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4003841.2730429936,
            "unit": "iter/sec",
            "range": "stddev: 1.5429847389109394e-8",
            "extra": "mean: 249.76015076637168 nsec\nrounds: 41323"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3221191.7420652206,
            "unit": "iter/sec",
            "range": "stddev: 1.7642333474135335e-8",
            "extra": "mean: 310.44410891176733 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3277143.5537099293,
            "unit": "iter/sec",
            "range": "stddev: 1.8525638143212834e-8",
            "extra": "mean: 305.14378867224696 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 740383.2785037613,
            "unit": "iter/sec",
            "range": "stddev: 4.602834934851347e-8",
            "extra": "mean: 1.3506517894643832 usec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f78b3033d5aff9ae1a8127bd7476fdba09611a84",
          "message": "fix recursion cycle edge case (#140)\n\n* fix recursion cycle edge case\r\n\r\n* improve validator names\r\n\r\n* simplifying validator names\r\n\r\n* all tests passing\r\n\r\n* implementing complete via RefCell - failed\r\n\r\n* names working correctly\r\n\r\n* fixing all validator names\r\n\r\n* function names and testing function recursion\r\n\r\n* correct dict validator name\r\n\r\n* backup recursion guard, fix #143\r\n\r\n* cleanup\r\n\r\n* fix rust benchmarks",
          "timestamp": "2022-07-04T06:43:23+01:00",
          "tree_id": "9de4fe6ac5fa0b885c2c6657a4660f6bf8dc1d94",
          "url": "https://github.com/fcfangcc/pydantic-core/commit/f78b3033d5aff9ae1a8127bd7476fdba09611a84"
        },
        "date": 1656915302284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 13332.47965644593,
            "unit": "iter/sec",
            "range": "stddev: 0.000023503359297856673",
            "extra": "mean: 75.00480223995874 usec\nrounds: 15625"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 10866.853356630372,
            "unit": "iter/sec",
            "range": "stddev: 0.00006059094295646982",
            "extra": "mean: 92.0229589175282 usec\nrounds: 13193"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 1797.5167276017607,
            "unit": "iter/sec",
            "range": "stddev: 0.00010365651275097098",
            "extra": "mean: 556.3230564948321 usec\nrounds: 2071"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 7145.337755041971,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169356029403848",
            "extra": "mean: 139.95139688034607 usec\nrounds: 8078"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 91848.91326279491,
            "unit": "iter/sec",
            "range": "stddev: 0.00001391203567497745",
            "extra": "mean: 10.887445092995653 usec\nrounds: 104167"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 31400.62668346059,
            "unit": "iter/sec",
            "range": "stddev: 0.000009870650842386302",
            "extra": "mean: 31.846498163258712 usec\nrounds: 34844"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 527958.6656513233,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011537003910252188",
            "extra": "mean: 1.8940876721214368 usec\nrounds: 56498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2259978.9286967674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011744012606293066",
            "extra": "mean: 442.4820016249947 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1025427.3094695066,
            "unit": "iter/sec",
            "range": "stddev: 0.000001341544024993021",
            "extra": "mean: 975.2032062781429 nsec\nrounds: 119048"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 7297877.601327894,
            "unit": "iter/sec",
            "range": "stddev: 1.4653784969656474e-7",
            "extra": "mean: 137.02614028736676 nsec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 8692.061299420291,
            "unit": "iter/sec",
            "range": "stddev: 0.00006158585301318098",
            "extra": "mean: 115.04750893400788 usec\nrounds: 9738"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 448830.6091620351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012251119323118873",
            "extra": "mean: 2.2280120374745334 usec\nrounds: 48781"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 22594.295699051152,
            "unit": "iter/sec",
            "range": "stddev: 0.000010333862609907475",
            "extra": "mean: 44.25895869115296 usec\nrounds: 24571"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 5615.331598826611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000370035087303773",
            "extra": "mean: 178.08387312495697 usec\nrounds: 6266"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 21927.351726869885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003530694708753951",
            "extra": "mean: 45.60514249308981 usec\nrounds: 24331"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 9125.815424554468,
            "unit": "iter/sec",
            "range": "stddev: 0.00006953623884546242",
            "extra": "mean: 109.57924891942696 usec\nrounds: 9951"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 3827.857488558573,
            "unit": "iter/sec",
            "range": "stddev: 0.00011500764795857016",
            "extra": "mean: 261.2427455799987 usec\nrounds: 4186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 22180.319636894466,
            "unit": "iter/sec",
            "range": "stddev: 0.00003231350068249885",
            "extra": "mean: 45.08501303726085 usec\nrounds: 24391"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 5894.32226418192,
            "unit": "iter/sec",
            "range": "stddev: 0.000055083348032531994",
            "extra": "mean: 169.65478899528597 usec\nrounds: 6597"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 6001.553835865128,
            "unit": "iter/sec",
            "range": "stddev: 0.000053868980026921046",
            "extra": "mean: 166.6235157342131 usec\nrounds: 6610"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1601.4233665276415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008147574644629245",
            "extra": "mean: 624.4444916326499 usec\nrounds: 1733"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 41656.82935179401,
            "unit": "iter/sec",
            "range": "stddev: 0.000030738774258317876",
            "extra": "mean: 24.005667631469258 usec\nrounds: 49752"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 43284.02002134931,
            "unit": "iter/sec",
            "range": "stddev: 0.000018394809419956042",
            "extra": "mean: 23.103214523668605 usec\nrounds: 49505"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 49849.03629192572,
            "unit": "iter/sec",
            "range": "stddev: 0.000007655850566975758",
            "extra": "mean: 20.060568355701086 usec\nrounds: 54348"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 6962315.445252091,
            "unit": "iter/sec",
            "range": "stddev: 2.788731965280367e-7",
            "extra": "mean: 143.63037812107513 nsec\nrounds: 79366"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1076894.2002382344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012387661414335786",
            "extra": "mean: 928.596328013338 nsec\nrounds: 133334"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 722741.9361129708,
            "unit": "iter/sec",
            "range": "stddev: 6.883089571615276e-7",
            "extra": "mean: 1.3836197265351338 usec\nrounds: 82645"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 6597086.118167637,
            "unit": "iter/sec",
            "range": "stddev: 3.540335086988299e-7",
            "extra": "mean: 151.5820745838558 nsec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2472725.0032006614,
            "unit": "iter/sec",
            "range": "stddev: 6.960520915744334e-7",
            "extra": "mean: 404.4121358847217 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 964117.282461747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015578698199998147",
            "extra": "mean: 1.0372182079823193 usec\nrounds: 113637"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2318497.789109562,
            "unit": "iter/sec",
            "range": "stddev: 8.210184916551638e-7",
            "extra": "mean: 431.3137604428491 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 6575159.324877435,
            "unit": "iter/sec",
            "range": "stddev: 2.0362435233546642e-7",
            "extra": "mean: 152.0875693790714 nsec\nrounds: 74627"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3844169.220388139,
            "unit": "iter/sec",
            "range": "stddev: 1.1429769482000148e-7",
            "extra": "mean: 260.1342299648286 nsec\nrounds: 41667"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1404475.6240096656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021844875054392928",
            "extra": "mean: 712.0095093891956 nsec\nrounds: 166667"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2643837.9717819896,
            "unit": "iter/sec",
            "range": "stddev: 4.024612927241403e-7",
            "extra": "mean: 378.2380050041029 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 2796812.2485948517,
            "unit": "iter/sec",
            "range": "stddev: 6.460435843943666e-7",
            "extra": "mean: 357.5499215231236 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3596025.5070708506,
            "unit": "iter/sec",
            "range": "stddev: 3.107729704614928e-7",
            "extra": "mean: 278.0847905649025 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3553429.0716593685,
            "unit": "iter/sec",
            "range": "stddev: 4.2935154277571447e-7",
            "extra": "mean: 281.4183088601052 nsec\nrounds: 181819"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 2964934.806288863,
            "unit": "iter/sec",
            "range": "stddev: 4.5581662686054e-7",
            "extra": "mean: 337.275544095897 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 2957136.0431744657,
            "unit": "iter/sec",
            "range": "stddev: 4.3495661850580465e-7",
            "extra": "mean: 338.1650304207725 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 661841.6280325447,
            "unit": "iter/sec",
            "range": "stddev: 0.000001419205139683108",
            "extra": "mean: 1.510935483119522 usec\nrounds: 74627"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "committer": {
            "email": "s@muelcolvin.com",
            "name": "Samuel Colvin",
            "username": "samuelcolvin"
          },
          "distinct": true,
          "id": "974adf46867c9ffcf102a17b5424d6b9eaf808a4",
          "message": "add a readme to python benchmarks",
          "timestamp": "2022-07-06T13:01:42+01:00",
          "tree_id": "27eaad8ffc549d798717e311a54e74a0126d7505",
          "url": "https://github.com/fcfangcc/pydantic-core/commit/974adf46867c9ffcf102a17b5424d6b9eaf808a4"
        },
        "date": 1657183210738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 17947.93160453372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011552258984566351",
            "extra": "mean: 55.716726697765885 usec\nrounds: 18657"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 15140.46309737274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011969506688773943",
            "extra": "mean: 66.04817789051154 usec\nrounds: 15577"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2169.0299376230223,
            "unit": "iter/sec",
            "range": "stddev: 0.000008452631598502255",
            "extra": "mean: 461.0355913740275 usec\nrounds: 2249"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9213.125922877787,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016858692384757596",
            "extra": "mean: 108.54079368619362 usec\nrounds: 9408"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python",
            "value": 113478.75092641903,
            "unit": "iter/sec",
            "range": "stddev: 3.683388981860785e-7",
            "extra": "mean: 8.812222480739251 usec\nrounds: 119062"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json",
            "value": 34942.98797436833,
            "unit": "iter/sec",
            "range": "stddev: 8.050868428662543e-7",
            "extra": "mean: 28.618044934609724 usec\nrounds: 36631"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 584837.9270125929,
            "unit": "iter/sec",
            "range": "stddev: 5.053819940098331e-8",
            "extra": "mean: 1.7098754266988205 usec\nrounds: 58824"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2414854.4877133146,
            "unit": "iter/sec",
            "range": "stddev: 2.0962889149547202e-8",
            "extra": "mean: 414.1036261551206 nsec\nrounds: 200000"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1092791.3080865478,
            "unit": "iter/sec",
            "range": "stddev: 4.150395156106244e-8",
            "extra": "mean: 915.08780551181 nsec\nrounds: 111124"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8501093.710335035,
            "unit": "iter/sec",
            "range": "stddev: 4.192842635992898e-9",
            "extra": "mean: 117.63192291178709 nsec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 9988.5162358208,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011431485446196565",
            "extra": "mean: 100.11496967025009 usec\nrounds: 10122"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 476522.97229517676,
            "unit": "iter/sec",
            "range": "stddev: 6.350478836848745e-8",
            "extra": "mean: 2.0985347153012612 usec\nrounds: 50001"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 26829.188934375114,
            "unit": "iter/sec",
            "range": "stddev: 8.718532796032437e-7",
            "extra": "mean: 37.272837522074404 usec\nrounds: 28170"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 6428.76224379851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015919776467572972",
            "extra": "mean: 155.55093843525594 usec\nrounds: 6481"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 26799.187423972347,
            "unit": "iter/sec",
            "range": "stddev: 8.92772585983702e-7",
            "extra": "mean: 37.31456421344635 usec\nrounds: 28491"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 12499.750092288425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012093444761788756",
            "extra": "mean: 80.0015994413311 usec\nrounds: 12887"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 4391.754931719685,
            "unit": "iter/sec",
            "range": "stddev: 0.000002187643618802258",
            "extra": "mean: 227.69940844773606 usec\nrounds: 4451"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 26490.448702786576,
            "unit": "iter/sec",
            "range": "stddev: 7.920995793820689e-7",
            "extra": "mean: 37.74945495335488 usec\nrounds: 26739"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 7673.807584133455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014115240551701933",
            "extra": "mean: 130.3134055729549 usec\nrounds: 7752"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 7678.00836885452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014651065965472862",
            "extra": "mean: 130.2421086249988 usec\nrounds: 7687"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1779.167943882522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035508758449390095",
            "extra": "mean: 562.0604864416497 usec\nrounds: 1807"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 52307.45122086171,
            "unit": "iter/sec",
            "range": "stddev: 6.17288969265868e-7",
            "extra": "mean: 19.117735172712287 usec\nrounds: 56180"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 52390.770710161174,
            "unit": "iter/sec",
            "range": "stddev: 6.118302262116738e-7",
            "extra": "mean: 19.0873313456725 usec\nrounds: 56180"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 51876.65912471616,
            "unit": "iter/sec",
            "range": "stddev: 6.340763474837358e-7",
            "extra": "mean: 19.2764919112449 usec\nrounds: 56498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8700595.581486795,
            "unit": "iter/sec",
            "range": "stddev: 3.922537449723969e-9",
            "extra": "mean: 114.93466057981074 nsec\nrounds: 88504"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1225584.5297483488,
            "unit": "iter/sec",
            "range": "stddev: 3.773649569873091e-8",
            "extra": "mean: 815.9371921948 nsec\nrounds: 126583"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 725679.4299114997,
            "unit": "iter/sec",
            "range": "stddev: 4.923199586156072e-8",
            "extra": "mean: 1.378018941672199 usec\nrounds: 75194"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8106423.298238253,
            "unit": "iter/sec",
            "range": "stddev: 4.2703239181768e-9",
            "extra": "mean: 123.35896648973979 nsec\nrounds: 84034"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 2683970.6428544605,
            "unit": "iter/sec",
            "range": "stddev: 2.0560718407115223e-8",
            "extra": "mean: 372.5823166738287 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 976695.2051154929,
            "unit": "iter/sec",
            "range": "stddev: 7.641392369416932e-8",
            "extra": "mean: 1.0238608675075118 usec\nrounds: 107527"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2564211.5423200843,
            "unit": "iter/sec",
            "range": "stddev: 2.2671404722838215e-8",
            "extra": "mean: 389.9834251179422 nsec\nrounds: 185220"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8103369.549714785,
            "unit": "iter/sec",
            "range": "stddev: 4.198704318132688e-9",
            "extra": "mean: 123.40545422049252 nsec\nrounds: 84034"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 3925846.011454797,
            "unit": "iter/sec",
            "range": "stddev: 2.0800963805230886e-8",
            "extra": "mean: 254.72216614766984 nsec\nrounds: 192345"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1600998.7458642803,
            "unit": "iter/sec",
            "range": "stddev: 3.8571561542258157e-8",
            "extra": "mean: 624.6101082730769 nsec\nrounds: 163935"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 2334693.141046552,
            "unit": "iter/sec",
            "range": "stddev: 3.8310676158782825e-8",
            "extra": "mean: 428.3218134404388 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3084516.886712086,
            "unit": "iter/sec",
            "range": "stddev: 1.755606676045448e-8",
            "extra": "mean: 324.19987853058865 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 3784864.9258935475,
            "unit": "iter/sec",
            "range": "stddev: 1.5122942914042585e-8",
            "extra": "mean: 264.2102213893637 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 4240366.957757002,
            "unit": "iter/sec",
            "range": "stddev: 6.234031031560008e-9",
            "extra": "mean: 235.82864642658276 nsec\nrounds: 42554"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3292134.3889874793,
            "unit": "iter/sec",
            "range": "stddev: 1.8680187593418438e-8",
            "extra": "mean: 303.75430703719496 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 3361566.301652648,
            "unit": "iter/sec",
            "range": "stddev: 1.726241973751681e-8",
            "extra": "mean: 297.48037380899274 nsec\nrounds: 192345"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 688418.0283770903,
            "unit": "iter/sec",
            "range": "stddev: 4.842694276300399e-8",
            "extra": "mean: 1.452605769720367 usec\nrounds: 70922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "philchen2000@gmail.com",
            "name": "Phil Chen",
            "username": "philhchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25120edac6f9a17ce19125c53125c0c9d5411b52",
          "message": "add docstrings and docstring tests (#350)\n\n* add docstrings and docstring tests\r\n\r\n* account for multiple matches\r\n\r\n* update test_docstrings\r\n\r\n* improve test\r\n\r\n* fix\r\n\r\n* address comments\r\n\r\n* address comments\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* Update pydantic_core/core_schema.py\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>\r\n\r\n* move ref\r\n\r\n* fix lint\r\n\r\nCo-authored-by: Samuel Colvin <s@muelcolvin.com>",
          "timestamp": "2023-01-13T15:46:08Z",
          "tree_id": "538c44305aa359fe7f4fcb806dde00e7725a1785",
          "url": "https://github.com/fcfangcc/pydantic-core/commit/25120edac6f9a17ce19125c53125c0c9d5411b52"
        },
        "date": 1674025981152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_lax",
            "value": 18418.702588176064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014672094643492672",
            "extra": "mean: 54.292640603358926 usec\nrounds: 18762"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_strict",
            "value": 16589.52323938945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010360412756979073",
            "extra": "mean: 60.279007755065734 usec\nrounds: 16892"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_error",
            "value": 2388.504767764429,
            "unit": "iter/sec",
            "range": "stddev: 0.000005100581150250919",
            "extra": "mean: 418.6719714761009 usec\nrounds: 2419"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_isinstance",
            "value": 3356.7495519083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041973609063123986",
            "extra": "mean: 297.90724167416766 usec\nrounds: 3393"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_complete_core_json",
            "value": 9438.16906291516,
            "unit": "iter/sec",
            "range": "stddev: 0.000001698130399951374",
            "extra": "mean: 105.9527534772863 usec\nrounds: 9634"
          },
          {
            "name": "tests/benchmarks/test_complete_benchmark.py::test_build_schema",
            "value": 5698.771598888858,
            "unit": "iter/sec",
            "range": "stddev: 0.000002950999384515592",
            "extra": "mean: 175.47641323175316 usec\nrounds: 5774"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python_fs",
            "value": 71906.54565414909,
            "unit": "iter/sec",
            "range": "stddev: 4.791772801178181e-7",
            "extra": "mean: 13.906939777217609 usec\nrounds: 74075"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_python_not_fs",
            "value": 74086.34602508917,
            "unit": "iter/sec",
            "range": "stddev: 3.441827103253067e-7",
            "extra": "mean: 13.49776380740052 usec\nrounds: 76336"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json_fs",
            "value": 37434.85014657946,
            "unit": "iter/sec",
            "range": "stddev: 8.234537958633695e-7",
            "extra": "mean: 26.713076079760214 usec\nrounds: 38315"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkSimpleModel::test_core_json_not_fs",
            "value": 38035.593248989215,
            "unit": "iter/sec",
            "range": "stddev: 6.193624226291335e-7",
            "extra": "mean: 26.291163475584142 usec\nrounds: 38911"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestModelLarge::test_core_python",
            "value": 46385.384834673714,
            "unit": "iter/sec",
            "range": "stddev: 5.107249506865616e-7",
            "extra": "mean: 21.558514682247203 usec\nrounds: 47847"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestModelLarge::test_core_json_fs",
            "value": 34439.59205955855,
            "unit": "iter/sec",
            "range": "stddev: 7.499727350087181e-7",
            "extra": "mean: 29.036348580164283 usec\nrounds: 35461"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bool_core",
            "value": 646550.109285696,
            "unit": "iter/sec",
            "range": "stddev: 4.150881413082776e-8",
            "extra": "mean: 1.5466705296899097 usec\nrounds: 67115"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_dict",
            "value": 2140419.3546281257,
            "unit": "iter/sec",
            "range": "stddev: 2.0840267442281988e-8",
            "extra": "mean: 467.19816742361894 nsec\nrounds: 185186"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_small_class_core_model",
            "value": 1018176.3652247167,
            "unit": "iter/sec",
            "range": "stddev: 3.423052886960399e-8",
            "extra": "mean: 982.1481171186438 nsec\nrounds: 105264"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_lax",
            "value": 8407368.791239077,
            "unit": "iter/sec",
            "range": "stddev: 4.033605039216245e-9",
            "extra": "mean: 118.9432775973607 nsec\nrounds: 86957"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_core_string_strict",
            "value": 8557076.998828672,
            "unit": "iter/sec",
            "range": "stddev: 3.544040180842335e-9",
            "extra": "mean: 116.86233513346914 nsec\nrounds: 88496"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_recursive_model_core",
            "value": 10646.942969916261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010415336063868002",
            "extra": "mean: 93.9236739433634 usec\nrounds: 10765"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_dict_models_core",
            "value": 54258.061412381634,
            "unit": "iter/sec",
            "range": "stddev: 4.338462814471465e-7",
            "extra": "mean: 18.430441006722017 usec\nrounds: 56498"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_py",
            "value": 3348.3030489232533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019268093146105634",
            "extra": "mean: 298.65874904052663 usec\nrounds: 3387"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_ints_core_json",
            "value": 7130.735947592653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013568496931957392",
            "extra": "mean: 140.23797927023244 usec\nrounds: 7236"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_any_core_py",
            "value": 2721162.1900307992,
            "unit": "iter/sec",
            "range": "stddev: 1.462976908215258e-8",
            "extra": "mean: 367.49003924342577 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core",
            "value": 2742.9342328763287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021833742617961147",
            "extra": "mean: 364.5730867383459 usec\nrounds: 2790"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_set_of_ints_core_json",
            "value": 5512.848908236157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017816931242072421",
            "extra": "mean: 181.39441451152547 usec\nrounds: 5568"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_frozenset_of_ints_core",
            "value": 16424.001130803998,
            "unit": "iter/sec",
            "range": "stddev: 8.954544668442598e-7",
            "extra": "mean: 60.886503357848184 usec\nrounds: 16529"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core",
            "value": 2158.4025710256215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028357355041473078",
            "extra": "mean: 463.3056008290538 usec\nrounds: 2172"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_any_core",
            "value": 5616.561674693224,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015221255211268226",
            "extra": "mean: 178.0448712075471 usec\nrounds: 5637"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dict_of_ints_core_json",
            "value": 1914.580208496886,
            "unit": "iter/sec",
            "range": "stddev: 0.000003952459389605796",
            "extra": "mean: 522.3077077481586 usec\nrounds: 1923"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_dict",
            "value": 5179.092077420626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017797248634499697",
            "extra": "mean: 193.08403578297376 usec\nrounds: 5198"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_many_models_core_model",
            "value": 733.3154487654102,
            "unit": "iter/sec",
            "range": "stddev: 0.004810495797099892",
            "extra": "mean: 1.363669620875399 msec\nrounds: 1485"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_list_of_nullable_core",
            "value": 34007.1344744129,
            "unit": "iter/sec",
            "range": "stddev: 5.336584230615124e-7",
            "extra": "mean: 29.405594309994093 usec\nrounds: 34482"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_bytes_core",
            "value": 8522933.097672997,
            "unit": "iter/sec",
            "range": "stddev: 3.5437995464552142e-9",
            "extra": "mean: 117.33049978688398 nsec\nrounds: 86957"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_python",
            "value": 1170022.7134539925,
            "unit": "iter/sec",
            "range": "stddev: 1.1704268872907898e-7",
            "extra": "mean: 854.68426253685 nsec\nrounds: 125001"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_model_core_json",
            "value": 868047.0976615859,
            "unit": "iter/sec",
            "range": "stddev: 3.778714868226294e-8",
            "extra": "mean: 1.1520112246140364 usec\nrounds: 89286"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_raw",
            "value": 8078429.924983442,
            "unit": "iter/sec",
            "range": "stddev: 3.717355932762182e-9",
            "extra": "mean: 123.78642994801532 nsec\nrounds: 81968"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_str",
            "value": 3062716.2234908226,
            "unit": "iter/sec",
            "range": "stddev: 2.196061663280649e-8",
            "extra": "mean: 326.5075596389157 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future",
            "value": 1155021.3315860836,
            "unit": "iter/sec",
            "range": "stddev: 4.2739842479238384e-8",
            "extra": "mean: 865.7848757018278 nsec\nrounds: 123457"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateTime::test_core_future_str",
            "value": 2912329.1555604087,
            "unit": "iter/sec",
            "range": "stddev: 2.202770207005598e-8",
            "extra": "mean: 343.36778110768654 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_date",
            "value": 8327705.91477042,
            "unit": "iter/sec",
            "range": "stddev: 3.5265850761756226e-9",
            "extra": "mean: 120.08108958625859 nsec\nrounds: 86207"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_str",
            "value": 4950677.385608143,
            "unit": "iter/sec",
            "range": "stddev: 1.4993185547028982e-8",
            "extra": "mean: 201.9925602316518 nsec\nrounds: 51550"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime",
            "value": 1603293.1785623014,
            "unit": "iter/sec",
            "range": "stddev: 4.05181015022197e-8",
            "extra": "mean: 623.7162443973799 nsec\nrounds: 175439"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_date_from_datetime_str",
            "value": 3564610.018490513,
            "unit": "iter/sec",
            "range": "stddev: 2.062177755418255e-8",
            "extra": "mean: 280.53559710952555 nsec\nrounds: 200000"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future",
            "value": 3207569.4571290747,
            "unit": "iter/sec",
            "range": "stddev: 2.451824521919602e-8",
            "extra": "mean: 311.76253963099344 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkDateX::test_core_future_str",
            "value": 4746093.63458637,
            "unit": "iter/sec",
            "range": "stddev: 1.530486124225415e-8",
            "extra": "mean: 210.69959360100074 nsec\nrounds: 49262"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_core",
            "value": 3942804.4152365504,
            "unit": "iter/sec",
            "range": "stddev: 9.104907312563613e-9",
            "extra": "mean: 253.62658014063703 nsec\nrounds: 47847"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_smart_union_coerce_core",
            "value": 3597529.4383661207,
            "unit": "iter/sec",
            "range": "stddev: 2.3959806092598974e-8",
            "extra": "mean: 277.96853844616663 nsec\nrounds: 196079"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_core",
            "value": 4162523.7418074557,
            "unit": "iter/sec",
            "range": "stddev: 4.937976632717417e-9",
            "extra": "mean: 240.23886998078157 nsec\nrounds: 42017"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::TestBenchmarkUnion::test_strict_union_error_core",
            "value": 756303.0374145271,
            "unit": "iter/sec",
            "range": "stddev: 4.327739929063412e-8",
            "extra": "mean: 1.3222213194048216 usec\nrounds: 78126"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_dont_raise_error",
            "value": 1067494.206849902,
            "unit": "iter/sec",
            "range": "stddev: 4.018032936431252e-8",
            "extra": "mean: 936.773233600096 nsec\nrounds: 108696"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_value_error",
            "value": 467801.8721976871,
            "unit": "iter/sec",
            "range": "stddev: 5.146196401506715e-8",
            "extra": "mean: 2.13765711390169 usec\nrounds: 47850"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_raise_error_custom",
            "value": 441563.62007093884,
            "unit": "iter/sec",
            "range": "stddev: 5.81694943270532e-8",
            "extra": "mean: 2.2646793226291675 usec\nrounds: 44643"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_positional_tuple",
            "value": 1449265.2638337896,
            "unit": "iter/sec",
            "range": "stddev: 2.988778079274961e-8",
            "extra": "mean: 690.0048079225585 nsec\nrounds: 149254"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_variable_tuple",
            "value": 1435408.7595054384,
            "unit": "iter/sec",
            "range": "stddev: 2.8697441690044556e-8",
            "extra": "mean: 696.6656664024176 nsec\nrounds: 144928"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_variable",
            "value": 1597730.4249851848,
            "unit": "iter/sec",
            "range": "stddev: 2.592743345159174e-8",
            "extra": "mean: 625.8878120882208 nsec\nrounds: 161291"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_tuple_many_positional",
            "value": 1483227.6818752286,
            "unit": "iter/sec",
            "range": "stddev: 2.643105896861511e-8",
            "extra": "mean: 674.2053241182806 nsec\nrounds: 153847"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_arguments",
            "value": 900425.8573391081,
            "unit": "iter/sec",
            "range": "stddev: 4.142869785139308e-8",
            "extra": "mean: 1.110585609963572 usec\nrounds: 91744"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_with_default",
            "value": 1190094.1840235365,
            "unit": "iter/sec",
            "range": "stddev: 3.094598476137776e-8",
            "extra": "mean: 840.2696302730059 nsec\nrounds: 123442"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_chain_list",
            "value": 873087.5487016795,
            "unit": "iter/sec",
            "range": "stddev: 4.135427288717878e-8",
            "extra": "mean: 1.145360509936328 usec\nrounds: 90091"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_chain_function",
            "value": 892364.9999569167,
            "unit": "iter/sec",
            "range": "stddev: 3.3414742197816196e-8",
            "extra": "mean: 1.1206176845221019 usec\nrounds: 90910"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_chain_two_functions",
            "value": 489131.29608719767,
            "unit": "iter/sec",
            "range": "stddev: 5.0616910115803116e-8",
            "extra": "mean: 2.0444408444102264 usec\nrounds: 51018"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_chain_nested_functions",
            "value": 493380.71634912724,
            "unit": "iter/sec",
            "range": "stddev: 5.1313389615167636e-8",
            "extra": "mean: 2.0268323565618136 usec\nrounds: 50506"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_generator_python",
            "value": 634405.2299820284,
            "unit": "iter/sec",
            "range": "stddev: 3.8225799072936405e-8",
            "extra": "mean: 1.576279565078687 usec\nrounds: 64517"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_generator_rust",
            "value": 2635189.894444946,
            "unit": "iter/sec",
            "range": "stddev: 2.1361519654213525e-8",
            "extra": "mean: 379.4792937343626 nsec\nrounds: 188680"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_isinstance_json",
            "value": 1912236.4493759042,
            "unit": "iter/sec",
            "range": "stddev: 2.4712642573197796e-8",
            "extra": "mean: 522.947881431939 nsec\nrounds: 192308"
          },
          {
            "name": "tests/benchmarks/test_micro_benchmarks.py::test_int_error",
            "value": 451874.297726836,
            "unit": "iter/sec",
            "range": "stddev: 5.151958813256241e-8",
            "extra": "mean: 2.213004822426292 usec\nrounds: 46512"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_json_direct_list_str",
            "value": 33606.94135312,
            "unit": "iter/sec",
            "range": "stddev: 8.200240960305781e-7",
            "extra": "mean: 29.755757582716228 usec\nrounds: 35212"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_python_json_list_str",
            "value": 43880.68374406611,
            "unit": "iter/sec",
            "range": "stddev: 0.000001513093407857079",
            "extra": "mean: 22.789070604106705 usec\nrounds: 44445"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_json_any_list_str",
            "value": 17574.447913587595,
            "unit": "iter/sec",
            "range": "stddev: 8.972909141913662e-7",
            "extra": "mean: 56.90079170150518 usec\nrounds: 18051"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_json_direct_list_int",
            "value": 32675.054805380834,
            "unit": "iter/sec",
            "range": "stddev: 7.897747953993582e-7",
            "extra": "mean: 30.604386311092675 usec\nrounds: 34247"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_json_any_list_int",
            "value": 17840.85266784361,
            "unit": "iter/sec",
            "range": "stddev: 9.001734221263122e-7",
            "extra": "mean: 56.05113267945999 usec\nrounds: 18149"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_python_json_list_int",
            "value": 44458.106916972916,
            "unit": "iter/sec",
            "range": "stddev: 4.652640125441631e-7",
            "extra": "mean: 22.49308549883906 usec\nrounds: 45872"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_python_json_list_none",
            "value": 41172.78647293216,
            "unit": "iter/sec",
            "range": "stddev: 4.749374197017946e-7",
            "extra": "mean: 24.287887356310474 usec\nrounds: 42195"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_date_format",
            "value": 328653.6857037943,
            "unit": "iter/sec",
            "range": "stddev: 1.9813365559652506e-7",
            "extra": "mean: 3.0427165234996636 usec\nrounds: 169492"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_date_format_function",
            "value": 272404.36579339334,
            "unit": "iter/sec",
            "range": "stddev: 2.0548843263574232e-7",
            "extra": "mean: 3.671013117162945 usec\nrounds: 140846"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_core_model_py",
            "value": 885310.931883816,
            "unit": "iter/sec",
            "range": "stddev: 4.088110145414298e-8",
            "extra": "mean: 1.1295466530295353 usec\nrounds: 93458"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_core_model_json",
            "value": 1006634.1125475502,
            "unit": "iter/sec",
            "range": "stddev: 3.128428181294833e-8",
            "extra": "mean: 993.4096088494925 nsec\nrounds: 101011"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_model_exclude_unset_false",
            "value": 797296.2405582954,
            "unit": "iter/sec",
            "range": "stddev: 4.465234873766451e-8",
            "extra": "mean: 1.2542389505058436 usec\nrounds: 84746"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_model_exclude_unset_true",
            "value": 613499.0038753616,
            "unit": "iter/sec",
            "range": "stddev: 4.5134879840812395e-8",
            "extra": "mean: 1.62999449662227 usec\nrounds: 65360"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_model_list_core_json",
            "value": 28338.02645839957,
            "unit": "iter/sec",
            "range": "stddev: 8.886908057766377e-7",
            "extra": "mean: 35.28827250789703 usec\nrounds: 29412"
          },
          {
            "name": "tests/benchmarks/test_serialization_micro.py::test_datetime",
            "value": 1090431.7266733977,
            "unit": "iter/sec",
            "range": "stddev: 4.981195112322396e-8",
            "extra": "mean: 917.0679608257489 nsec\nrounds: 119048"
          }
        ]
      }
    ]
  }
}