<template>
  <div class="detail-view goods-detail">
    <nav-bar class="detail-nav" :title="title">
      <el-button v-if="editable" type="primary" @click="submitForm">
        保存
      </el-button>
      <el-button v-else @click="editable = true">编辑</el-button>
    </nav-bar>

    <div class="detail-main">
      <el-form
        :disabled="!editable"
        ref="formEl"
        :rules="formRules"
        :model="formData"
        label-width="120px"
      >
        <div class="main-item">
          <div class="main-item-head">
            <div class="main-item-title">基本信息</div>
          </div>
          <div class="main-item-body" style="display: block">
            <el-form-item prop="goodsPhoto" label="商品图片:">
              <el-upload
                action="actionURL"
                list-type="picture-card"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload"
                :on-remove="removePhoto"
                :file-list="goodsPhotos"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item prop="title" label="商品标题:">
              <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item prop="name" label="设备名称:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="storeId" label="商品分类:"> </el-form-item>
            <el-form-item prop="online" label="包装:"> </el-form-item>
          </div>
        </div>

        <div class="main-item">
          <div class="main-item-head">
            <div class="main-item-title">价格/型号</div>
          </div>
          <div class="main-item-body" style="display: block">
            <el-form-item label="商品价格:" prop="price">
              <el-input-number></el-input-number>
            </el-form-item>
            <el-form-item label="商品库存:" prop="stock">
              <el-input-number></el-input-number>
            </el-form-item>
            <el-form-item label="商品ID:">
              <el-input></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref, inject } from "vue";
  import { useRoute } from "vue-router";

  import NavBar from "../components/nav-bar/index.vue";
  import options from './options'

  import { ElMessage } from 'element-plus'

  import { add, GoodsAddParams, GoodsUpdateParams, update } from '@/api/server/goods'

  import formRules from './addFormRules'

  export default defineComponent({
    components: { NavBar },
    props: {
      type: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const formData = ref<any>({})
      const formEl = ref(null)

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const title = computed(() => props.type === 'edit' ? '商品详情' : '新增商品')

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          const _formData = formData.value
          if (props.type === 'add')
            await add(_formData as GoodsAddParams, '新增成功')
          else await update(_formData as GoodsUpdateParams, '保存成功')
        })
      }

      const goodsInfo = ref({})

      const actionURL = inject('baseURL') + '/beer/admin/common/uploadFile'

      const goodsPhotos = ref<any[]>([])
      const beforeUpload = (file: File) => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          ElMessage.error('只支持 .jpg .png 格式图片')
          return false
        }
      }
      const uploadSuccess = (res: any, file: any) => {
        ElMessage.success('文件上传成功')
      }
      const uploadError = (e: any) => {
        ElMessage.error(`文件上传失败: ${e}`)
      }
      const removePhoto = () => {

      }

      /*
        const getGoodsInfo = async () => {
          const goodsInfo = (await getById(+id.value!)).data
        }
      */

      const init = () => {
        // if (id.value) getGoodsInfo()
      }

      onMounted(() => void init())

      return {
        actionURL,
        title, editable,
        location, formData, formRules, submitForm, formEl,
        beforeUpload, uploadSuccess, uploadError, removePhoto,
        goodsInfo, goodsPhotos,
        options,
      };
    },
  });
</script>
<style lang="scss">
  .goods-detail {
    .el-input {
      max-width: 400px;
    }
  }
</style>
