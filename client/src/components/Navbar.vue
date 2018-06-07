<template>
<div class="navbarandmodal">
<Navbar/>
  <div class="navbar is-inline-flex is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="../assets/zomagram.png" width="120" height="40" alt="Zomagram">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-item">
                <div class="control has-icons-left">
                    <input class="input is-small has-text-centered" type="text" placeholder="search">
                    <span class="icon is-left is-small">
                        <i class="material-icons">search</i>
                    </span>
                </div>
            </div>
        </div>
        <div class="navbar-item is-flex-touch">
            <a class="navbar-item">
                <p  class="control">
                    <button aria-haspopup="true" class="button">
                     <span><router-link to="/login">Login</router-link></span>
                    </button>
                </p>
            </a>
               <a class="navbar-item">
                <p  class="control">
                    <button aria-haspopup="true" class="button">
                     <span><router-link to="/login">LogOut</router-link></span>
                    </button>
                </p>
            </a>
             <!-- <a class="navbar-item">
                <router-link to="/login"><i class="material-icons">face</i></router-link>
            </a> -->
            <a class="navbar-item">
              <router-link to="/">  <i class="material-icons">input</i></router-link>
            </a>
            <a class="navbar-item">
               <router-link to="/home"> <i class="material-icons">panorama</i></router-link>
            </a>
            <a class="navbar-item">
                <router-link to="/user"><i class="material-icons">person_outline</i></router-link>
            </a>
           
        </div>
    </div>

</div>  
</template>





<style>

</style>
