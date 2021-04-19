<template>
  <div class="positions table-view">
    <div class="view-head"></div>
    <div class="view-body">
      <el-table v-loading="loadingList" :data="list" border height="100%">
        <el-table-column type="selection" width="40px" align="center">
        </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column label="职位名称" prop="name"> </el-table-column>
        <el-table-column label="权限">
          <template #default="scope">
            {{ privilegesStringify(scope.row.functions) }}
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="description"> </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          align="center"
          width="100px"
        >
          <template #default="scope">
            <span class="cell-opt" @click="deleteItem(scope.row.id)">编辑</span>
            <span
              class="cell-opt cell-opt--warning"
              @click="deleteItem(scope.row.id)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { positions, privileges } from '@api/server/position'

  const privilegesStringify = (priviliges: any[]): string => {
    console.log(priviliges)
    return priviliges.reduce((p, c) => `${p};${c.name}`.substring(1), '')
  }

  export default defineComponent({
    name: 'Devices',
    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const getList = async () => {
        const resData = (await positions()).data
        list.value = resData
        loadingList.value = false
      }

      // dialog
      const dialogVisible = false
      let allPrivileges = ref([])
      const getAllPrivileges = async () => {
        allPrivileges.value = (await privileges()).data
      }

      onMounted(() => {
        getList()
        getAllPrivileges()
      })
      return { list, loadingList, privilegesStringify }
    },
  })
</script>

