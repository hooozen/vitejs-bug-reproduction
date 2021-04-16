<template>
  <div class="devices table-view">
    <div class="view-head"></div>
    <div class="view-panel">
      <!---
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
      -->
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
        <el-table-column label="操作" fixed="right">
          <template #default="scope">
            <router-link :to="`/device-detail?id=${scope.id}`">详情</router-link>
            <a href="#" @click="deleteItem(scope.id)">删除</a>
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
  import { devices } from '@api/server/devices'
  import { staffParams } from '@api/server'

  const columns: TableColumnData[] = [{
    prop: 'serialNum',
    label: '序列号',
  }, {
    prop: 'identifyingCode',
    label: '验证码',
  }, {
    prop: 'name',
    label: '名称',
  }, {
    prop: 'store',
    label: '当前归属',
  }, {
    prop: 'type',
    label: '设备型号',
  }, {
    prop: 'online',
    label: '在线状态',
  }, {
    prop: 'status',
    label: '设备状态',
  }, {
    prop: 'active',
    label: '激活状态',
  }]


  export default defineComponent({
    name: 'Devices',
    setup() {
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)

      const listLength = ref(10)
      const currentPage = ref(1)
      const pageSize = ref(50)
      const currentPageChange = (page: number) => getList({ pageNum: page })
      const pageSizeChange = (size: number) => getList({ pageSize: size })

      const getList = async (params?: staffParams) => {
        params = {
          pageSize: pageSize.value,
          ...params,
        }
        try {
          const resData = (await devices(params, '访问成功')).data
          list.value = resData.list
          listLength.value = resData.total
        } catch { }
        loadingList.value = false;
      }
      onMounted(() => {
        getList()
      })
      return { list, columns, loadingList, currentPageChange, pageSize, currentPage, listLength, pageSizeChange }
    },
  })
</script>

