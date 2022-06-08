<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <NavMenu :collapse="isCollapse"></NavMenu>
      </el-aside>
      <el-container class="page">
        <el-header>
          <NavHeader @fold-change="handleFoldChange"></NavHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
import { ref } from 'vue'

const isCollapse = ref(false)

const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    background: #0c2135;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    height: 50px;
    line-height: 50px;
  }
  .el-main {
    background: #f3f3f3;
  }
}
</style>
