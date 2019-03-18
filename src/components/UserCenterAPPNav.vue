<template>
    <!--仅在移动端显示-->
    <v-list class="hidden-md-only hidden-lg-only hidden-xl-only">
        <v-list-group
                v-for="item in items"
                v-model="item.active"
                :key="item.title"
                :prepend-icon="item.action"
                no-action
                active-class="blue--text"
        >
            <v-list-tile slot="activator" ripple avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <!--@click=""-->
            <v-list-tile
                    v-for="subItem in item.items"
                    v-model="subItem.active"
                    :key="subItem.title"
                    :href="subItem.url"
                    active-class="blue--text"
            >
                <v-btn flat>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-btn>
                <v-list-tile-action>
                    <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
            </v-list-tile>

        </v-list-group>
    </v-list>
</template>

<script>
    export default {
        name: "UserCenterAPPNav",
        data: () => ({
            items: [
                {
                    action: 'fas fa-clipboard',
                    title: '帖子',
                    active: true,
                    items: [
                        { title: '我的帖子',action: 'fas fa-clipboard',active: true,url: '/#/userCenter/myPost' },
                        { title: '我的收藏',action: 'fas fa-bookmark',url: '/#/userCenter/collection' },
                        { title: '帖子统计',action: 'fas fa-chart-line',url: '/#/userCenter/postStat' }
                    ]
                },
                {
                    action: 'fas fa-award',
                    title: '系统',
                    // active: true,
                    items: [
                        { title: '日志',action: 'fas fa-list-alt',url: '/#/userCenter/log' },    //  v-timeline
                        { title: '数据',action: 'fas fa-chart-line',url: '/#/userCenter/data' },  // 获得的星星...
                        { title: '系统消息',action: 'fas fa-envelope',url: '/#/userCenter/sysMsg' },
                        { title: '私信消息',action: 'fas fa-comment-dots',url: '/#/userCenter/directMsg' }
                    ]
                },
                {
                    action: 'fas fa-sticky-note',
                    title: '随手记',
                    items: [
                        { title: '随手记',action: 'fas fa-sticky-note',url: '/#/userCenter/notes' }
                    ]
                },
                {
                    action: 'fas fa-hotel',
                    title: '小黑屋',
                    items: [
                        { title: '我的举报',action: 'fas fa-video',url: '/#/userCenter/report' },
                        { title: '举报我的',action: 'fas fa-car-side',url: '/#/userCenter/reported' },
                    ]
                },
                {
                    action: 'fas fa-users',
                    title: '圈子',
                    items: [
                        { title: '我的访客',action: 'fas fa-eye',url: '/#/userCenter/visitor' },
                        { title: '我的粉丝',action: 'fas fa-user-friends',url: '/#/userCenter/fans' },
                        { title: '我的关注',action: 'fas fa-heart',url: '/#/userCenter/noticer' }
                    ]
                },
                {
                    action: 'fas fa-cogs',
                    title: '设置',
                    items: [
                        { title: '个人资料',action: 'fas fa-id-card',url: '/#/userCenter/userinfo' },
                        { title: '修改密码',action: 'fas fa-fingerprint',url: '/#/userCenter/changePassword' }
                    ]
                }
            ]
        })
    }
</script>

<style scoped>

</style>
