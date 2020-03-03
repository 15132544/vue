//入口文件 导入Vue组件
import Vue from 'vue'

//按需导入 mint-ui
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
//导入MUI
import '../../lib/mui/css/mui.css';

//导入router路由js文件
import router from "./router.js";

//导入组件
import app from '../App.vue';

let vm = new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    render:c=>c(app),
    router
});