<template>
  <div class="staff table-view">
    <div class="view-head"></div>
    <div class="view-panel"></div>
    <div class="view-body">
      <el-table v-loading="loadigList" :data="list" border height="100%">
        <el-table-column
          v-for="col in columns"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
        >
        </el-table-column>
        <el-table-column>
          <template #default="scope">
            <router-link :to="`staff-detail?id=${scope.id}`">详情</router-link>
            <a @click="deleteItem(scope.id)">删除</a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { staff } from '@api/index'

  const columns: TableColumnData[] = [{
    prop: 'prop1',
    label: '姓名'
  }, {
    prop: 'prop2',
    label: '性别'
  }, {
    prop: 'prop3',
    label: '民族'
  }, {
    prop: 'prop4',
    label: '手机号'
  }, {
    prop: 'prop5',
    label: '身份证号'
  }, {
    prop: 'prop6',
    label: '户籍地址'
  }, {
    prop: 'prop7',
    label: '现住地址'
  }, {
    prop: 'prop8',
    label: '学历'
  }, {
    prop: 'prop9',
    label: '归属'
  }, {
    prop: 'prop10',
    label: '入职日期'
  }, {
    prop: 'prop11',
    label: '部门'
  }, {
    prop: 'prop11',
    label: '职位'
  }]
  export default defineComponent({
    name: 'staff',
    setup() {
      const list = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const getList = async () => {
        try {
          list.value = (await staff({ pageNum: 0 }, '访问成功')).data.list
        } catch { }
        loadingList.value = false;
      }
      onMounted(() => {
        getList()
      })
      return { list, columns, loadingList }
    },
  })
</script>