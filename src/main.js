import Vue from "vue";
import App from "./App";
import router from "./router";
import store from './store/index'
// 轮播图插件
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

// 防止移动端显示出现的问题而引入的css样式文件
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";

Vue.config.productionTip = false;
// 解决移动端300ms点击延迟问题
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

// 路由就是根据网址的不同、返回不同的内容给用户
