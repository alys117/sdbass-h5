<script>
export default {
  name: 'Index',
  methods: {
    go(n) {
      switch (n) {
        case 1:
          this.$router.push('/example/tabs')
          break
        case 2:
          this.$router.push('/example/broadband-satisfaction')
          break
        case 3:
          this.$router.push('/example/wireless-satisfaction')
          break
        default:
          break
      }
    }
  }
}
</script>

<template>
  <div class="index">
    <h1>客服部报表</h1>
    <ul>
      <li @click="go(1)">手机资费满意度</li>
      <li @click="go(2)">宽带使用感知满意度</li>
      <li @click="go(3)">无线网络感知满意度</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul li{
  cursor: pointer;
  margin: 10px 0;
  font-size: 20px;
  color: #409EFF;
  text-decoration: none;
}
</style>
