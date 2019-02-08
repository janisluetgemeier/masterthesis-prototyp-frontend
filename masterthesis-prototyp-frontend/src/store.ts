import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    admin: "no",
    userInfo: ""
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setAdmin(state, payload) {
      console.log("Setting admin Status to: " + payload);
      state.admin = payload;
      console.log("State isAdmin is now: " + state.admin);
    },
    setuserInfo(state, payload) {
      state.userInfo = payload;
    },
    logOut(state, payload) {
      state.userInfo = "";
      state.admin = "no";
      state.token = "";
    }
  },
  actions: {

  },
});
