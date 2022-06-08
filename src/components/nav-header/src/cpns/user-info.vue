<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="title">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><el-icon><User /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item
            ><el-icon><Setting /></el-icon>系统管理</el-dropdown-item
          >
          <el-dropdown-item divided
            ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
</script>

<style scoped lang="less">
.userInfo,
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    margin-left: 5px;
  }
}
</style>
