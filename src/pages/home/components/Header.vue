<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe66c;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市游玩主题
    </div>
    <!-- 借助router-link完成点击之后的页面跳转 -->
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
// vuex的高级使用
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(['city'])
  }
};
</script>
<style lang="stylus" scoped>

// 1rem = html font-size = 50px
// ~@代表src路径
@import '~styles/varibles.styl'
.header
  line-height: $headerHeight
  display: flex
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>
