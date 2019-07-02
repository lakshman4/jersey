<template>
<div id="app">
   <div class="hero is-fullwidth">
    
       <div class="columns is-centered">
           <div class="column is-12-desktop is-6-tablet is-4-widescreen">
       
               <div class="field">
                   <form>
                       <label class="label">Name</label>
                       <input class="input" type="text" required/>
                       <label class="label">Email</label>
                       <input class="input" type="email" required/>
                        <label class="label">Password</label>
                       <input class="input" type="password" required/>
                        <label class="label">Confirm Password</label>
                       <input class="input" type="password" required/>
                       <button class="button is-primary">Signup</button>
                   </form>
               </div>
           </div>
       </div>
           </div>
    
</div>
</template>
<script>
import{buss} from './main';
export default{
    props:{
        title:{
            type:String,
            required:true
        }
    },
    name:'lakshmaiah',
    data(){
        return {
      copy:'Copyright Manufacton 2019'
    }
    },
    created()  {
        buss.$on('busMessage',(data)=>{
            this.title=data;
        })
    }
}
</script>
<style scoped>
footer {
    padding:10px;
    background:black;
}
p{
  color:lightblue;
  text-align:center;
}

</style>