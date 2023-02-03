<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="../../../public/favicon.ico" alt="" />
      <h2 v-show="!isFold" class="title">商品秒杀系统</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        :collapse="isFold"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item index="1-1" @click="dashboardClick"
            >核心技术</el-menu-item
          >
          <el-menu-item index="1-2" @click="overviewClick"
            >商品统计</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1" @click="profileClick"
            >用户管理</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Key /></el-icon>
            <span>秒杀管理</span>
          </template>
          <el-menu-item index="3-1" @click="allActivityClick"
            >所有活动</el-menu-item
          >
          <el-menu-item index="3-2" @click="allGoodClick"
            >所有商品</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>限时秒杀</span>
          </template>
          <el-menu-item index="4-1" @click="activityClick"
            >秒杀活动</el-menu-item
          >
          <el-menu-item index="4-2" @click="goodClick">秒杀商品</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><ShoppingCart /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="5-1" @click="myOrderClick"
            >我的订单</el-menu-item
          >
          <el-menu-item index="5-2" @click="lowOrderClick"
            >过期订单</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><ChatLineRound /></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item index="6-1" @click="storyClick">我的故事</el-menu-item>
          <el-menu-item index="6-2" @click="emailClick">联系方式</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useAllActivityStore from '@/stores/main/all-activity'
import useAllGoodStore from '@/stores/main/all-good'
import useActivityStore from '@/stores/main/activity'
router.push('/main/analysis/dashboard')

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const allActivityStore = useAllActivityStore()
const allGoodStore = useAllGoodStore()
const activityStore = useActivityStore()

function allActivityClick() {
  allActivityStore.getAllActivityListAction()
}
function allGoodClick() {
  allGoodStore.getAllGoodListAction()
}
function dashboardClick() {
  router.push('/main/analysis/dashboard')
}
function overviewClick() {
  router.push('/main/analysis/overview')
}
function emailClick() {
  router.push('/main/chat/email')
}
function storyClick() {
  router.push('/main/chat/story')
}
function lowOrderClick() {
  router.push('/main/order/low-order')
}
function myOrderClick() {
  router.push('/main/order/my-order')
}
function profileClick() {
  router.push('/main/system/profile')
}
function activityClick() {
  activityStore.getActivityListAction()
}
function goodClick() {
  router.push('/main/user/good')
}
</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: white;
}

.logo {
  display: flex;
  height: 30px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: white;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
