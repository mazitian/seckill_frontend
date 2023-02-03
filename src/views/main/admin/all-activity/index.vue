<template>
  <div class="all-activity">
    <activity-search></activity-search>
    <div class="content">
      <div class="header">
        <h3 class="title">活动列表</h3>
        <el-button type="primary">发布活动</el-button>
      </div>
      <template
        v-for="item in allActivityStore.seckillActivitiesResponseList"
        :key="item.activityid"
      >
        <div class="list">
          <div class="left">
            <el-avatar
              class="headimg"
              :size="50"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
            <div class="item">
              <el-link type="info">{{ item.activityName }}</el-link>
              <p class="description">{{ item.activityDesc }}</p>
            </div>
          </div>
          <div class="right">
            <div class="status">
              <p class="item">状态</p>
              <p class="date">{{ item.activityStatus }}</p>
            </div>
            <div class="start">
              <p class="item">开始时间</p>
              <div class="date">{{ item.startTime }}</div>
            </div>
            <div class="end">
              <p class="item">结束时间</p>
              <div class="date">{{ item.endTime }}</div>
            </div>
            <div class="btn">
              <el-button type="primary" :icon="Top" />
              <el-button type="primary" :icon="Bottom" />
              <el-button type="primary" :icon="Edit" />
              <el-button type="primary" :icon="Delete" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ActivitySearch from '@/components/search/activity-search.vue'
import { Delete, Edit, Top, Bottom } from '@element-plus/icons-vue'
import useAllActivityStore from '@/stores/main/all-activity'
const allActivityStore = useAllActivityStore()
console.log(allActivityStore.seckillActivitiesResponseList)
</script>

<style lang="less" scoped>
.all-activity {
  .content {
    background-color: #fff;
    margin-top: 8px;
    padding: 20px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      padding-bottom: 20px;
    }
    .list {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #f0f2f5;
      cursor: pointer;
      .left {
        display: flex;
        .headimg {
          margin-right: 20px;
        }
        .item {
          .description {
            margin-top: 10px;
            width: 250px;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
      .right {
        display: flex;
        .status {
          margin-right: 80px;
          .item {
            color: #909399;
            font-size: 14px;
          }
          .date {
            margin-top: 13px;
            font-size: 14px;
          }
        }
        .start {
          width: 150px;
          margin-right: 80px;
          .item {
            color: #909399;
            font-size: 14px;
          }
          .date {
            margin-top: 13px;
            font-size: 14px;
          }
        }
        .end {
          width: 150px;
          .item {
            color: #909399;
            font-size: 14px;
          }
          .date {
            margin-top: 13px;
            font-size: 14px;
          }
        }
        .btn {
          margin-left: 100px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
