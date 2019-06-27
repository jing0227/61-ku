import * as types from "./mutation-types.js";

export default {
  changeUserInfo({ commit }, info) {
    let userInfo = `${info} is updated`;
    commit(types.SET_USER_INFO, userInfo);
  }
};
