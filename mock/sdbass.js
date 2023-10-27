const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const sdbassData = [
  {
    'date': '2016-05-03',
    'cityname': '济南',
    'cityid': 1,
    'col1': 0.136,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-04',
    'cityname': '青岛',
    'cityid': 2,
    'col1': 0.147,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-02',
    'cityname': '淄博',
    'cityid': 3,
    'col1': 0.138,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-01',
    'cityname': '烟台',
    'cityid': 4,
    'col1': 0.142,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-08',
    'cityname': '潍坊',
    'cityid': 5,
    'col1': 0.134,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-06',
    'cityname': '聊城',
    'cityid': 6,
    'col1': 0.143,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '临沂',
    'cityid': 7,
    'col1': 0.141,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '东营',
    'cityid': 8,
    'col1': 0.156,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '济宁',
    'cityid': 9,
    'col1': 0.153,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '泰安',
    'cityid': 10,
    'col1': 0.159,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '德州',
    'cityid': 11,
    'col1': 0.176,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '威海',
    'cityid': 12,
    'col1': 0.126,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '滨州',
    'cityid': 13,
    'col1': 0.186,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '枣庄',
    'cityid': 14,
    'col1': 0.166,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '日照',
    'cityid': 15,
    'col1': 0.164,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '莱芜',
    'cityid': 16,
    'col1': 0.171,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '聊城',
    'cityid': 17,
    'col1': 0.131,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  },
  {
    'date': '2016-05-07',
    'cityname': '全省',
    'cityid': 999,
    'col1': 0.14,
    'name': '王小虎',
    'province': '上海',
    'city': '普陀区',
    'address': '上海市普陀区金沙江路 1518 弄',
    'zip': 200333
  }
]

