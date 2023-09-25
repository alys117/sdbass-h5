<template>
  <div class="app-container">
    <el-table
      v-if="false"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column fixed align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pageviews" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
    <bar-chart :height="'150px'" :data="barChartData" />
    <div class="table-container">
<!--      <table-sjsw :table-data="tableData" />-->

      <el-table
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :data="tableData"
      >
        <el-table-column prop="city_name" fixed label="地市" width="35">
          <template slot-scope="scope">
            <div :style="{fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.city_name }}</div>
          </template>
        </el-table-column>>
        <el-table-column prop="jqmyd" label="手机上网感知" width="40">
          <template slot-scope="scope">
            <div :style="{backgroundColor: color(scope.row.sn_jqmyd),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="jqmyd_hb_rate_premlastday" label="较上月环比" width="40">
          <template slot-scope="scope">
            <div :style="{backgroundColor: color2(scope.row.jqmyd_hb_rate_premlastday),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.jqmyd_hb_rate_premlastday }}</div>
          </template>
        </el-table-column>
<!--        <el-table-column label="手机上网感知关键过程表现">-->
<!--          <el-table-column prop="package_fit" label="网络覆盖与信号强度" width="65">-->
<!--            <template slot-scope="scope">-->
<!--              <div :style="{backgroundColor: color(scope.row.sn_answer_A2),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A2 }}</div>-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="rule_clarity" label="手机上网速度" width="65">-->
<!--            <template slot-scope="scope">-->
<!--              <div :style="{backgroundColor: color(scope.row.sn_answer_A3),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A3 }}</div>-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="transact_norms" label="手机上网稳定性" width="65">-->
<!--            <template slot-scope="scope">-->
<!--              <div :style="{backgroundColor: color(scope.row.sn_answer_A4),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A4 }}</div>-->
<!--            </template>-->
<!--          </el-table-column>-->
<!--        </el-table-column>-->
        <el-table-column prop="user_num" label="样本量" min-width="40">
          <template slot-scope="scope">
            <div :style="{fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.user_num }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import BarChart from '@/views/components/BarChart'
import TableSjsw from '@/views/kefu/wireless-satisfaction/table-sjsw.vue'
import WKT from 'terraformer-wkt-parser'

