<template>
  <div class="detail-view device-detail">
    <nav-bar class="detail-nav" title="设备详情">
      <el-button size="small">修改</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="detail-overview"></div>
      <div class="device-map">
        <div class="map-title">设备经纬度</div>
        <div class="map-outer"></div>
      </div>
      <div class="device-img" id="container"></div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import NavBar from './components/NavBar.vue'

  function initMap(location: [number, number], params: any) {
    //定义地图中心点坐标
    var center = new window.TMap.LatLng(location[0], location[1])
    //定义map变量，调用 TMap.Map() 构造函数创建地图
    var map = new window.TMap.Map(document.getElementById('container'), {
      center, ...params
    });
    var markerLayer = new window.TMap.MultiMarker({
      map: map,  //指定地图容器
      //样式定义
      styles: {
        //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
        "myStyle": new TMap.MarkerStyle({
          "width": 18,  // 点标记样式宽度（像素）
          "height": 30, // 点标记样式高度（像素）
          "src": '../img/map-marker.png',  //图片路径
          //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
          "anchor": { x: 16, y: 32 }
        })
      },
      //点标记数据数组
      geometries: [{
        "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
        "styleId": 'myStyle',  //指定样式id
        "position": new window.TMap.LatLng(location[0], location[1]),  //点标记坐标位置
        "properties": {//自定义属性
          "title": "marker1"
        }
      }]
    })
  }
  export default defineComponent({
    components: {
      NavBar,
    },
    setup() {
      onMounted(() => {
        https://www.amap.com/place/B00140UF3R
        initMap([23.163461, 113.322036], {
          zoom: 12,   //设置地图缩放级别
          pitch: 0,  //设置俯仰角
          rotation: 0,    //设置地图旋转角度})
          showControl: false,
        })
      })
    }
  })
</script>
<style lang="postcss">
  #container {
    width: 440px;
    height: 252px;
  }
</style>

