<template>
          <div class="card" >
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{food.name}}</p>
                            <p class="subtitle is-6">{{food.username}}</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src=food.url alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="level-item has-text-centered">
                                <a href="">
                                    <i class="material-icons">favorite_border</i>
                                </a>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                    <a href="">
                                        <i class="material-icons">chat_bubble_outline</i>
                                    </a>
                                </div>
                            </div>
                             <div  v-if="this.currentUser==food.username" class="level-item has-text-centered">
                                <button @click="deleteFoodPhoto(food._id)" class="button">
                                    <i class="material-icons">delete</i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>{{food.location}}</strong>
                        </p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                        <a>@bulmaio</a>.
                        <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br>
                        <time datetime="2018-1-1"></time>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="columns is-mobile">
                        <div class="column is-11">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" type="text" placeholder="Add a comment . . .">
                                </div>
                            </div>
                        </div>
                        <div class="column has-text-centered">
                            <router-link :to="{ name: 'detail', params: { id: food._id }}">...</router-link>
                            <router-view/>
                        </div>
                    </div>
                </div>

<!--MODAL-->
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Restaurant List</p>
      <button @click="closeModal" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- MODAL Content ... -->
        <div v-for="(resto,index) in restos" :key="index"  class="container is-fluid">
          <div class="columns is-multiline">
            <div class="column is-one-fifths">
            <div class="card-image">
              <figure class="image is-3by3">
                <img :src=resto.restaurant.featured_image alt="Placeholder image">
                <p>restaurant name : {{resto.restaurant.name}}</p>
                <p>average cost : {{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'IDR' }).format(resto.restaurant.average_cost_for_two)}}</p>
                <p>address : {{resto.restaurant.location.address}}</p>
                 <p>user rating : {{resto.restaurant.user_rating.aggregate_rating}}</p>
              </figure>
            </div>
            </div>
            

            <hr width="100%">
          </div>
        </div>
        
      <!--END MODAL CONTENT-->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button  class="button">Cancel</button>
    </footer>
  </div>
</div>
<!--MODAL END-->







    </div>
</template>


<script>
import {mapState, mapActions} from 'vuex'
export default {
    props:['food'],
    data:function(){
        return{
            restos:[],
            currentUser:''
        }
    },
    created:function(){
        this.checkUsername()
    },
    computed:{
        ...mapState([
            
        ])
    },
    methods:{
        ...mapActions([
            'getPost'
        ]),
        checkUsername(){
            var username=localStorage.getItem('username')
            console.log("USERNAME",username)
            this.currentUser=username
             console.log("THIS CURRENT USER",this.currentUser)
        },
        closeModal(){
            $(".modal").removeClass("is-active")
        },
        deleteFoodPhoto(photoId){
            axios.delete(`http://localhost:7000/photos/delete/${photoId}`)
            .then(response=>{
                console.log(response)
                
            })  
            .catch(err=>{
                console.log(err)
            })
            setTimeout(() => {
            this.getPost()
            }, 200)
        },
    }
}
</script>


<style scoped>
.card {
    margin-top: 5rem;
}
.card .header {
    padding: 5px 10px;
}
.card-footer .columns {
    width: 100%;
}
.card-footer .columns input {
    border: none;
    border-radius: 0;
    box-shadow: none;
}
.card-footer .columns .column:last-child {
    display: flex;
    align-items: center;
}
.card-footer .columns .column:last-child button {
    border: none;
}
</style>
