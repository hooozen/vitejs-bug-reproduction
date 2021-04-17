<template>
  <div class="staff table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter">
        <el-select v-model="orderBy">
          <el-option
            v-for="option in orderByOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
        <el-input v-model="searchKey">
          <template #append>
            <i class="el-icon-search"></i>
          </template>
        </el-input>
      </div>
      <div class="panel__opt">
        <el-button type="primary">新增</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    <div class="view-body">
      <el-table v-loading="loadingList" :data="list" border height="100%">
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
        >
        </el-table-column>
        <el-table-column align="center" label="操作" fixed="right">
          <template #default="scope">
            <router-link class="cell-opt" :to="`staff-detail?id=${scope.id}`">详情</router-link>
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
  import { staff, staffParams } from '@api/index'

  const orderByOptions: OptionData[] = [{
    value: 1,
    label: '用户名'
  }, {
    value: 2,
    label: '单位名称'
  }, {
    value: 3,
    label: '联系人'
  }]

  const columns: TableColumnData[] = [{
    prop: 'name',
    label: '姓名'
  }, {
    prop: 'gender',
    label: '性别'
  }, {
    prop: 'nation',
    label: '民族'
  }, {
    prop: 'tel',
    label: '手机号'
  }, {
    prop: 'id',
    label: '身份证号'
  }, {
    prop: 'registerAddr',
    label: '户籍地址'
  }, {
    prop: 'address',
    label: '现住地址'
  }, {
    prop: 'dgree',
    label: '学历'
  }, {
    prop: 'belong',
    label: '归属'
  }, {
    prop: 'date',
    label: '入职日期'
  }, {
    prop: 'department',
    label: '部门'
  }, {
    prop: 'position',
    label: '职位'
  }]
  export default defineComponent({
    name: 'staff',
    setup() {
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)

      const listLength = ref(10)
      const currentPage = ref(1)
      const pageSize = ref(50)
      const orderBy = ref(1)
      const searchKey = ref('')

      const currentPageChange = (page: number) => getList({ pageNum: page })
      const pageSizeChange = (size: number) => getList({ pageSize: size })
      const getList = async (params?: staffParams) => {
        params = {
          pageSize: pageSize.value,
          ...params,
        }
        try {
          const resData = (await staff(params, '访问成功')).data
          list.value = resData.list
          console.log(resData.list, list.value)
          listLength.value = resData.total
        } catch { }
        loadingList.value = false;
      }

      onMounted(() => {
        getList()
      })
      return { getList, list, columns, loadingList, currentPage, pageSize, currentPageChange, pageSizeChange, listLength, orderByOptions, orderBy, searchKey }
    },
  })
</script>