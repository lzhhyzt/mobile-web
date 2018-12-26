export default {
  // 两个参数，第一个是指向store的上下文对象，第二个为传递过来的值
  changeCity (ctx, value) {
    ctx.commit('changeCity', value)
  }
}
