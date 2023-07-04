<template>
  <div class="container">
    <div :style="{height: height+'px'}" />
    <div class="content">
      <module1 />
      <div>
        <bar-chart :height="'150px'" />
      </div>
      <div>
        <line-chart :height="'150px'" :chart-data="lineChartData" />
      </div>
      <module2 />
      <div ref="tableContainer" class="table-container" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height2+'px'}">
        <el-table
          ref="table1"
          :row-style="selectedRowStyle"
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          :data="tableData"
          :fit="true"
        >
          <el-table-column prop="cityname" fixed label="地市" width="35" />
          <el-table-column prop="name" label="宽带使用感知" width="50" />
          <el-table-column prop="name" label="较上月环比" width="40" />
          <el-table-column label="宽带使用感知关键过程表现">
            <el-table-column prop="name" label="上网速度" width="50" />
            <el-table-column prop="col1" label="网络连接稳定性" width="50">
              <template slot-scope="scope">
                <div
                  :style="{backgroundColor: color(scope.row.sn),fontWeight: scope.row.cityname === '全省'?'bold':'normal'}"
                >
                  {{ (scope.row.col1*100).toFixed(1)+'%' }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="完游戏" width="50" />
            <el-table-column prop="name" label="看视频" width="50" />
            <el-table-column prop="name" label="看互联网电视" width="50" />
            <el-table-column prop="name" label="浏览图文" width="50" />
          </el-table-column>
          <el-table-column prop="col1" label="样本量" min-width="50" />
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
    <div :style="{height: height3 + 'px'}" class="version">
      中国移动山东公司客服部（V1.0版)
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { getList } from '@/api/sdbass'
import BarChart from '@/views/components/BarChart'
import LineChart from '@/views/components/LineChart'
import Module1 from '@/views/tariff-satisfaction/module1.vue'
import Module2 from '@/views/tariff-satisfaction/module2.vue'
export default {
  name: 'Wq',
  components: { BarChart, LineChart, Module1, Module2 },
  data() {
    return {
      date: dayjs().format('M月D日'),
      left: '68%',
      top: '75px',
      size: '20px',
      size1: '20px',
      size2: '10px',
      height: 240,
      height1: 136,
      height2: 400,
      height3: 50,
      tableData: [],
      lineChartData: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  computed: {
    color() {
      return sn => {
        if (sn !== 18 && sn > 14) {
          return '#deebf7'
        } else if (sn < 4) {
          return '#ffc7ce'
        } else {
          return 'rgba(0,0,0,0)'
        }
      }
    }
  },
  mounted() {
    getList().then(res => {
      this.tableData = res.data.items
      this.tableData.sort((a, b) => {
        if (a.cityid === 999) {
          return true
        } else {
          return a.col1 - b.col1
        }
      })
      this.tableData.map(item => {
        item.sn = this.tableData.indexOf(item) + 1
      })
      this.tableData.reduce(function(prev, next) {
        if (prev.col1 === next.col1) {
          next.sn = prev.sn
        }
        return next
      })
      this.tableData.sort(function(a, b) {
        return a.cityid - b.cityid
      })
      this.$nextTick(() => {
        // const tableHeight = this.$refs?.table1?.$el.offsetHeight
        // console.log(tableHeight, 'axios')
        // this.height = tableHeight * 1
      })
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
    this.top = document.body.clientWidth * 0.32 * 0.62 + 'px'
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
      this.height2 = 292 // iphone 6 7 8 se2
    } else if (document.body.clientWidth === 428) {
      this.height = 254
      this.height1 = 140
      this.height2 = 335 // iphone 12/13 pro max
    } else if (document.body.clientWidth === 390) {
      this.height = 234
      this.height1 = 128
      this.height2 = 345 // iphone 12/13 pro
    } else {
      const rate = document.body.clientWidth / 375
      this.height = 222 * rate
      this.height1 = 124 * rate
      this.height2 = 292 * rate
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
    }
  }
}
</script>
<style lang="scss">
.container {
  /* position: relative; */
  //background: #5b9bd5 url(../../assets/images/wq-bg.jpg) no-repeat;
  background: linear-gradient(to top right, #d4e7f6, skyblue 10px, #e6f1e0);
  background-size: 100%;
  font-family: 'Microsoft YaHei',serif;
}

.content {
  background-color: white;
  border-radius: 10px;
  border: 1px solid skyblue;
  width: 96%;
  margin-left: auto;
  margin-right: auto;
}

.description {
  font-size: var(--size1);
  line-height: var(--size2);
  color: black;
  padding: 5px 15px;
}
.version{
  text-align: center;
  flex-direction: column;
  display: flex;
  font-size: 12px;
  color: #232323;
  font-weight: 700;
  justify-content: end;
  padding-bottom: 5px;
}
.table-container .el-table {
  font-size: 10px;
  //transform: scale(0.5);
  //transform-origin: 0 top;
}
.table-container .el-table td, .el-table th {
  padding: 0;
  text-align: center;
}
.table-container .el-table td.el-table__cell div {
  /* transform: scale(0.8); */
}

.table-container .el-table .cell {
  padding: 2px;
}

.table-container .el-table .el-table__cell {
  padding: 2px;
}

.table-container .el-table--border .el-table__cell:first-child .cell {
  padding-left: 2px;
}

.table-container .el-table th.el-table__cell>.cell {
  padding: 2px;
}
.el-table .cell, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
  padding: 0px;
}
.el-table .cell {
  line-height: 12px;
  padding-right: 10px;
}
</style>
