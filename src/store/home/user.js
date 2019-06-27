import * as types from "@/store/mutation-types.js";
import { rankGender } from "@/api/common";

export default {
  namespaced: true,
  state: {
    userInfo: "Tom",
    rank: {}
  },
  getters: {
    getUserInfo: state => {
      const { userInfo } = state;
      return `${userInfo}--${Math.random()}`;
    }
  },
  actions: {
    changeUserInfo({ commit }, info) {
      console.log("info", info);
      let userInfo = `${info} changed`;
      commit(types.SET_USER_INFO, userInfo);
    },
    async getRank({ commit }, opts) {
      const res = await rankGender(opts);
      if (res) {
        commit(types.SET_RANK, res);
      }
    }
  },
  mutations: {
    [types.SET_USER_INFO](state, userInfo) {
      state.userInfo = userInfo;
    },
    [types.SET_RANK](state, rank) {
      state.rank = rank;
    }
  }
};
