<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import '../demo-center.css'
import '@/assets/iconfont/iconfont.css'
import AMapLoader from '@amap/amap-jsapi-loader'
import axios from 'axios'

// import { sources } from './source'
// import { points } from './china'
// import { targets } from './民生大街'
export default {
  name: 'Overlay',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      pics: [{ url: 'https://www.amap.com/assets/img/place_default.jpg' }],
      swiperOption: {
        notNextTick: true,
        loop: true,
        // 初始索引
        initalSlide: 0,
        // 自动播放
        autoplay: true,
        // 切换效果
        effect: 'effect',
        speed: 800,
        direction: 'horizontal',
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        swiperSlides: [1, 2, 3]
      }
    }
  },
  async mounted() {
    await this.initMap()
    this.continue()
  },
  methods: {
    async initMap() {
      const AMap = await AMapLoader.load({
        key: 'bccefb89d678dfd94084583ff56e2af4', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.MarkerCluster', 'AMap.ControlBar', 'AMap.PlaceSearch'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      this.AMap = AMap
      this.map = new this.AMap.Map('container', { // 设置地图容器id
        // viewMode: '3D', // 是否为3D地图模式
        zoom: 18, // 初始化地图级别
        center: [117.004353, 36.648699], // 初始化地图中心点位置
        pitch: 50,
        rotation: -15,
        viewMode: '3D' // 设置地图模式
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.MarkerCluster', 'AMap.ControlBar', 'AMap.PlaceSearch'], () => {
        // 异步加载插件
        var toolbar = new AMap.ToolBar()
        this.map.addControl(toolbar)

        var controlBar = new AMap.ControlBar({
          position: {
            right: '10px',
            top: '10px'
          }
        })
        controlBar.addTo(this.map)
        // var placeSearch = new AMap.PlaceSearch()
        // 中国国家博物馆对应的POI ID
        // var poiid = 'B02130230E'
        // var poiid = 'B0FFKRHIJT'

        // placeSearch.getDetails(poiid, function(status, result) {
        //   // 查询成功时，result即为对应的POI详情
        //   console.log(result,status,'POI详情');
        // })
      })
    },
    async continue() {
      var cluster
      var gridSize = 60
      // 数据中需包含经纬度信息字段 lnglat
      // var points = [
      // { la: ["108.939621", "34.343147"] },
      // { lnglat: ["112.985037", "23.15046"] },
      // ...
      // ...
      // ]

      const { data: sources } = await axios.get(process.env['VUE_APP_STATIC'] + '/mock/sources.json')
      const _points = sources.map(item => {
        return {
          lnglat: [item.poi_lng_gd, item.poi_lat_gd], // 经纬度
          esop_ENTERPRISE_NAME: item.esop_ENTERPRISE_NAME, // 集团建档名称
          esop_ENTITY_ID: item.esop_ENTITY_ID, // 集团编码
          PRODUCT_NAME: item.PRODUCT_NAME, // 云产品名称
          ent_m: item.ent_m, // 集团产品收入
          name: item.name + ' ' + item.MSISDN, // 客户经理
          product_name_2: item.product_name_2, // 企宽产品名称
          poi_id: item.poi_id, // poi_id
          poi_name: item.poi_name // poi名称
        }
      })

      var count = _points.length

      var _renderClusterMarker = (context) => {
        var factor = Math.pow(context.count / count, 1 / 18)
        var div = document.createElement('div')
        var Hue = 180 - factor * 180
        var bgColor = 'hsla(' + Hue + ',100%,40%,0.7)'
        var fontColor = 'hsla(' + Hue + ',100%,90%,1)'
        var borderColor = 'hsla(' + Hue + ',100%,40%,1)'
        var shadowColor = 'hsla(' + Hue + ',100%,90%,1)'
        div.style.backgroundColor = bgColor
        var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
        div.style.width = div.style.height = size + 'px'
        div.style.border = 'solid 1px ' + borderColor
        div.style.borderRadius = size / 2 + 'px'
        div.style.boxShadow = '0 0 5px ' + shadowColor
        div.innerHTML = context.count
        div.style.lineHeight = size + 'px'
        div.style.color = fontColor
        div.style.fontSize = '14px'
        div.style.textAlign = 'center'
        context.marker.setOffset(new this.AMap.Pixel(-size / 2, -size / 2))
        context.marker.setContent(div)
      }
      var _renderMarker = (context) => {
        var content =
          '<div style="background-color: hsla(180, 100%, 50%, 0.3); height: 18px; width: 18px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 3px;"></div>'
        var offset = new this.AMap.Pixel(-9, -9)
        context.marker.setContent(content)
        context.marker.setOffset(offset)
        // console.log(context);

        // 自定义点标记内容
        var markerContent = document.createElement('div')
        markerContent.className = 'marker-cluster-content'

        // 点标记中的图标
        var markerImg = document.createElement('img')
        markerImg.className = 'markerlnglat'
        markerImg.src = 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png'
        markerImg.setAttribute('width', '25px')
        markerImg.setAttribute('height', '34px')
        markerContent.appendChild(markerImg)

        // 点标记中的文本
        var markerSpan = document.createElement('span')
        markerSpan.className = 'marker'
        markerSpan.innerHTML = context.data[0].poi_name
        markerContent.appendChild(markerSpan)

        context.marker.setContent(markerContent)

        context.marker.on('click', e => {
          console.log('Marker被点击了', e, e.lnglat.getLng() + ',' + e.lnglat.getLat())
          console.log(context); (async() => {
            const a = await fetch('https://restapi.amap.com/v3/place/detail?key=53c2aebc8df5706db94356697c8ae49d&id=' + context.data[0].poi_id)
            const b = await a.json()
            // const src = b?.pois[0]?.photos[0]?.url || 'https://www.amap.com/assets/img/place_default.jpg'
            // console.log(b, '搜索', src, 'https://www.amap.com/assets/img/place_default.jpg')
            // console.log(document.querySelector('.img-container'))
            // document.querySelector('.img-container').style.backgroundImage = `url(${src})`
            if (b?.pois[0]?.photos && b?.pois[0]?.photos.length) {
              console.log(b?.pois[0]?.photos)
              this.pics = []
              b?.pois[0]?.photos.forEach(i => {
                this.pics.push({ url: i.url })
              })
            } else {
              this.pics = [{ url: 'https://www.amap.com/assets/img/place_default.jpg' }]
            }
          })()
          document.querySelector('.tip').classList.remove('hidden')
          doms.t0.innerHTML = context.data[0].poi_name + '|' + context.data[0].poi_id
          doms.t1.innerHTML = context.data[0].esop_ENTERPRISE_NAME
          doms.t2.innerHTML = context.data[0].esop_ENTITY_ID
          // doms.t3.innerHTML = context.data[0].poi_id
          doms.t4.innerHTML = context.data[0].name
          doms.t5.innerHTML = context.data[0].product_name_2
          doms.t6.innerHTML = context.data[0].PRODUCT_NAME
          doms.t7.innerHTML = context.data[0].ent_m
        })
      }
      var doms = {
        t0: document.querySelector('#t0'),
        t1: document.querySelector('#t1'),
        t2: document.querySelector('#t2'),
        t3: document.querySelector('#t3'),
        t4: document.querySelector('#t4'),
        t5: document.querySelector('#t5'),
        t6: document.querySelector('#t6'),
        t7: document.querySelector('#t7')
      }

      const addCluster = (tag) => {
        if (cluster) {
          cluster.setMap(null)
        }
        if (tag === 2) {
          // 完全自定义
          cluster = new this.AMap.MarkerCluster(this.map, _points, {
            gridSize: gridSize, // 设置网格像素大小
            renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
            renderMarker: _renderMarker // 自定义非聚合点样式
          })
        } else if (tag === 1) {
          // 自定义图标
          var sts = [
            {
              url: '//a.amap.com/jsapi_demos/static/images/blue.png',
              size: new this.AMap.Size(32, 32),
              offset: new this.AMap.Pixel(-16, -16)
            },
            {
              url: '//a.amap.com/jsapi_demos/static/images/green.png',
              size: new this.AMap.Size(32, 32),
              offset: new this.AMap.Pixel(-16, -16)
            },
            {
              url: '//a.amap.com/jsapi_demos/static/images/orange.png',
              size: new this.AMap.Size(36, 36),
              offset: new this.AMap.Pixel(-18, -18)
            },
            {
              url: '//a.amap.com/jsapi_demos/static/images/red.png',
              size: new this.AMap.Size(48, 48),
              offset: new this.AMap.Pixel(-24, -24)
            },
            {
              url: '//a.amap.com/jsapi_demos/static/images/darkRed.png',
              size: new this.AMap.Size(48, 48),
              offset: new this.AMap.Pixel(-24, -24)
            }
          ]
          cluster = new this.AMap.MarkerCluster(this.map, _points, {
            styles: sts,
            gridSize: gridSize
          })
        } else {
          // 默认样式
          cluster = new this.AMap.MarkerCluster(this.map, _points, { gridSize: gridSize })
        }
      }
      addCluster(2)
    }
  }
}
</script>

<template>
  <div>
    <div id="container" class="map" tabindex="0" />
    <div class="tip hidden">
      <div style="display: flex; justify-content: space-between; display: none;">
        <img style="width: 34px;height: 34px;" src="data:image/png;base64,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" draggable="false">
        <span style="line-height: 34px; display: none;">这里是一个展示框</span>
        <span onclick="document.querySelector('.tip').classList.add('hidden')">X</span>
      </div>
      <div v-if="pics.length > 1">
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="(item, idx ) in pics" :key="idx+item.url">
            <div class="img-container" :style="{'background-image': 'url('+item.url+')'}">
              <div onclick="document.querySelector('.tip').classList.add('hidden')" style="color: #fff; z-index: 99; cursor: pointer;margin-right: 5px;font-size: 18px; user-select: none;">
                <i class="iconfont icon-guanbi2fill" />
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </swiper>
      </div>
      <div v-else>
        <div class="img-container" :style="{'background-image': 'url('+pics[0].url+')'}">
          <div onclick="document.querySelector('.tip').classList.add('hidden')" style="color: #fff; z-index: 99; cursor: pointer;margin-right: 5px;font-size: 18px; user-select: none;">
            <i class="iconfont icon-guanbi2fill" />
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="col">
          <div style="font-size: 16px;line-height: 20px;font-weight: 500;"><span id="t0" /></div>
          <div style="color: #939392">
            <b class="poistar rating" style="width:62.4px" />
            价值评分
          </div>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><i class="iconfont icon-dangan2" style="color: #666;padding-right: 5px;" />集团建档名称：</span>
          <span style="font-weight: 500;"><span id="t1" /></span>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><i class="iconfont icon-ercibianma-" style="color: #666;padding-right: 5px;" />集团编码：</span>
          <span style="font-weight: 500;"><span id="t2" /></span>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><i class="iconfont icon-dizhi" style="color: #666;padding-right: 5px;" />地址：</span>
          <span style="font-weight: 500;"><span id="t3" /></span>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><i class="iconfont icon-chengshijinglitianchong" style="color: #666;padding-right: 5px;" />客户经理：</span>
          <span style="font-weight: 500;"><span id="t4" /></span>
        </div>
        <br>
        <div class="col">
          <span style="font-size: 16px; color: #777;font-weight: 900;display: inline-block;width: 150px; text-align: left;"><i class="iconfont icon-dinggou" style="color: #666;padding-right: 5px;" />产品订购情况</span>
          <span style="font-weight: 500;" />
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><span style="display: inline-block; width: 20px;" /><i class="iconfont icon-qiye" style="color: #666;padding-right: 5px;" />企宽产品名称：</span>
          <span style="font-weight: 500;"><span id="t5" /></span>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><span style="display: inline-block; width: 20px;" /><i class="iconfont icon-cloud-disk-full" style="color: #666;padding-right: 5px;" />云产品名称：</span>
          <span style="font-weight: 500;"><span id="t6" /></span>
        </div>
        <div class="col">
          <span style="font-weight: 900;display: inline-block;width: 150px; text-align: left;"><span style="display: inline-block; width: 20px;" /><i class="iconfont icon-shouru" style="color: #666;padding-right: 5px;" />集团产品收入：</span>
          <span style="font-weight: 500;"><span id="t7" /></span>
        </div>
      </div>
    </div>
    <div class="input-card">
      <h4>聚合点效果切换</h4>
      <div class="input-item">
        <input
          id="add0"
          type="button"
          class="btn"
          value="默认样式"
          onclick="addCluster(0)"
        >
        <input
          id="add1"
          type="button"
          class="btn"
          value="自定义图标"
          onclick="addCluster(1)"
        >
        <input
          id="add2"
          type="button"
          class="btn"
          value="完全自定义"
          onclick="addCluster(2)"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#container{
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 50px);
}
.amap-icon img, .amap-marker-content img{
  width: 25px;
  height: 34px;
}
.marker {
  position: absolute;
  top: -20px;
  /* right: -118px; */
  color: #fff;
  padding: 4px 10px;
  box-shadow: 1px 1px 1px rgba(10, 10, 10, .2);
  white-space: nowrap;
  font-size: 12px;
  background-color: #25A5F7;
  border-radius: 3px;
}

