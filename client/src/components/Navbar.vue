<template>
<div class="navbarandmodal">
  <div class="navbar is-inline-flex is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item">
                <router-link to="/home"><img src="../assets/zomagram.png" width="120" height="40" alt="Zomagram"></router-link>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-item">

            </div>
        </div>
        <div class="navbar-item is-flex-touch">
            <a class="navbar-item">
                <p  class="control">
                    <button aria-haspopup="true" class="button" v-if="statlog == false">
                     <span ><router-link to="/login">Login</router-link></span>
                    </button>
                </p>
            </a>
               <a class="navbar-item" v-if="statlog == true">
                <p  class="control">
                    <button aria-haspopup="true" class="button" @click="logout">Logout</button>
                </p>
            </a>
             <!-- <a class="navbar-item">
                <router-link to="/login"><i class="material-icons">face</i></router-link>
            </a> -->
            <a class="navbar-item" v-if="statlog == false">
              <router-link to="/">  <i class="material-icons">input</i></router-link>
            </a>
            <a class="navbar-item">
               <router-link to="/home"> <i class="material-icons">panorama</i></router-link>
            </a>
            <a class="navbar-item" v-if="statlog == true">
                <router-link to="/user"><i class="material-icons">person_outline</i></router-link>
            </a>
           
        </div>
    </div>

</div>  
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'navbar',
        data:function(){
            return{

            }
        },
        computed: {
            ...mapState([
                'statlog'
            ])
        },
        created:function () {
            this.$store.dispatch('checkstat')            
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
                this.$router.push('/login')
            }
        }
    }
</script>



<style>

</style>
