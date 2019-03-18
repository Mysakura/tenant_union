<template>
    <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card color="cyan darken-3" dark>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">虚假信息举报</div>

                                <v-subheader>Default range slider</v-subheader>
                                <v-subheader><strong>目标：</strong>嗷嗷</v-subheader>
                                <v-subheader><strong>举报类型：</strong>虚假信息</v-subheader>
                                <v-subheader><strong>描述：</strong>虚假信息.............</v-subheader>
                                <v-subheader>
                                    <strong>图片证明：</strong>
                                </v-subheader>
                            </div>
                        </v-card-title>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs6 sm4 md4 lg4 xl4>
                                        <v-img
                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                max-width="350px"
                                                aspect-ratio="1.7"
                                        ></v-img>
                                    </v-flex>
                                    <v-flex xs6 sm4 md4 lg4 xl4>
                                        <v-img
                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                max-width="350px"
                                                aspect-ratio="1.7"
                                        ></v-img>
                                    </v-flex>
                                    <v-flex xs6 sm4 md4 lg4 xl4>
                                        <v-img
                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                max-width="350px"
                                                aspect-ratio="1.7"
                                        ></v-img>
                                    </v-flex>
                                    <v-flex xs6 sm4 md4 lg4 xl4>
                                        <v-img
                                                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                                max-width="350px"
                                                aspect-ratio="1.7"
                                        ></v-img>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat dark>2019-01-10 16:46</v-btn>
                            <v-tooltip top dark color="cyan darken-1">
                                <v-btn flat icon dark small slot="activator" @click="snackbar = true"><v-icon small>fas fa-undo</v-icon></v-btn>
                                <span>撤回</span>
                            </v-tooltip>
                            <v-tooltip top dark color="red darken-1">
                                <v-btn icon dark small color="red darken-2" slot="activator"><v-icon small>fas fa-poll</v-icon></v-btn>
                                <span>处理结果</span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card color="cyan darken-3" dark>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">虚假信息举报</div>
                                <v-subheader>Default range slider</v-subheader>
                                <v-subheader><strong>目标：</strong>嗷嗷</v-subheader>
                                <v-subheader><strong>举报类型：</strong>虚假信息</v-subheader>
                                <v-subheader><strong>描述：</strong>虚假信息.............</v-subheader>
                                <v-subheader>
                                    <strong>图片证明：</strong>
                                </v-subheader>
                            </div>
                        </v-card-title>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat dark>2019-01-10 16:46</v-btn>
                            <v-tooltip top dark color="cyan darken-1">
                                <v-btn flat icon dark small slot="activator" @click="snackbar = true"><v-icon small>fas fa-undo</v-icon></v-btn>
                                <span>撤回</span>
                            </v-tooltip>
                            <v-tooltip top dark color="red darken-1">
                                <v-btn icon dark small color="red darken-2" slot="activator"><v-icon small>fas fa-poll</v-icon></v-btn>
                                <span>处理结果</span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card flat>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="blue">加载更多</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-snackbar
                        top
                        right
                        v-model="snackbar"
                        color="pink darken-2"
                        timeout="6000"
                >
                    {{ snackbarText }}
                    <v-btn
                            dark
                            flat
                            @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </v-snackbar>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Report",
        data: () => ({
            snackbar: false,
            snackbarText: '撤回表示您取消对该用户的举报'
        })
    }
</script>

<style scoped>

</style>
