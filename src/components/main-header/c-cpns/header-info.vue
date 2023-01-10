<template>
  <div class="header-info">
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" src="../../../../public/favicon.ico" />
          <span class="name">管理员</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

// const router = useRouter()
function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
}

.info {
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      margin-left: 5px;
    }
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
