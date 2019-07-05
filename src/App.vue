<template>

  <div id="app">
    <app-links></app-links>
    <br>
    <div class="columns">
      <div class="column is-2">
         <app-sideMenu></app-sideMenu>
      </div>
      <div class="column is-10">
        <router-view></router-view>
      </div>
    </div>
       
         
       
       
  </div>

</template>
<script>

import links from './links.vue'
import signup from './signup.vue'
import data from './data.vue'
import slots from './slots.vue'
import blog from './blog.vue'
import showblogs from './showblogs.vue'
import single from './single.vue'
import props from './props.vue'
import sideMenu from'./sideMenu'
export default {
  
 components:{
   'app-links':links,
   'app-signup':signup,
   'app-data':data,
   'app-slots':slots,
   'app-blog':blog,
   'app-showblogs':showblogs,
   'app-single':single,
   'app-props':props,
   'app-sideMenu':sideMenu,
 },
 
 data(){
   return{
 mobiles:{
   name:'samsung',color:'black'},
 obj:['bike','car','bus'],
   }
 }
   }
</script>

<style scoped>
h1{
  color:green
}

</style>
