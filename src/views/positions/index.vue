<template>
  <div class="positions table-view">
    <edit-dialog
      v-model:visible="dialogVisible"
      v-model:data="dialogData"
      @updateList="getList"
    ></edit-dialog>
    <div class="view-head"></div>
    <div class="view-panel">
      <div class="panel__filter"></div>
      <div class="panel__opt">
        <el-button type="primary" @click="addPosition">新增</el-button>
        <el-button type="danger" @click="deletePositions">删除</el-button>
      </div>
    </div>
    <div class="view-body">
      <el-table
        @selection-change="handleSelection"
        v-loading="loadingList"
        :data="list"
        border
        height="100%"
      >
        <el-table-column type="selection" width="40px" align="center">
        </el-table-column>
        <el-table-column type="index" width="40px" align="center">
        </el-table-column>
        <el-table-column label="职位名称" prop="name"> </el-table-column>
        <el-table-column label="权限">
          <template #default="scope">
            {{ privilegesStringify(scope.row.functions) }}
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="description"> </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          align="center"
          width="100px"
        >
          <template #default="scope">
            <span class="cell-opt" @click="editPosition(scope.row)">编辑</span>
            <span
              class="cell-opt cell-opt--warning"
              @click="deletePosition(scope.row.id)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { positions, remove } from '@api/server/position'

  import EditDialog from './edit-dialog.vue'

  const privilegesStringify = (priviliges: any[]): string => {
    return priviliges.reduce((p, c) => `${p};${c.name}`.substring(1), '')
  }

  export default defineComponent({
    name: 'Positions',
    components: {
      EditDialog
    },
    setup() {
      // table list and pagination
      const list = ref<{ [key: string]: any }[]>([])
      const selectedList = ref<{ [key: string]: any }[]>([])
      const loadingList = ref(true)
      const getList = async () => {
        const resData = (await positions()).data
        list.value = resData
        loadingList.value = false
      }

      const handleSelection = (value: any) => {
        selectedList.value = value
      }

      // dialog
      const dialogVisible = ref(false)
      const dialogData = ref({
        title: '',
        formData: {
          description: '',
          functionIds: [],
          name: ''
        }
      })

      const addPosition = () => {
        dialogData.value = {
          title: '新增职位',
          formData: {
            description: '',
            functionIds: [],
            name: ''
          }
        }
        dialogVisible.value = true
      }

      const editPosition = (data: any) => {
        console.log(data)
        const functionIds = data.functions.map((func: any) => func.id)
        dialogData.value = {
          title: '编辑职位',
          formData: { ...data, functionIds },
        }
        console.log(dialogData.value)
        dialogVisible.value = true
      }

      const deletePosition = async (id: string) => {
        await remove({ roleId: id })
        getList()
      }

      const deletePositions = async () => {
        const ids = selectedList.value.map(item => item.id)
        const len = ids.length
        console.log(ids)
        await remove(ids, {
          confirmConfig: {
            text: `确认批量删除 ${len} 个职位？`
          }
        })
        getList()
      }


      onMounted(() => {
        getList()
      })
      return {
        list, loadingList, privilegesStringify, handleSelection, getList,
        dialogVisible, addPosition, editPosition,
        dialogData, deletePositions, deletePosition
      }
    },
  })
</script>

