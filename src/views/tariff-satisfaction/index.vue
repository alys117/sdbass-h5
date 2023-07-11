<template>
  <div class="container">
    <div class="bg" />
    <div class="logo-container" :style="{height: height+'px'}">
      <div class="logo-pic">
        <img :src="require('@/assets/images/logo.png')" alt="" style="width: 189px;height: 40px">
        <img :src="require('@/assets/images/heart.png')" alt="" style="width: 107px;height: 40px">
      </div>
      <div class="big-title-container">
        <div class="big-title">
          <div class="big-title-1">手机资费满意度</div>
          <div class="big-title-2">——“用后即评”情况通报</div>
        </div>
      </div>
      <div class="time-container">
        <div class="parallelogram">
          <div class="time">{{ dateRange }}</div>
        </div>
      </div>
    </div>
    <div class="outer">
      <div class="trapezoid-outer">
        <div class="trapezoid-inner" />
      </div>
      <div class="content">
        <module1 :jqmyd="parseFloat(jqmyd)" :jqmyd_hb_rate_lastday="parseFloat(jqmyd_hb_rate_lastday)" :jqmyd_hb_rate_premlastday="parseFloat(jqmyd_hb_rate_premlastday)" />
        <div>
          <bar-chart :height="'150px'" :data="barChartData" />
        </div>
        <div>
          <line-chart :height="'150px'" :chart-data="lineChartData" />
        </div>
        <module2 :up85="up85" :down75="down75" :huanbi-up="huanbiUp" :huanbi-down="huanbiDown" />
        <div ref="tableContainer" class="table-container" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height2+'px'}">
          <el-table
            ref="table1"
            :row-style="selectedRowStyle"
            :header-cell-style="{'text-align':'center'}"
            :cell-style="{'text-align':'center'}"
            :data="tableData"
            :fit="true"
          >
            <el-table-column prop="city_name" fixed label="地市" width="35">
              <template slot-scope="scope">
                <div :style="{fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.city_name }}</div>
              </template>
            </el-table-column>>
            <el-table-column prop="jqmyd" label="手机资费满意度" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color(scope.row.sn_jqmyd),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="jqmyd_hb_rate_premlastday" label="较上月环比" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color2(scope.row.jqmyd_hb_rate_premlastday),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd_hb_rate_premlastday }}</div>
              </template>
            </el-table-column>
            <el-table-column label="手机资费关键过程表现">
              <el-table-column prop="package_fit" label="套餐适配度" width="40">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_package_fit),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.package_fit }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="rule_clarity" label="资费规则清晰度" width="48">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_rule_clarity),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.rule_clarity }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_norms" label="套餐办理规范性" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_transact_norms),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.transact_norms }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_handy" label="套餐办理便携性" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_transact_handy),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.transact_handy }}</div>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column prop="user_num" label="样本量" min-width="40">
              <template slot-scope="scope">
                <div :style="{fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.user_num }}</div>
              </template>
            </el-table-column>>
          </el-table>
        </div>
        <div :style="{height: height3+'px'}">
          <div class="description" :style="{ '--size1': size1, '--size2': size2 }">
            <p>
              数据来源：省内用后即评宽带上网满意度调研数据
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :style="{height: height3 + 'px'}" class="version">
      中国移动山东公司客服部（V1.0版)
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { getMaxOpTime, getTableList, getLastMonth, getThisMonth } from '@/api/st_user_instant_evaluate_zftc_dm'
import BarChart from '@/views/components/BarChart'
import LineChart from '@/views/components/LineChart'
import Module1 from '@/views/components/module1.vue'
import Module2 from '@/views/components/module2.vue'
export default {
  name: 'TariffSatisfaction',
  components: { BarChart, LineChart, Module1, Module2 },
  data() {
    return {
      size: '20px',
      size1: '20px',
      size2: '10px',
      day: '',
      height: 240,
      height1: 136,
      height2: 400,
      height3: 50,
      tableData: [],
      jqmyd: 0, // #满意度--当前表现值
      jqmyd_hb_rate_lastday: 0, // 较昨日环比
      jqmyd_hb_rate_premlastday: 0, //  较上月环比
      up85: 0, // 85分以上
      down75: 0, // 75-85分
      huanbiUp: 0, // 环比上升
      huanbiDown: 0, // 环比下降
      barChartData: {
        classification: ['套餐价格', '套餐适配度', '套餐办理规范性', '资费规则清晰度', '套餐办理便捷性', '账单服务'].reverse(),
        actualData: []
      }, // 柱状图数据
      lineChartData: {
        classification: [],
        actualData: [],
        lastmonth: [],
        thismonth: []
      }
    }
  },
  computed: {
    dateRange() {
      return dayjs(this.day).startOf('month').format('M月D日') + '-' + dayjs(this.day).format('M月D日')
    },
    color() {
      return sn => {
        if (sn > 14) {
          return '#ffc7ce'
        } else if (sn < 4 && sn !== 0) {
          return '#c6e0b4'
        } else {
          return 'rgba(0,0,0,0)'
        }
      }
    },
    color2() {
      return sn => {
        if (sn < 0) {
          return '#ffc7ce'
        } else {
          return 'rgba(0,0,0,0)'
        }
      }
    }
  },
  async mounted() {
    const res = await getMaxOpTime() // 获取最大时间
    this.day = res.data[0].op_time.slice(0, 10) // 设置日期
    const { data: thismonth } = await getThisMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }) // 获取本月
    const { data: lastmonth } = await getLastMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }) // 获取上月
    // console.log(thismonth, lastmonth)
    // const trend = await getTrendList({ op_time: dayjs(this.day).format('YYYY-MM-DD') }) // 获取趋势
    // this.lineChartData.actualData = trend.data.map(item => item.jqmyd?.toFixed(2))
    this.lineChartData.classification = Array.from({ length: 31 }, (_, i) => 1 + (i)) // 1-31
    this.lineChartData.classification.forEach((item, index) => {
      thismonth.forEach(i => {
        if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
          this.lineChartData.thismonth[index] = i.jqmyd?.toFixed(2)
        }
      })
      this.lineChartData.thismonth[index] === undefined && (this.lineChartData.thismonth[index] = undefined)

      lastmonth.forEach(i => {
        if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
          this.lineChartData.lastmonth[index] = i.jqmyd?.toFixed(2)
        }
      })
      this.lineChartData.lastmonth[index] === undefined && (this.lineChartData.lastmonth[index] = undefined)
    })
    console.log(this.lineChartData, 'this.lineChartData')
    console.log(this.lineChartData.thismonth.findIndex(i => i !== undefined), '(d)')
    const padding = this.lineChartData.thismonth.findIndex(i => i !== undefined)
    // 找出数组中最后一个不为undefined的元素的函数
    function findLastIndex(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== undefined) {
          return i
        }
      }
      return -1
    }
    for (let i = 0; i < padding; i++) {
      console.log(findLastIndex)
      // this.lineChartData.thismonth[i] = this.lineChartData.lastmonth[findLastIndex(this.lineChartData.lastmonth)]
    }
    const table = await getTableList({ op_time: dayjs(this.day).add(0, 'day').format('YYYY-MM-DD') }) // 获取表格
    this.tableData = table.data || []
    const arr = ['jqmyd', 'jqmyd_hb_rate_premlastday', 'package_fit', 'rule_clarity', 'transact_norms', 'transact_handy', 'jqmyd_hb_rate_lastday',
      'package_price', 'billing_service']
    arr.forEach(i => {
      // 排序
      this.tableData.sort((a, b) => {
        if (a.city_name === '全省') {
          return -1
        } else if (b.city_name === '全省') {
          return 1
        }
        return b[i] - a[i]
      })
      // 打上序号
      this.tableData.map((item, index) => {
        item['sn_' + i] = index
      })
    })
    this.tableData.sort((a, b) => a.sn_jqmyd - b.sn_jqmyd)
    this.tableData.forEach(item => {
      arr.forEach(i => {
        // item[i] = parseFloat(item[i]?.toFixed(2))
        item[i] = item[i]?.toFixed(2) // 保留两位小数
      })
    })

    this.jqmyd = this.tableData[0].jqmyd && this.tableData[0].jqmyd
    this.jqmyd_hb_rate_lastday = this.tableData[0].jqmyd_hb_rate_lastday && parseFloat(this.tableData[0].jqmyd_hb_rate_lastday)
    this.jqmyd_hb_rate_premlastday = this.tableData[0].jqmyd_hb_rate_premlastday && parseFloat(this.tableData[0].jqmyd_hb_rate_premlastday)
    this.barChartData.actualData = [
      this.tableData[0].package_price,
      this.tableData[0].package_fit,
      this.tableData[0].rule_clarity,
      this.tableData[0].transact_norms,
      this.tableData[0].transact_handy,
      this.tableData[0].billing_service
    ].reverse()
    this.tableData.forEach(item => {
      if (item.city_name === '全省') {
        return
      }
      if (item.jqmyd > 85) {
        this.up85++
      } else if (item.jqmyd < 75) {
        this.down75++
      }
      if (item.jqmyd_hb_rate_premlastday > 0) {
        this.huanbiUp++
      } else if (item.jqmyd_hb_rate_premlastday < 0) {
        this.huanbiDown++
      }
    })
  },
  created: function() {
    var h = ''
    h += ' 网页可见区域宽：' + document.body.clientWidth
    h += ' 网页可见区域高：' + document.body.clientHeight
    h += ' 网页可见区域宽：' + document.body.offsetWidth + ' (包括边线和滚动条的宽)'
    h += ' 网页可见区域高：' + document.body.offsetHeight + ' (包括边线的宽)'
    h += ' 网页正文全文宽：' + document.body.scrollWidth
    h += ' 网页正文全文高：' + document.body.scrollHeight
    h += ' 网页被卷去的高：' + document.body.scrollTop
    h += ' 网页被卷去的左：' + document.body.scrollLeft
    h += ' 网页正文部分上：' + window.screenTop
    h += ' 网页正文部分左：' + window.screenLeft
    h += ' 屏幕分辨率的高：' + window.screen.height
    h += ' 屏幕分辨率的宽：' + window.screen.width
    h += ' 屏幕可用工作区高度：' + window.screen.availHeight
    h += ' 屏幕可用工作区宽度：' + window.screen.availWidth
    h += ' 你的屏幕设置是 ' + window.screen.colorDepth + ' 位彩色'
    h += ' 你的屏幕设置 ' + window.screen.deviceXDPI + ' 像素/英寸'
    console.log(h); this.deviceInfo = h
    this.size = document.body.clientWidth / 414 * 20 + 'px'
    this.size1 = document.body.clientWidth / 414 * 10 + 'px'
    this.size2 = document.body.clientWidth / 414 * 12 + 'px'
    this.height3 = document.body.clientWidth / 414 * 35
    if (document.body.clientWidth === 414) {
      this.height = 244
      this.height1 = 136
      this.height2 = 345 // iphone 11 pro max
    } else if (document.body.clientWidth === 412) {
      this.height = 244
      this.height1 = 135
      this.height2 = 346 // s20 ultra
    } else if (document.body.clientWidth === 375) {
      this.height = 222
      this.height1 = 124
      this.height2 = 345 // iphone 6 7 8 se2
    } else if (document.body.clientWidth === 428) {
      this.height = 254
      this.height1 = 140
      this.height2 = 348 // iphone 12/13 pro max
    } else if (document.body.clientWidth === 390) {
      this.height = 234
      this.height1 = 128
      this.height2 = 345 // iphone 12/13 pro
    } else {
      const rate = document.body.clientWidth / 375
      this.height = 222 * rate
      this.height1 = 124 * rate
      this.height2 = 360 * rate
    }
    // console.log(this.height, 'height')
    // console.log(this.height1, 'height1')
    // console.log(this.height2, 'height2')
    // console.log(this.height3, 'height3')
  },
  methods: {
    selectedRowStyle({ row, rowIndex }) {
      if (row.cityid === 999) {
        return { 'font-weight': '700' }
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '~@/views/components/satisfaction.scss';
</style>
