<template>
  <div>
    <Navbar/>
    <p style="margin-top:100px;">Restaurant List for {{onefood.name}} in {{onefood.location}}</p>
    <br>
    <button class="button is-success" @click="getCity(onefood.name, onefood.location)">click to show</button>
    <br>
    <br>
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
        <br>    
        <button @click="getShare(resto.restaurant.url)">share</button>
                <div v-if="sharestat">
                  <iframe
                   :src="shareLink"
                   width="73"
                   height="28"
                   style="border:none;overflow:hidden"
                   scrolling="no"
                   frameborder="0"
                   allowTransparency="true"
                   allow="encrypted-media">
               </iframe>
                </div>
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
      restos:[],
      sharestat: false
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
    getShare (link) {
            this.sharestat = true
            let uri = link
            let encoded = encodeURI(uri)
            let shareLinks =`https://www.facebook.com/plugins/share_button.php?href=${encoded}&layout=button&size=large&mobile_iframe=true&appId=239483590150835&width=73&height=28`
            this.shareLink = shareLinks
        },
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
                swal("Zomato doesn't support this city")
                console.log(err)
            })
        }
  }
}
</script>

<style>

</style>
