<template>
<div id="fruits">
    <div>
       <ul>
        <li v-for="fruit in fruits"  v-on:click="fruit.show =!fruit.show">
        <h2>{{fruit.name}}</h2>
        <h3 v-show= "fruit.show">
            {{fruit.speciality}}
        </h3>
        </li>
    </ul>
    
    </div>
    <button v-on:click="test()">Delete fruits</button>
    </div>
</template>
<script>
export default{
    props:{
        fruits:{
            type:Array,
            required:true
        }
    },
    name:'lakshmaiah',
    methods:{
        test:function(){
            this.fruits.pop()
        }
    } 
}
</script>
<style scoped>
#fruits{
    width:100%;
    max-width:1200px;
    margin:40 auto;
    padding:0 20px;
    box-sizing: border-box;
   
}
ul{
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:10px;
    color:purple;
    background-color:lightblue;
}
li{

    flex-grow:5;
    flex-basis:300px;
    text-align:center;
    border:1px solid #222;
}
</style>