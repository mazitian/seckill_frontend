<template>
  <ml-form
    :model="model"
    :rules="rules"
    layout="vertical"
    @submit="onLogin"
    ref="loginForm"
  >
    <ml-form-item label="用户名：" field="user">
      <ml-input v-model="model.user" />
    </ml-form-item>
    <ml-form-item label="密码：" field="pwd">
      <ml-input type="password" v-model="model.pwd" />
    </ml-form-item>
    <ml-form-item>
      <ml-button>登录</ml-button>
    </ml-form-item>
  </ml-form>
</template>
<script setup>
import { ref } from 'vue'
const model = ref({
  user: '',
  pwd: ''
})
const rules = ref({
  user: [{ required: true, message: '用户名为必填项' }],
  pwd: [{ required: true, message: '密码为必填项' }]
})

const loginForm = ref(null)
const onLogin = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      alert('登录成功')
    } else {
      alert('校验失败，请重试！')
    }
  })
}
</script>
