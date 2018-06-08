import Vue from 'vue'
import Vuex from 'vuex'
import swal from 'sweetalert'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    statlog:'',
    onefood: '',
    checkLogin:''
  },
  mutations: {
    setFoods (state, payload) {
      state.foods = payload
    },
    setStat (state,payload) {
      state.statlog = payload
    },
    setone (state,payload) {
      console.log('payloadddd=', payload)
      state.onefood = payload
    }
  },
  actions: {
    login: function (context, payload) {
      axios.post('http://localhost:7000/users/login', payload)
      .then(({data}) => {
        console.log("DATA TOKEN",data.token)
        console.log("Data USERNAME",data.username)
        localStorage.setItem('token',data.token)
        localStorage.setItem('username',data.username)
        context.commit('setStat', true)
        swal('succesfully logged in')
      })
      .catch(err => {
        console.log('errorrrrrr', err)
        let errorMsg = err
        // swal(errorMsg)
      })
    },
    logout: function (context) {
      localStorage.clear()
      context.commit('setStat', false)
      swal('succesfully logged out')
    },
    getone (context, payload) {
      axios.get(`http://localhost:7000/photos/photo/${payload}`)
      .then(response => {
        console.log('success', response.data.dataFood)
        let payload = response.data.dataFood
        context.commit('setone', payload)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    getPost: function (context) {
      axios.get('http://localhost:7000/photos/')
         .then(({data})=>{
             let result = data.foods
             context.commit('setFoods', result)
             
         }) 
         .catch(err=>{
             console.log(err)
         })
    },
    uploadImage: function (context, payload) {
      // let token = window.localStorage["useruploader"]
      axios.post('http://localhost:7000/photos/upload', payload)
      .then(response => {
        console.log('success', response.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    },
    register: function (context, payload) {
      axios.post('http://localhost:7000/users/register', payload)
      .then(response => {
        console.log('success', response)
        // swal('successfuly registered')
      })
      .catch(function (err) {
        console.log(err.response.data.message)
        swal('Please fill the field correctly')
        let errorMsg = err
        // swal(errorMsg)
      })
    },
    checkstat: function (context, payload) {
      if(window.localStorage["token"]){
        context.commit('setStat', true)
      }else{
        context.commit('setStat', false)
      }
    }
  }
})
