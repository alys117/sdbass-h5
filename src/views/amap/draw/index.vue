<script>
import '@/assets/iconfont/iconfont.css'
import AMapLoader from '@amap/amap-jsapi-loader'
import '../demo-center.css'
import { log } from '../demoutils'
export default {
  name: 'Index',
  data() {
    return {
      // 此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      // map:null,
      drawer: false,
      cardFlag: false,
      currentCard: {
        sid: '',
        name: '',
        detail: '',
        area: ''
      },
      mouseToolState: true,
      direction: 'ttb',
      title: '框选区域详情',
      blocks: [
        { code: '1', name: '区域1', detail: '详情1', path: [] },
        { code: '2', name: '区域2', detail: '详情2', path: [] },
        { code: '3', name: '区域3', detail: '详情3', path: [] }
      ]
    }
  },
  computed: {
    test() {
      return 123
    }
  },
  async mounted() {
    // DOM初始化完成进行地图初始化
    await this.initMap()
  },
  methods: {
    changeDetail(val, sid) {
      console.log('changeDetail', sid, val)
      const extData = this.overlays.find(i => Object.keys(i)[0] === sid)[sid].getExtData()
      extData.detail = val
    },
    handleOverlay(type, sid) {
      this.drawer = false
      console.log(type)
      if (type === 0) {
        this.overlays.find(i => Object.keys(i)[0] === sid)[sid].setMap(null)
        this.overlays = this.overlays.filter(i => Object.keys(i)[0] !== sid)
      }
      type === 1 && this.map.setFitView(this.overlays.find(i => Object.keys(i)[0] === sid)[sid], false, [60, 60, 60, 60], 15)
      // todo 定位 或者 删除
    },
    handleCloseDrawer() {
      this.drawer = false
    },
    submit() {
      this.drawer = false
      // todo 提交
      console.log(this.blocks)
    },
    currentDetail(givenid) {
      if (!this.overlays.length) {
        this.$message({
          message: '请先绘制区域',
          type: 'warning'
        })
        return
      }
      this.cardFlag = true
      const sid = givenid || Object.keys(this.overlays[0])[0]
      const polygon = this.overlays.find(i => Object.keys(i)[0] === sid)[sid]
      const { name, detail } = this.overlays.find(i => Object.keys(i)[0] === sid)[sid].getExtData()
      // 围成的闭合区域面积，单位：平方米
      var area = this.AMap.GeometryUtil.ringArea(polygon.getPath())
      console.log(area)
      this.currentCard = {
        sid,
        name,
        detail,
        area
      }
    },
    detail() {
      this.drawer = true
      console.log(this.overlays)
      this.blocks = []
      this.overlays.map(item => {
        const first = item[Object.keys(item)[0]].getPath()[0]
        const point = [first.lng, first.lat]
        const path = item[Object.keys(item)[0]].getPath().map(i => [i.lng, i.lat])
        path.push(point)
        this.blocks.push({
          code: Object.keys(item)[0],
          name: Object.values(item)[0].getExtData().name,
          detail: Object.values(item)[0].getExtData().detail,
          path: path
        })
      })
    },
    drawPolygon() {
      if (!this.mouseToolState) {
        this.mouseTool.polygon({
          strokeColor: '#FF33FF',
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillColor: '#1791fc',
          fillOpacity: 0.4,
          // 线样式还支持 'dashed'
          strokeStyle: 'solid',
          // strokeStyle是dashed时有效
          // strokeDasharray: [30,10],
          draggable: true
        })
        this.mouseToolState = !this.mouseToolState
      } else {
        this.closeMouseTool()
      }
    },
    closeMouseTool() {
      this.editor && this.editor.editable && this.editor.close()
      this.mouseTool && this.mouseTool.close() // 关闭工具     mouseTool.close(true)//关闭，并清除覆盖物
      this.mouseToolState = false
    },
    openInfo(longitude, latitude, sid, tmpName) {
      const name = this.overlays.find(i => Object.keys(i)[0] === sid)[sid].getExtData().name || tmpName
      const info = []
      info.push(`<div id="${sid}">
                    <div><img style="float:left;" src=" https://webapi.amap.com/images/autonavi.png "/></div>
                    <br/>
                    <div style="display: flex">
                      <div style="padding:5px 5px 0 0;"><button style="cursor: pointer;width: 80px;height: 24px; border: none;background: #7aacd4;color: white;border-radius: 3px" id="${sid + '_btn_open_edit'}">开启编辑</button></div>
                      <div style="padding:5px 5px 0 0;"><button style="cursor: pointer;width: 80px;height: 24px; border: none;background: #2ecc71;color: white;border-radius: 3px" id="${sid + '_btn_detail_edit'}">详情</button></div>
                      <div style="padding:5px 5px 0 0;"><button style="cursor: pointer;text-align: center; width: 80px; height: 24px;border: none;background: lightcoral;color: white;border-radius: 3px" id="${sid + '_btn_delete_overlay'}">删除</button></div>
                    </div>
                    <div style="margin-top: 5px"><label for="${sid + '_name'}">名称：</label><input id="${sid + '_name'}" style="width: 200px;outline: none;border-radius: 5px;height: 30px;border: 1px solid #ccc" value="${name}"></input></div>
                 </div>`)
      this.infoWindow = new this.AMap.InfoWindow({
        content: info.join('') // 使用默认信息窗体框样式，显示信息内容
      })
      this.infoWindow.on('open', () => { console.log('infoWindow open'); document.querySelector('#' + sid + '_name').focus() })
      this.infoWindow.on('close', () => { console.log('infoWindow close') })
      this.infoWindow.open(this.map, [longitude, latitude])
      document.querySelector('#' + sid + '_btn_open_edit').addEventListener('click', () => {
        this.editor && this.editor.editable && this.editor.close()
        this.editor = new this.AMap.PolygonEditor(this.map, this.overlays.find(i => Object.keys(i)[0] === sid)[sid])
        this.editor.open()
        this.infoWindow.close()
      })
      document.querySelector('#' + sid + '_btn_detail_edit').addEventListener('click', () => {
        this.currentDetail(sid)
      })
      document.querySelector('#' + sid + '_name').addEventListener('change', () => {
        this.overlays.find(i => Object.keys(i)[0] === sid)[sid].setExtData({ name: document.querySelector('#' + sid + '_name').value })
      })
      document.querySelector('#' + sid + '_btn_delete_overlay').addEventListener('click', () => {
        this.editor && this.editor.editable && this.editor.close()
        this.overlays.find(i => Object.keys(i)[0] === sid)[sid].setMap(null)
        this.overlays = this.overlays.filter(i => Object.keys(i)[0] !== sid)
        this.infoWindow.close()
        this.map.getAllOverlays('polygon').forEach(i => {
          console.log(' map overlays :>> ', i.getPath())
        })
      })
    },
    deleteAll() {
      this.editor && this.editor.editable && this.editor.close()
      this.overlays.forEach(i => {
        i[Object.keys(i)[0]].setMap(null)
      })
      this.overlays = []
      this.map.getAllOverlays('polygon').forEach(i => {
        console.log(' map overlays :>> ', i.getPath())
      })
    },
    closeEditor() {
      this.editor && this.editor.editable && this.editor.close()
    },
    async initMap() {
      const AMap = await AMapLoader.load({
        key: 'bccefb89d678dfd94084583ff56e2af4', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.MouseTool', 'AMap.PolygonEditor', 'AMap.InfoWindow', 'AMap.GeometryUtil'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      this.AMap = AMap
      this.map = new this.AMap.Map('container', { // 设置地图容器id
        // viewMode: '3D', // 是否为3D地图模式
        zoom: 14, // 初始化地图级别
        center: [117.004353, 36.648699] // 初始化地图中心点位置
      })
      this.mouseTool = new AMap.MouseTool(this.map)
      this.overlays = []
      this.mouseTool.polygon({
        strokeColor: '#FF33FF',
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillColor: '#1791fc',
        fillOpacity: 0.4,
        // 线样式还支持 'dashed'
        strokeStyle: 'solid',
        // strokeStyle是dashed时有效
        // strokeDasharray: [30,10],
        draggable: true
      })
      this.mouseTool.on('draw', event => {
        // event.obj 为绘制出来的覆盖物对象
        log.info('覆盖物对象绘制完成')
        this.map.getAllOverlays('polygon').forEach(i => {
          console.log(' map overlays :>> ', i.getPath())
        })

        if (event.obj.className === 'Overlay.Polygon') {
          const polygon = event.obj
          const timestamp = new Date().getTime()
          const sid = 'polygon_' + timestamp
          const tmpName = '未命名_' + timestamp
          this.overlays.push({ [sid]: polygon })
          console.log('添加临时名称')
          const extData = this.overlays.find(i => Object.keys(i)[0] === sid)[sid].getExtData()
          extData.name = tmpName
          polygon.on('rightclick', e => {
            this.closeEditor()
            this.closeMouseTool()
            this.openInfo(e.lnglat.getLng(), e.lnglat.getLat(), sid, tmpName)
          })
          polygon.on('dblclick', e => {
            var text = '您在 [ ' + e.lnglat.getLng() + ',' + e.lnglat.getLat() + ' ] 的位置点击了多边形！'
            log.info(text)
          })
          polygon.on('dragend', e => {
            console.log(polygon.getPath())
          })
          polygon.getPath().forEach(i => {
            console.log(' lat lng :>> ', i.lat, i.lng)
          })
          // mouseTool.close(true)//关闭，并清除覆盖物
          this.editor && this.editor.editable && this.editor.close()
          this.editor = new AMap.PolygonEditor(this.map, polygon)
          this.editor.open()
        }
      })
      this.map.on('click', e => {
        this.infoWindow && this.infoWindow.getIsOpen() && this.infoWindow.close()
      })
    },
    handleClose(done) {
      // this.$confirm('确认关闭？').then(_ => { done() }).catch(_ => {})
    }
  }
}
</script>

<template>
  <div>
    <div class="drawer-container">
      <el-drawer
        size="330px"
        :title="title"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleCloseDrawer"
      >
        <div>
          <el-table :data="blocks" height="250">
            <el-table-column prop="code" label="编号" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="detail" label="详情">
              <template slot-scope="scope">
                <el-input v-model="scope.row.detail" type="text" size="mini" @change="changeDetail($event,scope.row.code)" />
              </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleOverlay(1,scope.row.code)">定位</el-button>
                <el-button type="danger" size="mini" @click="handleOverlay(0,scope.row.code)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="float: right;padding: 5px;">
            <el-button type="primary" size="mini" @click="submit">提交</el-button>
          </div>
        </div>
      </el-drawer>
    </div>
    <div id="container" />
    <div class="input-card" style="width: 200px">
      <h4 style="margin-bottom: 10px; font-weight: 600">mouseTool绘制覆盖物</h4>
      <button class="btn" style="margin-bottom: 5px" @click="drawPolygon()">{{ !mouseToolState ? '绘制商街区域范围' : '关闭绘制' }}</button>
      <button class="btn" style="margin-bottom: 5px" @click="closeEditor()">结束编辑</button>
      <button class="btn" style="margin-bottom: 5px" @click="deleteAll()">清除所有</button>
      <button class="btn" style="margin-bottom: 5px" @click="currentDetail()">当前区域详情</button>
      <button class="btn" style="margin-bottom: 5px" @click="detail()">框选区域详情</button>
    </div>
    <div v-if="cardFlag" class="input-card" style="bottom: 230px;right: 10px; width: 300px;">
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #2B9AEB;padding: 0 0 5px 0">
        <span style="font-size: 14px;font-weight: 900;display: inline-block;margin-left: 10px">详情</span>
        <i class="iconfont icon-guanbi2fill" style="margin-right: 5px;font-size: 14px; user-select: none;cursor: pointer" @click="cardFlag=false" />
      </div>
      <div style="background: #fcfcfc;height: 200px;position: relative; overflow: hidden">
        <div class="card-list">
          <div class="card-item">
            <div class="left">编号</div>
            <div class="right">{{ currentCard.sid }}</div>
          </div>
          <div class="card-item">
            <div class="left">名称</div>
            <div class="right">{{ currentCard.name }}</div>
          </div>
          <div class="card-item">
            <div class="left">区域面积（平方米）</div>
            <div class="right">{{ currentCard.area.toFixed(1) + '㎡'}}</div>
          </div>
          <div class="card-item">
            <div class="left">详情</div>
            <div class="right" style="max-width: 200px">{{ currentCard.detail }}</div>
          </div>
        </div>
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

.drawer-container ::v-deep .el-drawer__header {
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
  padding: 10px;
  //background: #fcfcfc;
  background: #e5ebf1;
  color: #1f2d3d;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}

.drawer-container ::v-deep .el-drawer__body {
  background: #fcfcfc;;
  //background: #22272e;
}

.card-list{
  font-size: 14px;
  font-weight: 500;
  .card-item{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .right{
      color: #666;
    }
  }
}
</style>
