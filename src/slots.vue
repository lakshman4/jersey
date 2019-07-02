<template>
<div id="lakshman">
    <form>
        <select v-model="blog.name">
        <option v-for="fruit in fruits"> {{fruit}}</option>
        </select>
        <h1 v-model="blog.name">{{fruit}}</h1>
<div id="form-header">
    <slot name="form-header"> </slot>
    </div>
    <div id="form-fields">
        <slot name="form-fields"></slot>
    </div>
    <div id="form-controls">
        <slot name="form-control"></slot>
       </div>
       </form>
        <ul>
        <li><a href="#">Link1</a></li>
        <li><a href="#">Link2</a></li>
        <li><a href="#">Link3</a></li>
        </ul>
       </div>  
         </template>
    
    <script>
    export default {
    data(){
        return{
            props:['fruits'],
            blog:{
                title:'',
                author:'',
                name:'',
                fruit:''
            },
            fruits1:['apple','banana','mango','pinapple']
        }
    },
    }     
    </script>
    
    <style>
    #form-header{
        background: #2222;
        text-align:center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
    }
    #form-fields{
      
        width:100%;
        height:10%;
        margin:20 0px;
        padding:45px;
    }
    </style>
    




