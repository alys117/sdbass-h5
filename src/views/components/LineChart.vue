<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
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
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
      // this.chart.setOption({
      //   xAxis: {
      //     type: 'category',
      //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       data: [150, 230, 224, 218, 135, 147, 260],
      //       type: 'line'
      //     }
      //   ]
      // })
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
          containLabel: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          type: 'value',
          min: function(value) {
            console.log(value)
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
          }
        },
        legend: {
          data: ['当月', '上月']
        },
        series: [{
          name: '当月',
          smooth: false, // 平滑曲线
          type: 'line',
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
