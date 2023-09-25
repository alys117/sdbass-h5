<template>
  <div class="dashboard-container">
    <div v-if="false" class="dashboard-text">name: {{ name }}</div>
    <div v-if="true" class="dashboard-text">中国移动，沟通从“心”开始</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getQueryObject } from '@/utils/index'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
      return
    }
    console.log('getQueryObject', getQueryObject(location.search))
    const query = getQueryObject(location.search)
    if (query.page === 'tariff') {
      this.$router.push('/example/tariff-satisfaction')
    } else if (query.page === 'broadband') {
      this.$router.push('/example/broadband-satisfaction')
    } else if (query.page === 'wireless') {
      this.$router.push('/example/wireless-satisfaction')
    } else {
      this.$router.push('/example/tariff-satisfaction')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  background-color: #20a0ff;
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
