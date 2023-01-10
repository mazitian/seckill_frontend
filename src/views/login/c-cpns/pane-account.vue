<template>
  <div class="pane-account">
    <el-form size="large">
      <el-form-item prop="name">
        <el-input placeholder="帐号" />
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.pane-account {
  color: white;
  padding-top: 10px;
  margin-bottom: -10px;
}
</style>
