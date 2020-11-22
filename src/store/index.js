import Vue from 'vue';
import Vuex from 'vuex';
import path from 'path';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lolClientPath: path.join('C:/Riot Games/League of Legends'),
    lolClientState: null,
    lolClientPort: null,
    lolClientToken: null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
