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
    <input v-model="location" class="input is-link" type="text" placeholder="Location">
  </div>
</div>
<!--FILE UPLOAD-->

            <div class="file has-name container">
                <label class="file-label">
                    <input @change="previewFile"  class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                        Choose a file…
                    </span>
                    </span>
                    <span class="file-name">
                    {{this.filename}}
                    </span>
                </label>
                <div id="output"></div>
            </div>
            

        <!--FILE UPLOAD END-->
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
            formdata:new FormData(),
            filename:''
        }
    },
    methods:{
        previewFile(file){
          console.log({Event})
          var filedata = file.target.files[0]
          this.filename = filedata.name
          this.formdata.append('image',filedata)
          console.log(this.formdata)   
          console.log("FILEDATA",filedata)
        },
        addNewFood(){
            var usernameLocalStorage= localStorage.getItem('username')
            let config ={
                headers : {'content-type' : 'multipart/form-data'}
            }
            axios.post('http://localhost:7000/photos/upload',{
                name:this.name,
                desc:this.description,
                location:this.location,
                image:this.formdata,
                username:usernameLocalStorage
            },config)
            .then(({data})=>{
                console.log("DATA UPLOAD FOTO",data)
            })
            .catch(err=>{
                console.log(this.formdata)
                console.log("ERRORNYA KENAPA",err)
            })
        }
    }
}
</script>

<style>

.forminput{
    padding-top: 100px;
}

</style>
