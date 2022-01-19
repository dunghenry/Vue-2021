const state = {
  author: {
    isAuthenticated: false,
  },
};

const getters = {
    isAuthenticated: state => state.author.isAuthenticated
};
const actions = {};
const mutations = {
  TOGGLE_AUTHOR(state) {
    state.author.isAuthenticated = !state.author.isAuthenticated;
  },
};
export default{
    state,
    getters,
    mutations,
    actions,
}