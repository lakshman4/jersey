import showblogs from './showblogs.vue'
import links from './links.vue'
import blog from './blog.vue'
import single from './single.vue'
import signup from './signup.vue'
export default[
    {name:'home',path:'/',component:HTMLVideoElement},
    {path:'/add',component:blog},
    {path:'/blog/:id',component:single},
    {path:'/show',component:showblogs},
    {path:'/signup',component:signup},
    
]