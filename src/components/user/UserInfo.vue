<template>
    <div>
        <v-hover>
            <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="800"
            >
                <v-img
                        :aspect-ratio="16/9"
                        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                        max-height="200"
                >
                    <v-expand-transition>
                        <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                style="height: 20%;"
                        >
                            <v-btn flat dark color="yellow accent-2">修改背景</v-btn>
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-card>
        </v-hover>
        <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="800"
        >
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs6>
                        <!-- single-line 有值的时候不显示label-->
                        <v-text-field
                                label="昵称"
                                color="lime darken-4"
                                prepend-icon="fas fa-user"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                        <v-combobox
                                v-model="select"
                                :items="genders"
                                color="lime darken-4"
                                prepend-icon="fas fa-transgender"
                                label="性别"
                        ></v-combobox>
                    </v-flex>
                    <v-flex xs12>
                        <v-menu
                                ref="menu"
                                :close-on-content-click="false"
                                v-model="menu"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                        >
                            <v-text-field
                                    color="green darken-3"
                                    slot="activator"
                                    v-model="date"
                                    label="生日"
                                    prepend-icon="fas fa-calendar-alt"
                                    readonly
                            ></v-text-field>
                            <v-date-picker
                                    color="green darken-3"
                                    ref="picker"
                                    v-model="date"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    @change="save"
                            ></v-date-picker>
                        </v-menu>
                    </v-flex>
                    <v-flex xs12>
                        <v-subheader class="pl-0">工资&nbsp;<strong>[{{slider}}K]</strong></v-subheader>
                        <v-slider
                                label=""
                                v-model="slider"
                                color="green darken-3"
                                thumb-label="always"
                                thumb-color="red"
                                prepend-icon="fas fa-yen-sign"
                                step="1"
                                max="50"
                        ></v-slider>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data: () => ({
            date: null,
            menu: false,
            genders: [
                {text:'男',value:1},
                {text:'女',value:2}
            ],
            slider: 10,
        }),
        watch: {
            menu (val) {
                val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
            }
        },
        methods: {
            save (date) {
                this.$refs.menu.save(date)
            }
        }
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>
