import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    login: function (context, payload) {
      console.log(payload)
      axios.post('http://localhost:3000/users/login', payload)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    },
    logout: function (context, payload) {

    }
  }
})
