<template>
  <div class="nav-header">
    <div class="fold-menu">
      <el-icon class="fold-icon" @click="changeFold">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <mx-breadcrumb :breadcrumbs="breadcrumbs"></mx-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import UserInfo from './cpns/user-info.vue'
import MxBreadcrumb from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

// 定义emit
const emit = defineEmits(['foldChange'])
const isFold = ref(false)

const changeFold = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const store = useStore()

const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = useRoute().path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

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
