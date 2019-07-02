import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// import blog from './blog.vue'
// import showblogs from './showblogs'
import VueRouter from 'vue-router'

import Routes from './routes'

// Vue.component('blog-post',{
//   props:['postTitle','postName','postColor'],
//   template:'<h2>{{postTitle}}</h2>',
//   template:'<h3>{{postName}}</h3>',
//   template:'<h4>{{postColor}}<h4>',
//   });

Vue.use(VueResource);
Vue.use(VueRouter);

const router= new VueRouter({
    routes:Routes,
    mode:'history'
});
//Custom directive
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    //el.style.color="#"+ Math.random().toString().slice(2,8);
    el.style.color="white";
  }
});
Vue.directive('theme', {
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth="650px";  
    }
  }
});

Vue.filter('snippet', function(value){
  return value.slice(0,100);
})

export const buss= new Vue({
  data:'Lakshmaiah Peruri'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

