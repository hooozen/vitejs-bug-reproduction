<template>
  <div class="operators table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search
          v-model:keyword="keyword"
          v-model:keywordType="keywordType"
          :keywordTypes="options.keywordTypes"
        ></tl-search>
        <tl-address
          v-model:district="addressProvince"
          :deepth="1"
          :clearable="true"
        ></tl-address>
        <el-button type="primary" @click="conditionalQuery">查询</el-button>
      </div>
      <div class="panel__opt">
        <el-button type="primary" @click="router.push('add-operator')">
          新增
        </el-button>
        <el-button type="warning" @click="batchDelete">删除</el-button>
        <el-button>导入</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="view-body">
      <el-image-viewer
        :url-list="[viewingImage]"
        v-if="viewerShowing"
        @close="viewerShowing = false"
      ></el-image-viewer>
      <el-table
        @selection-change="tableSelectionChange"
        :data="list"
        border
        height="100%"
      >
        <el-table-column
          type="selection"
          width="40px"
          align="center"
        ></el-table-column>
        <el-table-column
          type="index"
          width="40px"
          align="center"
        ></el-table-column>
        <el-table-column
          v-for="col in columns"
          :sortable="col.sortable"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
        ></el-table-column>
        <el-table-column label="营业执照" width="80px">
          <template #default="scope">
            <span
              class="text-btn"
              @click="viewLicense(scope.row.businessLicense)"
            >
              查看
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <router-link
              class="text-btn"
              :to="`operator-detail?id=${scope.row.id}`"
            >
              详情
            </router-link>
            <span class="text-btn--warning" @click="deleteItem(scope.row.id)">
              删除
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="statusName"> </el-table-column>
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
      ></el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByKeyword, QueryParams, remove } from '@/api/server/operator'
  import { getAdressName } from '@api/local/district'

  import { useRouter } from 'vue-router'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'
  import TlAddress from '../components/address/index.vue'

  import options from './options'
  import columns from './columns'

  interface ListParams {
    keyword?: string
    keywordType?: number
    current?: number
    size?: number
  }

  export default defineComponent({
    name: 'Operators',
    components: { TlSelect, TlSearch, TlAddress },

    setup() {
      const router = useRouter()

      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const totalNum = ref<number>()
      const currentPage = ref(1)
      const pageSize = ref(10)
      const selectedItems = ref<any[]>([])
      const currentPageChange = (page: number) => getList({ current: page })
      const pageSizeChange = (size: number) => getList({ size })
      const getList = async (_params?: ListParams) => {
        const params: QueryParams = {
          size: pageSize.value,
          current: 1,
          keyword: keyword.value,
          keywordType: keywordType.value,
          addressProvince: addressProvince.value,
          ..._params,
        }
        const resData = (await getByKeyword(params)).data
        list.value = resData.records.map((item: any) => ({
          ...item,
          addressName: getAdressName(item.addressProvince, item.addressCity, item.addressArea),
          statusName: options.status.find(s => s.value == item.status)?.label
        }))
        totalNum.value = +resData.total
        currentPage.value = +resData.current
      }
      const tableSelectionChange = (value: any[]) => {
        selectedItems.value = value
      }

      const viewingImage = ref<string>('')
      const viewerShowing = ref<boolean>(false)
      const viewLicense = (value: string) => {
        viewerShowing.value = true
        viewingImage.value = value
      }

      // filter form
      const keyword = ref('')
      const keywordType = ref<1 | 2>(1)
      const addressProvince = ref<string>()
      const conditionalQuery = () => void getList({ current: 1 })

      onMounted(() => getList())

      const deleteItem = async (id: string) => {
        await remove(id)
        getList()
      }

      const batchDelete = async () => {
        const ids = selectedItems.value.map((item: any) => item.id).join(',')
        const length = selectedItems.value.length
        await remove(ids, {
          confirmConfig: { text: `确认批量删除 ${length} 项记录?` },
        })
        getList()
      }

      return {
        router,
        options,
        columns,
        tableSelectionChange,
        list,
        deleteItem,
        batchDelete,
        viewingImage,
        viewerShowing,
        viewLicense,
        keywordType,
        keyword,
        status,
        conditionalQuery,
        addressProvince,
        pageSize,
        currentPage,
        totalNum,
        pageSizeChange,
        currentPageChange,
      }
    },
  })
</script>
