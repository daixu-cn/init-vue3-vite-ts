import { createStore } from "vuex"
import user from "./modules/user"

export default createStore({
  state: () => ({
    userName: ""
  }),
  mutations: {},
  actions: {},
  modules: { user }
})
