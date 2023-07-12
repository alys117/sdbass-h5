<template>
  <div class="mobile1-container">
    <div class="left">
      <div class="title">当前表现值</div>
      <div><span class="number">{{ jqmyd.toFixed(2) }}</span><span class="unit">%</span></div>
    </div>
    <div class="right">
      <div class="right-1">
        <span class="title">【较上日环比】</span>
        <span :class="{'data-green': jqmyd_hb_rate_lastday>0, 'data-red': !(jqmyd_hb_rate_lastday>0)}">{{ a }}</span>
      </div>
      <div class="right-1">
        <span class="title">【较上月环比】</span>
        <span :class="{'data-green': jqmyd_hb_rate_premlastday>0, 'data-red': !(jqmyd_hb_rate_premlastday>0)}">{{ b }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Module1',
  props: {
    jqmyd: {
      type: Number,
      default: () => { return 0 }
    },
    jqmyd_hb_rate_lastday: {
      type: Number,
      default: () => { return 0 }
    },
    jqmyd_hb_rate_premlastday: {
      type: Number,
      default: () => { return 0 }
    }
  },
  computed: {
    a: function() {
      return (this.jqmyd_hb_rate_lastday >= 0 ? '+' : '') + (this.jqmyd_hb_rate_lastday ? this.jqmyd_hb_rate_lastday.toFixed(2) : '0.00') + 'pp'
    },
    b: function() {
      return (this.jqmyd_hb_rate_premlastday >= 0 ? '+' : '') + (this.jqmyd_hb_rate_premlastday ? this.jqmyd_hb_rate_premlastday.toFixed(2) : '0.00') + 'pp'
    }
  }
}
</script>
<style scoped lang="scss">
.mobile1-container{
  font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
      font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 900;
    }
    .number{
      color: #769bd4;
      font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 30px;
      font-weight: 900;
    }
    .unit{
      font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 30px;
      font-weight: 900;
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-between;
    flex: 4;
    gap: 5px;
    padding-bottom: 5px;
    .right-1{
      display: flex;
      justify-content: flex-start;
      .title{
        font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 900;
      }
      .data-green{
        font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #67b055;
        font-size: 16px;
        font-weight: 900;
      }
      .data-red{
        font-family: "monospace","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: red;
        font-size: 16px;
        font-weight: 900;
      }
    }
  }
}
</style>
