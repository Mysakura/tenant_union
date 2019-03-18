<template>
    <v-app>
        <v-toolbar app>
            <!--<v-spacer class="hidden-md-only hidden-lg-only hidden-xl-only"></v-spacer>-->
            <!--标题-->
            <v-toolbar-title class="headline">
                <span class="blue--text">Unfriendly world</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--菜单-->
            <v-toolbar-items class="hidden-xs-only hidden-sm-only">
                <v-btn flat href="/#/">
                    <v-icon>fas fa-home</v-icon>
                </v-btn>
                <v-btn flat href="/#/damn">曝光</v-btn>
                <v-btn flat href="/#/share">分享</v-btn>
                <v-btn flat href="/#/userCenter/myPost">个人中心</v-btn>
            </v-toolbar-items>
            <v-spacer class="hidden-xs-only hidden-sm-only"></v-spacer>
            <!--登录组件-->
            <LoginReg/>
            <!--写帖子组件-->
            <WriteAPP/>
        </v-toolbar>

        <v-content>
            <!--组件-->
            <router-view name="MainView"/>
            <!--PC底部-->
            <v-footer height="auto" dark>
                <v-layout
                        justify-center
                        row
                        wrap
                >
                    <v-card
                            class="flex"
                            flat
                            tile
                    >
                        <v-card-title class="teal">
                            <strong class="subheading mx-3">Get connected with us on social networks!</strong>
                            <v-spacer class="hidden-xs-only hidden-sm-only"></v-spacer>
                            <v-btn
                                    v-for="icon in icons"
                                    :key="icon"
                                    class="mx-3"
                                    dark
                                    icon
                            >
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-card-title>

                        <v-card-actions class="grey darken-3 justify-center">
                            &copy;{{ new Date().getFullYear() }} — <a class="white--text" href=""><strong>Tenant
                            Union</strong></a>
                        </v-card-actions>
                    </v-card>
                </v-layout>
            </v-footer>
            <v-spacer class="hidden-md-only hidden-lg-only hidden-xl-only mb-5 pb-2"></v-spacer>
            <!--移动端底部-->
            <v-bottom-nav
                    class="hidden-md-only hidden-lg-only hidden-xl-only"
                    :active.sync="bottomNav"
                    :value="true"
                    height="auto"
                    fixed
            >
                <v-btn
                        href="/#/"
                        color="teal"
                        flat
                        value="home"
                >
                    <span>首页</span>
                    <v-icon>fas fa-home</v-icon>
                </v-btn>

                <v-btn
                        href="/#/damn"
                        color="teal"
                        flat
                        value="recent"
                >
                    <span>曝光</span>
                    <v-icon>fas fa-angry</v-icon>
                </v-btn>

                <v-btn
                        href="/#/share"
                        color="teal"
                        flat
                        value="favorites"
                >
                    <span>分享</span>
                    <v-icon>fas fa-heart</v-icon>
                </v-btn>

                <v-btn
                        href="/#/userCenter"
                        color="teal"
                        flat
                        value="nearby"
                >
                    <span>个人中心</span>
                    <v-icon>fas fa-user</v-icon>
                </v-btn>
                <!--<v-btn-->
                        <!--href="/#/write"-->
                        <!--color="teal"-->
                        <!--flat-->
                        <!--value="write"-->
                <!--&gt;-->
                    <!--<span>写帖子</span>-->
                    <!--<v-icon>fas fa-signature</v-icon>-->
                <!--</v-btn>-->
            </v-bottom-nav>
        </v-content>

    </v-app>
</template>

<script>
    import LoginReg from './components/LoginReg'
    import WriteAPP from './components/WriteAPP'

    export default {
        name: 'App',
        components: {
            LoginReg,WriteAPP
        },
        data() {
            return {
                bottomNav: 'home',
                items: [
                    'All', 'Family', 'Friends', 'Coworkers'
                ], icons: [
                    'fab fa-weixin',
                    'fab fa-qq',
                    'fab fa-weibo',
                    'fab fa-alipay',
                    'fab fa-github'
                ]
            }
        }
    }
</script>
