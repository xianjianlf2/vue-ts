<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount></LoginAccount>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>OAuth登录</span>
          </span>
        </template>
        <LoginOauth></LoginOauth>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import LoginOauth from './login-oauth.vue'
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 320px;
  .title {
    text-align: center;
  }
}
</style>
