<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.source">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgsrc">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表事件：{{item.ptime|dateFormat}}</span>
                            <span>点击：{{item.commentCount}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import { Toast} from 'mint-ui'
export default {
    data(){
        return{
            newsList:[{
                "id":1,
                "source": "海南省卫健委",
                "title": "海南61岁确诊女子身亡 曾专家会诊100多次抢救10次",
                "url": "http://3g.163.com/news/20/0305/20/F700A6B00001899O.html",
                "commentCount": 0,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/235f33d6p00q6q0z600mtc000s600e3c.png",
                "ptime": "2020-03-05 20:50:02"
            }, {
                "id":2,
                "source": "新京报",
                "title": "市委书记发话:谁再搞形式主义官僚主义 绝不留面子",
                "url": "http://3g.163.com/news/20/0305/20/F6VVN81D0001899O.html",
                "commentCount": 275,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/7dbedeb4j00q6q2h4001dc000s600e3c.jpg",
                "ptime": "2020-03-05 20:39:41"
            }, {
                "id":3,
                "source": "梨视频",
                "title": "首位判断并上报新冠肺炎医生：说人传人时已很麻烦",
                "url": "http://3g.163.com/news/20/0305/19/F6VRGE100001899O.html",
                "commentCount": 5138,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/025c1275p00q6pwxe00fec000s600e3c.png",
                "ptime": "2020-03-05 19:26:04"
            }, {
                "id":4,
                "source": "DeepTech深科技#",
                "title": "美国不再公布确诊人数 还对医务人员下“封口令”",
                "url": "F6VMU6AV05119734",
                "commentCount": 14690,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/80be4698p00q6pwl3009hc000s600e3c.png",
                "ptime": "2020-03-05 19:14:27"
            }, {
                "id":5,
                "source": "环球军事时报#",
                "title": "\"最严重间谍案\"！驻伊美军一美籍女翻译被指控泄密",
                "url": "F6VI10J105504DOH",
                "commentCount": 54,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/6fc20c11p00q6q2aa004mc0009c005uc.png",
                "ptime": "2020-03-05 21:17:46"
            }, {
                "id":6,
                "source": "东西湖发布#",
                "title": "8岁男孩玩耍不慎掉出窗外 母亲救其未果当场坠亡",
                "url": "http://3g.163.com/news/20/0305/17/F6VK3SGS0001899O.html",
                "commentCount": 54,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/2312114ep00q6pr3y00lac000s600e3c.png",
                "ptime": "2020-03-05 17:16:52"
            }, {
                "id":7,
                "source": "英国英鸟#",
                "title": "伊朗男子疑似确诊 倒路边猛烈咳嗽却等不来救护车",
                "url": "",
                "commentCount": 14420,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/2eb97adcj00q6pyza000dc000s600e3c.jpg",
                "ptime": "2020-03-05 20:06:11"
            }, {
                "id":8,
                "source": "环球时报评论",
                "title": "香港昨天这例输入性确诊病例 细思恐极",
                "url": "F6VDB0IK05504DP0",
                "commentCount": 4425,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/e7afaddap00q6pt3600fwc000s600e3c.png",
                "ptime": "2020-03-05 18:00:12"
            }, {
                "id":9,
                "source": "澎湃新闻#",
                "title": "浙江女孩穿睡衣光脚报警称被家暴 竟意外寻回生母",
                "url": "http://3g.163.com/news/20/0305/16/F6VG36UB0001899O.html",
                "commentCount": 24078,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/f8bdcfa5p00q6pntc00rgc000s600e3c.png",
                "ptime": "2020-03-05 16:06:36"
            }, {
                "id":9,
                "source": "长安街知事",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":10,
                "source": "长安街知#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":11,
                "source": "长安街事#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":12,
                "source": "长安知事#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":13,
                "source": "长街知事#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":14,
                "source": "安街知事#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }, {
                "id":15,
                "source": "长安街#",
                "title": "杨宜勇辟谣：未参加\"外国人永久居留管理条例\"起草",
                "url": "http://3g.163.com/news/20/0305/19/F6VRU6750001899O.html",
                "commentCount": 2302,
                "imgsrc": "http://cms-bucket.ws.126.net/2020/0305/150b2579p00q6pxfs003qc0009c005uc.png",
                "ptime": "2020-03-05 19:33:34"
            }]
        }
    },
    created() {
    },
    methods:{
    }
}
</script>
<style>
.mui-table-view li h1 {
    font-size: 14px;
}
    .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>