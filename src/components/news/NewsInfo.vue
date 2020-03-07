<template>
<div class="newsInfo-container">
    <h1 class="title">新闻详情--{{id}}</h1>
    <p class="subtitle">
        <span>时间</span>
        <span>点击次数</span>
    </p>
    <hr>
    <div class="content"></div>
    <comment></comment>
</div>
</template>
<script>
    import comment from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            id:this.$route.params.id,//将url中传过来的id挂载到data上，方便以后调用
        }
    },
    components:{
        comment
    }
}
</script>
<style scoped>
.newsInfo-container{
    padding:0 4px;
}
    .newsInfo-container>.title{
        color: red;
        font-size: 16px;
        text-align: center;
        margin:15px 0;
    }
    .newsInfo-container>.subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .newsInfo-container>.content{

    }
</style>