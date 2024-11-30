import { createStore } from 'vuex';

//import { createStore } from 'vuex/types/index.js';

const store = createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  },
});

export default store;
