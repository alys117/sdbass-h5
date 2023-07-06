<template>
  <div class="mobile1-container">
    <div class="left">
      <div class="title">当前表现值</div>
      <div><span class="number">77.97</span><span class="unit">%</span></div>
    </div>
    <div class="right">
      <div><span class="title">【较上日环比】</span><span class="data">+0.02pp</span></div>
      <div><span class="title">【较上月环比】</span><span class="data">+1.14pp</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Module1'
}
</script>
<style scoped lang="scss">
.mobile1-container{
  display: flex;
  justify-content: center;
  padding: 10px;
  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 3;
    gap: 5px;
    .title{
      font-family: "PingFang SC","Microsoft YaHei",serif;
      font-size: 16px;
      font-weight: 900;
    }
    .number{
      color: #769bd4;
      font-family: "Tw Cen MT Condensed Extra Bold";
      font-size: 30px;
      font-weight: 900;
    }
    .unit{
      font-size: 30px;
      font-weight: 900;
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 4;
    gap: 5px;
    padding-bottom: 5px;
    .title{
      font-family: "PingFang SC","Microsoft YaHei",serif;
      font-size: 16px;
      font-weight: 900;
    }
    .data{
      color: #67b055;
      font-size: 16px;
      font-weight: 900;
    }
  }
}
</style>
