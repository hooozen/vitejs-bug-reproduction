<template>
  <div class="tl-image-uploader">
    <span
      v-if="modelValue"
      class="text-btn tl-uploader__btn"
      @click="isShowViewer = true"
    >
      查看
    </span>
    <el-image-viewer
      class="tl-uploader__inner"
      v-if="isShowViewer"
      :url-list="[modelValue]"
      @close="isShowViewer = false"
    ></el-image-viewer>
    <el-upload
      :action="actionUrl"
      :on-success="onUploadSuccess"
      :on-error="onUploadError"
      :before-upload="beforeUpload"
      :showFileList="false"
    >
      <el-button type="primary" v-loading="isUploading">
        <i class="el-icon-upload el-icon--right"></i>
        上传文件
      </el-button>
      <template #tip>
        <div class="el-upload__tip">{{ tip }}</div>
      </template>
    </el-upload>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { ElMessage } from 'element-plus'

  export default defineComponent({
    name: 'TlImageUploader',
    props: {
      modelValue: { type: String, required: false },
      actionUrl: { type: String, required: true },
      tip: { type: String, required: false, default: '支持扩展名：.jpg .png' }
    },
    emits: ['update:modelValue'],

    setup(props, context) {
      const isShowViewer = ref<boolean>(false)
      const isUploading = ref<boolean>(false)

      const beforeUpload = (file: File) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          ElMessage.error('只支持 .jpg .png 格式图片')
          return false
        }
        isUploading.value = true
      }

      const onUploadSuccess = (res: any, file: any) => {
        context.emit('update:modelValue', res.data)
        ElMessage.success('文件上传成功')
        isUploading.value = false
      }

      const onUploadError = (e: any) => {
        ElMessage.error(`文件上传失败: ${e}`)
        isUploading.value = false
      }

      return { isShowViewer, isUploading, onUploadSuccess, onUploadError, beforeUpload }

    },
  })
</script>
<style lang="postcss">
  .tl-image-uploader {
    display: flex;
    & .tl-uploader__btn {
      margin-right: 10px;
    }
    & .el-upload__tip {
      line-height: 20px;
      margin: 0;
    }
  }
</style>

