<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" ref="formRef" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, ref, defineExpose } from 'vue'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

const store = useStore()

const account = reactive({
  name: localCache.getCache('user_name') || '',
  password: localCache.getCache('user_password') || ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      // 保存用户名和密码
      localCache.setCache('user_name', account.name)
      if (isKeepPassword) {
        localCache.setCache('user_password', account.password)
      } else {
        localCache.deleteCache('user_password')
      }
      // 登录
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style></style>
