import showblogs from './showblogs.vue'
import blog from './blog.vue'
import single from './single.vue'
import signup from './signup.vue'
export default[
    {name:'showBlogs',path:'/',component:showblogs},
    {path:'/add',component:blog},
    {path:'/blog/:id',component:single},
    {path:'/blog/:id',component:showblogs},
    {path:'/signup',component:signup},
    
]