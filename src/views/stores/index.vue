<template>
  <div class="store table-view">
    <div class="view-head"></div>
    <div class="view-panel-line">
      <el-input v-model="code" placeholder="请输入门店编码"></el-input>
      <el-input v-model="name" placeholder="请输入门店名称"></el-input>
      <el-input v-model="contacts" placeholder="请输入联系人"></el-input>
      <el-input v-model="tel" placeholder="请输入联系电话"></el-input>
      <el-date-picker
        placeholder="注册时间筛选"
        v-model="createTime"
        type="date"
      >
      </el-date-picker>
    </div>
    <div class="view-panel-line">
      <tl-address :deepth="1" v-model:district="addressProvince"></tl-address>
      <tl-select
        :options="options.status"
        v-model="status"
        placeholder="选择门店状态"
      ></tl-select>
      <tl-tag v-model="tag" placeholder="标签"></tl-tag>
      <el-button @click="conditionalQuery" type="primary">查询</el-button>
      <el-button @click="resetCondition">重置</el-button>
    </div>
    <div class="panel__btns">
      <el-button type="primary" @click="router.push('add-store')"
        >新增</el-button
      >
      <el-button @click="batchDelete" type="danger">删除</el-button>
      <el-button>导入</el-button>
      <el-button>导出</el-button>
    </div>

    <div class="view-body">
      <el-table
        :data="list"
        :stripe="true"
        height="100%"
        @selection-change="onSelectionChange"
      >
        <el-table-column type="selection" align="center"> </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          :sortable="col.sortable"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
          align="center"
        >
        </el-table-column>

        <el-table-column label="设备状态" min-width="140px">
          <template #default="scope">
            <span v-if="!scope.row.deviceList?.length">无设备</span>
            <div
              v-for="d in scope.row.deviceList"
              :key="d.sequence"
              class="device-list"
            >
              <div
                :style="`background: ${
                  d.status == 1
                    ? '#75F94C'
                    : d.status == 0
                    ? '#EB3223'
                    : 'transport'
                }`"
                class="status-dot"
              ></div>
              {{ d.name }} : {{ d.sequence }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="标签" align="center">
          <template #default="scope">
            <span v-if="!scope.row.tags?.length">无</span>
            <el-tag v-for="tag in scope.row.tags" class="text-tag" :key="tag">
              {{ tag }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="注册时间" prop="createTime" min-width="140px">
        </el-table-column>
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <router-link
              class="text-btn"
              :to="`/store-detail?id=${scope.row.id}`"
            >
              详情
            </router-link>
            <span class="text-btn" href="#" @click="deleteItem(scope.row.id)">
              删除
            </span>
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
  import { getByKeyword, remove } from '@/api/server/store'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'
  import TlAddress from '../components/address/index.vue'
  import TlOrganization from '../components/org-select/index.vue'
  import TlTag from '../components/tag-select/index.vue'

  import options from './options'
  import columns from './columns'

  import moment from 'moment'
  import { ElMessage } from 'element-plus'

  export default defineComponent({
    name: 'Stores',
    components: { TlSelect, TlSearch, TlAddress, TlOrganization, TlTag },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const listLength = ref(10)
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
          addressProvince: addressProvince.value[0],
          code: code.value,
          contacts: contacts.value,
          name: name.value,
          createTime: createTime.value && moment(createTime.value).format('YYYY-MM-DD'),
          current: 1,
          size: pageSize.value,
          status: status.value,
          tag: tag.value,
          tel: tel.value,
          ..._params
        }
        console.log('conditions of querying: ', params)
        const resData = (await getByKeyword(params, '访问成功')).data
        list.value = resData.records.map((item: any) => ({
          ...item,
          status: options.status.find(s => s.value == item.status)?.label,
          tagName: item.tags.join(';')
        }))
        listLength.value = +resData.total
        pageSize.value = +resData.size
      }

      // filter form
      const addressProvince = ref([])
      const code = ref<string>()
      const contacts = ref<string>()
      const createTime = ref<Date>()
      const name = ref<string>()
      const status = ref<1 | 2 | 3>()
      const tag = ref<string>()
      const tel = ref<string>()

      const conditionalQuery = () => getList({ current: 1 })
      const resetCondition = () => {
        addressProvince.value = []
        code.value = undefined
        contacts.value = undefined
        createTime.value = undefined
        name.value = undefined
        status.value = undefined
        tag.value = undefined
        tel.value = undefined
      }

      const init = () => {
        getList({ current: 1 })
      }

      const seletedItems = ref<{ [key: string]: any }>([])

      const onSelectionChange = (value: []) => {
        seletedItems.value = value
      }
      const batchDelete = async () => {
        const length = seletedItems.value.length
        if (!length) ElMessage.warning('未选中任何记录')
        const ids = seletedItems.value.map((item: any) => item.id).join(',')
        await remove(ids, {
          confirmConfig: { text: `确认批量删除 ${length} 项记录?` },
        })
        getList({ current: 1 })
      }
      const deleteItem = async (id: string) => {
        await remove(id)
        getList({ current: 1 })
      }

      const router = useRouter()

      onMounted(() => void init())
      return {
        options, columns,
        list,
        status, addressProvince, code, contacts, createTime, name, tag, tel, conditionalQuery, resetCondition,
        pageSize, currentPage, listLength, pageSizeChange, currentPageChange,
        deleteItem, batchDelete, onSelectionChange,
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
