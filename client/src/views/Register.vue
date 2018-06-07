<template>
    <div class="registerpage">
<Navbar/>
  <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Register</h3>
                    <div class="box">
                        <!-- <figure class="avatar"> -->
                            <img src="../assets/zomagram2.png">
                        <!-- </figure> -->
                        <form>

                             <div class="field">
                                <div class="control">
                                    <input v-model="email" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input v-model="username" class="input is-large" type="text" placeholder="Your Username" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input v-model="password" class="input is-large" type="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button type="button"  class="button is-block is-link is-large is-fullwidth"><router-link to="/login">Sign up</router-link></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link to="/login"><a href="../">Login</a> &nbsp;·&nbsp;</router-link>
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data : function () {
      return {
          username: '',
          email: '',
          password: ''
        }
  }
}
</script>


<style>

.box {
  margin-top: 4rem;
}

.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 0rem;
}

.hero.is-success {
    background-color: #ffffff; 
    color: #fff;
}

.column.is-offset-4, .column.is-offset-4-tablet {
    margin-left: 33.33333%;
    padding-top: 30px;
}
</style>
