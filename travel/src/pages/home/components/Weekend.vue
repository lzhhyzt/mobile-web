<template>
  <div ckass="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
          title: '阳江温泉知多少',
          desc: '这里的天空和大海让人心旷神怡，配上舒缓的优美音乐，泡个暖暖的温泉岂不美哉'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '浮在海上的绿洲',
          desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '南国冰雪乐园',
          desc: '这里可以让你在南国感受到北国风光'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .weekend-title {
    line-height: .8rem
    background: #eee
    text-index: .2rem
  }
  .item-img-wrapper {
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img {
      width: 100%
    }
  }
  .item-info {
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
  }
</style>
