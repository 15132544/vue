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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
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
            this.$http.get("https://uploadbeta.com/api/pictures/random/?key=推女郎").then(result =>{
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
<style lang="css" scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item img{
    height: 200px;
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