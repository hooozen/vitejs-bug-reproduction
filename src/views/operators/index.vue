<template>
  <div class="operators table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search
          v-model:keyword="searchKey"
          v-model:keywordType="keywordType"
          :keywordTypes="options.keywordTypes"
          @search="doSearch"
        ></tl-search>
        <tl-select
          :options="options.regions"
          v-model="filterRegion"
        ></tl-select>
      </div>
      <div class="panel__opt">
        <el-button type="primary" @click="router.push('add-operator')">新增</el-button>
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
            <router-link
              class="cell-opt"
              :to="`operator-detail?id=${scope.row.id}`"
            >
              详情
            </router-link>
            <span class="cell-opt--warning" @click="deleteItem(scope.row.id)">删除</span>
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
        :total="totalNum"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByKeyword, QueryParams, remove } from '@/api/server/operator'

  import { useRouter } from 'vue-router'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'

  import options from './options'
  import columns from './columns'

  interface ListParams {
    keyword?: string,
    keywordType?: number,
    current?: number,
    size?: number
  }

  export default defineComponent({
    name: 'Operators',
    components: { TlSelect, TlSearch },

    setup() {
      const router = useRouter()

      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const totalNum = ref<number>()
      const currentPage = ref(1)
      const pageSize = ref(10)
      const currentPageChange = (page: number) => getList({ current: page })
      const pageSizeChange = (size: number) => getList({ size })
      const getList = async (_params?: ListParams) => {
        const params: QueryParams = { size: pageSize.value, current: 1, ..._params }
        const resData = (await getByKeyword(params, '访问成功')).data
        list.value = resData.records
        totalNum.value = +resData.total
        currentPage.value = +resData.current
        loadingList.value = false;
      }

      // filter form
      const searchKey = ref('')
      const keywordType = ref(0)
      const filterRegion = ref<string>()
      const doSearch = (keyword: string, keywordType: number) => getList({ keyword, keywordType })

      onMounted(() => getList())

      const deleteItem = async (id: string) => {
        await remove(id)
        getList()
      }

      return {
        router,
        options, columns,
        list, loadingList,
        deleteItem,
        keywordType, searchKey, status, doSearch, filterRegion,
        pageSize, currentPage, totalNum, pageSizeChange, currentPageChange,
      }
    },

  })
</script>

