<template>
  <div class="nav-header">
    <div class="fold-menu">
      <el-icon class="fold-icon" @click="changeFold">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <el-breadcrumb :separator-icon="ArrowRight">
        <template v-for="route in currentRoutes" :key="route">
          <el-breadcrumb-item :to="{ path: `/${route}` }">
            {{ route }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import UserInfo from './cpns/user-info.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

// 定义emit
const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const routes = useRoute()

const currentRoutes = computed(() => routes.fullPath.split('/').slice(1))
const changeFold = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
