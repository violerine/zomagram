<template>
    
<div class="content">
<Navbar/>

<div class="forminput">
Food Name:
<div class="field container">
  <div class="control">
    <input v-model="item_name" class="input is-link" type="text" placeholder="Food Name">
  </div>
</div>


Description: 
<div class="field container">
  <div class="control">
    <input v-model="item_description" class="input is-link" type="text" placeholder="Description">
  </div>
</div>
<!--FILE UPLOAD-->

            <div class="file has-name container">
                <label class="file-label">
                    <input   class="file-input" type="file" name="resume">
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
<button  type="button" class="button is-link">Submit</button>
</div>

</div>
<!--CONTENT END-->



</template>

<script>
import Navbar from '@/components/Navbar.vue'


export default {
    components:{
        Navbar
    }
}
</script>

<style>

.forminput{
    padding-top: 100px;
}

</style>
