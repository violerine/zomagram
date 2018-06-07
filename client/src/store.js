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
      axios.post('http://localhost:7000/users/login', payload)
      .then(({data}) => {
        console.log("DATA TOKEN",data.token)
        console.log("Data USERNAME",data.username)
        localStorage.setItem('token',data.token)
        localStorage.setItem('username',data.username)
      })
      .catch(err => {
        console.log(err)
      })
    },
  }
})
