// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import fastClick from "fastclick";
// 防止移动端显示出现的问题而引入的css样式文件
import "./assets/styles/reset.css";
import "./assets/styles/border.css";

Vue.config.productionTip = false;

// 解决移动端300ms点击延迟问题
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// 路由就是根据网址的不同、返回不同的内容给用户
