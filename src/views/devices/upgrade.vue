<template>
  <div class="device-upgrade table-view">
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
          <tl-store v-model="addForm.storeId"></tl-store>
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
      <el-button @click="resetQueryForm">重置</el-button>
    </div>
    <div class="panel__btns">
      <el-button type="primary" @click="batchUpgrade">升级</el-button>
      <el-button type="primary" @click="dialogVisible = true">新增</el-button>
      <el-button type="danger" @click="batchDelete">删除</el-button>
      <el-button disabled>导入</el-button>
      <el-button>导出</el-button>
    </div>

    <div class="view-body">
      <el-table
        @selection-change="onSelectionChange"
        :data="list"
        height="100%"
        :stripe="true"
      >
        <el-table-column type="selection" align="center"> </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column
          v-for="col in columns"
          align="center"
          :sortable="col.sortable"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
        >
        </el-table-column>
        <el-table-column align="center" label="软件版本"> </el-table-column>
        <el-table-column align="center" label="最后更新时间" prop="updateTime">
        </el-table-column>
        <el-table-column align="center" label="操作" fixed="right">
          <template #default="scope">
            <span class="text-btn" @click="upgrade">升级</span>
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
  import { ElMessage } from 'element-plus'

  export default defineComponent({
    name: 'Devices',
    components: { TlSelect, TlSearch, TlAddress, TlStore },

    setup() {
      const init = () => {
        getList()
      }

      onMounted(() => void init())

      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
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
        const resData = (await getByKeyword(params)).data
        list.value = resData.records.map((d: any) => ({
          ...d,
          onlineName: (options.isOnline.find(o => o.value === d.online))?.label,
          statusName: (options.status.find(o => o.value === d.status))?.label,
          activeName: (options.isActive.find(o => o.value === d.active))?.label,
        }))
        totalNum.value = +resData.total
        pageSize.value = +resData.size
      }

      // filter form
      const name = ref<string>()
      const sequence = ref<string>()
      const storeId = ref<string>()
      const createTime = ref<string>()
      const isOnline = ref<1 | 2 | 3>()
      const status = ref<0 | 1>()
      const isActive = ref<0 | 1>()
      const resetQueryForm = () => {
        name.value = ''
        sequence.value = ''
        storeId.value = ''
        createTime.value = ''
        isOnline.value = undefined
        status.value = undefined
        isActive.value = undefined
      }

      // addForm
      const addForm = ref<AddParams>({
        authCode: '',
        name: '',
        sequence: '',
        storeId: '',
        deviceTypeId: ''
      })
      const formEl = ref(null)
      const dialogVisible = ref<Boolean>(false)
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

      // multiple selection
      const selectedItems = ref<any[]>([])
      const onSelectionChange = (value: any[]) => {
        selectedItems.value = value;
      }
      const getSelectedIds = (): false | string => {
        const length = selectedItems.value.length
        if (!length) return false
        return selectedItems.value.map(item => item.id).join(',')
      }

      // delete operation

      const deleteItem = async (id: string) => {
        await remove(id)
        getList()
      }

      const batchDelete = async () => {
        const ids: string | false = getSelectedIds()
        if (!ids) return ElMessage.warning('未选中任何记录')
        await remove(ids, {
          confirmConfig: { text: `确认批量删除 ${length} 项记录?` },
        })
        getList()
      }

      // upgrade
      const upgrade = async () => {
        // TODO
      }

      const batchUpgrade = async () => {
        const ids: string | false = getSelectedIds()
        if (!ids) return ElMessage.warning('未选中任何记录')
        // TODO
        // getList()
      }

      return {
        options, columns: columns.slice(0, 7), list,
        storeId, createTime, sequence, name, status, isActive, isOnline,
        getList, pageSize, currentPage, totalNum, sizeChange, currentPageChange,
        formEl, addFormRules, dialogVisible, submitAddForm,
        addForm, getByDeviceSequence, getDeviceTypeName, deviceTypeName,
        deleteItem, batchDelete, onSelectionChange,
        resetQueryForm,
        upgrade, batchUpgrade,
      }
    },

  })
</script>

