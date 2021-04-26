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
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="设备验证码" prop="code">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="设备型号" prop="type">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="设备名称" prop="name">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="归属" prop="store">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary" @click="submitAddForm">确定</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </template>
    </el-dialog>
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <tl-search
          v-model:keyword="keyword"
          v-model:keywordType="keywordType"
          :keywordTypes="options.keywordTypes"
        ></tl-search>
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
      </div>
      <div class="panel__opt">
        <el-button type="primary" @click="dialogVisible = true">新增</el-button>
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
            <router-link
              class="cell-opt"
              :to="`device-detail?id=${scope.row.id}`"
              >详情</router-link
            >
            <span class="cell-opt" @click="deleteItem(scope.row.id)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="view-foot">
      <el-pagination
        @size-change="getList"
        @current-change="getList"
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
  import { getByKeyword, add } from '@api/server/device'

  import TlSelect from '../components/selector/index.vue'
  import TlSearch from '../components/search/index.vue'

  import options from './options'
  import columns from './columns'

  import { addFormRules } from './formRules'

  export default defineComponent({
    name: 'Devices',
    components: { TlSelect, TlSearch },

    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const totalNum = ref(10)
      const currentPage = ref(1)
      const pageSize = ref(10)
      const getList = async (params?: any) => {
        params = {
          size: pageSize.value,
          current: currentPage.value || 1,
          online: isOnline.value,
          status: status.value,
          keyword: keyword.value,
          keywordType: keywordType.value,
          active: isActive.value
        }
        try {
          const resData = (await getByKeyword(params, '访问成功')).data
          list.value = resData.records.map((d: any) => ({
            ...d,
            onlineName: (options.isOnline.find(o => o.value === d.online))?.label,
            statusName: (options.status.find(o => o.value === d.status))?.label,
            activeName: (options.isActive.find(o => o.value === d.active))?.label,
          }))
          totalNum.value = +resData.total
        } catch { }
        loadingList.value = false;
      }

      // filter form
      const keyword = ref('')
      const keywordType = ref(1)
      const type = ref(0)
      const isOnline = ref('')
      const status = ref('')
      const isActive = ref('')

      // addForm
      const formEl = ref(null)
      const dialogVisible = ref(false)
      const submitAddForm = () => {

      }

      onMounted(() => {
        getList()
      })
      return {
        options, columns,
        list, loadingList,
        keyword, keywordType, type, status, isActive, isOnline,
        pageSize, currentPage, totalNum,
        formEl, addFormRules, dialogVisible, submitAddForm
      }
    },

  })
</script>

