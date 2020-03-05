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