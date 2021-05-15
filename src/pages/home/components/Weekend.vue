<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
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
import imgUrl from "../../../assets/test_two.jpg";
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: imgUrl,
          title: "秦皇岛野生动物园",
          desc: "近距离感受自然与动物的和谐美"
        },
        {
          id: "0002",
          imgUrl: imgUrl,
          title: "秦皇岛野生动物园",
          desc: "近距离感受自然与动物的和谐美"
        },
        {
          id: "0003",
          imgUrl: imgUrl,
          title: "秦皇岛野生动物园",
          desc: "近距离感受自然与动物的和谐美"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item-img.wrapper
  height: 0
  overflow: hidden
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
