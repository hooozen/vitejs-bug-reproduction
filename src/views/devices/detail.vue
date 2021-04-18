<template>
  <div class="detail-view device-detail">
    <nav-bar class="detail-nav" title="设备详情">
      <el-button type="">修改</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-title">基本信息</div>
        <el-form class="main-item-body">
          <div class="item-body-column" style="flex-basis: 200px">
            <el-form-item label="设备序列号:">CH100000000</el-form-item>
            <el-form-item label="设备型号:">3L啤酒机</el-form-item>
            <el-form-item label="在线状态:">在线</el-form-item>
            <el-form-item label="设备状态:">正常</el-form-item>
            <el-form-item label="预警状态:">未预警</el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="设备名称:">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="当前归属:">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="激活状态:">是</el-form-item>
            <el-form-item label="添加时间:">2021-04-12</el-form-item>
            <el-form-item label="激活时间:">2021-04-12</el-form-item>
            <el-form-item label="最后上线时间">2021-04-12</el-form-item>
          </div>
          <div class="item-body-column detail-map">
            <el-form-item label="设备经纬度">
              <el-input></el-input>
            </el-form-item>
            <t-map :center="location" :markers="[location]" class="map-outer">
            </t-map>
          </div>
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-title">设备状态</div>
        <el-form class="main-item-body" style="align-items: center">
          <div class="item-body-column" style="flex-basis: 120px">
            <el-form-item label="工作状态:">正常</el-form-item>
            <el-form-item label="气压:">0.3Mpa</el-form-item>
            <el-form-item label="环境温度:">25</el-form-item>
            <el-form-item label="内部温度:">5</el-form-item>
          </div>
          <div class="item-body-column">
            <img class="device-photo" src="/img/device-1.png" />
          </div>
          <div class="item-body-column" style="flex-bisis: 160px">
            <el-form-item label="啤酒1:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒2:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒3:">6.1kg 61%</el-form-item>
            <el-form-item label="啤酒4:">6.1kg 61%</el-form-item>
          </div>
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-body">
          <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
            <el-tab-pane label="设备数据" name="data">
              <el-table></el-table>
            </el-tab-pane>
            <el-tab-pane label="已绑定门店" name="store">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="预警记录" name="warning">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="故障记录" name="breakdow">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="设备参数" name="params">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="运行记录" name="working">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="操作记录" name="operation">
              <el-table border></el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import NavBar from "../components/navBar/index.vue";
import TMap from "../components/TMap/index.vue";

const deviceLocation = [23.166028, 113.308253];

export default defineComponent({
  components: {
    NavBar,
    TMap,
  },
  setup() {
    const activeTab = ref("data");
    const location = ref(deviceLocation);
    return { location, activeTab };
  },
});
</script>
<style lang="postcss"></style>
