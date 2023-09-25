<script>
import '../demo-center.css'
import AMapLoader from '@amap/amap-jsapi-loader'
import { convexHull } from '@/views/amap/convertHull'
import WKT from 'terraformer-wkt-parser'
import { arr } from './data2'
export default {
  name: 'Index',
  async mounted() {
    await this.initMap()
    this.getAllArea()
    // this.getAllPoints()
    this.showCluster()
  },
  methods: {
    getAllArea() {
      this.areas = []
      this.areaNames = new Set()
      arr.forEach(i => {
        this.areaNames.add(i.area)
      })
      this.areaNames.forEach(i => {
        this.areas.push({
          area: i,
          boundary: arr.find(j => j.area === i).boundary
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
      })
      this.map.setFitView(polygons, false, [60, 60, 60, 60], 16)
    },
    getAllPoints() {
      this.points = []
      arr.forEach(i => {
        const marker = new this.AMap.Marker({
          position: new this.AMap.LngLat(i.ent_lon_gd, i.ent_lat_gd),
          title: i.ENTERPRISE_NAME
        })
        this.points.push(marker)
      })
      this.map.add(this.points)
    },
    async initMap() {
      const AMap = await AMapLoader.load({
        key: 'bccefb89d678dfd94084583ff56e2af4', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.MarkerCluster', 'AMap.ControlBar', 'AMap.Geocoder', 'AMap.GeometryUtil'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      this.AMap = AMap
      this.map = new this.AMap.Map('container', { // 设置地图容器id
        // viewMode: '3D', // 是否为3D地图模式
        zoom: 15, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
        pitch: 0,
        rotation: 0,
        viewMode: '3D' // 设置地图模式
      })

      const lnglat = new AMap.LngLat(116.397428, 39.90923)
      const pixel = this.map.lngLatToContainer(lnglat)
      const pixelVal = pixel // pixel.round() 会丢失精度，再转回去经纬度会有偏差
      console.log(pixelVal, 'pixelVal')

      const pixel1 = new AMap.Pixel(pixelVal.x, pixelVal.y)
      const lnglat1 = this.map.containerToLngLat(pixel1)
      console.log(lnglat1, 'lnglat1')

      const points = [[116.397748, 39.908789], [116.397428, 39.90923], [116.398258, 39.909054], [116.398425, 39.909447], [116.397981, 39.909607]]
      const tmpPoints = points.map(i => { return { x: i[0], y: i[1] } })
      const finalPoints = convexHull(tmpPoints).hull.map(i => [i.x, i.y])
      console.log(finalPoints)
      const polygon = new AMap.Polygon({
        path: finalPoints,
        fillColor: '#ccebc5',
        strokeOpacity: 1,
        fillOpacity: 0.5,
        strokeColor: '#2b8cbe',
        strokeWeight: 1,
        strokeStyle: 'dashed',
        strokeDasharray: [5, 5]
      })
      this.map.add(polygon)

      // const hull = AMap.GeometryUtil.convexHull(points) // 高德根本没有这个方法
      // console.log(hull)
    },
    showCluster() {
      let cluster
      const gridSize = 60
      const _points = arr.map(item => {
        return {
          enterpriseName: item.ENTERPRISE_NAME, // 企业名称
          lnglat: [item.ent_lon_gd, item.ent_lat_gd] // 经纬度
        }
      })
      const count = _points.length
      const _renderClusterMarker = (context) => {
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
        context.marker.setTitle(context.data[0].enterpriseName)
        console.log(context)

        // 自定义点标记内容
        var markerContent = document.createElement('div')
        markerContent.className = 'marker-cluster-content'
        // 点标记中的图标
        var markerImg = document.createElement('img')
        markerImg.className = 'markerlnglat'
        markerImg.src = require('@/assets/images/坐标.png')
        markerImg.setAttribute('width', '32px')
        markerImg.setAttribute('height', '32px')
        markerContent.appendChild(markerImg)

        // 点标记中的文本
        // var markerSpan = document.createElement('span')
        // markerSpan.className = 'marker'
        // markerSpan.innerHTML = context.data[0].enterpriseName
        // markerContent.appendChild(markerSpan)

        context.marker.setContent(markerContent)

        context.marker.on('click', e => {
          console.log('Marker被点击了', e, e.lnglat.getLng() + ',' + e.lnglat.getLat())
        })
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
  <div id="container" />
</template>

<style scoped lang="scss">
#container{
  padding: 0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 50px);
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
