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
    getClientLockfile() {
      const lockfile = fs.readFileSync(path.join(state.lolClientPath, 'lockfile'), 'utf8').split(':');
      state.lolClientPort = lockfile[2];
      state.lolClientToken = lockfile[3];
    },
    updateClientState(state, clientState) {
      state.lolClientState = clientState;
    }
  },
  actions: {
  },
  modules: {
  },
});
