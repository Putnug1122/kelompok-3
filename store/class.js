export const state = () => {
  return { listClass: [] }
}

export const actions = {
  setClass({ commit }, listClass) {
    commit('setClass', listClass)
  },
}

export const mutations = {
  setClass(state, listClass) {
    state.listClass = listClass
  },
}
