<template>
  <div class="staff table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search v-model="searchKey" @search="search"></tl-search>
        <tl-select :options="options.regions" v-model="region"></tl-select>
      </div>
      <div class="panel__opt">
        <el-button type="primary">新增</el-button>
        <el-button type="danger">删除</el-button>
        <el-button>导入</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="view-body">
      <el-table v-loading="loadingList" :data="list" border height="100%">
        <el-table-column type="selection" width="40px" align="center">
        </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :sortable="col.sortable"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
        >
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <router-link class="cell-opt" :to="`device-detail?id=${scope.id}`">详情</router-link>
            <span class="cell-opt" @click="deleteItem(scope.id)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="view-foot">
      <el-pagination
        @size-change="pageSizeChange"
        @current-change="currentPageChange"
        :current-page="currentPage"
        :page-sizes="[10, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listLength"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { staff, ListParams } from '@api/server'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'

  import options from './options'
  import columns from './columns'

  export default defineComponent({
    name: 'Devices',
    components: { TlSelect, TlSearch },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const listLength = ref(10)
      const currentPage = ref(1)
      const pageSize = ref(10)
      const currentPageChange = (page: number) => getList({ pageNum: page })
      const pageSizeChange = (size: number) => getList({ pageSize: size })
      const getList = async (params?: ListParams) => {
        params = { pageSize: pageSize.value, ...params }
        try {
          const resData = (await staff(params, '访问成功')).data
          list.value = resData
          // list.value = resData.list
          // listLength.value = resData.total
        } catch { }
        loadingList.value = false;
      }

      // filter form
      const searchKey = ref('')
      const region = ref(0)
      const search = (searchKey: string) => getList({ keyWord: searchKey })

      onMounted(() => {
        getList({ pageNum: 1 })
      })
      return {
        options, columns,
        list, loadingList,
        searchKey, region,
        pageSize, currentPage, listLength, pageSizeChange, currentPageChange,
      }
    },

  })
</script>

