<template>
  <div>
    <el-time-picker
      is-range
      v-model="formData._timeRange"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <el-button @click="submitForm">提交</el-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import moment from 'moment'


  export default defineComponent({
    name: 'App',
    components: {},
    setup() {
      const formData = ref<any>({})

      const getFormData = () => {
        setTimeout(() => {
          /* 该写法不会产生bug
          formData.value = {
            openingTimeStart: '1949-10-01 09:00:00',
            openingTimeEnd: '1949-10-01 18:00:00',

            set _timeRange(value: | string[] | Date[]) {
              this.openingTimeStart = moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
              this.openingTimeEnd = moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
            },

            get _timeRange() {
              this.openingTimeEnd = this.openingTimeEnd || "1949-10-01 17:00:00"
              this.openingTimeStart = this.openingTimeStart || "1949-10-01 09:00:00"
              return [new Date(this.openingTimeStart), new Date(this.openingTimeEnd)]
            },
          }
          */

          // 下面写法产生 Bug
          const res = {
            openingTimeStart: '1949-10-01 09:00:00',
            openingTimeEnd: '1949-10-01 18:00:00',
          }

          formData.value = {
            ...res,

            set _timeRange(value: | string[] | Date[]) {
              this.openingTimeStart = moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
              this.openingTimeEnd = moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
            },

            get _timeRange() {
              this.openingTimeEnd = this.openingTimeEnd || "1949-10-01 17:00:00"
              this.openingTimeStart = this.openingTimeStart || "1949-10-01 09:00:00"
              return [new Date(this.openingTimeStart), new Date(this.openingTimeEnd)]
            },
          }
        }, 100)
      }

      const init = () => {
        getFormData()
      }

      const submitForm = () => {
        console.log(formData.value)
      }

      onMounted(() => void init())

      return { formData, submitForm }
    }
  })
</script>

<style lang="scss">
  html,
  body {
    height: 100%;
  }
  html,
  body,
  div {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #fff;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>