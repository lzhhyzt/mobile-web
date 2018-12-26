export default {
  // 第一个参数为 state 对象，第二个为外部传过来的参数
  changeCity (state, value) {
    state.city = value
    try {
      localStorage.city = value
    } catch (e) {}
  }
}