.input-card {
  position: absolute;
  width: 25rem;
  left: 1rem;
  bottom: 2rem;
}

.input-card .btn {
  width: 7rem;
  margin-right: 0.7rem;
}

.input-card .btn:last-child {
  margin-right: 0;
}
.tip {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 360px;
  /* opacity: 0.5; */
  background-color: rgba(255,255,255,1);
  color: #000;
  height: 390px;
  transition: all 0.4s;
}
.detail{
  background-color: rgba(255,255,255, 1);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-shrink: 1;
  gap: 5px;
  transition: all 0.4s;
  height: 192px;
  font-size: 14px;
  overflow: auto;
  padding: 10px 0;
}
.hidden{
  height: 0;
  opacity: 0;
  z-index: -9;
}
.img-container{
  //background-image: url(https://www.amap.com/assets/img/place_default.jpg);
  height: 198px;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: flex-end;
}
.detail .col{
  padding:0 10px;
}
.rating, .ratingbox {
  display: inline-block;
  height: 13px;
  background-image: url(https://www.amap.com/assets/img/rate.png?v=1.1);
  background-size: 13px;
}

::v-deep .swiper-container{
  --swiper-theme-color: #25A5F7;/* 设置Swiper风格 */
  --swiper-navigation-color: rgba(255,255,255,0.5);/* 单独设置按钮颜色 */
  --swiper-navigation-size: 20px;/* 设置按钮大小 */
}
</style>
<style>
.marker-cluster-content .marker {
  position: absolute;
  top: -20px;
  /* right: -118px; */
  color: #fff;
  padding: 4px 10px;
  box-shadow: 1px 1px 1px rgba(10, 10, 10, .2);
  white-space: nowrap;
  font-size: 12px;
  font-family: "";
  background-color: #25A5F7;
  border-radius: 3px;
}
</style>
