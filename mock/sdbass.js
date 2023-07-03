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
  }
]
