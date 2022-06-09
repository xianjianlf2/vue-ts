<template>
  <div class="page-search">
    <mx-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handleButtons">
          <el-button
            ><el-icon><RefreshLeft /></el-icon>重置</el-button
          >
          <el-button type="primary"
            ><el-icon><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </mx-form>
  </div>
</template>

<script setup lang="ts">
import MxForm from '@/base-ui/form'
import { ref, defineProps } from 'vue'

defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const formData = ref({
  id: '',
  userName: '',
  password: '',
  tool: '',
  createTime: ''
})
</script>

<style scoped lang="less">
.handleButtons {
  text-align: right;
  padding: 0 50px;
}
</style>
