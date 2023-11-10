<template>
  <!--  <div :class="className" :style="{height:height,width:width}" />-->
  <div v-resize="myResizeHandler" :class="className" :style="{height:height,width:width}" />
</template>

<script>
// import * as echarts from 'echarts'
import echarts from '@/utils/echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import myResize from '@/views/components/v-resize'

export default {
  directives: {
    resize: myResize // 指令方式封装resize
  },
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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
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
      console.log('LineChart size', size)
      if (this.chart) {
        this.chart.resize()
      }
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ classification, actualData, lastmonth, thismonth } = {}) {
      this.chart.setOption({
        xAxis: {
          data: classification,
          boundaryGap: false,
          axisLabel: {
            show: true, // 显示坐标轴上的文字
            interval: 0, // 坐标轴上的文字全部显示， 这个要配合formatter使用才好使，只写formatter会有些不显示
            formatter: function(params) {
              if (parseInt(params) % 1 === 0) {
                return params
              }
              return ''
            },
            textStyle: {
              color: '#232323',
              fontSize: 8
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false // 不显示网格线
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: 20,
          top: 30,
          containLabel: false,
          backgroundColor: '#fff'
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: 'rgba(50,50,50,0.5)', // 提示背景颜色，默认为透明度为0.7的黑色
          textStyle: {
            color: '#FFF'
          },
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        // 区域缩放控制器
        // dataZoom: {
        //   dataBackgroundColor: '#efefff', // 数据背景颜色
        //   fillerColor: 'rgba(182,162,222,0.2)', // 填充颜色
        //   handleColor: '#008acd' // 手柄颜色
        // },
        yAxis: {
          type: 'value',
          min: function(value) {
            return value.min - 1
          },
          max: function(value) {
            return value.max + 1
          },
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
          },
          splitArea: {
            show: false // 不显示分隔区域
          }
        },
        legend: {
          data: ['当月', '上月']
        },
        series: [{
          name: '当月',
          smooth: false, // 平滑曲线
          type: 'line',
          // symbol: 'circle', // 设定为实心点
          symbolSize: 2, // 设定实心点的大小
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top',
                formatter: function(params) {
                  let index = 0
                  for (let i = thismonth.length - 1; i > -1; i--) {
                    if (thismonth[i] !== undefined) {
                      index = i
                      break
                    }
                  }
                  if (params.name === classification.at(index).toString()) { return params.value }
                  return ''
                },
                fontSize: 12
              },
              color: 'red',
              lineStyle: {
                color: 'red',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: thismonth,
          animationDuration: 500,
          animationEasing: 'quadraticOut'
        }, {
          name: '上月',
          smooth: false, // 平滑曲线
          type: 'line',
          // symbol: 'circle', // 设定为实心点
          symbolSize: 2, // 设定实心点的大小
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top',
                formatter: function(params, data) {
                  let index = 0
                  for (let i = lastmonth.length - 1; i > -1; i--) {
                    if (lastmonth[i] !== undefined) {
                      index = i
                      break
                    }
                  }
                  if (params.name === classification.at(index).toString()) { return params.value }
                  return ''
                },
                fontSize: 12
              },
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: lastmonth,
          animationDuration: 500,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>
