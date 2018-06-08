<template>
    <div class ="user">
        <Navbar/>
        
<div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-8 is-offset-2">
                    
                    <div class="box">
                        <figure class="avatar">
                            <img src="../assets/pengu.png">
                        </figure>

                        <p>Foods By {{currentUser}}</p>
                    <router-link to="/new"><button class="button">Upload New Food</button></router-link>
                    <div v-for="(food,index) in posts" :key="index" class="postsbyuserrname">
                     
                        <Post :food="food" />
                    </div>
                    </div>
            
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Post from '@/components/Post.vue'

export default {
    components:{
        Navbar,
        Post
    },
    data:function(){
        return{
            posts:[],
            currentUser:''
        }
    },
    created:function(){
        this.getFoodByUsername()
        this.checkUser()
    },
    methods:{
        getFoodByUsername(){
            const username = localStorage.getItem('username')
            axios.get(`http://localhost:7000/photos/userphoto/${username}`)
            .then(({data})=>{
                this.posts=data.dataFood
                console.log("FOOD BY USERNAME",data.dataFood)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        checkUser(){
            this.currentUser=localStorage.getItem('username')
        }
    }
}
</script>

<style>

</style>
