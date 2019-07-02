<template>
<div id="app">
   
 <div  data-content="OR"></div>
<div v-theme="'wide'" id="showblogs">
     <h1 class="title">All the blogs</h1>
     <input class="input" type="text" v-model="search" placeholder="search blog">
     <button class="button is-warning">Search</button>
     <table class="table is-fullwidth">
         <thead>
             <th>Name of the blog</th>

         </thead>
             <tbody>
                 <tr>
                     <td> 
                         <div v-for="blog in fiteredBlogs" :key="blog.id" class="single-blog">
                        <router-link v-bind:to="'/blog/'+ blog.id"><h3 v-rainbow="">{{blog.title | to-uppercase}}</h3> <button class="button is-success">Read more</button></router-link>
             
                        <button class="button is-danger"  @click="deletePost(blog.id)">Delete</button>
                        </div>

                        </td>
                 </tr>
        
             </tbody>
         </table>
    
     </div>
</div>

</template>

<script>
export default {
data(){
    return{
   blogs:[],
   search:'',
   blog:{},
   id:this.$route.params.id,
 
    }
},
methods:{
   deletePost(id){
      if( confirm("Are you sure?")){
       console.log(id)
           this.$http.delete('https://blogs-vue-37680.firebaseio.com/posts/'+id+'.json').then(function(data){
             return data.json()
                     }).then(data=>{
        
                          window.location.reload();
                         console.log(data)
                       
                     });
      }
                //   return data.json()
                    //  }).then(data=>{
                    //      console.log(data)
                    //      this.blog = id
                    //      return this.id;
                    //  });
    }
},

created(){
      this.$http.get('https://blogs-vue-37680.firebaseio.com/posts.json').then(function(data){
         return data.json();
          window.location.reload();
         
      }).then (function(data){
          var blogsArray=[];
          for(let key in data){
              data[key].id=key
              blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
          console.log(blogsArray);
         
          
      })
},
        computed:{
            fiteredBlogs:function(){
                return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
                });
            }
        },
        filters:{
            'to-uppercase':function(value){
                return value.toUpperCase();
            }
        },
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color="#"+Math.random().toString().slice(2,8)
            }
        }
    }

    }
</script>

<style scoped>
h1{
    background-color:white;
}
#showblogs{
   max-width:800px;
    margin: 0 auto;
    
   
}
.single-blog{
    padding:10px;
    margin:10px 0;
   
    background: rgba(77, 126, 175, 0.4);

}
input[type=text]{
        display:block;
        width:100%; 
        height:30px;
}  
</style>
