import { model } from "mongoose";

const state = () => ({ position: {} });

const mutations = {
  setPosition(state, val) {
    state.position = val;
  }
};
const actions = {
  setPosition: ({ commit }, position) => {
    commit("setPosition", position);
    console.log(position)
  }
};

export default {namespaced: true, state, mutations, actions}

