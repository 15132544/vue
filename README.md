###这是一个牛逼的项目
####上传代码到github
git add .
git commit -m ""
git push

##制作App组件
1.完成header区域 使用的是mint-UI中的header组件

2.制作底部的 tabbar 区域 ，使用的是 mui的 tabbar.html
+ 1.1
     + 在制作购物车 小图标的时候 操作会相对多一些
     + 先把扩展图标的 css 样式 拷贝到项目 lib中的 mui 样式中去
     + 拷贝字体库 ttf 文件，到项目中 为购物车小图标添加如下样式“mui-icon mui-icon-extra mui-icon-extra-cart”
     + 1.2
     + 改造 tabbar 为 router-link 路由标签 
     + <span color='red'>设置路由高亮</span>使用路由的第二个参数 linkActiveClass 更改选中路由的class类 默认是router-link-active 使其为mui-active 为mui的高亮
 
 
 3.要在中间区域放置一个router-view路由占位区 展示路由匹配的组件 
  + 实现 tabbar 路由组件的切换功能
  ######点击 tabbar 中的链接 展示对应路由的相关组件
    1.创建对应的组件 存放在 components 中的tabbar文件夹中
    2.对路由进行配置 在router.js中导入对应的路由组件
    
##4.制作首页轮播图布局
使用mint-ui的组件
1.按需导入组件 <code>import { Header,Swipe,SwipeItem } from 'mint-ui';</code>
2.给轮播图组件设置高度 .mint-swipe
##加载轮播图数据
1.获取数据，如何获取呢？ 使用vue-resources
2.使用 vue-resource 的 this.$http.get 获取数据
3.获取到的数据，要使用数组的push方法保存到data数据上
4.使用 v-for 循环 渲染每个item项
##改造九宫格区域
+ 更改默认九宫格的默认灰色样式
导入图片 更改图标 图片中 file-loader需要是4.2.0版本 不然路径会显示为 object Module
###路由重定向
    默认访问/根路径 重定向至/home路由下{path:"/",redirect:'/home'}
###组件切换动画效果实现
    1.首先解决切换tabbar有滚动条
        给最外层div添加 overflow-x:hidden样式 不能添加y轴 会使下滑滚动隐藏 主要要做的是隐藏左右两侧
    2.动画部分用transtion标签包裹 添加
        .v-enter{
            opacity: 0;
            transform: translateX(100%);
            /*实现动画待进入的从右往左进入*/
        }
        .v-leave-to{
            opacity: 0;
            transform: translateX(-100%);
            //实现离开动画冲右往左离开
            position: absolute;
            //解决进入动画会从下往上进入 
            
        }
        .v-enter-active,.v-leave-active{
            transition: all 0.5s ease;
        }
        
##改造新闻资讯路由链接
    新闻资讯更改为router-link标签 跳转到‘/home/newlist’路由下 编写NewsList组件
    配置连接路由跳转
##新闻资讯页面制作
1.绘制界面
+ 使用mui中的media-list组件
2.使用vue-resource获取数据
3.渲染真实数据 <假数据>

##实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为 router-link，同时，在跳转的时候应该提供ID唯一标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来
4.进入页面发起ajax请求 通过$route.params.id 拿到url中传过来的id
###获取并渲染新闻详情数据

###单独封装一个 comment.vue 评论子组件
1.创建一个单独的 comment.vue 组件模板
2.在需要使用comment组件的页面中 先手动导入 comment.vue组件
 + import comment from '.....comment.vue'
3.在父组件中 使用 'components' 属性 将导入的comment组件注册为自己的子组件
4.将注册的子组件名称 以标签的形式，在页面中引用
 + 为加载更多按钮绑定点击事件 在事件中 请求下一页数据
 + 点击加载更多 让PageIndex++ 然后重新调用一下 this.getComment()方法 重新获取最新一页的数据
 + 为了防止新数据覆盖老数据 在点击加载更多的时候 每当获取新数据 应该让老数据拼接上新数据concat
 
 ## 发表评论
 1.把文本框 做双向数据绑定 
 2.为发表按钮绑定事件
 3.校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
 4.通过vue-resource 发送一个请求 把评论提交给服务器
 5.当发表评论ok后 重新刷新列表，以查看更新的评论
  + 如果调用 getComments 方法 重新刷新评论的话 可能 只能得到最后一页的评论 前几页的评论获取不到
  + 换一种思路 ：当评论成功后 在客户端手动拼接一个最新的评论对象 然后 调用数组的 unshift方法 将评论追加到 data 中 comment数组的开头
  这样就能实现刷新评论列表的需求
 
##改造图片分享的按钮为路由链接 并显示对应的组件页面

##绘制 图片列表 组件页面结构并美化样式
1.制作顶部滑动条
2.制作底部的图片列表

###制作顶部滑动条
1.需要借助于 mui 中的 tab-top-webview-main.html
2.需要把 slider 区域的 mui-fullscreed类去掉
3. 滑动条无法正常触发滑动，通过官方文档 发现这是一个js组件，需要被初始化：
    + 导入 mui.js
    + 调用官方提供的方式 去初始化
    ```
   mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005//flick 减速系数，系数越大，滚动系数越慢，滚动距离越小，默认值是0.0006
          
       })
   ```
4. 解决进入图片分享后没有刷新滑动组件无法滑动 要等DOM元素加载完毕 在mounted()生命周期函数里执行滑动初始化

##制作图片列表区域
1.


##尝试在手机上 在进行项目的预览和测试
1.要保证手机可以正常运行
2.要保证 手机 和 开发项目的电脑处于用一个 wifi环境中 也就是说 手机可以访问到电脑的 ip地址
3.打开项目的 package.json文件，在dev脚本中 添加一个 --host指令 把当前电脑的 WiFi ip地址设置为--host指令
 + 如何查看自己电脑的ip 在 cmd 终端 运行 ipconfig 查看无线网的ip地址
 