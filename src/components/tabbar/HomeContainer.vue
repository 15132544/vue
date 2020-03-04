<template>
    <div>
<!--        轮播图区域-->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
<!--        九宫格到六宫格的改造工程-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div></a></li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            lunbotuList:[],//保存轮播图的数组
        }
    },
    created() {
        this.gitLunbotu();
    },
    methods:{
        gitLunbotu(){//获取轮播图数据
            this.$http.get("https://uploadbeta.com/api/pictures/random/?key=二次元").then(result =>{
                // console.log(result);
                if(result.status === 200){
                    //获取图片成功 保存图片至数组中
                    this.lunbotuList.push(result);
                         // console.log(result)
                    Toast("加载轮播图成功")

                }else{
                    //失败
                    Toast("加载轮播图失败")
                }
            })

        }
    }
}
</script>
<style lang="css">
.mint-swipe{
    height: 600px;
}
.mint-swipe-item img{
    height: 600px;
}
.mint-swipe-item:nth-child(1){
            background-color: red;
}
.mint-swipe-item:nth-child(2){
    background-color: yellow;
}
.mint-swipe-item:nth-child(3){
    background-color: green;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border:none;
}
.mui-table-view.mui-grid-view img{
    width: 60px;
    height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
</style>