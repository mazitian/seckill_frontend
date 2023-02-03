<template>
  <div class="panel-phone">
    <el-form size="large" :model="user" :rules="userRules" ref="phoneRef">
      <el-form-item prop="phone">
        <el-input placeholder="手机号" v-model="user.phone" />
      </el-form-item>
      <el-form-item prop="messageCode">
        <div class="phone">
          <el-input placeholder="输入验证码" v-model="user.messageCode" />
          <el-button type="primary" @click="codeBtnClick">获取验证码</el-button>
          <count-down ref="countdownRef" v-show="isShow"></count-down>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm, FormRules } from 'element-plus'
import type { IPhone } from '@/types'
import useLoginStore from '@/stores/login/login'
import CountDown from '@/components/countdown/index.vue'
import { ElMessage } from 'element-plus'

const phoneRef = ref<InstanceType<typeof ElForm>>()

const countdownRef = ref<InstanceType<typeof CountDown>>()
const isDisabled = ref<boolean>(false)
const isShow = ref<boolean>(false)

const phonePattern = /^[0-9]{11}$/

const loginStore = useLoginStore()

const user = reactive<IPhone>({
  phone: '',
  messageCode: ''
})

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

function loginAction() {
  const phone = user.phone
  const messageCode = user.messageCode
  loginStore.loginPhoneAction({ phone, messageCode })
}

const codeBtnClick = () => {
  if (phonePattern.test(user.phone)) {
    loginStore.getCodeAction().then(() => {
      user.messageCode = loginStore.code + ''
      isDisabled.value = true
      isShow.value = true
      countdownRef.value?.countdown()
      setTimeout(() => {
        isDisabled.value = false
        isShow.value = false
      }, 10000)
    })
  } else {
    ElMessage.error('Oops, 请您输入正确的手机号码后再操作~~.')
  }
}

defineExpose({
  loginAction
})
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
