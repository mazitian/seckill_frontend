<template>
  <div class="panel-phone">
    <el-form size="large" :rules="userRules">
      <el-form-item prop="phone">
        <el-input placeholder="手机号" />
      </el-form-item>
      <el-form-item>
        <div class="phone">
          <el-input placeholder="输入验证码" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'

const userRules: FormRules = {
  phone: [
    { required: true, message: '必须输入手机号~', trigger: 'blur' },
    {
      pattern: /^[0-9]{11}$/,
      message: '必须是11位数字的有效号码~',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.panel-phone {
  color: white;
  padding-top: 10px;
  margin-bottom: -10px;
  .phone {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
