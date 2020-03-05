//导入路由
import VueRouter from 'vue-router';
//1.4导入路由对应组件
import HomeContainer from '../components/tabbar/HomeContainer.vue';
import MemberContainer from '../components/tabbar/MemberContainer.vue';
import SearchContainer from '../components/tabbar/SearchContainer.vue';
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'


let router = new VueRouter({
        routes:[
                {path:'/',redirect:'/home'},
                {path:'/home',component:HomeContainer},
                {path: '/member',component: MemberContainer},
                {path: '/shopcar',component: ShopcarContainer},
                {path: '/search',component: SearchContainer}
        ],
        linkActiveClass:'mui-active'//覆盖路由高亮的类 ，默认的类 叫做 router-link-active
});

export default router //向外暴露router路由