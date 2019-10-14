import Vue from 'vue' //vue框架
import Router from 'vue-router' //vue框架路由
import  Login from '@/components/login.vue'//引入组件 
Vue.use(Router);//把引用的vue路由绑定到vue框架上
export default new Router({
    routes:[
        {
            path:"/", //接受的路由地址为/,表示首页地址
            name:"login", //路由的名称
           component:Login //路由显示的组件
        }
    ]
  
})
