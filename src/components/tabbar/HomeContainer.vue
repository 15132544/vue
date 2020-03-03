<template>
    <div>
<!--        轮播图区域-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <h1>HomeContainer.vue</h1>
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
                         console.log(result)
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
</style>