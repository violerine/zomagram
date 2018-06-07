<template>
    <div class ="user">
        <Navbar/>
        
<div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-8 is-offset-2">
                    
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>

                        <p>User:</p>
                    <router-link to="/new"><button class="button">Upload New Food</button></router-link>
                    <div v-for="(post,index) in posts" :key="index" class="postsbyuserrname">
                        <Post :post="post"/>
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
            posts:[]
        }
    },
    created:function(){
        this.getFoodByUsername()
    },
    methods:{
        getFoodByUsername(){
            const username = localStorage.getItem('username')
            axios.get(`http://localhost:7000/photos/${username}`)
            .then(({data})=>{
                this.posts=data
                console.log("FOOD BY USERNAME",data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
    }
}
</script>

<style>

</style>
