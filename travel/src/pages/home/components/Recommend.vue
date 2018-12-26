<template>
  <div ckass="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/'+ item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
          title: '长隆野生动物园',
          desc: '浪漫广州首站，狂野的动物主题乐园，性感张狂的热情'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e0/e0a9c262bb657ee9a3.img.jpg_200x200_0b1847a6.jpg',
          title: '长隆国际大马戏剧院',
          desc: '魔幻开启：咚咚咚”小女孩在一阵敲门声中惊醒，眼前天空一片星海。'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
          title: '美林湖温泉',
          desc: '这么冷的天，最适合泡温泉了'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .recommend-title {
    line-height: .8rem
    background: #eee
    text-index: .2rem
  }
  .item {
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img {
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    }
    .item-info {
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title {
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      }
      .item-desc {
        line-height: .4rem
        color: #ccc
        ellipsis()
      }
      .item-button {
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
      }
    }
  }
</style>
