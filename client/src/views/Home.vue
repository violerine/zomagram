<template>
  <div class="home">
    <Navbar/>

    <div class="columns body-columns">
        <div class="column is-half is-offset-one-quarter">
        <div  v-for="(food,index) in foods" :key="index" class="posts">
          <Post :food = "food"/>
        </div>

            <footer class="footer">
                <div class="container is-fluid">
                    <div class="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by
                            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Post from '@/components/Post.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
    computed: {
        ...mapState([
        'foods'
        ])
    },
  created:function(){
    this.$store.dispatch('getPost')
  },
  data:function(){
      return{

      }
  },
  components: {
    HelloWorld,
    Navbar,
    Post,
  },
  methods:{
  }
}

</script>

<style>
.navbar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: white;
    justify-content: space-around;
    width: 100%;
    border-bottom: 1px solid lightgray;
}
.navbar-menu {
    flex-grow: 0.5;
    justify-content: center;
}
.navbar-menu .navbar-item {
    flex-grow: 1;
    justify-content: center;
}
.navbar-menu .navbar-item .control {
    width: 50%;
}
.body-columns {
    margin-top: 10vh;
}

.footer {
    margin-top: 10vh;
    padding: 2rem 1.5rem;
}

/* @media screen and (max-width: 786px){
    .navbar {
        justify-content: space-between;
    }
} */
</style>