module.exports = [
  {
    url: '/vue-admin-template/sdbass/wq',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: sdbassData.length,
          items: sdbassData
        }
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/op_time',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: 1233,
        data: [{ 'op_time': '2023-07-08', 'timestamp': 1688745600001 }]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/thismonth',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [
          {
            op_time: '2023-07-04',
            jqmyd: 79.329618,
            timestamp: 1688400000000
          },
          {
            op_time: '2023-07-05',
            jqmyd: 81.026421,
            timestamp: 1688486400000
          },
          {
            op_time: '2023-07-06',
            jqmyd: 81.026421,
            timestamp: 1688572800000
          },
          {
            op_time: '2023-07-07',
            jqmyd: 81.026421,
            timestamp: 1688659200000
          },
          {
            op_time: '2023-07-08',
            jqmyd: 80.862759,
            timestamp: 1688745600000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/lastmonth',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [
          {
            op_time: '2023-06-01',
            jqmyd: 79.162113,
            timestamp: 1685548800000
          },
          {
            op_time: '2023-06-02',
            jqmyd: 79.162113,
            timestamp: 1685635200000
          },
          {
            op_time: '2023-06-03',
            jqmyd: 79.662134,
            timestamp: 1685721600000
          },
          {
            op_time: '2023-06-04',
            jqmyd: 79.708127,
            timestamp: 1685808000000
          },
          {
            op_time: '2023-06-05',
            jqmyd: 78.990741,
            timestamp: 1685894400000
          },
          {
            op_time: '2023-06-06',
            jqmyd: 77.734829,
            timestamp: 1685980800000
          },
          {
            op_time: '2023-06-07',
            jqmyd: 79.100530,
            timestamp: 1686067200000
          },
          {
            op_time: '2023-06-08',
            jqmyd: 78.788269,
            timestamp: 1686153600000
          },
          {
            op_time: '2023-06-09',
            jqmyd: 78.854230,
            timestamp: 1686240000000
          },
          {
            op_time: '2023-06-10',
            jqmyd: 79.386964,
            timestamp: 1686326400000
          },
          {
            op_time: '2023-06-11',
            jqmyd: 79.402287,
            timestamp: 1686412800000
          },
          {
            op_time: '2023-06-12',
            jqmyd: 79.169660,
            timestamp: 1686499200000
          },
          {
            op_time: '2023-06-13',
            jqmyd: 78.874677,
            timestamp: 1686585600000
          },
          {
            op_time: '2023-06-14',
            jqmyd: 79.260856,
            timestamp: 1686672000000
          },
          {
            op_time: '2023-06-15',
            jqmyd: 79.260856,
            timestamp: 1686758400000
          },
          {
            op_time: '2023-06-16',
            jqmyd: 79.260856,
            timestamp: 1686844800000
          },
          {
            op_time: '2023-06-17',
            jqmyd: 79.219379,
            timestamp: 1686931200000
          },
          {
            op_time: '2023-06-18',
            jqmyd: 79.219379,
            timestamp: 1687017600000
          },
          {
            op_time: '2023-06-19',
            jqmyd: 79.219379,
            timestamp: 1687104000000
          },
          {
            op_time: '2023-06-20',
            jqmyd: 78.629211,
            timestamp: 1687190400000
          },
          {
            op_time: '2023-06-21',
            jqmyd: 78.383324,
            timestamp: 1687276800000
          },
          {
            op_time: '2023-06-22',
            jqmyd: 78.449600,
            timestamp: 1687363200000
          },
          {
            op_time: '2023-06-23',
            jqmyd: 78.449600,
            timestamp: 1687449600000
          },
          {
            op_time: '2023-06-24',
            jqmyd: 78.449600,
            timestamp: 1687536000000
          },
          {
            op_time: '2023-06-25',
            jqmyd: 78.467785,
            timestamp: 1687622400000
          },
          {
            op_time: '2023-06-26',
            jqmyd: 78.467785,
            timestamp: 1687708800000
          },
          {
            op_time: '2023-06-27',
            jqmyd: 78.011987,
            timestamp: 1687795200000
          },
          {
            op_time: '2023-06-28',
            jqmyd: 78.400870,
            timestamp: 1687881600000
          },
          {
            op_time: '2023-06-29',
            jqmyd: 78.400870,
            timestamp: 1687968000000
          },
          {
            op_time: '2023-06-30',
            jqmyd: 78.400870,
            timestamp: 1688054400000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_zftc_dm/table',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [
          {
            user_num: 27,
            jqmyd_hb_rate_premlastday: 14.524673,
            city_name: '菏泽',
            transact_handy: 86.507937,
            billing_service: 81.481481,
            jqmyd_hb_rate_lastday: -1.112468,
            package_fit: 76.131687,
            jqmyd: 81.622575,
            rule_clarity: 81.746032,
            transact_norms: 87.301587,
            package_price: 73.251029
          },
          {
            user_num: 12,
            jqmyd_hb_rate_premlastday: -3.316499,
            city_name: '威海',
            transact_handy: 80.000000,
            billing_service: 78.703704,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 73.148148,
            jqmyd: 76.481481,
            rule_clarity: 75.555556,
            transact_norms: 80.000000,
            package_price: 73.148148
          },
          {
            user_num: 34,
            jqmyd_hb_rate_premlastday: -3.760523,
            city_name: '潍坊',
            transact_handy: 82.222222,
            billing_service: 91.176471,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 78.431373,
            jqmyd: 82.350763,
            rule_clarity: 80.000000,
            transact_norms: 87.407407,
            package_price: 78.758170
          },
          {
            user_num: 19,
            jqmyd_hb_rate_premlastday: -3.562570,
            city_name: '淄博',
            transact_handy: 74.444444,
            billing_service: 73.684211,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 70.175439,
            jqmyd: 75.421053,
            rule_clarity: 80.000000,
            transact_norms: 77.777778,
            package_price: 70.175439
          },
          {
            user_num: 16,
            jqmyd_hb_rate_premlastday: 15.884700,
            city_name: '滨州',
            transact_handy: 85.555556,
            billing_service: 88.888889,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 84.027778,
            jqmyd: 84.875000,
            rule_clarity: 84.444444,
            transact_norms: 84.444444,
            package_price: 81.250000
          },
          {
            user_num: 26,
            jqmyd_hb_rate_premlastday: 5.569122,
            city_name: '济宁',
            transact_handy: 89.743590,
            billing_service: 91.452991,
            jqmyd_hb_rate_lastday: 1.869011,
            package_fit: 85.897436,
            jqmyd: 86.965812,
            rule_clarity: 83.760684,
            transact_norms: 89.743590,
            package_price: 88.888889
          },
          {
            user_num: 31,
            jqmyd_hb_rate_premlastday: -9.075621,
            city_name: '泰安',
            transact_handy: 78.282828,
            billing_service: 79.569892,
            jqmyd_hb_rate_lastday: -2.913296,
            package_fit: 71.684588,
            jqmyd: 76.684588,
            rule_clarity: 77.777778,
            transact_norms: 80.303030,
            package_price: 69.175627
          },
          {
            user_num: 35,
            jqmyd_hb_rate_premlastday: 13.411713,
            city_name: '青岛',
            transact_handy: 87.719298,
            billing_service: 94.920635,
            jqmyd_hb_rate_lastday: 0.520544,
            package_fit: 87.619048,
            jqmyd: 88.643275,
            rule_clarity: 88.888889,
            transact_norms: 87.134503,
            package_price: 87.936508
          },
          {
            user_num: 35,
            jqmyd_hb_rate_premlastday: -10.452147,
            city_name: '枣庄',
            transact_handy: 80.808081,
            billing_service: 88.888889,
            jqmyd_hb_rate_lastday: -0.661546,
            package_fit: 83.809524,
            jqmyd: 83.375180,
            rule_clarity: 82.323232,
            transact_norms: 82.828283,
            package_price: 83.174603
          },
          {
            user_num: 36,
            jqmyd_hb_rate_premlastday: 6.089721,
            city_name: '烟台',
            transact_handy: 69.444444,
            billing_service: 79.938272,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 71.913580,
            jqmyd: 73.364198,
            rule_clarity: 70.370370,
            transact_norms: 78.703704,
            package_price: 70.987654
          },
          {
            user_num: 8,
            jqmyd_hb_rate_premlastday: 5.876149,
            city_name: '莱芜',
            transact_handy: 80.555556,
            billing_service: 94.444444,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 73.611111,
            jqmyd: 79.861111,
            rule_clarity: 80.555556,
            transact_norms: 80.555556,
            package_price: 76.388889
          },
          {
            user_num: 10,
            jqmyd_hb_rate_premlastday: -12.405093,
            city_name: '东营',
            transact_handy: 63.888889,
            billing_service: 80.000000,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 60.000000,
            jqmyd: 68.222222,
            rule_clarity: 77.777778,
            transact_norms: 62.500000,
            package_price: 64.444444
          },
          {
            user_num: 19,
            jqmyd_hb_rate_premlastday: -9.673090,
            city_name: '日照',
            transact_handy: 67.460317,
            billing_service: 72.514620,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 69.005848,
            jqmyd: 66.127820,
            rule_clarity: 58.730159,
            transact_norms: 69.047619,
            package_price: 66.081871
          },
          {
            user_num: 414,
            jqmyd_hb_rate_premlastday: 2.461889,
            city_name: '全省',
            transact_handy: 81.600000,
            billing_service: 85.641439,
            jqmyd_hb_rate_lastday: -0.163662,
            package_fit: 77.750939,
            jqmyd: 80.862759,
            rule_clarity: 80.755556,
            transact_norms: 82.933333,
            package_price: 77.750939
          },
          {
            user_num: 28,
            jqmyd_hb_rate_premlastday: 10.651824,
            city_name: '济南',
            transact_handy: 79.861111,
            billing_service: 76.587302,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 65.476190,
            jqmyd: 75.218254,
            rule_clarity: 79.861111,
            transact_norms: 79.861111,
            package_price: 65.476190
          },
          {
            user_num: 38,
            jqmyd_hb_rate_premlastday: 7.615862,
            city_name: '临沂',
            transact_handy: 95.555556,
            billing_service: 96.491228,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 90.935673,
            jqmyd: 94.129825,
            rule_clarity: 95.111111,
            transact_norms: 95.555556,
            package_price: 92.982456
          },
          {
            user_num: 30,
            jqmyd_hb_rate_premlastday: 7.603303,
            city_name: '聊城',
            transact_handy: 87.134503,
            billing_service: 84.444444,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 74.814815,
            jqmyd: 80.654971,
            rule_clarity: 81.871345,
            transact_norms: 82.456140,
            package_price: 78.148148
          },
          {
            user_num: 10,
            jqmyd_hb_rate_premlastday: 9.824027,
            city_name: '德州',
            transact_handy: 85.555556,
            billing_service: 95.555556,
            jqmyd_hb_rate_lastday: 0.000000,
            package_fit: 83.333333,
            jqmyd: 85.888889,
            rule_clarity: 85.555556,
            transact_norms: 85.555556,
            package_price: 80.000000
          }
        ]
      }
    }
  }
]
