<template>
    <v-container fluid>
        <v-layout justify-center>
            <v-flex xs12>
                <v-card flat>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <!--个人信息-->
                            <v-flex
                                    v-for="card in cards"
                                    v-bind="{ [`xs${card.flex}`]: true }"
                                    :key="card.title"
                            >
                                <v-card>
                                    <v-img
                                            :src="card.src"
                                            :aspect-ratio="16/9"
                                            width="auto"
                                            max-height="600px"
                                    >
                                        <v-container
                                                fill-height
                                                fluid
                                                pa-2
                                        >
                                            <v-layout align-center justify-center row fill-height>
                                                <v-flex xs12>
                                                    <v-flex xs12 sm9 md6 lg6 xl6 align-center flexbox mx-auto>
                                                        <!--头像-->
                                                        <div class="text-xs-center">
                                                            <v-hover>
                                                                <v-avatar
                                                                        :tile="tile"
                                                                        :size="96"
                                                                        color="grey lighten-4"
                                                                        slot-scope="{ hover }"
                                                                >
                                                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/4.jpg" alt="avatar">
                                                                        <v-expand-transition>
                                                                            <div
                                                                                    v-if="hover"
                                                                                    class="d-flex transition-fast-in-fast-out blue-grey darken-4 v-card--reveal display-3 white--text"
                                                                                    style="height: 30%;"
                                                                            >
                                                                                <v-btn small flat dark color="blue-grey lighten-5">修改头像</v-btn>
                                                                            </div>
                                                                        </v-expand-transition>
                                                                    </v-img>
                                                                </v-avatar>
                                                            </v-hover>
                                                        </div>
                                                        <!--信息面板-->
                                                        <v-card class="mt-3" color="rgba(255, 255, 255, 0.7)">
                                                            <v-card-title primary-title>
                                                                <!--最外层的div很重要-->
                                                                <div>
                                                                    <h3 class="headline mb-0">Kangaroo Valley Safari's Home ！！</h3>
                                                                    <div>
                                                                        <v-chip label color="white">
                                                                            <!--<v-avatar tile class="teal mr-4 white&#45;&#45;text font-weight-bold">帖子数</v-avatar>-->
                                                                            <v-btn flat color="teal">帖子数</v-btn>
                                                                            1225
                                                                        </v-chip>
                                                                    </div>
                                                                    <div>
                                                                        <v-chip label color="white">
                                                                            <!--<v-avatar tile class="teal mr-4 white&#45;&#45;text font-weight-bold">贡献值</v-avatar>-->
                                                                            <v-btn flat color="teal">贡献值</v-btn>
                                                                            332
                                                                        </v-chip>
                                                                    </div>
                                                                </div>
                                                            </v-card-title>

                                                            <v-card-actions>
                                                                <v-spacer></v-spacer>
                                                                <v-tooltip top>
                                                                    <v-btn icon slot="activator">
                                                                        <v-icon color="red">fas fa-heart</v-icon>
                                                                    </v-btn>
                                                                    <span>关注</span>
                                                                </v-tooltip>
                                                                <v-tooltip top>
                                                                    <v-btn icon slot="activator">
                                                                        <v-icon color="red">far fa-heart</v-icon>
                                                                    </v-btn>
                                                                    <span>取消关注</span>
                                                                </v-tooltip>

                                                                <v-tooltip top>
                                                                    <v-btn icon slot="activator">
                                                                        <v-icon color="blue">fas fa-bookmark</v-icon>
                                                                    </v-btn>
                                                                    <span>收藏</span>
                                                                </v-tooltip>

                                                                <v-tooltip top>
                                                                    <v-btn icon slot="activator">
                                                                        <v-icon color="green">fas fa-comment</v-icon>
                                                                    </v-btn>
                                                                    <span>发消息</span>
                                                                </v-tooltip>
                                                                <v-spacer></v-spacer>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-flex>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-img>
                                </v-card>
                            </v-flex>
                            <!--面板-->
                            <v-flex xs12>
                                <v-parallax
                                        class="mt-3"
                                        height="30"
                                        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                                ></v-parallax>
                                <v-layout row fill-height mt-3>
                                    <!--左边导航-->
                                    <v-flex xs3 class="hidden-xs-only hidden-sm-only">
                                        <v-list>
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
                                    </v-flex>
                                    <!--适应移动端-->
                                    <!--<v-flex xs12 class="hidden-md-only hidden-lg-only hidden-xl-only">-->
                                        <!--<router-view></router-view>-->
                                    <!--</v-flex>-->
                                    <!--右边内容，显示移动端组件和PC组件-->
                                    <v-flex xs12>
                                        <router-view></router-view>
                                    </v-flex>
                                </v-layout>

                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "UserCenter",
        data: () => ({
            userTabs: [
                {title: '帖子',id: 'ut_1',icon:'fas fa-clipboard'},
                {title: '通知',id: 'ut_2',icon: 'fas fa-exclamation-circle'},
                {title: '私信',id: 'ut_3',icon: 'fas fa-comments'},
                {title: '设置',id: 'ut_4',icon: 'fas fa-cogs'}
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            cards: [
                {title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12},
                // {title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6},
                // {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6}
            ],
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
                        { title: '个人资料',action: 'fas fa-id-card',url: '/#/userCenter/userInfo' },
                        { title: '修改密码',action: 'fas fa-fingerprint',url: '/#/userCenter/changePassword' }
                    ]
                }
            ]
        })
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .8;
        position: absolute;
        width: 100%;
    }
</style>
