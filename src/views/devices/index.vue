<template>
  <div class="devices table-view">
    <el-dialog v-model="dialogVisible" title="新增设备" width="400px">
      <el-form
        label-width="100px"
        :model="addForm"
        :rules="addFormRules"
        ref="formEl"
      >
        <el-form-item label="设备序列号" prop="sequence">
          <el-input
            v-model="addForm.sequence"
            @blur="getDeviceTypeName"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备验证码" prop="authCode">
          <el-input v-model="addForm.authCode"></el-input>
        </el-form-item>
        <el-form-item label="设备型号" prop="deviceTypeId">
          {{ deviceTypeName }}
        </el-form-item>
        <el-form-item label="设备名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="归属" prop="storeId">
          <el-input v-model="addForm.storeId"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="submitAddForm">确定</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </template>
    </el-dialog>
    <div class="view-head"></div>
    <div class="view-panel-line">
      <el-input width="100px" v-model="sequence" placeholder="请输入设备序列号">
      </el-input>
      <el-input v-model="name" placeholder="请输入设备名称"> </el-input>
      <tl-store v-model="storeId"></tl-store>
      <el-date-picker v-model="createTime" type="date" placeholder="添加日期">
      </el-date-picker>
    </div>
    <div class="view-panel-line">
      <tl-address> </tl-address>
      <tl-select
        :options="options.isOnline"
        v-model="isOnline"
        placeholder="在线状态"
      ></tl-select>
      <tl-select
        :options="options.status"
        v-model="status"
        placeholder="设备状态"
      ></tl-select>
      <tl-select
        :options="options.isActive"
        v-model="isActive"
        placeholder="激活状态"
      ></tl-select>
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button @click="getList">重置</el-button>
    </div>
    <div class="view-overview">
      <div class="overview-item">
        <div class="overview-text">
          <div class="overview-text__title">设备总数</div>
          <div class="overview-text__value">{{ overviewData.total }}</div>
        </div>
        <img class="overview-icon" src="@assets/icon-file.png" />
      </div>
      <div class="overview-item">
        <div class="overview-text">
          <div class="overview-text__title">设备在线率</div>
          <div class="overview-text__value">{{ overviewData.onlineRate }}%</div>
        </div>
        <div class="overview-icon"></div>
        <img class="overview-icon" src="@assets/icon-connection.png" />
      </div>
      <div class="overview-item">
        <div class="overview-text">
          <div class="overview-text__title">设备故障率</div>
          <div class="overview-text__value">{{ overviewData.faultRate }}%</div>
        </div>
        <img class="overview-icon" src="@assets/icon-error.png" />
      </div>
      <div class="overview-item">
        <div class="overview-text">
          <div class="overview-text__title">设备预警率</div>
          <div class="overview-text__value">{{ overviewData.alarmRate }}%</div>
        </div>
        <img class="overview-icon" src="@assets/icon-alarm.png" />
      </div>
    </div>
    <div class="panel__btns">
      <el-button type="primary" @click="dialogVisible = true">新增</el-button>
      <el-button type="danger">删除</el-button>
      <el-button disabled>导入</el-button>
      <el-button>导出</el-button>
    </div>

    <div class="view-body">
      <el-table
        v-loading="loadingList"
        :data="list"
        height="100%"
        :stripe="true"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column type="index" width="40px"> </el-table-column>
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
              class="text-btn"
              :to="`device-detail?id=${scope.row.id}`"
              >详情</router-link
            >
            <span class="text-btn" @click="deleteItem(scope.row.id)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="view-foot">
      <el-pagination
        @size-change="sizeChange"
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
  import { getByKeyword, add, DevicesQueryParams, remove, statistics, AddParams } from '@api/server/device'
  import { getByDeviceSequence } from '@api/server/deviceType'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'
  import TlAddress from '../components/address/index.vue'
  import TlStore from '../components/store-select/index.vue'

  import options from './options'
  import columns from './columns'

  import { addFormRules } from './formRules'

  export default defineComponent({
    name: 'Devices',
    components: { TlSelect, TlSearch, TlAddress, TlStore },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const totalNum = ref(10)
      const currentPage = ref(1)
      const pageSize = ref(10)
      const currentPageChange = (current: number) => { getList({ current }) }
      const sizeChange = (size: number) => { getList(size) }

      const getList = async (_params?: any) => {
        const params: DevicesQueryParams = {
          size: pageSize.value,
          current: 1,
          online: isOnline.value,
          createTime: createTime.value,
          status: status.value,
          sequence: sequence.value,
          name: name.value,
          active: isActive.value,
          ..._params
        }
        const resData = (await getByKeyword(params, '访问成功')).data
        list.value = resData.records.map((d: any) => ({
          ...d,
          onlineName: (options.isOnline.find(o => o.value === d.online))?.label,
          statusName: (options.status.find(o => o.value === d.status))?.label,
          activeName: (options.isActive.find(o => o.value === d.active))?.label,
        }))
        totalNum.value = +resData.total
        pageSize.value = +resData.size
        loadingList.value = false
      }

      // filter form
      const name = ref<string>()
      const sequence = ref<string>()
      const storeId = ref<string>()
      const createTime = ref<string>()
      const type = ref(0)
      const isOnline = ref<1 | 2 | 3>()
      const status = ref<0 | 1>()
      const isActive = ref<0 | 1>()

      // addForm
      const addForm = ref<AddParams>({
        authCode: '',
        name: '',
        sequence: '',
        storeId: '',
        deviceTypeId: ''
      })
      const formEl = ref(null)
      const dialogVisible = ref(false)
      const deviceTypeName = ref<string>('')

      const getDeviceTypeName = async (event: any) => {
        const deviceInfo = (await getByDeviceSequence(event?.target?.value)).data
        deviceTypeName.value = deviceInfo.name
        addForm.value.deviceTypeId = deviceInfo.id
      }

      const submitAddForm = async () => {
        await add(addForm.value)
        dialogVisible.value = false
        getList()
      }

      // overview data
      const overviewData = ref({})

      const init = async () => {
        getList()
        overviewData.value = (await statistics()).data
        console.log(overviewData.value)
      }

      onMounted(() => void init())

      const deleteItem = (id: string) => {
        remove(id)
      }

      return {
        options, columns,
        list, loadingList,
        storeId, createTime, sequence, name, type, status, isActive, isOnline,
        getList, pageSize, currentPage, totalNum, sizeChange, currentPageChange,
        formEl, addFormRules, dialogVisible, submitAddForm,
        overviewData,
        addForm, getByDeviceSequence, getDeviceTypeName, deviceTypeName,
        deleteItem
      }
    },

  })
</script>

