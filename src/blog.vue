<template>

<div id="lakshman">
    <div id="add-blog">
        <div id="box" class="box">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
        <h1 class="title">Add blog to your post</h1>
        <form>
        <label class="label">Blog Title:</label>
        <input class="input" type="text" v-model="blog.title" required>
        <label class="label" >Blog Content:</label>
        <textarea class="input" v-model="blog.content" required></textarea>
          <label class="label">Blog Author:</label>
        <input class="input" type="text" v-model="blog.author" required>
         
       
        <br>
        </form>
           <!-- <button class="button is-warning" v-on:click="clearInputs">Reset</button> -->
           <button class="button is-primary"  v-on:click.prevent="addBlog">Add blog</button>
        </div>
       </div>  
</div>  
  </template>
    
    <script>
    import Vue from 'vue'
 import vueValidate from'vee-validate'
Vue.use(vueValidate);
    export default {
    data(){
        return{
            blog:{
                errors:[],
                title:'',
               content:'',
                categories:[],
                author:'',
                
            },
         
        }
    },
    methods:
    {  

        addBlog:function(){
            console.log(this.blog.title)
            if(this.blog.title === '' || this.blog.content === ''){
                alert('Cannot empty title and content');
            }
            else{
            this.$http.post('https://blogs-vue-37680.firebaseio.com/posts.json',this.blog)
              .then(function(data){
                console.log(data)
                alert('blog added')
                this.$router.push({
            name:'showBlogs'
        })
            });
            
            }
        },
       
        onSubmit(){
            this.$validator.validateAll().then(result=>{
                if(result){
                    alert('Submit');
                }
            })
        },
       
        
    
    }    
    } 
    </script>
    
    <style>
    #box{
      background-color:#5d42f5;

    }
    #add-blog *{
        box-sizing:border-box;
        
        
    }
    #add-blog{
        margin:20px auto;
        max-width:500px;
    }
    label{
        display:block;
        margin:20px 0 10px;
    }
    input[type=text],textarea{
        display:block;
        width:100%;   
    }
    input[type=text]{
        height: 30px;
    }
    textarea{
        height: 50px;
    }
    #preview{
        padding:20px 10px;
        nargin: 30px 0;
        border:1px dotted #ccc;

    }
    h3{
        margin-top:10px;
    }
    #checkbox input{
        display:inline;
        margin-right:10px;

    }
    #checkbox label{
        display:inline;
    }
    button{
        background-color: purple;

    }
    #lakshman{
       color: #000;
    }
   
    
    </style>
    




