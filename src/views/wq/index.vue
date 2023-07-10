<template>
  <div class="container">
    <div :style="{height: height+'px'}" />
    <div :style="{ '--left': left, '--top': top, '--size': size }" class="data-date">{{ date }}</div>
    <div class="content">
      <div class="head">
        <div class="title">一</div>
        <div class="title">&nbsp;分渠道发展情况&nbsp;</div>
      </div>
      <div ref="tableContainer2" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height1+'px'}">
        <iframe
          src="http://192.168.13.125:8075/webroot/decision/view/form?op=h5&viewlet=bass/html5/project2023/phone125.frm"
          width="100%"
          :height="height1+'px'"
          marginwidth="0"
          marginheight="0"
          scrolling="yes"
          allowtransparency="yes"
          frameborder="0"
          style="display:block;"
        />
      </div>
      <div class="head">
        <div class="title">二</div>
        <div class="title">&nbsp;分地市发展情况&nbsp;</div>
      </div>
      <div ref="tableContainer2" class="table-container" :style="{marginRight: 'auto',marginLeft: 'auto',width: '95%',height: height2+'px'}">
        <!--        <iframe-->
        <!--          src="http://192.168.13.125:8075/webroot/decision/view/form?op=h5&viewlet=bass/html5/project2023/phone126_mobile.frm"-->
        <!--          width="100%"-->
        <!--          :height="height2+'px'"-->
        <!--          marginwidth="0"-->
        <!--          marginheight="0"-->
        <!--          scrolling="yes"-->
        <!--          allowtransparency="yes"-->
        <!--          frameborder="0"-->
        <!--          style="display:block;"-->
        <!--        />-->
        <el-table
          ref="table1"
          :row-style="selectedRowStyle"
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          :data="tableData"
          :fit="true"
        >
          <el-table-column prop="cityname" label="地市" width="35" />
          <el-table-column label="政企收入">
            <el-table-column prop="name" label="政企收入年累计完成进度" width="60" />
            <el-table-column prop="col1" label="其中本业务收入占比" width="50">
              <template slot-scope="scope">
                <div
                  :style="{backgroundColor: color(scope.row.sn),fontWeight: scope.row.cityname === '全省'?'bold':'normal'}"
                >
                  {{ (scope.row.col1*100).toFixed(1)+'%' }}</div>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="重点产品发展情况">
            <el-table-column prop="name" width="40" label="畅享版企宽" />
            <el-table-column prop="sn" width="40" label="尊享版企宽" />
            <el-table-column prop="province" width="40" label="商务快线" />
<!--            <el-table-column prop="province" width="40" label="千里眼" />-->
            <el-table-column prop="province" width="40" label="视频彩铃" />
            <el-table-column prop="province" min-width="30" label="互联网专线" />
          </el-table-column>
        </el-table>
      </div>
      <div :style="{height: height3+'px'}">
        <div class="description" :style="{ '--size1': size1, '--size2': size2 }">
          <p>
            解释口径：微企市场收入为系统内C2D类集团723个计费科目收入；月累计完成进度为当月收入/去年同期月收入+月净增目标收入；木本业务收入占比:当月木本业务科目收入/微企市场当月收入，重点产品发展：当月重点产品累计月发展量；产能占比：各渠道当月发展量/渠道当月发展总量
          </p>
        </div>
      </div>
    </div>
    <div :style="{height: height3/5 + 'px'}" />
  </div></template>
<script>
import dayjs from 'dayjs'
import { getList } from '@/api/st_user_instant_evaluate_zftc_dm'
export default {
  name: 'Wq',
  data() {
    return {
      date: dayjs().format('M月D日'),
      size: '20px',
      size1: '20px',
      size2: '10px',
      height: 240,
      height1: 136,
      height2: 400,
      height3: 50,
      tableData: []
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
    console.log('created')
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
    this.size1 = document.body.clientWidth / 414 * 6 + 'px'
    this.size2 = document.body.clientWidth / 414 * 10 + 'px'
    this.height3 = document.body.clientWidth / 414 * 50
    if (document.body.clientWidth === 414) {
      this.height = 244
      this.height1 = 136
      this.height2 = 323 // iphone 11 pro max
    } else if (document.body.clientWidth === 412) {
      this.height = 244
      this.height1 = 135
      this.height2 = 321 // s20 ultra
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
      this.height2 = 304 // iphone 12/13 pro
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
body {
  /* background-color: #5b9bd5 ; */
  background: linear-gradient(to top right, #d4e7f6, skyblue 10px, #e6f1e0);
}

.container {
  /* position: relative; */
  background: #5b9bd5 url(../../assets/images/wq-bg.jpg) no-repeat;
  background-size: 100%;
  font-family: 'Microsoft YaHei';
}

.data-date {
  position: absolute;
  top: var(--top);
  left: var(--left);
  font-size: var(--size);
  color: red;
  font-weight: 700;
}

.content {
  background-color: white;
  border-radius: 30px;
  border: 1px solid skyblue;
  width: 96%;
  margin-left: auto;
  margin-right: auto;
}

.head {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px 10px;
}

.title {
  font-size: 18px;
  font-weight: 900;
  line-height: 30px;
  color: white;
  padding: 0 10px;
  border-radius: 15px;
  background-color: #2B9AEB;
}
.description {
  font-size: var(--size1);
  line-height: var(--size2);
  color: black;
  padding: 5px 15px;
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
