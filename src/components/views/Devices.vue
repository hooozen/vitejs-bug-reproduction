<template>
  <div class="devices table-view">
    <div class="view-head"></div>
    <div class="view-panel"></div>
    <div class="view-body">
      <el-table v-loading="loadingList" :data="list" border height="100%">
        <el-table-column v-for="col in columns" :key="col.prop" :label="col.label" :prop="col.prop">
        </el-table-column>
        <el-table-column>
          <template #default="scope">
            <router-link :to="`/device-detail?id=${scope.id}`">查看详情</router-link>
            <a>删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
  // @ts-ignore
  import { devices } from 'api/devices.ts'

  const columns: TableColumnData[] = [{
    prop: 'serialNum',
    label: '序列号',
  }, {
    prop: 'identifyingCode',
    label: '验证码',
  }, {
    prop: 'name',
    label: '名称',
  }, {
    prop: 'store',
    label: '当前归属',
  }, {
    prop: 'type',
    label: '设备型号',
  }, {
    prop: 'online',
    label: '在线状态',
  }, {
    prop: 'status',
    label: '设备状态',
  }, {
    prop: 'active',
    label: '激活状态',
  }]


  export default defineComponent({
    name: 'Devices',
    setup() {
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const getDevices = async () => {
        try {
          list.value = (await devices({}, '访问成功')).data.list
        } catch { }
        loadingList.value = false;
      }
      onMounted(() => {
        getDevices()
      })
      return { list, columns, loadingList }
    },
  })
</script>

