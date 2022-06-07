<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-card class="box-card">
      <el-tabs class="demo-tabs" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <LoginAccount ref="accountRef"></LoginAccount>
        </el-tab-pane>
        <el-tab-pane name="oauth">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Avatar /></el-icon>
              <span>OAuth登录</span>
            </span>
          </template>
          <LoginOauth></LoginOauth>
        </el-tab-pane>
      </el-tabs>
      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">保存密码</el-checkbox>
        <el-link type="primary">忘记密码？</el-link>
      </div>
      <el-button type="primary" id="login-button" @click="handleLoginClick"
        >登录</el-button
      >
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginOauth from './login-oauth.vue'

const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const currentTab = ref<string>('account')

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log('域登录')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 320px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#login-button {
  width: 100%;
}
</style>
