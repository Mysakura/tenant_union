import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Damn from '@/components/Damn'
import Share from '@/components/Share'
import Write from '@/components/Write'
import PostDetail from '@/components/PostDetail'
import UserCenter from '@/components/UserCenter'
import UserCenterAPPNav from '@/components/UserCenterAPPNav'
import TimeLog from '@/components/user/TimeLog'
import MyPost from '@/components/user/MyPost'
import PostStat from '@/components/user/PostStat'
import Notes from '@/components/user/Notes'
import Visitor from '@/components/user/Visitor'
import Fans from '@/components/user/Fans'
import Noticer from '@/components/user/Noticer'
import Collection from '@/components/user/Collection'
import ChangePassword from '@/components/user/ChangePassword'
import UserInfo from '@/components/user/UserInfo'
import SysMsg from '@/components/user/SysMsg'
import DirectMsg from '@/components/user/DirectMsg'
import Report from '@/components/user/Report'
import Reported from '@/components/user/Reported'
import Data from '@/components/user/Data'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                MainView: Home
            },
            children: [
                {
                    path: '',
                    component: Write
                }
            ]
        }, {
            path: '/post/:id',
            name: 'PostDetail',
            components: {
                MainView: PostDetail
            }
        },{
            path: '/damn',
            name: 'Damn',
            components: {
                MainView: Damn
            },
            children: [
                {
                    path: '',
                    component: Write
                }
            ]
        }, {
            path: '/share',
            name: 'Share',
            components: {
                MainView: Share
            },
            children: [
                {
                    path: '',
                    component: Write
                }
            ]
        }, {
            path: '/userCenter',
            name: 'UserCenter',
            components: {
                MainView: UserCenter
            },
            children: [
                {
                    path: '',
                    component: UserCenterAPPNav
                },{
                    path: 'myPost',
                    component: MyPost
                },{
                    // 当 /userCenter/log 匹配成功，
                    // TimeLog 会被渲染在 User 的 <router-view> 中
                    path: 'log',
                    component: TimeLog
                },{
                    path: 'postStat',
                    component: PostStat
                },{
                    path: 'notes',
                    component: Notes
                },{
                    path: 'visitor',
                    component: Visitor
                },{
                    path: 'fans',
                    component: Fans
                },{
                    path: 'noticer',
                    component: Noticer
                },{
                    path: 'collection',
                    component: Collection
                },{
                    path: 'changePassword',
                    component: ChangePassword
                },{
                    path: 'userInfo',
                    component: UserInfo
                },{
                    path: 'sysMsg',
                    component: SysMsg
                },{
                    path: 'directMsg',
                    component: DirectMsg
                },{
                    path: 'report',
                    component: Report
                },{
                    path: 'reported',
                    component: Reported
                },{
                    path: 'data',
                    component: Data
                }
            ]
        }
    ]
})
/*
const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})
*/
