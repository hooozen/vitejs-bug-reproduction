<template>
  <div class="goods table-view">
    <div class="view-head">
      <el-form inline>
        <div class="view-panel-line">
          <el-form-item label="商品名称">
            <el-input v-model="queryForm.title"></el-input>
          </el-form-item>
          <el-form-item label="商品编码">
            <el-input v-model="queryForm.code"></el-input>
          </el-form-item>
          <el-form-item label="商品分类">
            <el-input v-model="queryForm.categoryId"></el-input>
          </el-form-item>
        </div>
        <div class="view-panel-line">
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="queryForm._dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="销售区间">
            <el-input-number
              v-model="queryForm.salesStart"
              controls-position="right"
              :min="0"
            ></el-input-number>
            -
            <el-input-number
              v-model="queryForm.salesEnd"
              controls-position="right"
              :min="0"
            ></el-input-number>
          </el-form-item>
        </div>
        <div class="view-panel-line">
          <el-form-item label="价格区间">
            <el-input-number
              v-model="queryForm.priceStart"
              controls-position="right"
              :min="0"
            ></el-input-number>
            -
            <el-input-number
              v-model="queryForm.priceEnd"
              controls-position="right"
              :min="0"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="库存区间">
            <el-input-number
              v-model="queryForm.stockStart"
              controls-position="right"
              :min="0"
            ></el-input-number>
            -
            <el-input-number
              v-model="queryForm.stockEnd"
              controls-position="right"
              :min="0"
            ></el-input-number>
          </el-form-item>
        </div>
      </el-form>
      <div class="view-panel-line">
        <el-button @click="getList()">筛选</el-button>
        <el-button>清空</el-button>
        <el-button>导出报表</el-button>
      </div>
    </div>

    <div class="panel__btns">
      <el-button type="primary" @click="addItem">新增商品</el-button>
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
        <el-table-column align="center" label="商品描述">
          <template #default="scope">{{ scope.row.title }} </template>
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
        <el-table-column
          align="center"
          label="操作"
          fixed="right"
          width="150px"
        >
          <template #default="scope">
            <span class="text-btn" @click="deleteItem(scope.row.id)">编辑</span>
            <span class="text-btn" @click="deleteItem(scope.row.id)">分享</span>
            <span class="text-btn" @click="deleteItem(scope.row.id)">下架</span>
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
  import { ElMessage } from 'element-plus'
  import { emptyLocalQueryForm, generateQueryForm } from './formTemplate'
  import columns from './columns'
  import options from './options'
  import { GoodsQueryParams, getByKeyword, remove } from '@api/server/goods'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    setup() {
      const init = () => {
        getList()
      }
      onMounted(() => void init())

      const router = useRouter()

      // table data and paginating
      const queryForm = ref(emptyLocalQueryForm)
      const list = ref<any[]>([])
      const currentPage = ref<number>(1)
      const totalNum = ref<number>()
      const pageSize = ref<number>(10)

      const currentPageChange = (current: number) => { getList({ current }) }
      const sizeChange = (size: number) => { getList(size) }


      const getList = async (_params?: any) => {
        let params: GoodsQueryParams = {
          ...queryForm.value,
          size: pageSize.value,
          current: currentPage.value,
          ..._params,
        }
        params = generateQueryForm(params)
        const res = (await getByKeyword(params)).data

        list.value = res.records.map((item: any) => ({
          ...item,
          statusName: options.status.find(o => o.value == item.status)?.label
        }))
        totalNum.value = +res.total
        pageSize.value = +res.size
        currentPage.value = +res.current
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

      // go to add goods
      const addItem = () => void router.push('goods-add')

      return {
        list, columns, queryForm, getList,
        currentPageChange, sizeChange, pageSize, currentPage, totalNum,
        onSelectionChange, deleteItem, batchDelete,
        addItem,
      }
    },
  })
</script>

