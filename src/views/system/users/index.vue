<template>
  <div class="users table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search
          v-model="keyword"
          v-model:keywordType="keywordType"
          :keywordTypes="options.keywordTypes"
        ></tl-search>
        <tl-store v-model="storeId"></tl-store>
        <tl-select v-model="status" :options="options.status"></tl-select>
        <el-button type="primary" @click="conditionalQuery">查询</el-button>
      </div>
      <div class="panel__opt">
        <el-button type="primary" @click="router.push('add-user')"
          >新增</el-button
        >
        <el-button type="danger">删除</el-button>
        <!--
        <el-button>导入</el-button>
        <el-button>导出</el-button>
        -->
      </div>
    </div>
    <div class="view-body">
      <el-table :data="list" :stripe="true" height="100%">
        <el-table-column type="selection" align="center"> </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" fixed="right" align="center">
          <template #default="scope">
            <router-link
              class="text-btn"
              :to="`/user-detail?id=${scope.row.id}`"
            >
              详情
            </router-link>
            <span class="text-btn" href="#" @click="deleteItem(scope.row.id)"
              >删除</span
            >
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
  import { useRouter } from 'vue-router'
  import { getByKeyword } from '@/api/server/user'
  import { getAdressName } from '@api/local/district'

  import TlSelect from '../../components/selector/index.vue'
  import TlSearch from '../../components/search/index.vue'
  import TlStore from '../../components/store-select/index.vue'

  import options from './options'
  import columns from './columns'

  export default defineComponent({
    name: 'Users',
    components: { TlSelect, TlSearch, TlStore },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const listLength = ref(10)
      const createTime = ref<string>()
      const currentPage = ref<number>(1)
      const pageSize = ref(10)
      const currentPageChange = (current: number) => void getList({ current })
      const pageSizeChange = (size: number) => void getList({ size })

      const getList = async (_params?: any) => {
        const params = {
          size: pageSize.value,
          current: 1,
          createTime: createTime.value,
          keywordType: keywordType.value,
          keyword: keyword.value,
          status: status.value,
          storeId: storeId.value,
          ..._params
        }
        const resData = (await getByKeyword(params)).data
        list.value = resData.records.map((item: any) => ({
          ...item,
          statusName: options.status.find(s => s.value == item.status)?.label
        }))
        listLength.value = +resData.total
        pageSize.value = +resData.size
      }

      // filter form
      const keyword = ref<string>()
      const keywordType = ref<1 | 2>(1)
      const status = ref<1 | 2 | 3>()
      const storeId = ref<string | number>()
      const conditionalQuery = () => void getList({ current: 1 })

      const init = () => {
        getList({ current: 1 })
      }

      const deleteItem = (id: string) => {
      }

      const router = useRouter()

      onMounted(() => void init())
      return {
        options, columns,
        list,
        status, keyword, keywordType, conditionalQuery, storeId,
        pageSize, currentPage, listLength, pageSizeChange, currentPageChange,
        deleteItem,
        router,
      }
    },

  })
</script>
<style lang="scss" scoped>
  .store {
    .device-list {
      display: flex;
      align-items: center;
      .status-dot {
        background: #bbb;
        height: 6px;
        margin-right: 6px;
        transform: translateY(-1px);
        width: 6px;
        border-radius: 3px;
      }
    }
  }
</style>
