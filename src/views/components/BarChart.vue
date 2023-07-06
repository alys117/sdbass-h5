<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 500

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
      default: '300px'
    },
    classification: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
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

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '5%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: [{
          type: 'category',
          data: this.classification,
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
          data: this.data,
          animationDuration
        }]
      })
    }
  }
}
</script>
