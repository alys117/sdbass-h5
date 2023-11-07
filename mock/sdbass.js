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
    url: '/webroot/decision/sp/client/api/service/kefu_auth',
    type: 'get',
    response: config => {
      return {
        status: 200,
        'data': [
          {
            phone_no: '1786506631650',
            county_id: 999,
            busiid: '16640612',
            username: '王方',
            city_id: 13
          },
          {
            phone_no: '13606997690',
            county_id: 999,
            busiid: '16640612',
            username: '张丽',
            city_id: 13
          },
          {
            phone_no: '13606997690',
            county_id: 999,
            busiid: '16640613',
            username: '张丽',
            city_id: 13
          },
          {
            phone_no: '13005450111',
            county_id: 999,
            busiid: '16640613',
            username: '由爱军',
            city_id: 5
          },
          {
            phone_no: '18364574119',
            county_id: 999,
            busiid: '16640613',
            username: '率进',
            city_id: 5
          },
          {
            phone_no: '13606997690',
            county_id: 999,
            busiid: '16751065',
            username: '张丽',
            city_id: 13
          },
          {
            phone_no: '13005450111',
            county_id: 999,
            busiid: '16751065',
            username: '由爱军',
            city_id: 5
          },
          {
            phone_no: '18364574119',
            county_id: 999,
            busiid: '16751065',
            username: '率进',
            city_id: 5
          },
          {
            phone_no: '13705357667',
            county_id: 999,
            busiid: '16751065',
            username: '杜云',
            city_id: 5
          },
          {
            phone_no: '15805359668',
            county_id: 999,
            busiid: '16751065',
            username: '刘晓明',
            city_id: 5
          },
          {
            phone_no: '13705318117',
            county_id: 999,
            busiid: '16751065',
            username: '张强',
            city_id: 999
          }
        ]
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
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_jksw_dm/op_time',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [{ 'op_time': '2023-07-08', 'timestamp': 1688745600001 }]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_jksw_dm/thismonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-07-04',
            'jqmyd': 74.01262,
            'timestamp': 1688400000000
          },
          {
            'op_time': '2023-07-05',
            'jqmyd': 74.758011,
            'timestamp': 1688486400000
          },
          {
            'op_time': '2023-07-06',
            'jqmyd': 74.758011,
            'timestamp': 1688572800000
          },
          {
            'op_time': '2023-07-07',
            'jqmyd': 74.758011,
            'timestamp': 1688659200000
          },
          {
            'op_time': '2023-07-08',
            'jqmyd': 74.900384,
            'timestamp': 1688745600000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_jksw_dm/lastmonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-06-01',
            'jqmyd': 71.725783,
            'timestamp': 1685548800000
          },
          {
            'op_time': '2023-06-02',
            'jqmyd': 71.725783,
            'timestamp': 1685635200000
          },
          {
            'op_time': '2023-06-03',
            'jqmyd': 72.114363,
            'timestamp': 1685721600000
          },
          {
            'op_time': '2023-06-04',
            'jqmyd': 72.114363,
            'timestamp': 1685808000000
          },
          {
            'op_time': '2023-06-05',
            'jqmyd': 73.927355,
            'timestamp': 1685894400000
          },
          {
            'op_time': '2023-06-06',
            'jqmyd': 74.2468,
            'timestamp': 1685980800000
          },
          {
            'op_time': '2023-06-07',
            'jqmyd': 76.767703,
            'timestamp': 1686067200000
          },
          {
            'op_time': '2023-06-08',
            'jqmyd': 76.413916,
            'timestamp': 1686153600000
          },
          {
            'op_time': '2023-06-09',
            'jqmyd': 76.413916,
            'timestamp': 1686240000000
          },
          {
            'op_time': '2023-06-10',
            'jqmyd': 75.845729,
            'timestamp': 1686326400000
          },
          {
            'op_time': '2023-06-11',
            'jqmyd': 75.845729,
            'timestamp': 1686412800000
          },
          {
            'op_time': '2023-06-12',
            'jqmyd': 75.845729,
            'timestamp': 1686499200000
          },
          {
            'op_time': '2023-06-13',
            'jqmyd': 75.845729,
            'timestamp': 1686585600000
          },
          {
            'op_time': '2023-06-14',
            'jqmyd': 77.160652,
            'timestamp': 1686672000000
          },
          {
            'op_time': '2023-06-15',
            'jqmyd': 77.160652,
            'timestamp': 1686758400000
          },
          {
            'op_time': '2023-06-16',
            'jqmyd': 77.160652,
            'timestamp': 1686844800000
          },
          {
            'op_time': '2023-06-17',
            'jqmyd': 78.008866,
            'timestamp': 1686931200000
          },
          {
            'op_time': '2023-06-18',
            'jqmyd': 78.047041,
            'timestamp': 1687017600000
          },
          {
            'op_time': '2023-06-19',
            'jqmyd': 77.94764,
            'timestamp': 1687104000000
          },
          {
            'op_time': '2023-06-20',
            'jqmyd': 77.935938,
            'timestamp': 1687190400000
          },
          {
            'op_time': '2023-06-21',
            'jqmyd': 77.730994,
            'timestamp': 1687276800000
          },
          {
            'op_time': '2023-06-22',
            'jqmyd': 77.878523,
            'timestamp': 1687363200000
          },
          {
            'op_time': '2023-06-23',
            'jqmyd': 77.836737,
            'timestamp': 1687449600000
          },
          {
            'op_time': '2023-06-24',
            'jqmyd': 77.836737,
            'timestamp': 1687536000000
          },
          {
            'op_time': '2023-06-25',
            'jqmyd': 77.946848,
            'timestamp': 1687622400000
          },
          {
            'op_time': '2023-06-26',
            'jqmyd': 77.973785,
            'timestamp': 1687708800000
          },
          {
            'op_time': '2023-06-27',
            'jqmyd': 78.28004,
            'timestamp': 1687795200000
          },
          {
            'op_time': '2023-06-28',
            'jqmyd': 78.611049,
            'timestamp': 1687881600000
          },
          {
            'op_time': '2023-06-29',
            'jqmyd': 78.611049,
            'timestamp': 1687968000000
          },
          {
            'op_time': '2023-06-30',
            'jqmyd': 78.611049,
            'timestamp': 1688054400000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_jksw_dm/table',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'answer_A1': 42.592593,
            'answer_Q1': 67.361111,
            'user_num': 32,
            'jqmyd_hb_rate_premlastday': -14.63962,
            'answer_B1': 65.777778,
            'city_name': '菏泽',
            'answer_Q2': 70.833333,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 62.636905,
            'answer_C1': 65.873016,
            'answer_D1': 51.851852
          },
          {
            'answer_A1': 66.666667,
            'answer_Q1': 58.974359,
            'user_num': 13,
            'jqmyd_hb_rate_premlastday': -28.016749,
            'answer_B1': 58.888889,
            'city_name': '威海',
            'answer_Q2': 52.136752,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 54.230769,
            'answer_C1': 50,
            'answer_D1': 33.333333
          },
          {
            'answer_A1': 73.015873,
            'answer_Q1': 83.068783,
            'user_num': 63,
            'jqmyd_hb_rate_premlastday': -2.756551,
            'answer_B1': 82.222222,
            'city_name': '潍坊',
            'answer_Q2': 82.716049,
            'jqmyd_hb_rate_lastday': 0.017527,
            'jqmyd': 81.483686,
            'answer_C1': 81.587302,
            'answer_D1': 83.333333
          },
          {
            'answer_A1': 72.222222,
            'answer_Q1': 90.534979,
            'user_num': 27,
            'jqmyd_hb_rate_premlastday': 7.25609,
            'answer_B1': 87.830688,
            'city_name': '淄博',
            'answer_Q2': 90.946502,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 87.047584,
            'answer_C1': 90.196078,
            'answer_D1': 83.333333
          },
          {
            'answer_A1': 60,
            'answer_Q1': 75.925926,
            'user_num': 18,
            'jqmyd_hb_rate_premlastday': -5.493916,
            'answer_B1': 82.222222,
            'city_name': '滨州',
            'answer_Q2': 70.987654,
            'jqmyd_hb_rate_lastday': 0.982208,
            'jqmyd': 73.121142,
            'answer_C1': 62.5,
            'answer_D1': 84.444444
          },
          {
            'answer_A1': 22.222222,
            'answer_Q1': 60.153257,
            'user_num': 29,
            'jqmyd_hb_rate_premlastday': -19.811387,
            'answer_B1': 59.477124,
            'city_name': '济宁',
            'answer_Q2': 60.536398,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 58.81054,
            'answer_C1': 65.740741,
            'answer_D1': 81.818182
          },
          {
            'answer_A1': 92.592593,
            'answer_Q1': 94.444444,
            'user_num': 30,
            'jqmyd_hb_rate_premlastday': 7.593921,
            'answer_B1': 92.929293,
            'city_name': '泰安',
            'answer_Q2': 94.444444,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 93.615072,
            'answer_C1': 96.732026,
            'answer_D1': 88.888889
          },
          {
            'answer_A1': 47.222222,
            'answer_Q1': 62.462462,
            'user_num': 37,
            'jqmyd_hb_rate_premlastday': -3.790235,
            'answer_B1': 62.068966,
            'city_name': '青岛',
            'answer_Q2': 61.861862,
            'jqmyd_hb_rate_lastday': 0.694026,
            'jqmyd': 60.757358,
            'answer_C1': 65.656566,
            'answer_D1': 62.222222
          },
          {
            'answer_A1': 83.333333,
            'answer_Q1': 78.518519,
            'user_num': 15,
            'jqmyd_hb_rate_premlastday': -5.048499,
            'answer_B1': 72.222222,
            'city_name': '枣庄',
            'answer_Q2': 77.777778,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 79.068376,
            'answer_C1': 75.213675,
            'answer_D1': 88.888889
          },
          {
            'answer_A1': 53.333333,
            'answer_Q1': 67.320261,
            'user_num': 34,
            'jqmyd_hb_rate_premlastday': -17.758023,
            'answer_B1': 58.454106,
            'city_name': '烟台',
            'answer_Q2': 67.973856,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 64.039532,
            'answer_C1': 70.20202,
            'answer_D1': 60
          },
          {
            'answer_A1': 94.444444,
            'answer_Q1': 83.838384,
            'user_num': 11,
            'jqmyd_hb_rate_premlastday': 4.019505,
            'answer_B1': 80.808081,
            'city_name': '莱芜',
            'answer_Q2': 82.828283,
            'jqmyd_hb_rate_lastday': 0.558922,
            'jqmyd': 84.225589,
            'answer_C1': 87.037037,
            'answer_D1': 77.777778
          },
          {
            'answer_A1': 51.851852,
            'answer_Q1': 81.25,
            'user_num': 16,
            'jqmyd_hb_rate_premlastday': 2.033847,
            'answer_B1': 87.179487,
            'city_name': '东营',
            'answer_Q2': 79.861111,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 74.97151,
            'answer_C1': 69.444444,
            'answer_D1': 68.518519
          },
          {
            'answer_A1': 33.333333,
            'answer_Q1': 60.493827,
            'user_num': 18,
            'jqmyd_hb_rate_premlastday': -12.413669,
            'answer_B1': 59.59596,
            'city_name': '日照',
            'answer_Q2': 62.962963,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 56.721982,
            'answer_C1': 57.777778,
            'answer_D1': 57.142857
          },
          {
            'answer_A1': 66.666667,
            'answer_Q1': 76.769858,
            'user_num': 463,
            'jqmyd_hb_rate_premlastday': -3.710665,
            'answer_B1': 75.198413,
            'city_name': '全省',
            'answer_Q2': 76.577874,
            'jqmyd_hb_rate_lastday': 0.142373,
            'jqmyd': 74.900384,
            'answer_C1': 75.896763,
            'answer_D1': 74.668969
          },
          {
            'answer_A1': 77.777778,
            'answer_Q1': 71.794872,
            'user_num': 26,
            'jqmyd_hb_rate_premlastday': 0.425342,
            'answer_B1': 73.333333,
            'city_name': '济南',
            'answer_Q2': 70.512821,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 70.488909,
            'answer_C1': 68.148148,
            'answer_D1': 59.52381
          },
          {
            'answer_A1': 84.126984,
            'answer_Q1': 91.713748,
            'user_num': 59,
            'jqmyd_hb_rate_premlastday': 0.04905,
            'answer_B1': 87.855297,
            'city_name': '临沂',
            'answer_Q2': 91.713748,
            'jqmyd_hb_rate_lastday': -0.329084,
            'jqmyd': 89.123178,
            'answer_C1': 91.481481,
            'answer_D1': 82.666667
          },
          {
            'answer_A1': 100,
            'answer_Q1': 86.549708,
            'user_num': 19,
            'jqmyd_hb_rate_premlastday': 19.800218,
            'answer_B1': 84.027778,
            'city_name': '聊城',
            'answer_Q2': 87.719298,
            'jqmyd_hb_rate_lastday': 0,
            'jqmyd': 89.116411,
            'answer_C1': 87.777778,
            'answer_D1': 93.055556
          },
          {
            'answer_A1': 50,
            'answer_Q1': 61.805556,
            'user_num': 16,
            'jqmyd_hb_rate_premlastday': -8.992914,
            'answer_B1': 41.666667,
            'city_name': '德州',
            'answer_Q2': 61.111111,
            'jqmyd_hb_rate_lastday': 0.479939,
            'jqmyd': 56.805556,
            'answer_C1': 55.555556,
            'answer_D1': 61.111111
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/op_time',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [{ 'op_time': '2023-08-30', 'timestamp': 1688745600001 }]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/thismonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-08-01',
            'jqmyd': 71.530978,
            'timestamp': 1690819200000
          },
          {
            'op_time': '2023-08-02',
            'jqmyd': 74.670515,
            'timestamp': 1690905600000
          },
          {
            'op_time': '2023-08-03',
            'jqmyd': 74.670515,
            'timestamp': 1690992000000
          },
          {
            'op_time': '2023-08-04',
            'jqmyd': 74.670515,
            'timestamp': 1691078400000
          },
          {
            'op_time': '2023-08-05',
            'jqmyd': 74.670515,
            'timestamp': 1691164800000
          },
          {
            'op_time': '2023-08-06',
            'jqmyd': 74.731801,
            'timestamp': 1691251200000
          },
          {
            'op_time': '2023-08-07',
            'jqmyd': 74.571087,
            'timestamp': 1691337600000
          },
          {
            'op_time': '2023-08-08',
            'jqmyd': 76.358974,
            'timestamp': 1691424000000
          },
          {
            'op_time': '2023-08-09',
            'jqmyd': 75.305216,
            'timestamp': 1691510400000
          },
          {
            'op_time': '2023-08-10',
            'jqmyd': 75.305216,
            'timestamp': 1691596800000
          },
          {
            'op_time': '2023-08-11',
            'jqmyd': 75.271003,
            'timestamp': 1691683200000
          },
          {
            'op_time': '2023-08-12',
            'jqmyd': 75.271003,
            'timestamp': 1691769600000
          },
          {
            'op_time': '2023-08-13',
            'jqmyd': 75.337017,
            'timestamp': 1691856000000
          },
          {
            'op_time': '2023-08-14',
            'jqmyd': 75.337017,
            'timestamp': 1691942400000
          },
          {
            'op_time': '2023-08-15',
            'jqmyd': 75.996788,
            'timestamp': 1692028800000
          },
          {
            'op_time': '2023-08-16',
            'jqmyd': 76.097161,
            'timestamp': 1692115200000
          },
          {
            'op_time': '2023-08-17',
            'jqmyd': 76.097161,
            'timestamp': 1692201600000
          },
          {
            'op_time': '2023-08-18',
            'jqmyd': 76.098401,
            'timestamp': 1692288000000
          },
          {
            'op_time': '2023-08-19',
            'jqmyd': 76.098401,
            'timestamp': 1692374400000
          },
          {
            'op_time': '2023-08-20',
            'jqmyd': 76.149947,
            'timestamp': 1692460800000
          },
          {
            'op_time': '2023-08-21',
            'jqmyd': 76.149947,
            'timestamp': 1692547200000
          },
          {
            'op_time': '2023-08-22',
            'jqmyd': 76.29405,
            'timestamp': 1692633600000
          },
          {
            'op_time': '2023-08-23',
            'jqmyd': 76.215259,
            'timestamp': 1692720000000
          },
          {
            'op_time': '2023-08-24',
            'jqmyd': 76.228327,
            'timestamp': 1692806400000
          },
          {
            'op_time': '2023-08-25',
            'jqmyd': 76.228327,
            'timestamp': 1692892800000
          },
          {
            'op_time': '2023-08-26',
            'jqmyd': 76.228327,
            'timestamp': 1692979200000
          },
          {
            'op_time': '2023-08-27',
            'jqmyd': 76.29346,
            'timestamp': 1693065600000
          },
          {
            'op_time': '2023-08-28',
            'jqmyd': 76.29346,
            'timestamp': 1693152000000
          },
          {
            'op_time': '2023-08-29',
            'jqmyd': 76.555139,
            'timestamp': 1693238400000
          },
          {
            'op_time': '2023-08-30',
            'jqmyd': 76.608111,
            'timestamp': 1693324800000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/lastmonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-07-11',
            'jqmyd': 87.266667,
            'timestamp': 1689004800000
          },
          {
            'op_time': '2023-07-12',
            'jqmyd': 89.734848,
            'timestamp': 1689091200000
          },
          {
            'op_time': '2023-07-13',
            'jqmyd': 89.734848,
            'timestamp': 1689177600000
          },
          {
            'op_time': '2023-07-14',
            'jqmyd': 89.734848,
            'timestamp': 1689264000000
          },
          {
            'op_time': '2023-07-15',
            'jqmyd': 89.734848,
            'timestamp': 1689350400000
          },
          {
            'op_time': '2023-07-16',
            'jqmyd': 89.81203,
            'timestamp': 1689436800000
          },
          {
            'op_time': '2023-07-17',
            'jqmyd': 89.88806,
            'timestamp': 1689523200000
          },
          {
            'op_time': '2023-07-18',
            'jqmyd': 90.2746,
            'timestamp': 1689609600000
          },
          {
            'op_time': '2023-07-19',
            'jqmyd': 89.300184,
            'timestamp': 1689696000000
          },
          {
            'op_time': '2023-07-20',
            'jqmyd': 89.300184,
            'timestamp': 1689782400000
          },
          {
            'op_time': '2023-07-21',
            'jqmyd': 89.300184,
            'timestamp': 1689868800000
          },
          {
            'op_time': '2023-07-22',
            'jqmyd': 89.300184,
            'timestamp': 1689955200000
          },
          {
            'op_time': '2023-07-23',
            'jqmyd': 89.319853,
            'timestamp': 1690041600000
          },
          {
            'op_time': '2023-07-24',
            'jqmyd': 89.319853,
            'timestamp': 1690128000000
          },
          {
            'op_time': '2023-07-25',
            'jqmyd': 89.319853,
            'timestamp': 1690214400000
          },
          {
            'op_time': '2023-07-26',
            'jqmyd': 89.351736,
            'timestamp': 1690300800000
          },
          {
            'op_time': '2023-07-27',
            'jqmyd': 89.351736,
            'timestamp': 1690387200000
          },
          {
            'op_time': '2023-07-28',
            'jqmyd': 89.351736,
            'timestamp': 1690473600000
          },
          {
            'op_time': '2023-07-29',
            'jqmyd': 89.351736,
            'timestamp': 1690560000000
          },
          {
            'op_time': '2023-07-30',
            'jqmyd': 89.351736,
            'timestamp': 1690646400000
          },
          {
            'op_time': '2023-07-31',
            'jqmyd': 89.201389,
            'timestamp': 1690732800000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_yyth_dm/table',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'answer_B2': 85.585586,
            'user_num': 74,
            'jqmyd_hb_rate_premlastday': -9.328614,
            'city_name': '菏泽',
            'answer_B4': 86.036036,
            'answer_B3': 88.438438,
            'jqmyd_hb_rate_lastday': -1.259053,
            'jqmyd': 86.861862
          },
          {
            'answer_B2': 87.936508,
            'user_num': 70,
            'jqmyd_hb_rate_premlastday': -1.140667,
            'city_name': '威海',
            'answer_B4': 91.428571,
            'answer_B3': 92.222222,
            'jqmyd_hb_rate_lastday': 1.317721,
            'jqmyd': 90.698413
          },
          {
            'answer_B2': 89.265537,
            'user_num': 177,
            'jqmyd_hb_rate_premlastday': -1.638823,
            'city_name': '潍坊',
            'answer_B4': 90.709353,
            'answer_B3': 91.148776,
            'jqmyd_hb_rate_lastday': -0.086945,
            'jqmyd': 90.451977
          },
          {
            'answer_B2': 89.458689,
            'user_num': 78,
            'jqmyd_hb_rate_premlastday': -5.010684,
            'city_name': '淄博',
            'answer_B4': 88.461538,
            'answer_B3': 90.02849,
            'jqmyd_hb_rate_lastday': -1.091168,
            'jqmyd': 89.387464
          },
          {
            'answer_B2': 91.067538,
            'user_num': 51,
            'jqmyd_hb_rate_premlastday': 4.456328,
            'city_name': '滨州',
            'answer_B4': 90.631808,
            'answer_B3': 92.374728,
            'jqmyd_hb_rate_lastday': 0.170806,
            'jqmyd': 91.459695
          },
          {
            'answer_B2': 91.812865,
            'user_num': 95,
            'jqmyd_hb_rate_premlastday': 3.933967,
            'city_name': '济宁',
            'answer_B4': 92.748538,
            'answer_B3': 94.619883,
            'jqmyd_hb_rate_lastday': 0.382416,
            'jqmyd': 93.216374
          },
          {
            'answer_B2': 92.397661,
            'user_num': 76,
            'jqmyd_hb_rate_premlastday': 4.208652,
            'city_name': '泰安',
            'answer_B4': 92.836257,
            'answer_B3': 92.251462,
            'jqmyd_hb_rate_lastday': 0.530228,
            'jqmyd': 92.47076
          },
          {
            'answer_B2': 87.231969,
            'user_num': 114,
            'jqmyd_hb_rate_premlastday': 0.969111,
            'city_name': '青岛',
            'answer_B4': 87.134503,
            'answer_B3': 89.083821,
            'jqmyd_hb_rate_lastday': -1.146477,
            'jqmyd': 87.94347
          },
          {
            'answer_B2': 96.953405,
            'user_num': 62,
            'jqmyd_hb_rate_premlastday': -1.61589,
            'city_name': '枣庄',
            'answer_B4': 97.132616,
            'answer_B3': 97.849462,
            'jqmyd_hb_rate_lastday': 0.043187,
            'jqmyd': 97.365591
          },
          {
            'answer_B2': 87.193974,
            'user_num': 118,
            'jqmyd_hb_rate_premlastday': 5.575814,
            'city_name': '烟台',
            'answer_B4': 87.570621,
            'answer_B3': 89.642185,
            'jqmyd_hb_rate_lastday': 0.118611,
            'jqmyd': 88.286252
          },
          {
            'answer_B2': 87.878788,
            'user_num': 33,
            'jqmyd_hb_rate_premlastday': -5.62963,
            'city_name': '莱芜',
            'answer_B4': 89.225589,
            'answer_B3': 87.542088,
            'jqmyd_hb_rate_lastday': 0.083632,
            'jqmyd': 88.148148
          },
          {
            'answer_B2': 85.777778,
            'user_num': 50,
            'jqmyd_hb_rate_premlastday': -0.040277,
            'city_name': '东营',
            'answer_B4': 86.888889,
            'answer_B3': 88.888889,
            'jqmyd_hb_rate_lastday': 1.099517,
            'jqmyd': 87.355556
          },
          {
            'answer_B2': 86.288416,
            'user_num': 47,
            'jqmyd_hb_rate_premlastday': 7.11689,
            'city_name': '日照',
            'answer_B4': 86.761229,
            'answer_B3': 87.943262,
            'jqmyd_hb_rate_lastday': -1.720932,
            'jqmyd': 87.092199
          },
          {
            'answer_B2': 88.495992,
            'user_num': 1414,
            'jqmyd_hb_rate_premlastday': 0.291775,
            'city_name': '全省',
            'answer_B4': 89.273927,
            'answer_B3': 90.405469,
            'jqmyd_hb_rate_lastday': -0.128335,
            'jqmyd': 89.493164
          },
          {
            'answer_B2': 78.494624,
            'user_num': 93,
            'jqmyd_hb_rate_premlastday': -6.396522,
            'city_name': '济南',
            'answer_B4': 81.600956,
            'answer_B3': 82.198327,
            'jqmyd_hb_rate_lastday': -0.996757,
            'jqmyd': 80.908005
          },
          {
            'answer_B2': 94.122383,
            'user_num': 138,
            'jqmyd_hb_rate_premlastday': 0.292086,
            'city_name': '临沂',
            'answer_B4': 94.041868,
            'answer_B3': 95.249597,
            'jqmyd_hb_rate_lastday': 0.20492,
            'jqmyd': 94.549114
          },
          {
            'answer_B2': 80.907668,
            'user_num': 71,
            'jqmyd_hb_rate_premlastday': 1.494957,
            'city_name': '聊城',
            'answer_B4': 82.316119,
            'answer_B3': 82.785603,
            'jqmyd_hb_rate_lastday': 0.25598,
            'jqmyd': 82.081377
          },
          {
            'answer_B2': 88.888889,
            'user_num': 67,
            'jqmyd_hb_rate_premlastday': 2.841606,
            'city_name': '德州',
            'answer_B4': 88.888889,
            'answer_B3': 90.049751,
            'jqmyd_hb_rate_lastday': 0.85861,
            'jqmyd': 89.353234
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_sjsw_dm/op_time',
    type: 'get',
    response: config => {
      return {
        status: 200,
        mock: true,
        data: [{ 'op_time': '2023-07-08', 'timestamp': 1688745600001 }]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_sjsw_dm/thismonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-07-04',
            'jqmyd': 74.01262,
            'timestamp': 1688400000000
          },
          {
            'op_time': '2023-07-05',
            'jqmyd': 74.758011,
            'timestamp': 1688486400000
          },
          {
            'op_time': '2023-07-06',
            'jqmyd': 74.758011,
            'timestamp': 1688572800000
          },
          {
            'op_time': '2023-07-07',
            'jqmyd': 74.758011,
            'timestamp': 1688659200000
          },
          {
            'op_time': '2023-07-08',
            'jqmyd': 74.900384,
            'timestamp': 1688745600000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_sjsw_dm/lastmonth',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'op_time': '2023-08-01',
            'jqmyd': 71.530978,
            'timestamp': 1690819200000
          },
          {
            'op_time': '2023-08-02',
            'jqmyd': 74.670515,
            'timestamp': 1690905600000
          },
          {
            'op_time': '2023-08-03',
            'jqmyd': 74.670515,
            'timestamp': 1690992000000
          },
          {
            'op_time': '2023-08-04',
            'jqmyd': 74.670515,
            'timestamp': 1691078400000
          },
          {
            'op_time': '2023-08-05',
            'jqmyd': 74.670515,
            'timestamp': 1691164800000
          },
          {
            'op_time': '2023-08-06',
            'jqmyd': 74.731801,
            'timestamp': 1691251200000
          },
          {
            'op_time': '2023-08-07',
            'jqmyd': 74.571087,
            'timestamp': 1691337600000
          },
          {
            'op_time': '2023-08-08',
            'jqmyd': 76.358974,
            'timestamp': 1691424000000
          },
          {
            'op_time': '2023-08-09',
            'jqmyd': 75.305216,
            'timestamp': 1691510400000
          },
          {
            'op_time': '2023-08-10',
            'jqmyd': 75.305216,
            'timestamp': 1691596800000
          },
          {
            'op_time': '2023-08-11',
            'jqmyd': 75.271003,
            'timestamp': 1691683200000
          },
          {
            'op_time': '2023-08-12',
            'jqmyd': 75.271003,
            'timestamp': 1691769600000
          },
          {
            'op_time': '2023-08-13',
            'jqmyd': 75.337017,
            'timestamp': 1691856000000
          },
          {
            'op_time': '2023-08-14',
            'jqmyd': 75.337017,
            'timestamp': 1691942400000
          },
          {
            'op_time': '2023-08-15',
            'jqmyd': 75.996788,
            'timestamp': 1692028800000
          },
          {
            'op_time': '2023-08-16',
            'jqmyd': 76.097161,
            'timestamp': 1692115200000
          },
          {
            'op_time': '2023-08-17',
            'jqmyd': 76.097161,
            'timestamp': 1692201600000
          },
          {
            'op_time': '2023-08-18',
            'jqmyd': 76.098401,
            'timestamp': 1692288000000
          },
          {
            'op_time': '2023-08-19',
            'jqmyd': 76.098401,
            'timestamp': 1692374400000
          },
          {
            'op_time': '2023-08-20',
            'jqmyd': 76.149947,
            'timestamp': 1692460800000
          },
          {
            'op_time': '2023-08-21',
            'jqmyd': 76.149947,
            'timestamp': 1692547200000
          },
          {
            'op_time': '2023-08-22',
            'jqmyd': 76.29405,
            'timestamp': 1692633600000
          },
          {
            'op_time': '2023-08-23',
            'jqmyd': 76.215259,
            'timestamp': 1692720000000
          },
          {
            'op_time': '2023-08-24',
            'jqmyd': 76.228327,
            'timestamp': 1692806400000
          },
          {
            'op_time': '2023-08-25',
            'jqmyd': 76.228327,
            'timestamp': 1692892800000
          },
          {
            'op_time': '2023-08-26',
            'jqmyd': 76.228327,
            'timestamp': 1692979200000
          },
          {
            'op_time': '2023-08-27',
            'jqmyd': 76.29346,
            'timestamp': 1693065600000
          },
          {
            'op_time': '2023-08-28',
            'jqmyd': 76.29346,
            'timestamp': 1693152000000
          },
          {
            'op_time': '2023-08-29',
            'jqmyd': 76.555139,
            'timestamp': 1693238400000
          },
          {
            'op_time': '2023-08-30',
            'jqmyd': 76.608111,
            'timestamp': 1693324800000
          }
        ]
      }
    }
  },
  {
    url: '/webroot/decision/sp/client/api/service/st_user_instant_evaluate_sjsw_dm/table',
    type: 'get',
    response: config => {
      return {
        'status': 200,
        'mock': true,
        'data': [
          {
            'user_num': 107,
            'jqmyd_hb_rate_premlastday': 1.543372,
            'city_name': '菏泽',
            'answer_A3': 67.80893,
            'answer_A2': 68.639668,
            'answer_A4': 66.043614,
            'jqmyd_hb_rate_lastday': -1.228319,
            'jqmyd': 67.528557
          },
          {
            'user_num': 102,
            'jqmyd_hb_rate_premlastday': -4.501293,
            'city_name': '威海',
            'answer_A3': 77.668845,
            'answer_A2': 78.104575,
            'answer_A4': 75.381264,
            'jqmyd_hb_rate_lastday': 0.688169,
            'jqmyd': 77.11329
          },
          {
            'user_num': 257,
            'jqmyd_hb_rate_premlastday': 4.103543,
            'city_name': '潍坊',
            'answer_A3': 81.409425,
            'answer_A2': 82.360571,
            'answer_A4': 80.371812,
            'jqmyd_hb_rate_lastday': -0.317475,
            'jqmyd': 81.383485
          },
          {
            'user_num': 168,
            'jqmyd_hb_rate_premlastday': 1.170635,
            'city_name': '淄博',
            'answer_A3': 73.148148,
            'answer_A2': 73.941799,
            'answer_A4': 72.28836,
            'jqmyd_hb_rate_lastday': 1.156269,
            'jqmyd': 73.128307
          },
          {
            'user_num': 69,
            'jqmyd_hb_rate_premlastday': -4.660686,
            'city_name': '滨州',
            'answer_A3': 74.074074,
            'answer_A2': 74.879227,
            'answer_A4': 73.429952,
            'jqmyd_hb_rate_lastday': -0.493002,
            'jqmyd': 74.122383
          },
          {
            'user_num': 166,
            'jqmyd_hb_rate_premlastday': 2.723244,
            'city_name': '济宁',
            'answer_A3': 77.844712,
            'answer_A2': 78.915663,
            'answer_A4': 76.037483,
            'jqmyd_hb_rate_lastday': 1.233171,
            'jqmyd': 77.623829
          },
          {
            'user_num': 141,
            'jqmyd_hb_rate_premlastday': 1.015807,
            'city_name': '泰安',
            'answer_A3': 79.511426,
            'answer_A2': 79.747833,
            'answer_A4': 80.063042,
            'jqmyd_hb_rate_lastday': 0.050055,
            'jqmyd': 79.747833
          },
          {
            'user_num': 187,
            'jqmyd_hb_rate_premlastday': -1.85918,
            'city_name': '青岛',
            'answer_A3': 78.134284,
            'answer_A2': 78.312537,
            'answer_A4': 76.530006,
            'jqmyd_hb_rate_lastday': -0.018704,
            'jqmyd': 77.706477
          },
          {
            'user_num': 84,
            'jqmyd_hb_rate_premlastday': 1.867586,
            'city_name': '枣庄',
            'answer_A3': 84.126984,
            'answer_A2': 85.05291,
            'answer_A4': 82.804233,
            'jqmyd_hb_rate_lastday': -1.355575,
            'jqmyd': 84.007937
          },
          {
            'user_num': 178,
            'jqmyd_hb_rate_premlastday': 3.677891,
            'city_name': '烟台',
            'answer_A3': 79.338327,
            'answer_A2': 79.837703,
            'answer_A4': 76.654182,
            'jqmyd_hb_rate_lastday': 0.396417,
            'jqmyd': 78.682896
          },
          {
            'user_num': 65,
            'jqmyd_hb_rate_premlastday': 0.581197,
            'city_name': '莱芜',
            'answer_A3': 75.555556,
            'answer_A2': 76.923077,
            'answer_A4': 74.700855,
            'jqmyd_hb_rate_lastday': 0.481715,
            'jqmyd': 75.709402
          },
          {
            'user_num': 89,
            'jqmyd_hb_rate_premlastday': 5.764183,
            'city_name': '东营',
            'answer_A3': 77.403246,
            'answer_A2': 79.026217,
            'answer_A4': 76.654182,
            'jqmyd_hb_rate_lastday': -1.451048,
            'jqmyd': 77.665418
          },
          {
            'user_num': 87,
            'jqmyd_hb_rate_premlastday': 1.221036,
            'city_name': '日照',
            'answer_A3': 78.288633,
            'answer_A2': 79.054917,
            'answer_A4': 77.905492,
            'jqmyd_hb_rate_lastday': -0.668319,
            'jqmyd': 78.403576
          },
          {
            'user_num': 2315,
            'jqmyd_hb_rate_premlastday': 1.113057,
            'city_name': '全省',
            'answer_A3': 76.707463,
            'answer_A2': 77.4994,
            'answer_A4': 75.584353,
            'jqmyd_hb_rate_lastday': 0.052972,
            'jqmyd': 76.608111
          },
          {
            'user_num': 175,
            'jqmyd_hb_rate_premlastday': 4.920058,
            'city_name': '济南',
            'answer_A3': 65.587302,
            'answer_A2': 64.507937,
            'answer_A4': 64.634921,
            'jqmyd_hb_rate_lastday': -0.678788,
            'jqmyd': 64.977778
          },
          {
            'user_num': 191,
            'jqmyd_hb_rate_premlastday': -1.590091,
            'city_name': '临沂',
            'answer_A3': 81.733566,
            'answer_A2': 83.769634,
            'answer_A4': 81.617219,
            'jqmyd_hb_rate_lastday': 1.21731,
            'jqmyd': 82.309482
          },
          {
            'user_num': 131,
            'jqmyd_hb_rate_premlastday': 5.331945,
            'city_name': '聊城',
            'answer_A3': 74.724343,
            'answer_A2': 76.25106,
            'answer_A4': 73.876166,
            'jqmyd_hb_rate_lastday': -0.443996,
            'jqmyd': 74.927905
          },
          {
            'user_num': 118,
            'jqmyd_hb_rate_premlastday': 1.526769,
            'city_name': '德州',
            'answer_A3': 73.352166,
            'answer_A2': 74.670433,
            'answer_A4': 72.033898,
            'jqmyd_hb_rate_lastday': 1.903364,
            'jqmyd': 73.352166
          }
        ]
      }
    }
  }
]
