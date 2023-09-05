<template>
  <div
    ref="imageTofile"
    v-loading="loading"
    element-loading-text="加载中......"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    class="container"
  >
    <div class="bg" />
    <div class="logo-container" :style="{height: height+'px'}">
      <div class="logo-pic">
        <img :src="require('@/assets/images/logo.png')" alt="" style="width: 189px;height: 40px">
        <img :src="require('@/assets/images/heart.png')" alt="" style="width: 107px;height: 40px">
      </div>
      <div class="big-title-container">
        <div class="big-title">
          <div class="big-title-1" before-content="无线网络感知满意度" :style="{'--color': shadowColor, '--size': titleSize}">无线网络感知满意度</div>
          <div class="big-title-2" before-content-sub="——“用后即评”情况通报" :style="{'--color': shadowColor, '--size': titleSize2}">——“用后即评”情况通报</div>
        </div>
      </div>
      <div class="time-container">
        <div class="parallelogram">
          <div class="time">{{ dateRange }}</div>
        </div>
      </div>
    </div>
    <div class="outer">
      <div class="riqi">
        <div class="inner">{{ dateRange }}</div>
      </div>
      <div class="trapezoid-outer1">
        <div class="trapezoid-inner1">
          <div class="trapezoid-inner1-text">手机上网满意度</div>
        </div>
      </div>
      <div class="content">
        <module1 style="margin-top: 30px" :jqmyd="parseFloat(module1.jqmyd)" :jqmyd_hb_rate_lastday="parseFloat(module1.jqmyd_hb_rate_lastday)" :jqmyd_hb_rate_premlastday="parseFloat(module1.jqmyd_hb_rate_premlastday)" />
        <div>
          <bar-chart :height="'100px'" :data="module1.barChartData" />
        </div>
        <div>
          <line-chart :height="'150px'" :chart-data="module1.lineChartData" />
        </div>
        <module2 :up85="module1.up85" :down75="module1.down75" :huanbi-up="module1.huanbiUp" :huanbi-down="module1.huanbiDown" />
        <div ref="tableContainer" class="table-container" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height2+'px'}">
          <table-sjsw :table-data="module1.tableData" />
        </div>
        <div :style="{height: height3/2+'px'}">
          <div class="description" :style="{ '--size1': size1, '--size2': size2, 'display': 'none' }">
            <p>
              {{ module1.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 2rem" />
    <div class="outer">
      <div class="trapezoid-outer1">
        <div class="trapezoid-inner1">
          <div class="trapezoid-inner1-text">语音通话满意度</div>
        </div>
      </div>
      <div class="content">
        <module1 style="margin-top: 30px" :jqmyd="parseFloat(module2.jqmyd)" :jqmyd_hb_rate_lastday="parseFloat(module2.jqmyd_hb_rate_lastday)" :jqmyd_hb_rate_premlastday="parseFloat(module2.jqmyd_hb_rate_premlastday)" />
        <div>
          <bar-chart :height="'100px'" :data="module2.barChartData" />
        </div>
        <div>
          <line-chart :height="'150px'" :chart-data="module2.lineChartData" />
        </div>
        <module2 :up85="module2.up85" :down75="module2.down75" :huanbi-up="module2.huanbiUp" :huanbi-down="module2.huanbiDown" />
        <div ref="tableContainer" class="table-container" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height2+'px'}">
          <table-yyth :table-data="module2.tableData" />
        </div>
        <div :style="{height: height3/2+'px'}">
          <div class="description" :style="{ '--size1': size1, '--size2': size2, 'display': 'none' }">
            <p>
              {{ module2.description }}
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
import * as sjsw from '@/api/st_user_instant_evaluate_sjsw_dm'
import * as yyth from '@/api/st_user_instant_evaluate_yyth_dm'
import BarChart from '@/views/components/BarChart'
import LineChart from '@/views/components/LineChart'
import Module1 from '@/views/components/module1.vue'
import Module2 from '@/views/components/module2.vue'
import '@/assets/fonts/YOUSHEBIAOTIHEI-2-embed.css'
import TableSjsw from '@/views/kefu/wireless-satisfaction/table-sjsw'
import TableYyth from '@/views/kefu/wireless-satisfaction/table-yyth'
export default {
  name: 'TariffSatisfaction',
  components: { BarChart, LineChart, Module1, Module2, TableSjsw, TableYyth },
  data() {
    return {
      loading: true,
      content: '无线网络感知满意度',
      subcontent: '——“用后即评”情况通报',
      shadowColor: '#3C88FD',
      size: '20px',
      size1: '20px',
      size2: '10px',
      titleSize: '42px',
      titleSize2: '28px',
      day: '1970-01-01',
      height: 240,
      height1: 136,
      height2: 400,
      height3: 50,
      module1: {
        loading: true,
        tableData: [],
        jqmyd: 0, // #满意度--当前表现值
        jqmyd_hb_rate_lastday: 0, // 较昨日环比
        jqmyd_hb_rate_premlastday: 0, //  较上月环比
        up85: 0, // 85分以上
        down75: 0, // 75-85分
        huanbiUp: 0, // 环比上升
        huanbiDown: 0, // 环比下降
        barChartData: {
          classification: ['手机上网稳定性', '手机上网速度', '网络覆盖与信号强度'].reverse(),
          actualData: []
        }, // 柱状图数据
        lineChartData: {
          classification: [],
          actualData: [],
          lastmonth: [],
          thismonth: []
        },
        description: '数据来源：省内用后即评手机资费满意度调研数据'
      },
      module2: {
        loading: true,
        tableData: [],
        jqmyd: 0, // #满意度--当前表现值
        jqmyd_hb_rate_lastday: 0, // 较昨日环比
        jqmyd_hb_rate_premlastday: 0, //  较上月环比
        up85: 0, // 85分以上
        down75: 0, // 75-85分
        huanbiUp: 0, // 环比上升
        huanbiDown: 0, // 环比下降
        barChartData: {
          classification: ['语音通话稳定性', '语音通话清晰度', '网络覆盖与信号强度'].reverse(),
          actualData: []
        }, // 柱状图数据
        lineChartData: {
          classification: [],
          actualData: [],
          lastmonth: [],
          thismonth: []
        },
        description: '数据来源：省内用后即评手机资费满意度调研数据'
      }
    }
  },
  computed: {
    dateRange() {
      if (this.day === '1970-01-01') {
        return 'M月D日-M月D日'
      }
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
    const res = await yyth.getMaxOpTime() // 获取最大时间
    this.day = res.data[0].op_time.slice(0, 10) // 设置日期
    Promise.all([this.sjsw(), this.yyth()]).then(() => {
      this.loading = false
    })
    this.loading = false
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
      this.titleSize = '38px'
      this.titleSize2 = '24px'
      this.height = 222
      this.height1 = 124
      this.height2 = 345 // iphone 6 7 8 se2
    } else if (document.body.clientWidth === 428) {
      this.height = 254
      this.height1 = 140
      this.height2 = 348 // iphone 12/13 pro max
    } else if (document.body.clientWidth === 390) {
      this.titleSize = '38px'
      this.titleSize2 = '24px'
      this.height = 234
      this.height1 = 128
      this.height2 = 345 // iphone 12/13 pro
    } else {
      const rate = document.body.clientWidth / 375
      this.height = 222 * rate
      this.height1 = 124 * rate
      this.height2 = 360 * rate
    }
  },
  methods: {
    selectedRowStyle({ row, rowIndex }) {
      if (row.cityid === 999) {
        return { 'font-weight': '700' }
      }
    },
    findLastIndex(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== undefined) {
          return i
        }
      }
      return -1
    },
    async sjsw() {
      const [{ data: thismonth }, { data: lastmonth }, { data: tableData }] = await Promise.all(
        [sjsw.getThisMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }),
          sjsw.getLastMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }),
          sjsw.getTableList({ op_time: dayjs(this.day).add(0, 'day').format('YYYY-MM-DD') })
        ])
      this.module1.lineChartData.classification = Array.from({ length: 31 }, (_, i) => 1 + (i)) // 1-31
      this.module1.lineChartData.classification.forEach((item, index) => {
        thismonth.forEach(i => {
          if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
            this.module1.lineChartData.thismonth[index] = i.jqmyd?.toFixed(2)
          }
        })
        this.module1.lineChartData.thismonth[index] === undefined && (this.module1.lineChartData.thismonth[index] = undefined)

        lastmonth.forEach(i => {
          if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
            this.module1.lineChartData.lastmonth[index] = i.jqmyd?.toFixed(2)
          }
        })
        this.module1.lineChartData.lastmonth[index] === undefined && (this.module1.lineChartData.lastmonth[index] = undefined)
      })
      // 下面是表格数据的处理
      this.module1.tableData = tableData || []
      const arr = ['jqmyd', 'jqmyd_hb_rate_premlastday', 'jqmyd_hb_rate_lastday', 'answer_A2', 'answer_A3', 'answer_A4']
      arr.forEach(i => {
        // 排序
        this.module1.tableData.sort((a, b) => {
          if (a.city_name === '全省') {
            return -1
          } else if (b.city_name === '全省') {
            return 1
          }
          return b[i] - a[i]
        })
        // 打上序号
        this.module1.tableData.map((item, index) => {
          item['sn_' + i] = index
        })
      })
      this.module1.tableData.sort((a, b) => a.sn_jqmyd - b.sn_jqmyd)
      this.module1.tableData.forEach(item => {
        arr.forEach(i => {
          // item[i] = parseFloat(item[i]?.toFixed(2))
          item[i] = item[i]?.toFixed(2) // 保留两位小数
        })
      })
      this.module1.jqmyd = this.module1.tableData[0].jqmyd && this.module1.tableData[0].jqmyd
      this.module1.jqmyd_hb_rate_lastday = this.module1.tableData[0].jqmyd_hb_rate_lastday && parseFloat(this.module1.tableData[0].jqmyd_hb_rate_lastday)
      this.module1.jqmyd_hb_rate_premlastday = this.module1.tableData[0].jqmyd_hb_rate_premlastday && parseFloat(this.module1.tableData[0].jqmyd_hb_rate_premlastday)
      this.module1.barChartData.actualData = [
        this.module1.tableData[0].answer_A4,
        this.module1.tableData[0].answer_A3,
        this.module1.tableData[0].answer_A2
      ].reverse()
      this.module1.tableData.forEach(item => {
        if (item.city_name === '全省') {
          return
        }
        if (item.jqmyd > 85) {
          this.module1.up85++
        } else if (item.jqmyd < 75) {
          this.module1.down75++
        }
        if (item.jqmyd_hb_rate_premlastday > 0) {
          this.module1.huanbiUp++
        } else if (item.jqmyd_hb_rate_premlastday < 0) {
          this.module1.huanbiDown++
        }
      })

      this.module1.loading = false
    },
    async yyth() {
      const [{ data: thismonth }, { data: lastmonth }, { data: tableData }] = await Promise.all(
        [yyth.getThisMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }),
          yyth.getLastMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }),
          yyth.getTableList({ op_time: dayjs(this.day).add(0, 'day').format('YYYY-MM-DD') })
        ])
      this.module2.lineChartData.classification = Array.from({ length: 31 }, (_, i) => 1 + (i)) // 1-31
      this.module2.lineChartData.classification.forEach((item, index) => {
        thismonth.forEach(i => {
          if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
            this.module2.lineChartData.thismonth[index] = i.jqmyd?.toFixed(2)
          }
        })
        this.module2.lineChartData.thismonth[index] === undefined && (this.module2.lineChartData.thismonth[index] = undefined)

        lastmonth.forEach(i => {
          if (i.op_time.slice(8, 10) === (item.toString().length === 1 ? '0' + item : item + '')) {
            this.module2.lineChartData.lastmonth[index] = i.jqmyd?.toFixed(2)
          }
        })
        this.module2.lineChartData.lastmonth[index] === undefined && (this.module2.lineChartData.lastmonth[index] = undefined)
      })
      // 下面是表格数据的处理
      this.module2.tableData = tableData || []
      const arr = ['jqmyd', 'jqmyd_hb_rate_premlastday', 'jqmyd_hb_rate_lastday', 'answer_B2', 'answer_B3', 'answer_B4']
      arr.forEach(i => {
        // 排序
        this.module2.tableData.sort((a, b) => {
          if (a.city_name === '全省') {
            return -1
          } else if (b.city_name === '全省') {
            return 1
          }
          return b[i] - a[i]
        })
        // 打上序号
        this.module2.tableData.map((item, index) => {
          item['sn_' + i] = index
        })
      })
      this.module2.tableData.sort((a, b) => a.sn_jqmyd - b.sn_jqmyd)
      this.module2.tableData.forEach(item => {
        arr.forEach(i => {
          // item[i] = parseFloat(item[i]?.toFixed(2))
          item[i] = item[i]?.toFixed(2) // 保留两位小数
        })
      })
      this.module2.jqmyd = this.module2.tableData[0].jqmyd && this.module2.tableData[0].jqmyd
      this.module2.jqmyd_hb_rate_lastday = this.module2.tableData[0].jqmyd_hb_rate_lastday && parseFloat(this.module2.tableData[0].jqmyd_hb_rate_lastday)
      this.module2.jqmyd_hb_rate_premlastday = this.module2.tableData[0].jqmyd_hb_rate_premlastday && parseFloat(this.module2.tableData[0].jqmyd_hb_rate_premlastday)
      this.module2.barChartData.actualData = [
        this.module2.tableData[0].answer_B4,
        this.module2.tableData[0].answer_B2,
        this.module2.tableData[0].answer_B2
      ].reverse()
      this.module2.tableData.forEach(item => {
        if (item.city_name === '全省') {
          return
        }
        if (item.jqmyd > 85) {
          this.module2.up85++
        } else if (item.jqmyd < 75) {
          this.module2.down75++
        }
        if (item.jqmyd_hb_rate_premlastday > 0) {
          this.module2.huanbiUp++
        } else if (item.jqmyd_hb_rate_premlastday < 0) {
          this.module2.huanbiDown++
        }
      })
      this.module2.loading = false
    }
  }
}
</script>
<style scoped lang="scss">
@import '~@/views/components/satisfaction.scss';
</style>
