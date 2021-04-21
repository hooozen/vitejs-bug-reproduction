<template>
  <div class="detail-view device-detail">
    <nav-bar class="detail-nav" title="设备详情">
      <el-button type="">修改</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-title">基本信息</div>
        <el-form :model="formData" class="main-item-body" label-width="80px">
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item label="名称:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="组织代码:">
              <el-input v-model="formData.code"></el-input>
            </el-form-item>
            <el-form-item label="联系人:">
              <el-input v-model="formData.contacts"></el-input>
            </el-form-item>
            <el-form-item label="电话:">
              <el-input v-model="formData.tel"></el-input>
            </el-form-item>
            <el-form-item label="开户行:">
              <el-input v-model="formData.accountBank"></el-input>
            </el-form-item>
            <el-form-item label="账号:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
            <el-form-item label="地址:">
              <!--<tl-addr-select></tl-addr-select>-->
            </el-form-item>
            <el-form-item label="经营范围:">
              <!--<tl-addr-select></tl-addr-select>-->
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item label="单位编号:"> </el-form-item>
            <el-form-item label="添加时间:"> </el-form-item>
            <el-form-item label="备注:">
              <el-input type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="营业执照:">2021-04-12</el-form-item>
          </div>
          <div class="item-body-column detail-map">
            <el-form-item label="经纬度">
              <el-input></el-input>
            </el-form-item>
            <t-map :center="location" :markers="[location]" class="map-outer">
            </t-map>
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
            <el-tab-pane label="操作记录" name="operator">
              <el-table border></el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";
  import NavBar from "../components/navBar/index.vue";
  import TMap from "../components/TMap/index.vue";
  import TlAddrSelect from "../components/address/index.vue";
  import { add, AddParams, getById } from '@/api/server/operator'
  import { useRoute } from "vue-router";

  const deviceLocation = [23.166028, 113.308253];

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddrSelect
    },
    setup(props) {
      const formData = ref<AddParams>({} as any)

      const route = useRoute()
      const id = computed(() => route.query.id)

      const activeTab = ref("data");
      const location = ref(deviceLocation);

      onMounted(async () => {
        if (id.value) formData.value = (await getById(id.value as string)).data
      })

      return { location, activeTab, formData };
    },
  });
</script>
<style lang="postcss"></style>
