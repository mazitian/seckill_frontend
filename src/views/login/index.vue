<template>
  <div class="login">
    <video class="bg" autoplay loop muted>
      <source src="@/assets/img/背景视频.mp4" type="video/mp4" />
    </video>
    <div class="login-panel">
      <h1 class="title">商品秒杀系统</h1>
      <div class="tabs">
        <el-tabs class="demo-tabs" stretch v-model="activeName">
          <el-tab-pane name="account">
            <template #label>
              <div class="label">
                <el-icon><UserFilled /></el-icon>
                <span class="text">帐号登录</span>
              </div>
            </template>
            <pane-account></pane-account>
          </el-tab-pane>

          <el-tab-pane name="phone">
            <template #label>
              <div class="label">
                <el-icon><Cellphone /></el-icon>
                <span class="text">手机登录</span>
              </div>
            </template>
            <pane-phone ref="phoneRef"></pane-phone>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 底部区域 -->
      <div class="controls">
        <el-checkbox size="large">
          <span>记住密码</span>
        </el-checkbox>
        <el-link type="primary" @click="registerClick">
          <span>注册帐号</span>
        </el-link>
      </div>
      <el-button
        class="login-btn"
        type="primary"
        size="large"
        @click="handleLoginBtnClick"
      >
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

import { ref } from 'vue'
import PaneAccount from './c-cpns/pane-account.vue'
import PanePhone from './c-cpns/pane-phone.vue'

const phoneRef = ref<InstanceType<typeof PanePhone>>()

const activeName = ref('phone')
const registerClick = () => {
  router.push('register')
}

function handleLoginBtnClick() {
  phoneRef.value?.loginAction()
}
</script>

<style lang="less" scoped>
.login {
  color: white;
  width: 100%;
  height: 100%;
  // 竖直水平居中
  display: flex;
  align-items: center;
  justify-content: center;
  .bg {
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index: -11;
    source {
      min-width: 100%;
      min-height: 100%;
      height: auto;
      width: auto;
    }
  }
  .login-panel {
    width: 330px;
    margin-top: -100px;

    .title {
      text-align: center;
      margin-bottom: 30px;
    }
    .label {
      display: flex;
      align-items: center;
      justify-content: center;

      .text {
        margin-left: 5px;
        color: white;
      }
    }
    .controls {
      display: flex;
      justify-content: space-between;
      color: white;
      span {
        color: white;
      }
    }

    .login-btn {
      margin-top: 10px;
      width: 100%;
      // --el-button-size: 50px;
    }
  }
}
</style>
