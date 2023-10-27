<script>
import TariffSatisfaction from '@/views/kefu/tariff-satisfaction/index.vue'
import BroadbandSatisfaction from '@/views/kefu/broadband-satisfaction/index.vue'
import WirelessSatisfaction from '@/views/kefu/wireless-satisfaction/index.vue'
export default {
  name: 'Tabs',
  components: {
    TariffSatisfaction, BroadbandSatisfaction, WirelessSatisfaction
  }
}
</script>

<template>
  <el-tabs :stretch="true">
    <el-tab-pane label="资费">
      <tariff-satisfaction></tariff-satisfaction>
    </el-tab-pane>
    <el-tab-pane label="宽带">
      <broadband-satisfaction></broadband-satisfaction>
    </el-tab-pane>
    <el-tab-pane label="无线">
      <wireless-satisfaction></wireless-satisfaction>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss">
::v-deep .el-tabs__header {
  margin: 0;
}
::v-deep .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
::v-deep .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
::v-deep .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
::v-deep .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  padding-left: 20px !important;
}
</style>
