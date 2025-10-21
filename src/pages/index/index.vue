<template>
  <view class="index-page">
    <CustomerNavbar />
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <view>niss</view>
  </view>
</template>

<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import CustomerNavbar from './components/CustomerNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  if (res.code === '1' && res.result) {
    bannerList.value = res.result
  }
}
onLoad(() => {
  getHomeBannerData()
})
</script>
<style lang="scss"></style>
