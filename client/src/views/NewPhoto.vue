<template>
    
<div class="content">
<Navbar/>

<div class="forminput">
Food Name:
<div class="field container">
  <div class="control">
    <input v-model="name" class="input is-link" type="text" placeholder="Food Name">
  </div>
</div>


Description: 
<div class="field container">
  <div class="control">
    <input v-model="description" class="input is-link" type="text" placeholder="Description">
  </div>
</div>

Location: 
<div class="field container">
  <div class="control">
    <input v-model="location" class="input is-link" type="text" placeholder="City">
  </div>
</div>
<!--FILE UPLOAD-->
<input class="btn btn-outline-primary" type="file" @change="onFilePicked" ref="file" accept="image/*">
<button  @click="addNewFood" type="button" class="button is-link">Submit</button>
</div>

</div>
<!--CONTENT END-->



</template>

<script>
import Navbar from '@/components/Navbar.vue'


export default {
    components:{
        Navbar
    },
    data:function(){
        return{
            name:'',
            description:'',
            location:'',
            file:''
        }
    },
    methods:{
        onFilePicked() {
            this.file = this.$refs.file.files[0]
        },
        addNewFood(){
            let formData = new FormData()
            formData.append('image', this.file)
            formData.append('username', localStorage.getItem('username'))
            formData.append('name',this.name)
            formData.append('desc',this.description)
            formData.append('location',this.location)
            this.$store.dispatch('uploadImage', formData)
            this.$store.dispatch('getPost')
            this.$router.push('/user')
        }
    }
}
</script>

<style>

.forminput{
    padding-top: 100px;
}

</style>
