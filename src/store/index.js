import Vue from "vue";
import Vuex from "vuex";
import state from './state'
import mutations from './mutations'
Vue.use(Vuex);

  // 公用数据
  // 组件 -> actions -> mutations -> 改变数据
export default new Vuex.Store({
  state,
  mutations
});
