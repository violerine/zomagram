<template>
  <div>
    <Navbar/>
    <h1 style="margin-top:50px;">restaurant list for {{onefood.name}} in {{onefood.location}}</h1>
    <button class="button is-success" @click="getCity(onefood.name, onefood.location)">click to show</button>
    <br>
    <br>
    <!-- <div style="text-align: center;">
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

            <hr width="50%">
          </div>
        </div>
    </div> -->




<!--CARD-->
<div class="container ">
<div class="columns is-multiline">
<div v-for="(resto,index) in restos" :key="index" >
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by4">
      <img :src=resto.restaurant.featured_image alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
      <!-- <div class="content"> -->
        <p class="title is-4">restaurant name : {{resto.restaurant.name}}</p>
      <!-- </div> -->

        <p class="title is-6">average cost : {{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'IDR' }).format(resto.restaurant.average_cost_for_two)}}</p>

        <p class="title is-6">address : {{resto.restaurant.location.address}}</p>

        <p class="title is-6">user rating : {{resto.restaurant.user_rating.aggregate_rating}}</p>
        <br><br>       
        
  </div>
</div>
</div>
</div>
</div>
<!--CARD END-->




  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {mapState} from 'vuex'
export default {
  components: {
    Navbar
  },
  data:function(){
    return{
      restos:[]
    }
  },
  computed: {
    ...mapState([
        'onefood'
    ])
  },
  created () {
    this.$store.dispatch('getone', this.$route.params.id)
  },
  methods: {
    getCity(foodname,location){
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
                swal('location id not defined')
                console.log(err)
            })
        }
  }
}
</script>

<style>

</style>
