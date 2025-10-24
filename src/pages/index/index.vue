<template>
  <view class="indexPage">
    <CustomerNavbar class="navbar" />
    <scroll-view
      @scrolltolower="onScrolltolower"
      refresher-enabled
      @refresherrefresh="onRefresh"
      :refresher-triggered="isTriggered"
      scroll-y
      class="scroll-view"
    >
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <CategoryPanel :dataList="categoryList"></CategoryPanel>
      <HotPanel :dataList="hotList"></HotPanel>
      <!-- 猜你喜欢 需要父亲调用子类的方法-->
      <XtxGuess ref="guessRef"></XtxGuess>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CustomerNavbar from './components/CustomerNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
import type { XtxGuessInstance } from './components/components'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  if (res.code === '1' && res.result) {
    bannerList.value = res.result
  }
}
const isTriggered = ref(false)
// 获取猜你喜欢的组件实例,指定类型
const guessRef = ref<XtxGuessInstance>()
const onRefresh = async () => {
  //刷新数据
  //开启下拉刷新
  isTriggered.value = true
  //先重置数据，再刷新
  guessRef.value.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  //关闭下拉刷新
  isTriggered.value = false
}

//滚动触底的时候进行触发
const onScrolltolower = () => {
  //调用猜你喜欢的事件的方法
  // guessRef.value?.getMore()
  guessRef.value?.getmore()
  console.log(guessRef.value)
  console.log('触底了')
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  if (res.code === '1' && res.result) {
    // categoryList.value = res.result
    categoryList.value = res.result
  }
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  if (res.code === '1' && res.result) {
    hotList.value = res.result
    console.log(hotList.value)
  }
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>
<style lang="scss">
page {
  height: 100%;
}

.indexPage {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.scroll-view {
  flex: 1;
}
</style>
