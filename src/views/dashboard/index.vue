<template>
  <div class="dashboard-container">
    <div v-if="false" class="dashboard-text">name: {{ name }}</div>
    <div v-if="true" class="dashboard-text">中国移动，沟通从“心”开始</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    font-weight: 900;
    font-family: "PingFang SC","Microsoft YaHei",serif;
  }
}
</style>