export default {
  components: {
    BarChart, TableSjsw
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      barChartData: {},
      tableData: []
    }
  },
  computed: {
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
  created() {
    console.log(WKT.parse('MULTIPOLYGON (((116.996134 36.657588,116.99951 36.657626,116.99971 36.656221,116.999582 36.654815,116.996038 36.654674,116.996134 36.657588)))'), 123)
    this.fetchData()
    setTimeout(() => {
      this.tableData = [{ 'user_num': 2315, 'jqmyd_hb_rate_premlastday': '1.11', 'city_name': '全省', 'answer_A3': '76.71', 'answer_A2': '77.50', 'answer_A4': '75.58', 'jqmyd_hb_rate_lastday': '0.05', 'jqmyd': '76.61', 'sn_jqmyd': 0, 'sn_jqmyd_hb_rate_premlastday': 0, 'sn_jqmyd_hb_rate_lastday': 0, 'sn_answer_A2': 0, 'sn_answer_A3': 0, 'sn_answer_A4': 0 }, { 'user_num': 84, 'jqmyd_hb_rate_premlastday': '1.87', 'city_name': '枣庄', 'answer_A3': '84.13', 'answer_A2': '85.05', 'answer_A4': '82.80', 'jqmyd_hb_rate_lastday': '-1.36', 'jqmyd': '84.01', 'sn_jqmyd': 1, 'sn_jqmyd_hb_rate_premlastday': 7, 'sn_jqmyd_hb_rate_lastday': 16, 'sn_answer_A2': 1, 'sn_answer_A3': 1, 'sn_answer_A4': 1 }, { 'user_num': 191, 'jqmyd_hb_rate_premlastday': '-1.59', 'city_name': '临沂', 'answer_A3': '81.73', 'answer_A2': '83.77', 'answer_A4': '81.62', 'jqmyd_hb_rate_lastday': '1.22', 'jqmyd': '82.31', 'sn_jqmyd': 2, 'sn_jqmyd_hb_rate_premlastday': 14, 'sn_jqmyd_hb_rate_lastday': 3, 'sn_answer_A2': 2, 'sn_answer_A3': 2, 'sn_answer_A4': 2 }, { 'user_num': 257, 'jqmyd_hb_rate_premlastday': '4.10', 'city_name': '潍坊', 'answer_A3': '81.41', 'answer_A2': '82.36', 'answer_A4': '80.37', 'jqmyd_hb_rate_lastday': '-0.32', 'jqmyd': '81.38', 'sn_jqmyd': 3, 'sn_jqmyd_hb_rate_premlastday': 4, 'sn_jqmyd_hb_rate_lastday': 10, 'sn_answer_A2': 3, 'sn_answer_A3': 3, 'sn_answer_A4': 3 }, { 'user_num': 141, 'jqmyd_hb_rate_premlastday': '1.02', 'city_name': '泰安', 'answer_A3': '79.51', 'answer_A2': '79.75', 'answer_A4': '80.06', 'jqmyd_hb_rate_lastday': '0.05', 'jqmyd': '79.75', 'sn_jqmyd': 4, 'sn_jqmyd_hb_rate_premlastday': 12, 'sn_jqmyd_hb_rate_lastday': 8, 'sn_answer_A2': 5, 'sn_answer_A3': 4, 'sn_answer_A4': 4 }, { 'user_num': 178, 'jqmyd_hb_rate_premlastday': '3.68', 'city_name': '烟台', 'answer_A3': '79.34', 'answer_A2': '79.84', 'answer_A4': '76.65', 'jqmyd_hb_rate_lastday': '0.40', 'jqmyd': '78.68', 'sn_jqmyd': 5, 'sn_jqmyd_hb_rate_premlastday': 5, 'sn_jqmyd_hb_rate_lastday': 7, 'sn_answer_A2': 4, 'sn_answer_A3': 5, 'sn_answer_A4': 6 }, { 'user_num': 87, 'jqmyd_hb_rate_premlastday': '1.22', 'city_name': '日照', 'answer_A3': '78.29', 'answer_A2': '79.05', 'answer_A4': '77.91', 'jqmyd_hb_rate_lastday': '-0.67', 'jqmyd': '78.40', 'sn_jqmyd': 6, 'sn_jqmyd_hb_rate_premlastday': 10, 'sn_jqmyd_hb_rate_lastday': 13, 'sn_answer_A2': 6, 'sn_answer_A3': 6, 'sn_answer_A4': 5 }, { 'user_num': 187, 'jqmyd_hb_rate_premlastday': '-1.86', 'city_name': '青岛', 'answer_A3': '78.13', 'answer_A2': '78.31', 'answer_A4': '76.53', 'jqmyd_hb_rate_lastday': '-0.02', 'jqmyd': '77.71', 'sn_jqmyd': 7, 'sn_jqmyd_hb_rate_premlastday': 15, 'sn_jqmyd_hb_rate_lastday': 9, 'sn_answer_A2': 9, 'sn_answer_A3': 7, 'sn_answer_A4': 8 }, { 'user_num': 89, 'jqmyd_hb_rate_premlastday': '5.76', 'city_name': '东营', 'answer_A3': '77.40', 'answer_A2': '79.03', 'answer_A4': '76.65', 'jqmyd_hb_rate_lastday': '-1.45', 'jqmyd': '77.67', 'sn_jqmyd': 8, 'sn_jqmyd_hb_rate_premlastday': 1, 'sn_jqmyd_hb_rate_lastday': 17, 'sn_answer_A2': 7, 'sn_answer_A3': 10, 'sn_answer_A4': 7 }, { 'user_num': 166, 'jqmyd_hb_rate_premlastday': '2.72', 'city_name': '济宁', 'answer_A3': '77.84', 'answer_A2': '78.92', 'answer_A4': '76.04', 'jqmyd_hb_rate_lastday': '1.23', 'jqmyd': '77.62', 'sn_jqmyd': 9, 'sn_jqmyd_hb_rate_premlastday': 6, 'sn_jqmyd_hb_rate_lastday': 2, 'sn_answer_A2': 8, 'sn_answer_A3': 8, 'sn_answer_A4': 9 }, { 'user_num': 102, 'jqmyd_hb_rate_premlastday': '-4.50', 'city_name': '威海', 'answer_A3': '77.67', 'answer_A2': '78.10', 'answer_A4': '75.38', 'jqmyd_hb_rate_lastday': '0.69', 'jqmyd': '77.11', 'sn_jqmyd': 10, 'sn_jqmyd_hb_rate_premlastday': 16, 'sn_jqmyd_hb_rate_lastday': 5, 'sn_answer_A2': 10, 'sn_answer_A3': 9, 'sn_answer_A4': 10 }, { 'user_num': 65, 'jqmyd_hb_rate_premlastday': '0.58', 'city_name': '莱芜', 'answer_A3': '75.56', 'answer_A2': '76.92', 'answer_A4': '74.70', 'jqmyd_hb_rate_lastday': '0.48', 'jqmyd': '75.71', 'sn_jqmyd': 11, 'sn_jqmyd_hb_rate_premlastday': 13, 'sn_jqmyd_hb_rate_lastday': 6, 'sn_answer_A2': 11, 'sn_answer_A3': 11, 'sn_answer_A4': 11 }, { 'user_num': 131, 'jqmyd_hb_rate_premlastday': '5.33', 'city_name': '聊城', 'answer_A3': '74.72', 'answer_A2': '76.25', 'answer_A4': '73.88', 'jqmyd_hb_rate_lastday': '-0.44', 'jqmyd': '74.93', 'sn_jqmyd': 12, 'sn_jqmyd_hb_rate_premlastday': 2, 'sn_jqmyd_hb_rate_lastday': 11, 'sn_answer_A2': 12, 'sn_answer_A3': 12, 'sn_answer_A4': 12 }, { 'user_num': 69, 'jqmyd_hb_rate_premlastday': '-4.66', 'city_name': '滨州', 'answer_A3': '74.07', 'answer_A2': '74.88', 'answer_A4': '73.43', 'jqmyd_hb_rate_lastday': '-0.49', 'jqmyd': '74.12', 'sn_jqmyd': 13, 'sn_jqmyd_hb_rate_premlastday': 17, 'sn_jqmyd_hb_rate_lastday': 12, 'sn_answer_A2': 13, 'sn_answer_A3': 13, 'sn_answer_A4': 13 }, { 'user_num': 118, 'jqmyd_hb_rate_premlastday': '1.53', 'city_name': '德州', 'answer_A3': '73.35', 'answer_A2': '74.67', 'answer_A4': '72.03', 'jqmyd_hb_rate_lastday': '1.90', 'jqmyd': '73.35', 'sn_jqmyd': 14, 'sn_jqmyd_hb_rate_premlastday': 9, 'sn_jqmyd_hb_rate_lastday': 1, 'sn_answer_A2': 14, 'sn_answer_A3': 14, 'sn_answer_A4': 15 }, { 'user_num': 168, 'jqmyd_hb_rate_premlastday': '1.17', 'city_name': '淄博', 'answer_A3': '73.15', 'answer_A2': '73.94', 'answer_A4': '72.29', 'jqmyd_hb_rate_lastday': '1.16', 'jqmyd': '73.13', 'sn_jqmyd': 15, 'sn_jqmyd_hb_rate_premlastday': 11, 'sn_jqmyd_hb_rate_lastday': 4, 'sn_answer_A2': 15, 'sn_answer_A3': 15, 'sn_answer_A4': 14 }, { 'user_num': 107, 'jqmyd_hb_rate_premlastday': '1.54', 'city_name': '菏泽', 'answer_A3': '67.81', 'answer_A2': '68.64', 'answer_A4': '66.04', 'jqmyd_hb_rate_lastday': '-1.23', 'jqmyd': '67.53', 'sn_jqmyd': 16, 'sn_jqmyd_hb_rate_premlastday': 8, 'sn_jqmyd_hb_rate_lastday': 15, 'sn_answer_A2': 16, 'sn_answer_A3': 16, 'sn_answer_A4': 16 }, { 'user_num': 175, 'jqmyd_hb_rate_premlastday': '4.92', 'city_name': '济南', 'answer_A3': '65.59', 'answer_A2': '64.51', 'answer_A4': '64.63', 'jqmyd_hb_rate_lastday': '-0.68', 'jqmyd': '64.98', 'sn_jqmyd': 17, 'sn_jqmyd_hb_rate_premlastday': 3, 'sn_jqmyd_hb_rate_lastday': 14, 'sn_answer_A2': 17, 'sn_answer_A3': 17, 'sn_answer_A4': 17 }]
      this.barChartData = { 'classification': ['账单服务', '套餐办理便捷性', '资费规则清晰度', '套餐办理规范性', '套餐适配度', '套餐价格'], 'actualData': ['85.64', '81.60', '82.93', '80.76', '77.75', '77.75'] }
    }, 1000)
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import '~@/views/components/satisfaction.scss';
</style>
