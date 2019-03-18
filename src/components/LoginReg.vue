<template>
    <v-dialog v-model="dialog" persistent max-width="600">
        <v-btn
                slot="activator"
                flat
                color="blue darken-2"
                class="hidden-xs-only hidden-sm-only"
        >
            <span class="mr-2">登录/注册</span>
            <v-icon>fas fa-sign-in-alt</v-icon>
        </v-btn>
        <v-card>
            <!--<v-card-title class="headline">Use Google's location service?</v-card-title>-->
            <v-card-text>
                <v-tabs
                        slot="extension"
                        v-model="model"
                        centered
                        dark
                        slider-color="yellow"
                >
                    <v-tab href="#tab-1">登录</v-tab>
                    <v-tab href="#tab-2">注册</v-tab>
                </v-tabs>
                <v-tabs-items v-model="model">
                    <!--登录-->
                    <v-tab-item value="tab-1">
                        <v-card flat>
                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12>
                                            <v-text-field label="Email*" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Password*" type="password" required></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-btn
                                                    block
                                                    color="pink darken-2"
                                                    class="hidden-xs-only hidden-sm-only white--text"
                                            >
                                                <span class="mr-2">登录</span>
                                                <v-icon>fas fa-sign-in-alt</v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <!--注册-->
                    <v-tab-item value="tab-2">
                        <v-card
                                class="mx-auto"
                                max-width="500"
                        >
                            <v-card-title class="title font-weight-regular justify-space-between">
                                <span>{{ currentTitle }}</span>
                                <v-avatar
                                        color="blue lighten-2"
                                        class="subheading white--text"
                                        size="24"
                                        v-text="step"
                                ></v-avatar>
                            </v-card-title>

                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-card-text>
                                        <v-text-field
                                                label="Email"
                                                value="XXX@qq.com"
                                        ></v-text-field>
                                        <span class="caption grey--text text--darken-1">
                                            请输入邮箱
                                        </span>
                                    </v-card-text>
                                </v-window-item>

                                <v-window-item :value="2">
                                    <v-card-text>
                                        <v-text-field
                                                label="Password"
                                                type="password"
                                        ></v-text-field>
                                        <v-text-field
                                                label="Confirm Password"
                                                type="password"
                                        ></v-text-field>
                                        <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
                                    </v-card-text>
                                </v-window-item>

                                <v-window-item :value="3">
                                    <div class="pa-3 text-xs-center">
                                        <v-img
                                                class="mb-3"
                                                contain
                                                height="128"
                                                src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                                        ></v-img>
                                        <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
                                        <span class="caption grey--text">Thanks for signing up!</span>
                                    </div>
                                </v-window-item>
                            </v-window>

                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-btn
                                        :disabled="step === 1"
                                        flat
                                        @click="step--"
                                >
                                    Back
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn
                                        :disabled="step === 3"
                                        color="primary"
                                        depressed
                                        @click="step++"
                                >
                                    Next
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">关闭</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Damn",
        data: () => ({
            step: 1,
            dialog: false,
            model: 'tab-1'
        }),
        computed: {
            currentTitle () {
                switch (this.step) {
                    case 1: return '注册'
                    case 2: return '创建密码'
                    default: return '账户创建成功'
                }
            }
        }
    }
</script>

<style scoped>

</style>
