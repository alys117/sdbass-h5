<template>
  <div class="dashboard-container">
    <div
      v-loading="loading"
      element-loading-text="加载中......"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      style="position: fixed;top:0;left: 0; height: 100vh;width: 100vw;z-index: -1;padding-top: 60px"
    >
      <div v-if="false" class="dashboard-text">name: {{ name }}</div>
      <div v-if="true" class="dashboard-text">中国移动<br>沟通从“心”开始</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getQueryObject } from '@/utils/index'

export default {
  name: 'Dashboard',
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'mobile'
    ])
  },
  beforeRouteEnter(to, from, next) {
    console.log('dashboard-beforeRouteEnter', to, from)
    const query = getQueryObject(location.search)
    if (query.page) {
      query.page === 'index' && next('/example/index')
      query.page === 'tariff' && next('/example/tariff-satisfaction')
      query.page === 'broadband' && next('/example/broadband-satisfaction')
      query.page === 'wireless' && next('/example/wireless-satisfaction')
    } else {
      next()
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 0)
    // if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
    //   return
    // }
    // console.log('getQueryObject', getQueryObject(location.search))
    // const query = getQueryObject(location.search)
    // if (query.page === 'tariff') {
    //   this.$router.push('/example/tariff-satisfaction')
    // } else if (query.page === 'broadband') {
    //   this.$router.push('/example/broadband-satisfaction')
    // } else if (query.page === 'wireless') {
    //   this.$router.push('/example/wireless-satisfaction')
    // } else if (query.page === 'index') {
    //   this.$router.push({ path: '/example/index', query: { mobile: query.mobile }})
    // } else {
    //   this.$router.push('/example/tariff-satisfaction')
    // }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  background-color: #20a0ff;
  &-container {
    padding: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    font-weight: 900;
    font-family: "FZZJ-LJDXKJW","PingFang SC","Microsoft YaHei",serif;
    text-align: center;
  }
}
</style>
