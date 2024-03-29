import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

import home from "./home";

Vue.use(Vuex);

let modules = {
  ...home
};

export default new Vuex.Store({
  state: {
    groups: [1]
  },
  modules,
  actions,
  mutations,
  getters: {
    getGroups(state) {
      return state.groups;
    }
  }
});
