<template>
    <div class="login">

        <Navbar/>
        <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <div class="box">
                        <!-- <figure class="avatar"> -->
                            <img src="../assets/zomagram2.png">
                        <!-- </figure> -->
                        <form>
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
                            <div class="field">
                                <button type="button" @click="login" class="button is-link is-outlined is-large is-fullwidth">Login standard</button>
                            </div>
                            <div class="field">
                                <button type="button" @click="loginFB" class="button is-link is-large is-fullwidth"><i class="fab fa-facebook"></i> &nbsp; Login with facebook</button>
                            </div>
                        </form>

                    </div>
                    <p class="has-text-grey">
                        <router-link to="/register"><a href="../">Sign Up</a> &nbsp;·&nbsp;</router-link>
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
    created: function () {
      (function (d, s, id) {
        var js
        var fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        // js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=119308148780939"
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '239483590150835',
          cookie: true,
          xfbml: true,
          version: 'v2.8'
        })
      }
    },
    methods:{
        loginFB () {
            window.FB.login((response) => {
                console.log('statusChangeCallback')
                console.log(response)
                if (response.status === 'connected') {
                    localStorage.setItem('fb_access_token', response.authResponse.accessToken)
                    // this.testAPI()
                } else {
                    alert('please login')
                }
            })
        }
    },
    components:{
        Navbar
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