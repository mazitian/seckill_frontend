<template>
  <div class="good">
    <good-search></good-search>
    <div class="content">
      <div class="header">
        <h3 class="title">商品列表</h3>
        <el-button type="primary">发布商品</el-button>
      </div>
      <template
        v-for="item in allGoodStore.seckillGoodResponses"
        :key="item.id"
      >
        <div class="list">
          <div class="left">
            <div class="item-title">itemTitle: {{ item.itemTitle }}</div>
            <div class="item-sub-title">
              itemSubTitle: {{ item.itemSubTitle }}
            </div>
            <div class="item-desc">itemDesc: {{ item.itemDesc }}</div>
            <div class="original-price">
              originalPrice: {{ item.originalPrice }}
            </div>
            <div class="flash-price">flashPrice: {{ item.flashPrice }}</div>
            <div class="allow-place-order-or-not">
              allowPlaceOrderOrNot: {{ item.allowPlaceOrderOrNot }}
            </div>
            <div class="available-stock">
              availableStock: {{ item.availableStock }}
            </div>
            <div class="start-time">startTime: {{ item.startTime }}</div>
            <div class="end-time">endTime: {{ item.endTime }}</div>
          </div>
          <div class="right">
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
import GoodSearch from '@/components/search/good-search.vue'
import useAllGoodStore from '@/stores/main/all-good'
import { Delete, Edit, Top, Bottom } from '@element-plus/icons-vue'
const allGoodStore = useAllGoodStore()
</script>

<style lang="less" scoped>
.good {
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
      // cursor: pointer;
    }
  }
}
</style>
