<template>
    <v-container fluid>
        <v-layout
                text-xs-center
                wrap
        >
            <!--分两栏-->
            <v-container>
                <v-layout row wrap mt-3>
                    <!--左边-->
                    <v-flex xs12 sm12 md9 lg9 xl9>
                        <v-card>
                            <v-container fluid grid-list-lg>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-card color="blue-grey darken-2" class="white--text">
                                            <v-layout row wrap>
                                                <v-flex xs12 sm8 md8 lg8 xl8>
                                                    <v-card-title primary-title>
                                                        <div>
                                                            <div class="headline text-xs-left">Unlimited music now</div>
                                                            <div class="text-xs-left">
                                                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                                            </div>
                                                        </div>
                                                    </v-card-title>
                                                </v-flex>
                                                <v-flex xs12 sm4 md4 lg4 xl4>
                                                    <v-card-text>
                                                        <!--height="125px"-->
                                                        <v-img
                                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                                height="auto"
                                                                contain
                                                        ></v-img>
                                                    </v-card-text>
                                                </v-flex>
                                            </v-layout>
                                            <v-divider light></v-divider>
                                            <v-card-actions>
                                                <v-btn fab small href="/">
                                                    <v-avatar size="36" color="grey lighten-4">
                                                        <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                                                    </v-avatar>
                                                </v-btn>
                                                <strong class="mx-1">功夫护手霜</strong>
                                                <strong class="mx-1">2018-01-09</strong>
                                                <v-rating v-model="rating"
                                                          background-color="yellow darken-1"
                                                          color="yellow" hover small class="hidden-xs-only"></v-rating>
                                                <v-spacer></v-spacer>
                                                <v-btn flat dark>查看全文</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-flex>

                                    <v-flex xs12>
                                        <v-card color="cyan darken-2" class="white--text">
                                            <v-layout>
                                                <v-flex xs7>
                                                    <v-card-title primary-title>
                                                        <div>
                                                            <div class="headline">Supermodel</div>
                                                            <div>Foster the People</div>
                                                            <div>(2014)</div>
                                                        </div>
                                                    </v-card-title>
                                                </v-flex>
                                                <v-flex xs5>
                                                    <v-img
                                                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                            height="125px"
                                                            contain
                                                    ></v-img>
                                                </v-flex>
                                            </v-layout>
                                            <v-divider light></v-divider>
                                            <v-card-actions class="pa-3">
                                                Rate this album
                                                <v-spacer></v-spacer>
                                                <v-rating v-model="rating"
                                                          background-color="yellow darken-1"
                                                          color="yellow" hover></v-rating>
                                            </v-card-actions>
                                        </v-card>
                                    </v-flex>

                                    <v-flex xs12>
                                        <v-card color="purple" class="white--text">
                                            <v-layout row>
                                                <v-flex xs7>
                                                    <v-card-title primary-title>
                                                        <div>
                                                            <div class="headline">Halycon Days</div>
                                                            <div>Ellie Goulding</div>
                                                            <div>(2013)</div>
                                                        </div>
                                                    </v-card-title>
                                                </v-flex>
                                                <v-flex xs5>
                                                    <v-img
                                                            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                                                            height="125px"
                                                            contain
                                                    ></v-img>
                                                </v-flex>
                                            </v-layout>
                                            <v-divider light></v-divider>
                                            <v-card-actions class="pa-3">
                                                Rate this album
                                                <v-spacer></v-spacer>
                                                <v-rating v-model="rating" half-increments readonly></v-rating>
                                            </v-card-actions>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <v-flex xs12>
                                <v-btn color="info" href="/">
                                    <span>加载更多</span>
                                </v-btn>
                            </v-flex>
                        </v-card>
                    </v-flex>

                    <!--右边-->
                    <v-flex xs3 elevation-1 class="hidden-xs-only hidden-sm-only">
                        <v-subheader class="font-weight-bold blue--text">写帖子</v-subheader>
                        <router-view></router-view>
                        <v-divider></v-divider>
                        <v-subheader class="font-weight-bold blue--text">排行榜</v-subheader>
                        <v-tabs
                                centered
                                slider-color="cyan"
                                class="align-center"
                        ><!--  dark -->
                            <v-tab :key="1" ripple>热度排行</v-tab>
                            <v-tab :key="2" ripple>浏览排行</v-tab>
                            <v-tab-item :key="1">
                                <v-card flat>
                                    <v-card-text>
                                        <v-list>
                                            <v-list-tile @click=""  v-for="n in 5">
                                                <v-list-tile-content>
                                                    <v-list-tile-sub-title><a href="" class="text--primary">你知道么，世界上的安全软件分为两类……</a></v-list-tile-sub-title>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item :key="2">
                                <v-card flat>
                                    <v-card-text>【系统更新】360OS-360手机N7-3.0.111 稳定</v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                        <v-subheader class="font-weight-bold blue--text">活跃用户</v-subheader>
                        <v-list>
                            <v-list-tile
                                    v-for="item in users"
                                    :key="item.title"
                                    avatar
                                    @click=""
                            >
                                <v-list-tile-action>
                                    <v-icon v-if="item.icon" color="pink">fas fa-star</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                                </v-list-tile-content>

                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>
                            </v-list-tile>
                        </v-list>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            rating: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            users: [
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
            ],
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com'
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com'
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuetifyjs.com'
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs'
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify'
                }
            ]
        })
    }
</script>

<style>

</style>
