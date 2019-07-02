<template>
<div id="blog">
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-12-laptop is-6-tablet is-4-widescreen">
        <div class="box">
    <div class="media-left">
    <h1 id="col" class="title is-centered"><strong>Title</strong>
    :{{blog.title}}</h1>

    <article> <strong>Content:</strong>{{blog.content}}</article>
    <p><strong>Author:</strong>{{blog.author}}</p>
  <ul>
                <li v-for="category in blog.categories"><strong>Category:</strong>{{category}}</li>
            </ul>
    </div>
        </div>
            </div>
            </div>
    </section>
</div>
</template>
<script>
export default {
    

      
    data(){
       
        return{
            id:this.$route.params.id,
           blog:{},
           
        }
    },
    created(){
        console.log(this.id)
        this.$http.get('https://blogs-vue-37680.firebaseio.com/posts/' + this.id +'.json').then(function(data){
             return data.json()
                     }).then(data=>{
                         console.log(data)
                         this.blog = data
                         return this.blog;
                     });
    }
}

</script>
<style scoped>
#col{
    background-color:blueviolet;
}
p{

}
section{
    background-color: rgb(90, 50, 50);
}
#blog{
    background-color: aquamarine;
}
</style>
