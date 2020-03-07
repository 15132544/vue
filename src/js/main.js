//入口文件 导入Vue组件
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//导入vue-resource
import VueResource from 'vue-resource';
//安装vue-resource
Vue.use(VueResource);
//全局配置 post 时候 表单数据格式组织形式
// Vue.$http.options.emulateJSON = true;
//导入时间格式化插件
import moment from 'moment';

//按需导入 mint-ui
import { Header,Swipe,SwipeItem,Button} from 'mint-ui';
import 'mint-ui/lib/style.css';
//头部组件注册
Vue.component(Header.name, Header);
//轮播图组件注册
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
       return  moment(dataStr).format(pattern)
})

//导入MUI
import '../lib/mui/css/mui.css';
import '../lib/mui/css/icons-extra.css';

//导入router路由js文件
import router from "./router.js";

//1.3导入组件
import app from '../App.vue';

let vm = new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    render:c=>c(app),
    router//1.3挂载路由对象到 vm 的实列上
});