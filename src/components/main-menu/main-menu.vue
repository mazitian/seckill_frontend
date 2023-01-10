<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="../../../public/favicon.ico" alt="" />
      <h2 v-show="!isFold" class="title">商品秒杀系统</h2>
    </div>
    <div class="menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isFold"
      >
        <el-sub-menu :index="one">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>秒杀活动管理</span>
          </template>
          <el-menu-item :index="oneone">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu :index="two">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>秒杀商品管理</span>
          </template>
          <el-menu-item :index="twotwo">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>添加秒杀活动</span>
          </template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Operation /></el-icon>
            <span>添加秒杀商品</span>
          </template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
const one = 'one'
const oneone = 'oneone'
const two = 'two'
const twotwo = 'w'
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
