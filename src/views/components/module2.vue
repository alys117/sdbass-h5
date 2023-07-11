<template>
  <div class="module2-container">
    <div class="module2">
      <div class="module2-1">
        <div class="title">85分以上</div>
        <div><span class="number-green">{{up85}}</span><span class="dishi">地市</span></div>
      </div>
      <div class="module2-1">
        <div class="title">75分以下</div>
        <div><span class="number-red">{{down75}}</span><span class="dishi">地市</span></div>
      </div>
    </div>
    <div class="middle" />
    <div class="module2">
      <div class="module2-1">
        <div class="title">环比上月<br>提升</div>
        <div><span class="number-green">{{huanbiUp}}</span><span class="dishi">地市</span></div>
      </div>
      <div class="module2-1">
        <div class="title">环比上月<br>下滑</div>
        <div><span class="number-red">{{huanbiDown}}</span><span class="dishi">地市</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Module2',
  props: {
    up85: {
      type: Number,
      default: () => { return 0 }
    },
    down75: {
      type: Number,
      default: () => { return 0 }
    },
    huanbiUp: {
      type: Number,
      default: () => { return 0 }
    },
    huanbiDown: {
      type: Number,
      default: () => { return 0 }
    }
  },
}
</script>
<style scoped lang="scss">
.module2-container{
  padding: 10px;
  padding-top: 20px;
  font-family: "Microsoft YaHei","PingFang SC",serif;
  display: flex;
  .module2{
    flex: 1;
    display: flex;
    .module2-1{
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      gap: 30px;
      .title{
        font-weight: 900;
        font-size: 18px;
        font-family: "Microsoft YaHei","PingFang SC",serif;
      }
      .number-red{
        font-size: 36px;
        font-weight: 900;
        color: #d70702;
        font-family: "Microsoft YaHei","PingFang SC",serif;
      }
      .number-green{
        font-size: 36px;
        font-weight: 900;
        color: #67b055;
        font-family: "Microsoft YaHei","PingFang SC",serif;
      }
      .dishi{
        font-size: 14px;
        font-family: "Microsoft YaHei","PingFang SC",serif;
      }
    }
  }
  .middle{
    width: 1px;
    border: 1px dashed #769bd4;
  }
}
</style>
