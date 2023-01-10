<template>
  <div class="register">
    <el-form class="item" :model="user" :rules="userRules" ref="userRef">
      <el-form-item label="头像">
        <el-input v-model="user.headImg" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="user.nickName" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" show-password />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="user.sex" placeholder="请选择您的性别">
          <el-option label="男" value="0" />
          <el-option label="女" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker
            v-model="user.birthday"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="user.phone" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="phone">
          <el-input v-model="user.messageCode" />
          <el-button type="primary" @click="codeBtnClick" :disabled="isDisabled"
            >获取验证码</el-button
          >
          <count-down ref="countdownRef" v-show="isShow"></count-down>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registerBtnClick">注册</el-button>
        <el-button @click="backBtnClick">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { IUser } from '@/types'
import type { ElForm, FormRules, ElInput } from 'element-plus'
import useRegisterStore from '@/stores/register/register'
import CountDown from '@/components/countdown/index.vue'
import router from '@/router'

const user = reactive<IUser>({
  birthday: '',
  headImg: '',
  messageCode: '',
  nickName: '',
  password: '',
  phone: '',
  sex: 0
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

const userRef = ref<InstanceType<typeof ElForm>>()
const countdownRef = ref<InstanceType<typeof CountDown>>()
const isDisabled = ref<boolean>(false)
const isShow = ref<boolean>(false)
const registerStore = useRegisterStore()

const registerBtnClick = () => {
  const birthday = user.birthday
  const headImg = user.headImg
  const messageCode = user.messageCode
  const nickName = user.nickName
  const password = user.password
  const phone = user.phone
  const sex = user.sex
  registerStore.registerUserAction({
    birthday,
    headImg,
    messageCode,
    nickName,
    password,
    phone,
    sex
  })
}

const codeBtnClick = () => {
  registerStore.getCodeAction().then(() => {
    user.messageCode = registerStore.code + ''
    isDisabled.value = true
    isShow.value = true
    countdownRef.value?.countdown()
    setTimeout(() => {
      isDisabled.value = false
      isShow.value = false
    }, 10000)
  })
}

const backBtnClick = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    width: 600px;
    height: 400px;
    .phone {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
