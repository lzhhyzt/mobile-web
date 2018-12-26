<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div class="button" @click="handleCityClick(item.name)">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {}
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  computed: {
    // 把 state 的 city 属性的值映射到新创建的计算属性 city 中
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // 由于没有异步操作，我们没必要使用 action，所以直接盗用mutation，也可以下面写
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  .border-topbottom {
    &:before {
      border-color: #ccc
    }
    &:after {
      border-color: #ccc
    }
  }
  .border-bottom {
    &:before {
      border-color: #ccc
    }
  }
  .list {
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title {
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    }
    .button-list {
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper {
        float: left
        width: 33.33%
        .button {
          padding: .1rem 0
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
          border-radius: .06rem
        }
      }
    }
    .item-list {
      .item {
        line-height: .76rem
        color: #666
        padding-left: .2rem
      }
    }
  }

</style>
