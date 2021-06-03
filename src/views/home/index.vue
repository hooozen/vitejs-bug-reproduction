<template>
  <div class="home-view">
    <div class="map-bg-outer">
      <t-map
        class="map-bg"
        :center="[38.3227, 105.5525]"
        :config="Mapconfig"
      ></t-map>
    </div>
    <div class="home__main-outer">
      <div class="home__main__body">
        <div>
          <div class="home-chart store-sts" style="width: 400px">
            <div class="home-chart__head">
              <div class="ts-icon icon-store-s"></div>
              门店统计
            </div>
            <div class="store-sts__body home-chart__body">
              <div class="store-sts-item prefix-msg">
                <div>门店总数</div>
                <div>122</div>
              </div>
              <div class="store-sts-item prefix-heart">
                <div>服务总数</div>
                <div>221</div>
              </div>
            </div>
          </div>
          <div class="home-chart device-sts" style="width: 400px">
            <div class="home-chart__head">
              <div class="ts-icon icon-device-s"></div>
              设备统计
            </div>
            <div class="home-chart__body device-sts__body">
              <div class="device-amount">
                <div style="font-size: 24px; font-weight: bold">500</div>
                <div style="font-size: 10px">总计</div>
              </div>
              <v-chart autoresize style="height: 140px" :option="deviceSts"></v-chart>
            </div>
          </div>
          <div class="home-chart sale-num" style="width: 400px">
            <div class="home-chart__head">
              <div class="ts-icon icon-bar-s"></div>
              销售总数量
            </div>
            <div class="home-chart__body sale-num__body">
              <div class="sale-num-item">
                <div class="num">800</div>
                <div class="text">销售总数量</div>
              </div>
              <div class="sale-num-item">
                <div class="num">400</div>
                <div class="text">当年处置总量</div>
              </div>
              <div class="sale-num-item">
                <div class="num">600</div>
                <div class="text">当年产废总量</div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-chart sale-rank" style="width: 400px">
          <div class="home-chart__head">
            <div class="ts-icon icon-champion-s"></div>
            销量排名
          </div>
          <div class="home-chart__body" style="flex: 1">
            <v-chart autoresize style="height: 100%" :option="rankSts"></v-chart>
          </div>
        </div>
      </div>
      <div class="home-chart home__main__foot province-num" style="flex: 1">
        <div class="home-chart__head">
          <div class="ts-icon icon-pie-s"></div>
          各省门店数量
        </div>
        <div class="home-chart__body" style="flex: 1">
          <v-chart autoresize style="height: 100%" :option="provinceSts"></v-chart>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import TMap from '../components/TMap/index.vue'

  const _Mapconfig = {
    zoom: 4.8,
    mapStyleId: 'style3',
    pitch: 10
  }

  export default defineComponent({
    components: {
      TMap
    },
    setup() {
      const Mapconfig = ref(_Mapconfig)

      const deviceSts = ref<any>({
        darkMode: true,
        color: ['#2D96FF', '#FF9A32'],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '0',
          left: 'center',
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            top: '-20px',
            radius: ['62%', '50%'],
            avoidLabelOverlap: false,
            labelLine: {
              show: true
            },
            data: [
              { value: 40, name: '已完成' },
              { value: 10, name: '未完成' },
            ]
          }
        ]
      });

      const provinceSts = ref<any>({
        darkMode: true,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '0',
          right: '0',
          bottom: '0',
          top: '0',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏',
              '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南',
              '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '台湾',
              '香港', '澳门']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },

        ]
      })

      const rankSts = ref<any>({
        darkMode: true,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '0',
          right: '0',
          bottom: '0',
          top: '0',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位', '单位',]
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [8800, 8800, 8800, 8800, 8800, 8900, 9000, 10000, 18203, 23489, 29034, 104970, 131744, 630230]
          },
        ]
      })

      return { Mapconfig, deviceSts, provinceSts, rankSts }
    },
  })
</script>
<style lang="scss">
  .home-view {
    position: relative;
    height: 100%;
    width: 100%;
    & .map-bg-outer,
    .home__main-outer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    & .map-bg {
      height: 100%;
      width: 100%;
      & .map-outer {
        height: 100%;
        width: 100%;
      }
    }
  }
  .home-chart {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 20px;
    box-sizing: border-box;
    color: white;
  }
  .home__main-outer {
    z-index: 1001;
    display: flex;
    flex-direction: column;
  }
  .home-chart__head {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .home__main__body {
    display: flex;
    justify-content: space-between;
  }
  .home-chart__body {
    display: flex;
    padding: 20px 0 10px;
  }
  .store-sts__body {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .store-sts-item {
    margin: 10px 0;
    position: relative;
    display: flex;
    height: 46px;
    width: 250px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    justify-content: space-evenly;
    align-items: center;
    &::after {
      position: absolute;
      content: "";
      height: 54px;
      width: 54px;
      border-radius: 50%;
      background-color: white;
      left: -27px;
      top: -4px;
    }
    &.prefix-msg {
      &::after {
        background: url("@assets/icon-msg-circle.png") center / 54px 54px
          no-repeat;
      }
    }
    &.prefix-heart {
      &::after {
        background: url("@assets/icon-heart-circle.png") center / 54px 54px
          no-repeat;
      }
    }
  }
  .sale-num__body {
    display: flex;
    justify-content: space-evenly;
  }
  .sale-num-item {
    display: flex;
    flex-direction: column;
    .num {
      font-size: 24px;
      font-weight: bold;
    }
    .text {
      font-size: 10px;
    }
  }
  .device-sts__body {
    position: relative;
    .device-amount {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 60px;
      width: 80px;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  .home__main__foot {
    margin: 0 20px 10px;
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
  }
  .sale-rank {
    display: flex;
    flex-direction: column;
  }
</style>

