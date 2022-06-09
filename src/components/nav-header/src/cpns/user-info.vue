<template>
  <div class="userInfo">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="title">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="userInfo"
            ><el-icon><User /></el-icon>用户信息</el-dropdown-item
          >
          <el-dropdown-item command="system"
            ><el-icon><Setting /></el-icon>系统管理</el-dropdown-item
          >
          <el-dropdown-item divided command="exit"
            ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import cache from '@/utils/cache'
import { ElMessage } from 'element-plus'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
const router = useRouter()

const handleCommand = (command: string) => {
  switch (command) {
    case 'userInfo':
      router.push('/main')
      break
    case 'system':
      router.push('/main')
      break
    case 'exit':
      router.push('/login')
      cache.deleteCache('token')
      ElMessage({ message: '退出登录', type: 'success', center: true })
      break
  }
}
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
