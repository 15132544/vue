<template>
<div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入你需要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表</mt-button>
    <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间2020-03-06
            </div>
            <div class="cmt-body">
                我的呢外来
            </div>
        </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
</div>
</template>
<script>
    import {Toast} from 'mint-ui';
export default {
data(){
    return{
        pageIndex:1,
        comment:[],
        msg:''
    }
},
    created() {
    this.getComment();
    },
    methods:{
      getComment(){
          //获取评论数据 将数据绑定到this.comment上面 渲染 在生命周期函数created中调用这个方法
          //每当获取新数据评论的时候，不要把老数据清空覆盖,而是要以老数据拼接上新数据
          this.comment = this.comment.concat(/*新数据*/);
      },
      getMore(){//加载更多
          this.pageIndex++;
          this.getComment();

      },
        postComment(){//发表评论
          //校验发表评论内容是否为空
            if(this.msg.trim().length == 0){
              return   Toast("评论不能为空");
            }
          //参数1：请求的url地址
            //参数2：提交给服务器的数据对象 {content:this.msg}
            //参数3：定义提交时候 表单数据的格式{emulateJSON:true}
            this.$http.post('url:http://www.alas.com/'+this.$route.params.id,{content:this.msg.trim()}).then(result=>{
                if(result.status == 0){
                    let car = {
                        user_name:'用户名',
                        date:Data().now,
                        content:this.msg
                    };
                    this.comment.unshift(car);
                    this.msg = '';
                }
            })
        }
    }
}
</script>
<style>
    .cmt-container h3{
        font-size: 18px;
    }
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list{
    margin:5px 0;
}
    .cmt-item .cmt-title{
        background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
    }
    .cmt-item .cmt-body{
        font-size: 13px;
        line-height: 35px;
        text-indent: 2em;
    }
</style>