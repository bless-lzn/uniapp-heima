<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-29 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-893 sk-text"
          >锦鲤</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-769 sk-text"
          >服饰</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-98 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-774 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-64 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-152 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-414 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-915 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-744 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-578 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-747 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-602 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-900 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-39 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-905 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-930 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-199 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-66 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-467 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-813 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}

.sk-text-14-2857-29 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-893 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-769 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-98 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-774 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-64 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-152 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-414 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-915 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-744 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-578 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-747 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-602 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-900 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-39 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-905 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-14-2857-930 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-199 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}

.sk-text-0-0000-66 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
>
