<template>
  <div class="device-type-detail">
    <el-dialog v-model="dialogVisible">
      <el-form label-width="100px">
        <el-form-item label="功能类型">
          <el-radio v-model="dialogType" :label="1">属性</el-radio>
          <!--
          <el-radio v-model="dialogType" :label="2">事件</el-radio>
          <el-radio v-model="dialogType" :label="3">服务</el-radio>
          -->
        </el-form-item>
      </el-form>
      <device-property-form
        :formData="propertyFormData"
        @submitSuccess="submitSuccess"
      ></device-property-form>
    </el-dialog>
    <div style="text-align: right">
      <el-button @click="dialogVisible = true" type="primary"> 新增 </el-button>
    </div>
    <el-table :data="properties">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="功能名称"> </el-table-column>
      <el-table-column prop="identifier" label="标识符"> </el-table-column>
      <el-table-column prop="dataType.type" label="数据类型"> </el-table-column>
      <el-table-column label="数据定义">
        <template #default="scope">
          <span
            v-if="
              scope.row.dataType.type == 'int32' ||
              scope.row.dataType.type == 'double' ||
              scope.row.dataType.type == 'float'
            "
          >
            取值范围: {{ scope.row.dataType.dataSpecsMin }} ～
            {{ scope.row.dataType.dataSpecsMax }}
          </span>
          <span v-else-if="scope.row.dataType.type == 'text'">
            数据长度: {{ scope.row.dataType.dataSpecsLength }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="dataType.dataSpecsDefault" label="默认值">
      </el-table-column>
      <el-table-column prop="accessMode" label="读写"> </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="100px">
        <template #default="scope">
          <span class="text-btn" @click="editPosition(scope.row)">编辑</span>
          <span
            class="text-btn text-btn--warning"
            @click="deletePosition(scope.row.id)"
            >删除</span
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getByDeviceTypeId } from '@api/server/deviceProperty'
  import DevicePropertyForm from './form.vue'

  export default defineComponent({
    name: 'DevicePropertyTable',
    components: {
      DevicePropertyForm,
    },
    props: {
      deviceTypeId: {
        required: true,
        type: [String, Number]
      }
    },
    setup(props) {
      const properties = ref<{ [key: string]: any }>([])
      const getProperties = async () => {
        properties.value = (await getByDeviceTypeId(props.deviceTypeId)).data
      }

      const init = () => {
        getProperties()
      }

      const refresh = () => void getProperties()

      const dialogVisible = ref<Boolean>(false)
      const dialogType = ref<number>(1)
      const propertyFormData = ref({
        name: '',
        dataType: {},
        identifier: '',
        deviceTypeId: props.deviceTypeId,
      })

      const submitSuccess = () => {
        console.log('xx')
        dialogVisible.value = false
        getProperties()
      }

      onMounted(() => void init())

      return { properties, refresh, dialogVisible, dialogType, propertyFormData, submitSuccess }
    },
  })
</script>

