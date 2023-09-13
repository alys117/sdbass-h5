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
          <div class="big-title-1" :before-content="content" :style="{'--color': shadowColor, '--size': titleSize}">宽带使用感知满意度</div>
          <div class="big-title-2" :before-content-sub="subcontent" :style="{'--color': shadowColor, '--size': titleSize2}">——“用后即评”情况通报</div>
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
            <el-table-column prop="jqmyd" label="宽带使用感知" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color(scope.row.sn_jqmyd),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="jqmyd_hb_rate_premlastday" label="较上月环比" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color2(scope.row.jqmyd_hb_rate_premlastday),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd_hb_rate_premlastday }}</div>
              </template>
            </el-table-column>
            <el-table-column label="宽带使用感知关键过程表现">
              <el-table-column prop="package_fit" label="上网速度" width="40">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_Q1),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_Q1 }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="rule_clarity" label="网络连接稳定性" width="48">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_Q2),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_Q2 }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_norms" label="玩游戏" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_A1),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A1 }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_handy" label="看视频" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_B1),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_B1 }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_handy" label="看互联网电视" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_C1),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_C1 }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_handy" label="浏览图文" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_answer_D1),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_D1 }}</div>
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
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :style="{height: height3 + 'px'}" class="version" @click="screenImage">
      中国移动山东公司客服部（V1.0版)
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { getMaxOpTime, getTableList, getLastMonth, getThisMonth } from '@/api/st_user_instant_evaluate_jksw_dm'
import BarChart from '@/views/components/BarChart'
import LineChart from '@/views/components/LineChart'
import Module1 from '@/views/components/module1.vue'
import Module2 from '@/views/components/module2.vue'
import '@/assets/fonts/YOUSHEBIAOTIHEI-2-embed.css'
import html2canvas from 'html2canvas'
export default {
  name: 'TariffSatisfaction',
  components: { BarChart, LineChart, Module1, Module2 },
  data() {
    return {
      content: '宽带使用感知满意度',
      subcontent: '——“用后即评”情况通报',
      shadowColor: '#3C88FD',
      loading: true,
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
      tableData: [],
      jqmyd: 0, // #满意度--当前表现值
      jqmyd_hb_rate_lastday: 0, // 较昨日环比
      jqmyd_hb_rate_premlastday: 0, //  较上月环比
      up85: 0, // 85分以上
      down75: 0, // 75-85分
      huanbiUp: 0, // 环比上升
      huanbiDown: 0, // 环比下降
      barChartData: {
        classification: ['玩游戏', '浏览图文', '看视频', '上网速度', '看互联网电视', '网络连接稳定性'].reverse(),
        actualData: []
      }, // 柱状图数据
      lineChartData: {
        classification: [],
        actualData: [],
        lastmonth: [],
        thismonth: []
      },
      description: '数据来源：省内用后即评宽带上网满意度调研数据'
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
    const aaa = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ok')
      }, 2000)
    })
    console.log(aaa)
    const res = await getMaxOpTime() // 获取最大时间
    this.day = res.data[0].op_time.slice(0, 10) // 设置日期

    Promise.all([getThisMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') }),
      getLastMonth({ op_time: dayjs(this.day).format('YYYY-MM-DD') })]).then(res => {
      const [{ data: thismonth }, { data: lastmonth }] = res
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

      this.loading = false
    })
    const table = await getTableList({ op_time: dayjs(this.day).add(0, 'day').format('YYYY-MM-DD') }) // 获取表格
    this.tableData = table.data || []
    const arr = ['jqmyd', 'jqmyd_hb_rate_premlastday', 'jqmyd_hb_rate_lastday', 'answer_A1', 'answer_B1', 'answer_C1', 'answer_D1', 'answer_Q1', 'answer_Q2']
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
        item[i] = item[i]?.toFixed(2) // 保留两位小数
      })
    })
    this.jqmyd = this.tableData[0].jqmyd && this.tableData[0].jqmyd
    this.jqmyd_hb_rate_lastday = this.tableData[0].jqmyd_hb_rate_lastday && parseFloat(this.tableData[0].jqmyd_hb_rate_lastday)
    this.jqmyd_hb_rate_premlastday = this.tableData[0].jqmyd_hb_rate_premlastday && parseFloat(this.tableData[0].jqmyd_hb_rate_premlastday)
    this.barChartData.actualData = [
      this.tableData[0].answer_A1,
      this.tableData[0].answer_D1,
      this.tableData[0].answer_B1,
      this.tableData[0].answer_Q2,
      this.tableData[0].answer_C1,
      this.tableData[0].answer_Q2
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
      this.titleSize = '36px'
      this.titleSize2 = '22px'
      this.height = 222
      this.height1 = 124
      this.height2 = 345 // iphone 6 7 8 se2
    } else if ([428, 430].includes(document.body.clientWidth)) {
      this.height = 254
      this.height1 = 140
      this.height2 = 348 // iphone 12/13/14 pro max
    } else if (document.body.clientWidth === 390) {
      this.titleSize = '38px'
      this.titleSize2 = '24px'
      this.height = 234
      this.height1 = 128
      this.height2 = 345 // iphone 12/13 pro
    } else {
      const rate = document.body.clientWidth / 375
      this.titleSize = 38 * rate + 'px'
      this.titleSize2 = 24 * rate + 'px'
      this.height = 234
      this.height1 = 124 * rate
      this.height2 = 360 * rate
    }
    console.log(this.height, 'height')
    console.log(this.height1, 'height1')
    console.log(this.height2, 'height2')
    console.log(this.height3, 'height3')
  },
  methods: {
    selectedRowStyle({ row, rowIndex }) {
      if (row.cityid === 999) {
        return { 'font-weight': '700' }
      }
    },
    // 页面元素转图片
    screenImage() {
      // 手动创建一个 canvas 标签
      const canvas = document.createElement('canvas')
      // 获取父标签，意思是这个标签内的 DOM 元素生成图片
      // imageTofile是给截图范围内的父级元素自定义的ref名称
      const canvasBox = this.$refs.imageTofile
      // 获取父级的宽高
      const width = parseInt(window.getComputedStyle(canvasBox).width)
      const height = parseInt(window.getComputedStyle(canvasBox).height)
      // 宽高 * 2 并放大 2 倍 是为了防止图片模糊
      canvas.width = width * 2
      canvas.height = height * 2
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      const context = canvas.getContext('2d')
      context.scale(1, 1)
      const options = {
        backgroundColor: null,
        canvas: canvas,
        useCORS: true
      }
      html2canvas(canvasBox, options).then((canvas) => {
        // toDataURL 图片格式转成 base64
        const dataURL = canvas.toDataURL('image/png')
        // console.log(dataURL)
        downloadImage(dataURL)
      })
      const downloadImage = (url) => {
        // 如果是在网页中可以直接创建一个 a 标签直接下载
        const a = document.createElement('a')
        a.href = url
        a.download = '截图'
        a.click()
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/views/components/satisfaction.scss';
</style>

