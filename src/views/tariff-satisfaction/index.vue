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
          <div class="big-title-2">——“用后即评” 情况通报</div>
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
        <module1 />
        <div>
          <bar-chart :height="'150px'" :classification="['套餐价格', '套餐适配度', '套餐办理规范性', '资费规则清晰度', '套餐办理便捷性', '账单服务'].reverse()" :data="[71.5, 72.20, 76.29, 76.69, 78.18, 81.32].reverse()" />
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
            <el-table-column prop="city_name" fixed label="地市" width="35" />
            <el-table-column prop="jqmyd" label="手机资费满意度" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color(scope.row.sn_jqmyd)}">{{ scope.row.jqmyd }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="jqmyd_hb_rate_premlastday" label="较上月环比" width="40">
              <template slot-scope="scope">
                <div :style="{backgroundColor: color2(scope.row.jqmyd_hb_rate_premlastday)}">{{ scope.row.jqmyd_hb_rate_premlastday }}</div>
              </template>
            </el-table-column>
            <el-table-column label="手机资费关键过程表现">
              <el-table-column prop="package_fit" label="套餐适配度" width="40">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_jqmyd)}">{{ scope.row.package_fit }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="rule_clarity" label="资费规则清晰度" width="48">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_jqmyd),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.rule_clarity }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_norms" label="套餐办理规范性" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_jqmyd)}">{{ scope.row.transact_norms }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="transact_handy" label="套餐办理便携性" width="50">
                <template slot-scope="scope">
                  <div :style="{backgroundColor: color(scope.row.sn_jqmyd)}">{{ scope.row.transact_handy }}</div>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column prop="user_num" label="样本量" min-width="40" />
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
import { getMaxOpTime, getTableList } from '@/api/sdbass'
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
      lineChartData: {
        classification: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10', '5.11', '5.12', '5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19', '5.20', '5.21', '5.22', '5.23', '5.24', '5.25', '5.26', '5.27', '5.28', '5.29', '5.30', '5.31'],
        actualData: [120, 82, 91, 154, 162, 100, 96, 124, 152, 120, 82, 91, 154, 162, 140, 147, 152, 130, 120, 82, 91, 154, 162, 140, 147, 152, 130, 162, 140, 147, 152]
      }
    }
  },
  computed: {
    dateRange() {
      return dayjs(this.day).add(-30, 'day').format('M月D日') + '-' + dayjs(this.day).format('M月D日')
    },
    color() {
      return sn => {
        if (sn > 15) {
          return '#ffc7ce'
        } else if (sn < 5 && sn !== 1) {
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
    const res = await getMaxOpTime()
    this.day = res.data[0].op_time.slice(0, 10)
    const table = await getTableList({ op_time: dayjs(this.day).add(0, 'day').format('YYYY-MM-DD') })
    this.tableData = table.data
    this.tableData.map(item => {
      item.jqmyd = item.jqmyd?.toFixed(2) // 满意度
      item.jqmyd_hb_rate_premlastday = item.jqmyd_hb_rate_premlastday?.toFixed(2) // 较上月环比
      item.package_fit = item.package_fit?.toFixed(2) // 套餐适配度
      item.rule_clarity = item.rule_clarity?.toFixed(2) // 资费规则清晰度
      item.transact_norms = item.transact_norms?.toFixed(2) // 套餐办理规范性
      item.transact_handy = item.transact_handy?.toFixed(2)
    })
    const arr = ['jqmyd', 'jqmyd_hb_rate_premlastday', 'package_fit', 'rule_clarity', 'transact_norms', 'transact_handy']
    arr.forEach(i => {
      // 排序
      this.tableData.sort((a, b) => b[i] - a[i])
      let obj = {}
      this.tableData.forEach((item, index) => {
        if (item.city_name === '全省') {
          obj = item
          this.tableData.splice(index, 1)
          return
        }
      })
      this.tableData.unshift(obj)
      // 打上序号
      this.tableData.map((item, index) => {
        item['sn_' + i] = index + 1
      })
    })
    this.tableData.sort((a, b) => a.sn_jqmyd - b.sn_jqmyd)
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
<style scoped lang="scss">
.container {
   position: relative;
  //background: #5b9bd5 url(../../assets/images/wq-bg.jpg) no-repeat;
  background: linear-gradient(to bottom left, #658afc, #478dff 10px, #d4e7f6);
  background-size: 100%;
  font-family: 'Microsoft YaHei',serif;
}
.bg{
  position: absolute;
  top: 80px;
  //left: 0;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/形状背景.png) no-repeat;
  background-size: 100% 300%;
  //z-index: 0;
}
.logo-container{
  position: relative;
  display: flex;
  flex-direction: column;
  .logo-pic{
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 0 10px;
  }
  .big-title-container{
    padding: 20px 20px 10px 20px;
    .big-title{
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      .big-title-1 {
        color: #ecc022;
        //font-style: italic;
        font-weight: 700;
        font-size: 40px;
        text-align: center;
        font-family: "Microsoft YaHei","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      .big-title-2{
        font-size: 22px;
        font-weight: 600;
        font-style: italic;
        color: #fff;
        text-align: end;
      }
    }
  }
  .time-container{
    display: flex;
    justify-content: center;
    font-size: 22px;
    line-height: 28px;
    color: #20a0ff;
    font-weight: 600;
    //font-style: italic;
    .parallelogram {
      text-align: center;
      width: 220px;
      height: 28px;
      border-radius: 5px;
      transform: skew(20deg);
      background: #fff;
      .time{
        transform: skew(-40deg);
      }
    }
  }

}
.outer {
  position: relative;
  background-color: white;
  border-radius: 10px;
  //border: 1px solid #769bd4;
  padding: 4px;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
}
.content {
  background-color: white;
  border-radius: 8px;
  border: 1px solid #769bd4;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.trapezoid-outer{
  display: flex;
  justify-content: center;
  height: 0;
  transform: translateY(-4px) perspective(10px) rotateX(-3deg);
}
.trapezoid-inner{
  background-color: #20a0ff;
  position: absolute;
  height: 6px;
  width: 60%
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
.table-container{
  ::v-deep .el-table {
    font-size: 10px;
    //transform: scale(0.5);
    //transform-origin: 0 top;
  }
  ::v-deep .el-table td, ::v-deep .el-table th {
    padding: 0;
    text-align: center;
  }
  ::v-deep .el-table .cell {
    padding: 2px;
  }
  ::v-deep .el-table .el-table__cell {
    padding: 2px;
  }
  ::v-deep .el-table .cell {
    line-height: 12px;
  }
}
</style>
