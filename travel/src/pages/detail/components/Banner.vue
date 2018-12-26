<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7b3;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@common/gallary/Gallary'
import FadeAnimation from '@common/fade/Fade'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1412/c1/350b0b4fb544a093c1e4dce0f05e9d65.water.jpg_r_800x800_d751ebaf.jpg',
        'http://img1.qunarzz.com/sight/p0/1502/24/24c449cdb48dc6b0.water.jpg_r_800x800_352af653.jpg',
        'http://img1.qunarzz.com/sight/p0/201305/29/4fa0786d806271a7c8d65eac.jpg_r_800x800_b92bd3d8.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner {
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    color: #fff
    .banner-img {
      width: 100%
    }
    .banner-info {
      position: absolute
      display: flex
      left: 0
      right: 0
      bottom: 0
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      line-height: .6rem
      .banner-title {
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      }
      .banner-number {
        padding: 0 .4rem
        height: .32rem
        marign-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon {
          font-size: .24rem
        }
      }
    }
  }
</style>
