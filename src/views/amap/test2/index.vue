<script>
import FTip from './FTip.vue'
import '../demo-center.css'
import '@/assets/iconfont/iconfont.css'
import AMapLoader from '@amap/amap-jsapi-loader'

// import { buildings } from './buildings'
// import { equipments } from './equipment'
import WKT from 'terraformer-wkt-parser'
import axios from 'axios'
export default {
  name: 'Overlay',
  components: {
    FTip
  },
  data() {
    return {}
  },
  async mounted() {
    const { data } = await axios.get(process.env['VUE_APP_STATIC'] + '/mock/equipments.json')
    this.equipments = data
    await this.initMap()
    this.getAllArea()
    this.points = this.equipments.map(item => {
      return {
        gfxx_id: item.gfxx_id,
        gfxx_name: item.gfxx_name,
        smzq_statu: item.smzq_statu,
        city_name: item.city_name,
        county_name: item.county_name,
        total_capacity: 16,
        ycd_capacity: item.ycd_capacity,
        preoccupied_terminals: item.preoccupied_terminals,
        havebusi_terminals: item.havebusi_terminals,
        terminals_usage: item.terminals_usage,
        capacity_usage: item.capacity_usage,
        lnglat: [item.longitude, item.latitude], // 经纬度
        esop_ENTERPRISE_NAME: '', // item.esop_ENTERPRISE_NAME, // 集团建档名称
        esop_ENTITY_ID: '', // item.esop_ENTITY_ID, // 集团编码
        PRODUCT_NAME: '', // item.PRODUCT_NAME, // 云产品名称
        ent_m: '', // item.ent_m, // 集团产品收入
        name: item.gfxx_name, // item.name + ' ' + item.MSISDN, // 客户经理
        label: item.gfxx_name,
        product_name_2: '', // item.product_name_2, // 企宽产品名称
        poi_id: '', // item.poi_id, // poi_id
        poi_name: '' // item.poi_name // poi名称
      }
    })
    this.initCluster(this.points, 'cluster')
    const { data: tmp } = await axios(process.env['VUE_APP_STATIC'] + '/mock/buildings.json')
    this.buildings = tmp
  },
  methods: {
    getAllArea() {
      this.areas = []
      this.areaNames = new Set()
      this.equipments.forEach(i => {
        this.areaNames.add(i.name)
      })
      this.areaNames.forEach(i => {
        this.areas.push({
          area: i,
          boundary: this.equipments.find(j => j.name === i).bundary
        })
      })
      const polygons = []
      console.log(this.areas, 'this.areas')
      this.areas.forEach(item => {
        const geo1 = WKT.parse(item.boundary)
        const polygon = new this.AMap.Polygon({
          path: geo1.coordinates[0][0],
          fillColor: '#ccebc5',
          strokeOpacity: 1,
          fillOpacity: 0.4,
          strokeColor: '#2b8cbe',
          strokeWeight: 2,
          strokeStyle: 'dashed',
          strokeDasharray: [5, 5]
        })
        polygon.on('mouseover', () => {
          polygon.setOptions({
            fillOpacity: 0.7,
            fillColor: '#7bccc4'
          })
        })
        polygon.on('mouseout', () => {
          polygon.setOptions({
            fillOpacity: 0.5,
            fillColor: '#ccebc5'

          })
        })
        this.map.add(polygon)
        polygons.push(polygon)
        this.polygons = polygons
      })
      this.map.setFitView(polygons, false, [60, 60, 60, 60], 16)
    },
    async initMap() {
      const AMap = await AMapLoader.load({
        key: 'bccefb89d678dfd94084583ff56e2af4', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.ToolBar', 'AMap.MarkerCluster', 'AMap.ControlBar', 'AMap.PlaceSearch'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      this.AMap = AMap
      this.map = new this.AMap.Map('container', { // 设置地图容器id
        // viewMode: '3D', // 是否为3D地图模式
        zoom: 15, // 初始化地图级别
        center: [117.019653, 36.669899], // 初始化地图中心点位置
        // pitch: 50,
        // rotation: -15,
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
    initCluster(_points, clusterName = 'cluster') {
      const gridSize = 60
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

        // 自定义点标记内容
        var markerContent = document.createElement('div')
        markerContent.className = 'marker-cluster-content'

        // 点标记中的图标
        var markerImg = document.createElement('img')
        markerImg.className = 'markerlnglat'
        switch (context.data[0].data_ly) {
          case 'yijing':
            markerImg.src = require('@/assets/images/marker-blue.png')
            markerImg.setAttribute('width', '32px')
            markerImg.setAttribute('height', '32px')
            break
          case 'esop':
            markerImg.src = require('@/assets/images/marker-orange.png')
            markerImg.setAttribute('width', '32px')
            markerImg.setAttribute('height', '32px')
            break
          case 'gaode':
            markerImg.src = require('@/assets/images/marker-green.png')
            markerImg.setAttribute('width', '32px')
            markerImg.setAttribute('height', '32px')
            break
          default:
            markerImg.src = 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png'
            markerImg.setAttribute('width', '25px')
            markerImg.setAttribute('height', '34px')
        }

        markerContent.appendChild(markerImg)

        // 点标记中的文本
        var markerSpan = document.createElement('span')
        markerSpan.className = 'marker'
        markerSpan.innerHTML = context.data[0].label
        markerContent.appendChild(markerSpan)

        context.marker.setContent(markerContent)

        if (clusterName === 'cluster') {
          context.marker.on('click', e => {
            this.map.remove(this.polygons)
            const points = this.buildings.filter(i => i.gfxx_id === context.data[0].gfxx_id)
              .map(i => { (i.lnglat = [i.ent_lon_gd, i.ent_lat_gd], i.label = i.ENTERPRISE_NAME, i); return i })
            this.addCircle(context)
            console.log(points, 'points')
            this.initCluster(points, 'cluster2')
            this.$refs.ftip2.show(context)
          })
        } else {
          context.marker.on('click', e => {
            console.log(e, 'aaaaaa')
            this.$refs.ftip.show(context)
          })
        }
      }
      if (this._addCluster) {
        this._addCluster(clusterName, _points)
        return
      }
      this._addCluster = (name, points) => {
        if (this[name]) {
          this[name].setMap(null)
        }
        if (name === 'cluster') {
          this[name] = new this.AMap.MarkerCluster(this.map, points, {
            gridSize: gridSize, // 设置网格像素大小
            renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
            renderMarker: _renderMarker // 自定义非聚合点样式
          })
        } else {
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
          this[name] = new this.AMap.MarkerCluster(this.map, points, {
            styles: sts,
            gridSize: gridSize,
            renderMarker: _renderMarker // 自定义非聚合点样式
          })
        }
      }
      this._addCluster(clusterName, _points)
    },
    addCluster(clusterName = 'cluster') {
      this._addCluster(clusterName, this.points)
    },
    clearCluster(clusterName = 'cluster') {
      this[clusterName].setMap(null)
    },
    async findBuildings(gfxx_id) {
      const tmp = await axios(process.env['VUE_APP_STATIC'] + '/mock/buildings.json')
      this.buildings = tmp.data
      const belongBuildings = this.buildings.filter(i => i.gfxx_id === gfxx_id)
      return belongBuildings
    },
    addCircle(context) {
      if (this.circle) {
        this.map.remove(this.circle)
      }
      this.circle = new this.AMap.Circle({
        center: [context.data[0].lnglat.lng, context.data[0].lnglat.lat],
        radius: 100, // 半径
        borderWeight: 1,
        strokeColor: '#FF33FF',
        strokeWeight: 2,
        strokeOpacity: 0.2,
        fillOpacity: 0.1,
        strokeStyle: 'dashed',
        strokeDasharray: [10, 10],
        // 线样式还支持 'dashed'
        fillColor: '#1791fc',
        zIndex: 50
      })

      this.map.add(this.circle)
      // 缩放地图到合适的视野级别
      this.map.setFitView([this.circle])
    }
  }
}
</script>

<template>
  <div>
    <div id="container" class="map" tabindex="0" />
    <FTip ref="ftip" :cover="true" pos="top" />
    <FTip ref="ftip2" :cover="false" pos="bottom" />
    <div style="position: fixed;bottom: 30px; right: 200px">
      <el-button type="danger" size="mini" @click="clearCluster('cluster')">清除</el-button>
      <el-button type="success" size="mini" @click="addCluster('cluster')">显示</el-button>
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
  background-color: #25A5F7;
  border-radius: 3px;
}
</style>
