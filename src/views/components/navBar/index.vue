<template>
  <div class="nav-bar">
    <div class="nav-back-btn">
      <i class="el-icon-arrow-left"></i>
    </div>
    <div class="nav-title">{{ title }}</div>
    <div class="nav-main">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue'

  export default defineComponent({
    name: 'NavBar',
    props: {
      title: {
        type: String,
        required: true,
      }
    },
    setup(props) {
      const title = ref(props.title);
      return (title)
    },
  })
</script>
<style lang="postcss">
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    & .nav-back-btn {
      cursor: pointer;
      flex: 0 0 40px;
      & >i {
        &:hover {
          color: #409EFF;
        }
        font-size: 24px;
      }
    }
  }
  .nav-title {
    font-size: 16px;
  }
  .nav-main {
  }
</style>