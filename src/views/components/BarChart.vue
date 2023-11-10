<template>
  <!--  <div :class="className" :style="{height:height,width:width}" />-->
  <div v-resize="myResizeHandler" :class="className" :style="{height:height,width:width}" />
</template>

<script>
// import * as echarts from 'echarts'
import echarts from '@/utils/echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import myResize from './v-resize'

const animationDuration = 500

export default {
  /**
   *   directives: {
   *     resize: myResize // 指令方式封装resize
   *   }
   * */
  directives: {
    resize: myResize // 指令方式封装resize
  },
  /**
   * mixins: [resize]  // 混合方式封装resize，里面采用的是监听window的resize事件，这种方式没法监听div的display属性变化（none，block）
  * */
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      options: {}
    }
  },
  watch: {
    data: {
      deep: true,
      handler(val, oldVal) {
        console.log('data changed', val, oldVal)
        if (val.classification) this.initChart()
      }
    }
  },
  mounted() {
    // this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    myResizeHandler(size) {
      console.log('BarChart size', size)
      if (this.chart) {
        this.chart.resize()
      }
    },
    initChart() {
      if (this.chart) this.chart.dispose()
      this.chart = echarts.init(this.$el, 'macarons')
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '5%',
          right: '-10%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: [{
          type: 'category',
          data: this.data.classification,
          axisTick: {
            alignWithLabel: true,
            show: false // 不显示坐标轴刻度线
          },
          axisLine: {
            show: true // 不显示坐标轴线
          },
          axisLabel: {
            show: true, // 显示坐标轴上的文字
            textStyle: {
              color: '#232323',
              fontSize: 12
            }
          }
        }],
        xAxis: [{
          type: 'value',
          min: function(value) {
            return value.min < 10 ? 0 : value.min - 10
          },
          max: function(value) {
            if (value.max - value.min > 90) return 150
            return value.max - value.min < 10 ? value.max + 10 : value.max + 30
          },
          show: false, // 不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
          axisTick: {
            show: false // 不显示坐标轴刻度线
          },
          axisLine: {
            show: false // 不显示坐标轴线
          },
          axisLabel: {
            show: false // 不显示坐标轴上的文字
          },
          splitLine: {
            show: false // 不显示网格线
          }
        }],
        series: [{
          name: '表现值',
          type: 'bar',
          stack: 'vistors',
          barWidth: '40%',
          itemStyle: {
            normal: {
              color: 'rgb(91, 155, 213)',
              barBorderRadius: 2,
              label: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#232323',
                  fontSize: 12
                }
              }
            }
          },
          data: this.data.actualData,
          animationDuration
        }]
      }
      this.options = options
      this.chart.setOption(options)
      const tmp = []
      setTimeout(() => {
        this.options.yAxis[0].data.forEach((item, index) => {
          tmp[index] = { name: this.options.yAxis[0].data[index], val: this.options.series[0].data[index] }
        })
        tmp.sort((a, b) => (b.val - a.val))
        this.options.yAxis[0].data = tmp.map(item => item.name)
        this.options.series[0].data = tmp.map(item => item.val)
        this.chart.setOption(this.options)
      }, 2000)
    }
  }
}
</script>
