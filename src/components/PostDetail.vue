<template>
    <v-container>
        <v-layout wrap row>
            <!--帖子主体-->
            <v-flex>
                <v-card flat>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline text-xs-center">Unlimited music now</div>
                            <div class="text-xs-left">
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                                Listen to your favorite artists and albums whenever and wherever, online and offline.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-divider></v-divider>
            <!--帖子评论-->
            <v-flex>
                <v-card flat>
                    <v-card-title primary-title>
                        <v-flex>
                            <div class="headline text-xs-center">评论</div>
                            <v-list three-line>
                                <template v-for="(item, index) in items">
                                    <v-subheader
                                            v-if="item.header"
                                            :key="item.header"
                                    >
                                        {{ item.header }}
                                    </v-subheader>

                                    <v-divider
                                            v-else-if="item.divider"
                                            :inset="item.inset"
                                            :key="index"
                                    ></v-divider>
                                    <!--@click="" 会变成手势-->
                                    <v-list-tile
                                            v-else
                                            :key="item.title"
                                            avatar
                                    >
                                        <v-list-tile-avatar>
                                            <img :src="item.avatar">
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-tile-action>
                                            <v-btn flat icon small>
                                                <v-icon small color="teal">fas fa-thumbs-up</v-icon>
                                                <span>253</span>
                                            </v-btn>
                                            <v-menu bottom left>
                                                <v-btn slot="activator" icon>
                                                    <v-icon>fas fa-angle-down</v-icon>
                                                </v-btn>
                                                <v-list>
                                                    <v-list-tile>
                                                        <v-tooltip left>
                                                            <v-btn icon small slot="activator">
                                                                <v-icon small color="blue-grey lighten-1">fas fa-trash-alt</v-icon>
                                                            </v-btn>
                                                            <span>删除</span>
                                                        </v-tooltip>
                                                    </v-list-tile>
                                                    <v-list-tile>
                                                        <v-tooltip left>
                                                            <v-btn icon small slot="activator">
                                                                <v-icon small color="blue-grey lighten-1">fas fa-comment-alt</v-icon>
                                                            </v-btn>
                                                            <span>回复</span>
                                                        </v-tooltip>
                                                    </v-list-tile>
                                                </v-list>
                                            </v-menu>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                </template>
                            </v-list>
                            <v-flex class="text-xs-center">
                                <v-btn color="info" href="/">
                                    <span>加载更多</span>
                                </v-btn>
                            </v-flex>
                        </v-flex>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "PostDetail",
        data: () => ({
            items: [
                { header: 'Today' },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
                },
                { divider: true, inset: true },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                }
            ]
        })
    }
</script>

<style scoped>

</style>
