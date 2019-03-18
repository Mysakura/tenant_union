<template>
    <div>
        <!--横向-->
        <!--<v-stepper v-model="e1">-->
            <!--<v-stepper-header>-->
                <!--<v-stepper-step :complete="e1 > 1" step="1" color="cyan darken-1">验证当前密码</v-stepper-step>-->

                <!--<v-divider></v-divider>-->

                <!--<v-stepper-step :complete="e1 > 2" step="2" color="cyan darken-1">输入新密码</v-stepper-step>-->

                <!--<v-divider></v-divider>-->

                <!--<v-stepper-step :complete="e1 > 2" step="3" color="cyan darken-1">修改成功</v-stepper-step>-->
            <!--</v-stepper-header>-->

            <!--<v-stepper-items>-->
                <!--<v-stepper-content step="1">-->
                    <!--<v-card-->
                            <!--class="mb-5"-->
                            <!--height="145px"-->
                            <!--flat-->
                    <!--&gt;-->
                        <!--<v-card-text>-->
                            <!--<v-layout justfy-center>-->
                                <!--<v-flex xs12 sm12 md4 lg4 xl4>-->
                                    <!--<v-text-field-->
                                            <!--label="旧密码"-->
                                            <!--single-line-->
                                            <!--color="lime darken-4"-->
                                            <!--prepend-icon="fas fa-key"-->
                                    <!--&gt;</v-text-field>-->
                                <!--</v-flex>-->
                            <!--</v-layout>-->
                        <!--</v-card-text>-->
                    <!--</v-card>-->

                    <!--<v-btn-->
                            <!--color="cyan darken-1"-->
                            <!--dark-->
                            <!--@click="e1 = 2"-->
                    <!--&gt;-->
                        <!--下一步-->
                    <!--</v-btn>-->
                <!--</v-stepper-content>-->

                <!--<v-stepper-content step="2">-->
                    <!--<v-card-->
                            <!--class="mb-5"-->
                            <!--height="145px"-->
                            <!--flat-->
                    <!--&gt;-->
                        <!--<v-card-text>-->
                            <!--<v-layout column>-->
                                <!--<v-flex xs12>-->
                                    <!--<v-flex xs12 sm12 md4 lg4 xl4>-->
                                        <!--<v-text-field-->
                                                <!--label="新密码"-->
                                                <!--single-line-->
                                                <!--color="lime darken-4"-->
                                                <!--prepend-icon="fas fa-key"-->
                                        <!--&gt;</v-text-field>-->
                                    <!--</v-flex>-->
                                <!--</v-flex>-->
                                <!--<v-flex xs12>-->
                                    <!--<v-flex xs12 sm12 md4 lg4 xl4>-->
                                        <!--<v-text-field-->
                                                <!--label="确认密码"-->
                                                <!--single-line-->
                                                <!--color="lime darken-4"-->
                                                <!--prepend-icon="fas fa-key"-->
                                        <!--&gt;</v-text-field>-->
                                    <!--</v-flex>-->
                                <!--</v-flex>-->
                            <!--</v-layout>-->
                        <!--</v-card-text>-->
                    <!--</v-card>-->

                    <!--<v-btn-->
                            <!--color="cyan darken-1"-->
                            <!--dark-->
                            <!--@click="e1 = 3"-->
                    <!--&gt;-->
                        <!--下一步-->
                    <!--</v-btn>-->

                    <!--<v-btn flat @click="e1 = 1">上一步</v-btn>-->
                <!--</v-stepper-content>-->

                <!--<v-stepper-content step="3">-->
                    <!--<v-card-->
                            <!--class="mb-5"-->
                            <!--color="success lighten-1"-->
                            <!--dark-->
                            <!--height="145px"-->
                            <!--flat-->
                    <!--&gt;-->
                        <!--<v-container fill-height>-->
                            <!--<v-layout align-center justify-center row fill-height>-->
                                <!--<v-flex xs12>-->
                                    <!--<div class="text-xs-center headline">-->
                                        <!--<v-icon medium>fas fa-check</v-icon>-->
                                        <!--修改成功！-->
                                    <!--</div>-->
                                <!--</v-flex>-->
                            <!--</v-layout>-->
                        <!--</v-container>-->
                    <!--</v-card>-->
                    <!--<v-btn-->
                            <!--color="cyan darken-1"-->
                            <!--dark-->
                            <!--@click="e1 = 1"-->
                    <!--&gt;-->
                        <!--完成并返回-->
                    <!--</v-btn>-->
                <!--</v-stepper-content>-->
            <!--</v-stepper-items>-->
        <!--</v-stepper>-->
        <!--纵向-->
        <v-stepper v-model="e1" vertical>
            <v-stepper-step :complete="e1 > 1" step="1" color="cyan darken-1">验证当前密码</v-stepper-step>
            <v-stepper-content step="1">
                <v-card
                        class="mb-5"
                        height="95px"
                        flat
                >
                    <v-card-text>
                        <v-layout justfy-center>
                            <v-flex xs12 sm12 md4 lg4 xl4>
                                <v-text-field
                                        label="旧密码"
                                        single-line
                                        color="lime darken-4"
                                        prepend-icon="fas fa-key"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>

                <v-btn
                        color="cyan darken-1"
                        dark
                        @click="e1 = 2"
                >
                    下一步
                </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 2" step="2" color="cyan darken-1">输入新密码</v-stepper-step>
            <v-stepper-content step="2">
                <v-card
                        class="mb-5"
                        height="145px"
                        flat
                >
                    <v-card-text>
                        <v-layout column>
                            <v-flex xs12>
                                <v-flex xs12 sm12 md4 lg4 xl4>
                                    <v-text-field
                                            label="新密码"
                                            single-line
                                            color="lime darken-4"
                                            prepend-icon="fas fa-key"
                                    ></v-text-field>
                                </v-flex>
                            </v-flex>
                            <v-flex xs12>
                                <v-flex xs12 sm12 md4 lg4 xl4>
                                    <v-text-field
                                            label="确认密码"
                                            single-line
                                            color="lime darken-4"
                                            prepend-icon="fas fa-key"
                                    ></v-text-field>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>

                <v-btn
                        color="cyan darken-1"
                        dark
                        @click="e1 = 3"
                >
                    下一步
                </v-btn>

                <v-btn flat @click="e1 = 1">上一步</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e1 > 2" step="3" color="cyan darken-1">修改成功</v-stepper-step>
            <v-stepper-content step="3">
                <v-card
                        class="mb-5"
                        color="success lighten-1"
                        dark
                        height="145px"
                        flat
                >
                    <v-container fill-height>
                        <v-layout align-center justify-center row fill-height>
                            <v-flex xs12>
                                <div class="text-xs-center headline">
                                    <v-icon medium>fas fa-check</v-icon>
                                    修改成功！
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
                <v-btn
                        color="cyan darken-1"
                        dark
                        @click="e1 = 1"
                >
                    完成并返回
                </v-btn>
            </v-stepper-content>
        </v-stepper>
    </div>

</template>

<script>
    export default {
        name: "ChangePassword",
        data: () => ({
            e1: 0,
            e6: 1
        })
    }
</script>

<style scoped>

</style>
