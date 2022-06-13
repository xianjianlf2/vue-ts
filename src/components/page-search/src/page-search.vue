<template>
  <div class="page-search">
    <mx-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handleButtons">
          <el-button @click="handleResetClick"
            ><el-icon><RefreshLeft /></el-icon>重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick"
            ><el-icon><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </mx-form>
  </div>
</template>

<script setup lang="ts">
import MxForm from '@/base-ui/form'
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])

// 优化  formData属性动态配置
const formItems = props.searchFormConfig.formItems ?? []
const formOriginData: any = {}

for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// 重置
const handleResetClick = () => {
  // for (const key in formOriginData) {
  //   formData.value[`${key}`] = formOriginData[key]
  // }
  formData.value = formOriginData
  emit('resetBtnClick')
}

// 搜索
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.handleButtons {
  text-align: right;
  padding: 0 50px;
}
</style>
