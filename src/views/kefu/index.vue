<script>
import '@/assets/fonts/FZZJ-LJDXKJW-embed.css'
import { mapGetters } from 'vuex'
import { getAuth } from '@/api/kefu_auth'
import dayjs from 'dayjs'

export default {
  name: 'Index',
  data() {
    return {
      day: new Date(),
      loading: true,
      TARIFF: '16640612',
      BROADBAND: '16640613',
      WIRELESS: '16751065',
      naviBarHeight: 0
    }
  },
  computed: {
    dateRange() {
      if (this.day === '1970-01-01') {
        return 'M月D日-M月D日'
      }
      return dayjs(this.day).startOf('month').format('M月D日') + '-' + dayjs(this.day).format('M月D日')
    },
    ...mapGetters([
      'sidebar',
      'roles',
      'mobile'
    ])
  },
  async mounted() {
    this.naviBarHeight = this.sidebar.naviBarHeight
    if (this.roles.length) {
      this.loading = false
      return
    }
    getAuth(null).then(res => {
      const { data } = res
      const auth1 = data.filter(i => { return i.phone_no === this.mobile })
      const roles = []
      auth1.forEach(i => {
        roles.push(i.busiid)
      })
      this.$store.commit('user/SET_ROLES', roles)
      this.loading = false
    })
  },
  methods: {
    go(n) {
      switch (n) {
        case 1:
          // this.$router.push('/example/tabs')
          this.$store.getters.roles.includes(this.TARIFF) && this.$router.push('/example/tariff-satisfaction')
          break
        case 2:
          this.$store.getters.roles.includes(this.BROADBAND) && this.$router.push('/example/broadband-satisfaction')
          break
        case 3:
          this.$store.getters.roles.includes(this.WIRELESS) && this.$router.push('/example/wireless-satisfaction')
          break
        default:
          break
      }
    }
  }
}
</script>

<template>
  <div
    v-loading="loading"
    element-loading-text="加载中......"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.5)"
    class="index"
    :style="{'--height': naviBarHeight+'px'}"
  >
    <div class="logo-pic">
      <img :src="require('@/assets/images/logo2.png')" style="max-height: 100%">
      <img :src="require('@/assets/images/heart2.png')" style="max-height: 100%">
    </div>
    <div class="title-for-index">
      服务质量日报
    </div>
    <div class="yun">
      <div class="date-container">
        <span>{{ dateRange }}</span>
      </div>
      <div class="flower" />
    </div>
    <div class="index-title">中国移动山东公司<br>客户服务部</div>
    <div class="index-container">
      <div class="item" :style="{color: roles.includes(TARIFF)?'#000':'#ccc'}" @click="go(1)">
        <div>手机资费满意度</div><div><i class="el-icon-arrow-right" /></div>
      </div>
      <div class="item" :style="{color: roles.includes(BROADBAND)?'#000':'#ccc'}" @click="go(2)">
        <div>宽带使用感知满意度</div><div><i class="el-icon-arrow-right" /></div>
      </div>
      <div class="item" :style="{color: roles.includes(WIRELESS)?'#000':'#ccc'}" @click="go(3)">
        <div>无线网络感知满意度</div><div><i class="el-icon-arrow-right" /></div>
      </div>
      <div class="attention">本报为内部信息，供各位领导参阅，请勿外传</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index{
  height: calc(100vh - var(--height));
  width: 100%;
  overflow-y: auto;
  background-image: linear-gradient(90deg, rgb(203, 239, 238) 0%, rgb(223, 252, 248) 100%);
}
.yun{
  background-image: url("~@/assets/images/yun.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
ul li{
  cursor: pointer;
  margin: 10px 0;
  font-size: 20px;
  color: #409EFF;
  text-decoration: none;
}
.logo-pic{
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 20px 20px 0 20px;
}
.title-for-index{
  margin: 30px 0 10px 0;
  letter-spacing: 5px;
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  color: rgb(20,113,204);
  font-family: "FZZJ-LJDXKJW","YOUSHEBIAOTIHEI-2","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.date-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  font-family: "FZZJ-LJDXKJW","YOUSHEBIAOTIHEI-2","Microsoft YaHei","PingFang SC","Droid Sans Fallback","SimHei","PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-image: url("~@/assets/images/border.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  font-size: 25px;
  height: 90px;
  width: 250px;
}
.flower{
  margin: auto;
  background-image: url("~@/assets/images/flower.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
}
.index-title{
  padding-top: 30px;
  text-align: center;
  letter-spacing: 5px;
  font-size: 14px;
  font-weight: 900;
}
.index-container{
  margin: 20px;
  border-radius: 10px;
  background: rgba(255,255,255,0.5);
  padding: 20px;
}
.index-container .item{
  margin-bottom: 10px;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  background: rgba(255,255,255,0.7);
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 900;
}
.el-icon-arrow-right:before{
  font-weight: 900;
}
.attention{
  text-align: center;
  font-size: 14px;
  font-weight: 900;
  color: #2B9AEB;
}
</style>
