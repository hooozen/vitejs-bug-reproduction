<template>
  <div class="device-type tabs-view">
    <el-dialog width="600px" v-model="dialogVisible" title="新增设备">
      <el-form
        label-width="180px"
        ref="formEl"
        :model="formData"
        :value="formData"
        :rules="formRules"
      >
        <el-form-item label="上级设备" prop="parentId">
          <el-cascader
            :options="[options]"
            :props="{ checkStrictly: true, emitPath: false }"
            v-model="formData.parentId"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="型号对应序列号标识" prop="sequencePrefix">
          <el-input v-model="formData.sequencePrefix"></el-input>
        </el-form-item>
        <el-form-item label="设备照片" prop="devicePhoto">
          <el-upload
            class="photo-uploader"
            action="/beer/admin/common/uploadFile"
            :show-file-list="false"
            :on-success="onUploadSuccess"
            :before-upload="beforeUpload"
          >
            <img
              v-if="devicePhotoUrl"
              :src="devicePhotoUrl"
              class="device-photo"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm"> 确 定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-tree
      :props="{ key: 'id', label: 'name', children: 'children' }"
      :data="[deviceTypeTree]"
      :default-expanded-keys="[0]"
      v-loading="isLoading"
      node-key="id"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a class="text-btn" @click="showDialog(data, 'add')">添加</a>
            <router-link
              v-if="+data.id"
              class="text-btn"
              :to="`device-type-detail?id=${data.id}`"
            >
              编辑
            </router-link>
            <a
              v-if="+data.id"
              class="text-btn--warning"
              @click.stop="removeDeviceType(data)"
            >
              删除
            </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, onMounted, computed } from 'vue'

  import { add, update, remove, getTreeByParentId, AddParams } from "@api/server/deviceType"
  import { DeviceTypeNode } from './tree'
  import { ElMessage } from 'element-plus'

  const formRules = {
    name: [{
      required: true, message: '请填写设备名称'
    }],
    sequencePrefix: [{
      required: true, message: '请填写序列号标识'
    }],
    parentId: [{
      required: true, message: '请选择上级设备'
    }],
    devicePhoto: [{
      required: true, message: '请上传设备照片'
    }]
  }

  export default defineComponent({
    name: 'tab-insduties',
    setup() {

      const isLoading = ref(true)

      const deviceTypes = ref<DeviceTypeNode[]>([])
      const deviceTypeTree = computed(() => {
        return {
          code: 'root',
          name: '全部设备',
          id: '0',
          children: deviceTypes.value || undefined,
          parentId: -1
        }
      })

      const formEl = ref(null)
      const dialogVisible = ref(false)
      const formData = reactive<AddParams>({
        devicePhoto: '',
        sequencePrefix: '',
        name: '',
        parentId: '0',
      })

      const options = computed(() => {
        const setBasicFiled = (_node: any) => {
          return {
            label: _node.name,
            value: _node.id,
          }
        }
        const configOptions = (node: DeviceTypeNode): any => {
          if (!node.children || !node.children.length) return setBasicFiled(node)
          return {
            ...setBasicFiled(node),
            children: node.children.map(child => configOptions(child))
          }
        }
        const res = configOptions(deviceTypeTree.value as any)
        return res
      })

      const getDeviceTypes = async () => {
        deviceTypes.value = (await getTreeByParentId(0)).data
        isLoading.value = false
      }

      const showDialog = (data: DeviceTypeNode, type: string) => {
        formData.parentId = data.id!
        formData.name = ''
        dialogVisible.value = true
      }

      const submitForm = async () => {
        (formEl.value as any).validate(async (valid: Boolean) => {
          if (!valid) return false
          await add(formData, '添加成功')
          getDeviceTypes()
          dialogVisible.value = false
        })
      }

      const removeDeviceType = async (data: DeviceTypeNode) => {
        const res = await remove(data.id!, {
          successMsg: '删除成功',
          confirmConfig: {
            text: `该操作将删除该组织，${data.children?.length ? `及其下 ${data.children.length} 个子组织，` : ''} 是否继续？`
          }
        })
        if (res) getDeviceTypes()
      }

      const devicePhotoUrl = ref<string>()
      const onUploadSuccess = (res: any, file: any) => {
        devicePhotoUrl.value = res.data
        formData.devicePhoto = res.data
      }
      const beforeUpload = (file: File) => {
        const typeValide = file.type == 'image/jpeg' || file.type == 'image/png';
        if (!typeValide) {
          ElMessage.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
      }

      onMounted(async () => {
        await getDeviceTypes()
      })

      return {
        deviceTypeTree, isLoading, options,
        dialogVisible, showDialog,
        formEl, formRules, formData,
        submitForm, removeDeviceType,
        devicePhotoUrl, onUploadSuccess, beforeUpload,
      }
    },
  })
</script>



<style lang="postcss">
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .device-type {
    & .device-photo {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>
