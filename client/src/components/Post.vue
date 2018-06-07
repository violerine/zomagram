<template>
          <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{post.name}}</p>
                            <p class="subtitle is-6">{{post.username}}</p>
                        </div>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img :src=post.url alt="Placeholder image">
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
                        </div>
                    </div>

                    <div class="content">
                        <p>
                            <strong>{{post.location}}</strong>
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
                            <button @click="getCity(post.location,post.name)" class="button">
                                <i class="material-icons">more_horiz</i>
                            </button>
                        </div>
                    </div>
                </div>

<!--MODAL-->

<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button @click="closeModal" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- MODAL Content ... -->

         <div class="container is-fluid">
          <div class="columns is-multiline">
            <div class="column is-one-fifths">
              <b>Restaurant Name:</b>
            </div>
            <div class="column">
              <b>Price:</b><br>
            </div>
            <div class="column">
              <b>Description:</b><br>
            </div>
            <div class="column">
              <b>Amount:</b>
            </div>
            <div class="column">
              
            </div>

            </div>
          </div>



        <div v-for="(resto,index) in restos" :key="index"  class="container is-fluid">
          <div class="columns is-multiline">
            <div class="column is-one-fifths">
              <b>{{resto}}</b>
            <div class="card-image">
              <figure class="image is-3by3">
                <img :src=resto.featured_image alt="Placeholder image">
              </figure>
            </div>
            </div>
            <div class="column">
              <!-- <b>Price:</b><br> -->
              {{resto.average_cost_for_two}}
            </div>
            <div class="column">
              <!-- <b>Description:</b><br> -->
              {{resto.location.locality}}
            </div>
            <div class="column">
              <!-- <b>Amount</b> -->
              <div class="field">
                  <p>{{resto.user_rating.rating_text}}</p>
              </div>
            </div>

          <div class="column">
              <br>
              <button class="button is-danger" type="button">Remove</button>
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
export default {
    props:['post'],
    // created:function(){
    //     this.getCity()
    // },
    data:function(){
        return{
            restos:[]
        }
    },
    methods:{
        activateModal(){
            $(".modal").addClass("is-active")
        },
        closeModal(){
            $(".modal").removeClass("is-active")
        },
        getCity(location,foodname){
            $(".modal").addClass("is-active")
            console.log("LOCATION",location)
            console.log("FOODNAME",foodname)
            let config={
                headers:{
                    'user-key':'58c9137440bfdc85526cf9964645e03d'
                }
            }
            axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${location}`,config)
            .then(({data})=>{
                console.log("LOCATION ID",data.location_suggestions[0].id)
                axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${data.location_suggestions[0].id}&entity_type=city&q=${foodname}`,config)
                .then(({data})=>{
                    console.log("DATA RESTO",data.restaurants)
                    this.restos=data.restaurants

                })
                .catch(err=>{
                    console.log(err)
                })
            })
            .catch(err=>{
                console.log(err)
            })
        }
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
