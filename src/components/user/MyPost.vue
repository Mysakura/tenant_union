<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card color="blue-grey darken-2" class="white--text">
                    <v-layout>
                        <v-flex xs8>
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
                        <v-flex xs4>
                            <v-card-title primary-title>
                                <!--height="125px"-->
                                <v-img
                                        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                        height="auto"
                                        contain
                                ></v-img>
                            </v-card-title>
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
</template>

<script>
    export default {
        name: "MyPost"
    }
</script>

<style scoped>

</style>
