<template>
  <div class="login-account">
    <el-form label-width="60px" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const account = reactive({
  name: '',
  password: ''
})
</script>

<style></style>
