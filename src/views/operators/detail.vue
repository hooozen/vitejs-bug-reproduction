<template>
  <div class="detail-view operator-detail">
    <nav-bar class="detail-nav" :title="title">
      <el-button v-if="editable" type="primary" @click="submitForm">
        保存
      </el-button>
      <el-button v-else @click="editable = true">编辑</el-button>
    </nav-bar>
    <div class="detail-main">
      <div class="main-item">
        <div class="main-item-title">基本信息</div>
        <el-form
          :disabled="!editable"
          ref="formEl"
          :rules="formRules"
          :model="formData"
          class="main-item-body"
          label-width="100px"
        >
          <div class="item-body-column" style="flex-basis: 400px">
            <el-form-item prop="name" label="名称:">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="orgId" label="组织代码:">
              <el-input v-model="formData.orgId"></el-input>
            </el-form-item>
            <el-form-item prop="contacts" label="联系人:">
              <el-input v-model="formData.contacts"></el-input>
            </el-form-item>
            <el-form-item prop="tel" label="电话:">
              <el-input v-model="formData.tel"></el-input>
            </el-form-item>
            <el-form-item prop="accountBank" label="开户行:">
              <el-input v-model="formData.accountBank"></el-input>
            </el-form-item>
            <el-form-item prop="account" label="账号:">
              <el-input v-model="formData.account"></el-input>
            </el-form-item>
            <el-form-item prop="_district" label="地址:">
              <tl-address
                v-model:district="formData._district"
                v-model:address="formData.address"
                :deepth="4"
                @change="updateFormDistrictName"
                :full="true"
              ></tl-address>
            </el-form-item>
            <el-form-item prop="_businessScope" label="经营范围:">
              <tl-address
                v-model:district="formData._businessScope"
                @change="updateFormBusinessScopeName"
                :deepth="4"
              ></tl-address>
            </el-form-item>
          </div>
          <div class="item-body-column" style="flex-basis: 300px">
            <el-form-item v-if="type === 'edit'" label="单位编号:">
              {{ formData.code }}
            </el-form-item>
            <el-form-item v-if="type === 'edit'" label="添加时间:">
              {{ formData.createTime }}
            </el-form-item>
            <el-form-item label="备注:">
              <el-input
                v-model="formData.description"
                type="textarea"
              ></el-input>
            </el-form-item>
            <el-form-item label="营业执照:">2021-04-12</el-form-item>
          </div>
          <div class="item-body-column detail-map">
            <el-form-item label="经纬度" prop="_position">
              <t-map
                :center="formData._position"
                v-model:pointer="formData._position"
                class="el-map-outer"
              >
              </t-map>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="main-item">
        <div class="main-item-body">
          <el-tabs v-model="activeTab" type="card">
            <el-tab-pane label="设备数据" name="data">
              <el-table></el-table>
            </el-tab-pane>
            <el-tab-pane label="已绑定门店" name="store">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="预警记录" name="warning">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="故障记录" name="breakdow">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="设备参数" name="params">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="运行记录" name="working">
              <el-table border></el-table>
            </el-tab-pane>
            <el-tab-pane label="操作记录" name="operator">
              <el-table border></el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from "vue";
  import NavBar from "../components/navBar/index.vue";
  import TMap from "../components/TMap/index.vue";
  import TlAddress from "../components/address/index.vue";
  import { add, AddParams, UpdateParams, update, getById } from '@/api/server/operator'
  import { useRoute } from "vue-router";

  import formRules from './formRules'
  import { template as formDataTemplate, generateFormData } from './formDataTemplate'

  export default defineComponent({
    components: {
      NavBar,
      TMap,
      TlAddress
    },
    props: {
      type: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const formData = ref<AddParams>({} as any)
      const formEl = ref(null)

      formData.value = formDataTemplate

      const route = useRoute()
      const id = computed(() => route.query.id)

      const editable = ref<boolean>(true)
      // const editable = ref<boolean>(false)
      // if (props.type === 'add') editable.value = true

      const title = computed(() => props.type === 'edit' ? '运营商详情' : '新增运营商')

      const activeTab = ref("data");

      const submitForm = () => {
        (formEl.value as any).validate(async (valid: any) => {
          if (!valid) return
          let _formData: { [key: string]: any } = {}
          for (const [k, v] of Object.entries(formData.value)) {
            if (k.substring(0, 1) === '_') continue
            _formData[k] = v
          }
          if (props.type === 'add')
            await add(_formData as AddParams, '新增成功')
          else await update(_formData as UpdateParams, '保存成功')
        })
      }

      const updateFormDistrictName = (value: string[], name: string[]) => {
        console.log(name.join('/'))
      }
      const updateFormBusinessScopeName = (value: string[], name: string[]) => {
        console.log(name.join('/'))
      }


      onMounted(async () => {
        if (id.value) {
          const originalForm = (await getById(id.value as string)).data
          formData.value = generateFormData(originalForm)
        }
      })

      return {
        title, editable,
        updateFormDistrictName,
        updateFormBusinessScopeName,
        location, activeTab, formData, formRules, submitForm, formEl
      };
    },
  });
</script>
<style lang="postcss"></style>
