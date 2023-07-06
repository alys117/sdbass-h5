<template>
  <div class="module2-container">
    <div class="module2">
      <div class="module2-1">
        <div class="title">85分以上</div>
        <div><span class="number-green">3</span><span class="dishi">地市</span></div>
      </div>
      <div class="module2-1">
        <div class="title">75分以上</div>
        <div><span class="number-red">8</span><span class="dishi">地市</span></div>
      </div>
    </div>
    <div class="middle" />
    <div class="module2">
      <div class="module2-1">
        <div class="title">环比上月<br>提升</div>
        <div><span class="number-green">7</span><span class="dishi">地市</span></div>
      </div>
      <div class="module2-1">
        <div class="title">环比上月<br>下滑</div>
        <div><span class="number-red">8</span><span class="dishi">地市</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Module2'
}
</script>
<style scoped lang="scss">
.module2-container{
  padding: 10px;
  padding-top: 20px;
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
        font-size: 16px;
      }
      .number-red{
        font-size: 36px;
        font-weight: 900;
        color: #d70702;
      }
      .number-green{
        font-size: 36px;
        font-weight: 900;
        color: #67b055;
      }
      .dishi{
        font-size: 14px;
      }
    }
  }
  .middle{
    width: 1px;
    border: 1px dashed #769bd4;
  }
}
</style>
