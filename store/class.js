export const state = () => {
  return { listClass: [] }
}

export const mutations = {
  SET_LIST_CLASS(state, listClass) {
    state.listClass = listClass
  },
}

export const actions = {
  async getListClass({ commit }) {
    const { data } = await this.$axios.get('/api/class')
    commit('SET_LIST_CLASS', data)
  },
}
