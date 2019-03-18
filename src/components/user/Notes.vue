<template>
    <v-card>
        <v-container
                fluid
                grid-list-lg
        >
            <v-layout row wrap>
                <v-flex xs12>
                    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" full-width>
                        <v-btn slot="activator" color="blue-grey" dark block>
                            <v-icon>fas fa-plus</v-icon>
                            <span>&nbsp;添加</span>
                        </v-btn>
                        <v-card>
                            <v-toolbar dark color="teal darken-1">
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon>fas fa-times</v-icon>
                                </v-btn>
                                <v-toolbar-title>随手记</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn dark flat @click="dialog = false">保存</v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <v-list three-line subheader>
                                <v-container fluid>
                                    <v-layout column wrap>
                                        <v-flex xs6>
                                            <v-flex xs6>
                                                <v-list-tile-title>标题</v-list-tile-title>
                                                <v-text-field
                                                        single-line
                                                        clearable
                                                        color="cyan darken-1"
                                                ></v-text-field>
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-list>
                            <v-divider></v-divider>
                            <v-list three-line subheader>
                                <v-container fluid>
                                    <v-layout column wrap>
                                        <v-flex xs12>
                                            <v-list-tile-title>正文</v-list-tile-title>
                                            <v-textarea
                                                    outline
                                                    clearable
                                                    auto-grow
                                                    color="cyan darken-1"
                                                    name="input-7-4"
                                                    label="正文"
                                                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                            ></v-textarea>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-list>
                        </v-card>
                    </v-dialog>
                </v-flex>
                <v-flex xs12>
                    <v-card color="blue-grey darken-2" class="white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Unlimited music now</div>
                                <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat dark>2019-01-10 16:46</v-btn>
                            <v-tooltip top dark color="cyan darken-1">
                                <v-btn flat icon dark small slot="activator"><v-icon small>fas fa-trash-alt</v-icon></v-btn>
                                <span>删除</span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card color="blue-grey darken-2" class="white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Unlimited music now</div>
                                <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat dark>2019-01-10 16:46</v-btn>
                            <v-tooltip top dark color="cyan darken-1">
                                <v-btn flat icon dark small slot="activator"><v-icon small>fas fa-trash-alt</v-icon></v-btn>
                                <span>删除</span>
                            </v-tooltip>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <v-card color="blue-grey darken-2" class="white--text">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">Unlimited music now</div>
                                <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat dark>2019-01-10 16:46</v-btn>
                            <v-tooltip top dark color="cyan darken-1">
                                <v-btn flat icon dark small slot="activator"><v-icon small>fas fa-trash-alt</v-icon></v-btn>
                                <span>删除</span>
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

            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "Notes",
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        })
    }
</script>

<style scoped>

</style>
