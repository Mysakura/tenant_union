<template>
    <v-card color="blue-grey darken-2" dark>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm12 md4 lg4 xl4>
                    <v-card color="blue-grey darken-4" class="mb-2" dark>
                        <v-card-text>
                            <v-layout justify-center row fill-height>
                                <v-flex xs12>
                                    <v-card class="text-xs-center pa-4">
                                        <v-avatar color="green darken-2">
                                            <v-icon dark>fas fa-newspaper</v-icon>
                                        </v-avatar>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card color="blue-grey darken-4" class="text-xs-center pa-4" flat>
                                        <h2 class="headline">3525</h2>
                                        <div>帖子数</div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-card color="blue-grey darken-4" class="mb-2" dark>
                        <v-card-text>
                            <v-layout justify-center row fill-height>
                                <v-flex xs12>
                                    <v-card class="text-xs-center pa-4">
                                        <v-avatar color="lime darken-2">
                                            <v-icon dark>fas fa-user</v-icon>
                                        </v-avatar>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card color="blue-grey darken-4" class="text-xs-center pa-4" flat>
                                        <h2 class="headline">1000000</h2>
                                        <div>用户数</div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-card color="blue-grey darken-4" class="mb-2" dark>
                        <v-card-text>
                            <v-layout justify-center row fill-height>
                                <v-flex xs12>
                                    <v-card class="text-xs-center pa-4">
                                        <v-avatar color="red darken-2">
                                            <v-icon dark>fas fa-tint</v-icon>
                                        </v-avatar>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card color="blue-grey darken-4" class="text-xs-center pa-4" flat>
                                        <h2 class="headline">100260000</h2>
                                        <div>贡献值</div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-card color="blue-grey darken-4" class="mb-2" dark>
                        <v-card-text>
                            <v-layout justify-center row fill-height>
                                <v-flex xs12>
                                    <v-card class="text-xs-center pa-4">
                                        <v-avatar color="blue darken-2">
                                            <v-icon dark>fas fa-comment-dots</v-icon>
                                        </v-avatar>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card color="blue-grey darken-4" class="text-xs-center pa-4" flat>
                                        <h2 class="headline">860000</h2>
                                        <div>消息数</div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-card color="blue-grey darken-4" dark>
                        <v-card-text>
                            <v-layout justify-center row fill-height>
                                <v-flex xs12>
                                    <v-card class="text-xs-center pa-4">
                                        <v-avatar color="yellow darken-2">
                                            <v-icon dark>fas fa-eye</v-icon>
                                        </v-avatar>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card color="blue-grey darken-4" class="text-xs-center pa-4" flat>
                                        <h2 class="headline">456820000</h2>
                                        <div>浏览量</div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm12 md8 lg8 xl8>
                    <v-card color="blue-grey darken-4" dark>
                        <v-card-text>
                            <DataChartA/>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex xs12 sm4 md4 lg4 xl4>
                    <v-card color="blue-grey darken-4" dark>
                        <v-card-text>
                            <DataChartB/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 xl4>
                    <v-card color="blue-grey darken-4" dark>
                        <v-card-text>
                            <DataChartC/>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md4 lg4 xl4>
                    <v-card color="blue-grey darken-4" dark>
                        <v-card-text>
                            <DataChartD/>
                        </v-card-text>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import DataChartA from './DataChartA.vue'
    import DataChartB from './DataChartB.vue'
    import DataChartC from './DataChartC.vue'
    import DataChartD from './DataChartD.vue'

    export default {
        name: "Data",
        components: {DataChartA,DataChartB,DataChartC,DataChartD}
    }
</script>

<style scoped>

</style>
