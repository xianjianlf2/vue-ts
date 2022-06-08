<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="changeFold">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
  </div>
  <div class="nav-content"></div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

// 定义emit
const emit = defineEmits(['foldChange'])
const isFold = ref(false)

const changeFold = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style></style>
