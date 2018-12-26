<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        v-model="keyword"
        type="text"
        placeholder="输入城市名或者拼音"
        @focus="inputFocus"
        @blur="inputBlur"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: null,
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
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
    },
    // 获取焦点时隐藏字母表
    inputFocus () {
      this.$emit('showAlphabet', false)
    },
    inputBlur () {
      this.$emit('showAlphabet', true)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'

  .search {
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input {
      height: .6rem
      line-height: .6rem
      width: 100%
      text-align: center
      border-radius: .06rem
      color: #666
      padding: 0 .1rem
      box-sizing: border-box
    }
  }
  .search-content {
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item {
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
    }

  }
</style>
