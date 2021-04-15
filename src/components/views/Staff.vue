<template>
  <div class="staff table-view">
    <div class="view-head"></div>
    <div class="view-panel"></div>
    <div class="view-body">
      <el-table v-loading="loadigList" :data="list" border height="100%">
        <el-table-column v-for="col in columns" :key="col.prop" :label="col.label" :prop="col.prop">
        </el-table-column>
        <el-table-column>
          <template #default="scope">
            <router-link :to="`staff-detail?id=${scope.id}`">详情</router-link>
            <a @click="deleteItem(scope.id)">删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { staff } from '@api/staff'

  const columns: TableColumnData[] = [{
    prop: 'prop1',
    label: '列一'
  }, {

  }]
  export default defineComponent({
    name: 'staff',
    setup() {
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const getList = async () => {
        try {
          list.value = (await staff({}, '访问成功')).data.list
        } catch { }
        loadingList.value = false;
      }
      onMounted(() => {
        getList()
      })
      return { list, columns, loadingList }
    },
  })
</script>