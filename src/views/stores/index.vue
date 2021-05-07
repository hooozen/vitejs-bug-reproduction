<template>
  <div class="store table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search v-model="searchKey" @search="search"></tl-search>
        <tl-select :options="options.region" v-model="type"></tl-select>
        <tl-select :options="options.type" v-model="isOnline"></tl-select>
        <tl-select :options="options.status" v-model="status"></tl-select>
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
        <el-table-column label="设备状态" min-width="140px">
          <template #default="scope">
            <div
              v-for="d in scope.row.deviceList"
              :key="d.sequence"
              class="device-list"
            >
              <div :style="`background: ${d.status == 1 ? '#75F94C' : d.status == 0 ? '#EB3223' : 'transport'}`" class="status-dot"></div>
              {{ d.name }} : {{ d.sequence }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <router-link class="text-btn" :to="`/device-detail?id=${scope.row.id}`">
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
  import { getByKeyword, remove } from '@api/server/stores'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'

  import options from './options'
  import columns from './columns'

  export default defineComponent({
    name: 'Stores',
    components: { TlSelect, TlSearch },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const listLength = ref(10)
      const code = ref<string>()
      const contacts = ref<string>()
      const createTime = ref<string>()
      const status = ref<1 | 2 | 3>()
      const tag = ref<string>()
      const tel = ref<string>()
      const currentPage = ref<number>(1)
      const pageSize = ref(10)
      const currentPageChange = (current: number) => {
        console.log(current)
        console.log('page change')
        getList({ current })
      }
      const pageSizeChange = (size: number) => {
        console.log('size change')
        getList({ size })
      }
      const getList = async (_params?: any) => {
        const params = {
          size: pageSize.value,
          current: 1,
          code: code.value,
          contacts: contacts.value,
          createTime: createTime.value,
          tag: tag.value,
          tel: tel.value,
          ..._params
        }
        const resData = (await getByKeyword(params, '访问成功')).data
        list.value = resData.records.map((item: any) => ({
          ...item,
          tagName: item.tags.join(';')
        }))
        listLength.value = +resData.total
        pageSize.value = +resData.size
        loadingList.value = false;
      }

      // filter form
      const searchKey = ref('')
      const type = ref(0)
      const isOnline = ref('')
      const isActive = ref('')
      const search = (searchKey: string) => getList({ keyWord: searchKey })

      const init = () => {
        getList({ current: 1 })
      }

      const deleteItem = (id: string) => {
        remove(id)
      }

      onMounted(() => void init())
      return {
        options, columns,
        list, loadingList,
        searchKey, type, status, isActive, isOnline, search,
        pageSize, currentPage, listLength, pageSizeChange, currentPageChange,
        deleteItem,
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
