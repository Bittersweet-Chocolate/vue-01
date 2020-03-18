import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  //自定义的共享状态
  state: {
    isTabbarShow: true,
    comingList: []
  },
  //唯一修改状态的位置
  mutations: {
    HideMaizouTabbar(state, data) {
      state.isTabbarShow = data
    },
    ShowMaizouTabbar(state, data) {
      state.isTabbarShow = data
    },
    getComingListMutation(state, data) {
      state.comingList = data;
    }
  },
  //异步处理
  actions: {
    //解构赋值牛逼
    getComingListAction({commit}) {
      axios({
        method: 'get',
        url: '/ajax/comingList?ci=1103&token=&limit=10&optimus_uuid=9B25A570686611EAA27B737CE9B8CDF0A84B9924FE3841B2A65069D827C815AE&optimus_risk_level=71&optimus_code=10',
      }).then(val => {
        if (typeof val.data !== "undefined") {
          commit("getComingListMutation", val.data.coming);
        }
      })
    }
  },
  modules: {}
})