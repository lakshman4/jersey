<template>

<nav class="menu">
    <p id="menu" class="menu-label"><b>Menu</b></p>
    <ul class="menu-list">
        <li>
            <p :style="{bgcolor:red}"
            v-on:click="showMobile()" href="#">  
               <router-link to="/show"><span class="icon"><i class="fa fa-address-book"></i></span><b>Show Blogs</b></router-link>
                </p>
        </li>
         <li>
            <p >
               <router-link to="/add"><span class="icon"><i class="fa fa-file-text-o"></i></span><b>Add Blogs</b></router-link></p>
        </li><br>
        <br>
         <li>
            <p >
               <router-link to="/add"><span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span><b>Logout</b></router-link></p>
        </li>
        
    </ul>

</nav>
        </template>
        <script>
        export default{
           data(){
               return{
                   website:"https://stage.manufacton.com",
                    color:'red'
               }

           },
           methods:{
               showMobile(){
                this.color="blue";
                console.log(this.color);
               }

           }

            }
        
        </script>
        <style scoped>
        #menu{
            background-color:lightblue;
            padding:10px;

        }
        </style>