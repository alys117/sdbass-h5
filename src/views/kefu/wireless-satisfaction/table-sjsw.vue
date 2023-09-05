<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return { }
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
    }
  }
}
</script>

<template>
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
    <el-table-column label="手机上网感知关键过程表现">
      <el-table-column prop="package_fit" label="网络覆盖与信号强度" width="65">
        <template slot-scope="scope">
          <div :style="{backgroundColor: color(scope.row.sn_answer_A2),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A2 }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="rule_clarity" label="手机上网速度" width="65">
        <template slot-scope="scope">
          <div :style="{backgroundColor: color(scope.row.sn_answer_A3),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A3 }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="transact_norms" label="手机上网稳定性" width="65">
        <template slot-scope="scope">
          <div :style="{backgroundColor: color(scope.row.sn_answer_A4),fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.answer_A4 }}</div>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column prop="user_num" label="样本量" min-width="40">
      <template slot-scope="scope">
        <div :style="{fontWeight: scope.row.city_name === '全省'?'bold':'normal'}">{{ scope.row.user_num }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss">

</style>
