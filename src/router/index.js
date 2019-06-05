/** 路由配置*/
//引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue'
import Router from 'vue-router'
import pmLogin from '../components/login'
import admin from '../components/admin/home'

//通过Vue的use方法注入Router
Vue.use(Router);

const router = new Router({
    // 指定路由选中时的样式类名
    // linkActiveClass: 'active',
    // hashbang: true, // 将路径格式化为#!开头
    // history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
/**
 * 4.@desc 路由配置配置具体的路径
 */
    routes: [
    {
        path: '/login',
        component: pmLogin
    },
    {
        path: '/admin',
        component: admin
    }
]
})



export default router