<template>
<nav class="navbar is-primary is-fullwidth">
    <div class="navbar-brand">
        <a class="navbar-item" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9q-mO6yAvvUxnT5z76ydclrAgkxBRhJ-9S5US4VsE89VjybElKA"></a>
    </div>
    <div class="navbar-menu">
        <a href="#" class="navbar-item">Home</a>
       <a class="navbar-item"> <router-link to="/">Show Blogs</router-link>
       </a>
       <a class="navbar-item">
         <router-link to="/add">Add Blogs</router-link>
       </a>
       <div class="navbar-item has-dropdown is-hoverable">
           <a class="navbar-link">More</a>
           <div class="navbar-dropdown">
               <a class="navbar-item is-active">Posts</a>
               <a class="navbar-item">Latest News</a>
               <a class="navbar-item">Latest Blogs</a>
           </div>
       </div>
       <div class="navbar-end">
           <div class="buttons">
               <a class="navbar-item">
                 <router-link to="/signup">   <button class="button is-warning">Signup</button></router-link>
               </a>
               <a class="navbar-item">

               <button class="button is-danger">Login</button>
               
               </a>
           </div>
       </div>
    </div>
</nav>

</template>
<script>
export default {
      data(){
        return{

        }
    }
}
</script>
<style scoped>
#user{
    width:100px;
    height:70px;
}

</style>
