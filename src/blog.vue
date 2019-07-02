<template>

<div id="lakshman">
    <div id="add-blog">
        <div id="box" class="box">
        <h1 class="title">Add blog to your post</h1>
        <form>
        <label class="label">Blog Title:</label>
        <input class="input" type="text" v-model="blog.title" required>
        <label class="label" >Blog Content:</label>
        <textarea class="input" v-model="blog.content" required></textarea>
       
        <div></div>
        </form>

        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories" required>
             <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories" required>
             <label>Controls</label>
            <input type="checkbox" value="controls" v-model="blog.categories"required>
        </div>
        <label>Author</label>
         <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
                </select>
    
        <div id="preview">
            <h3>Blog preview</h3>
            <p><strong> Title:</strong>{{blog.title}}</p>
            <p><strong>Blog Content:</strong>{{blog.content}}</p>
            <p><strong> Categories:</strong>{{blog.categories}}</p>
            <p><strong> Categories:</strong>{{blog.author}}</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
           <p><strong>Blog Author:</strong>{{blog.author}}</p>
           <button class="button is-primary"  v-on:click.prevent="addBlog">Add blog</button>
           <!-- <button class="button is-warning" v-on:click="clearInputs">Reset</button> -->
        </div>
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
            authors:['Albert','James','Michel','Jhonson']
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
    




