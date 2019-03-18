<template>
    <v-card flat dark>
        <v-card-text>
            <v-timeline class="hidden-xs-only hidden-sm-only" light>
                <v-timeline-item
                        color="purple lighten-2"
                        fill-dot
                        right
                >
                    <!--<span-->
                    <!--slot="opposite"-->
                    <!--:class="`headline font-weight-bold ${year.color}&#45;&#45;text`"-->
                    <!--v-text="year.year"-->
                    <!--&gt;</span>-->
                    <span
                            slot="opposite"
                            :class="`headline font-weight-bold pink--text`"
                    >2019-01-10</span>
                    <v-card>
                        <v-card-title class="purple lighten-2">
                            <v-icon
                                    dark
                                    size="42"
                                    class="mr-3"
                            >
                                mdi-magnify
                            </v-icon>
                            <h2 class="display-1 white--text font-weight-light">Title 1</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs10>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                </v-flex>
                                <v-flex xs2>
                                    <v-icon size="64">mdi-calendar-text</v-icon>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="amber lighten-1"
                        fill-dot
                        left
                        small
                >
                    <v-card>
                        <v-card-title class="amber lighten-1 justify-end">
                            <h2 class="display-1 mr-3 white--text font-weight-light">Title 2</h2>
                            <v-icon
                                    dark
                                    size="42"
                            >mdi-home-outline</v-icon>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs8>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
                                </v-flex>
                                <v-flex xs4>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="cyan lighten-1"
                        fill-dot
                        right
                >
                    <v-card>
                        <v-card-title class="cyan lighten-1">
                            <v-icon
                                    class="mr-3"
                                    dark
                                    size="42"
                            >
                                mdi-email-outline
                            </v-icon>
                            <h2 class="display-1 white--text font-weight-light">Title 3</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex
                                        v-for="n in 3"
                                        :key="n"
                                        xs4
                                >
                                    Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="red lighten-1"
                        fill-dot
                        left
                        small
                >
                    <v-card>
                        <v-card-title class="red lighten-1 justify-end">
                            <h2 class="display-1 mr-3 white--text font-weight-light">Title 4</h2>
                            <v-icon
                                    dark
                                    size="42"
                            >
                                mdi-account-multiple-outline
                            </v-icon>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs2>
                                    <v-icon size="64">mdi-server-network</v-icon>
                                </v-flex>
                                <v-flex xs10>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="green lighten-1"
                        fill-dot
                        right
                >
                    <v-card>
                        <v-card-title class="green lighten-1">
                            <v-icon
                                    class="mr-3"
                                    dark
                                    size="42"
                            >
                                mdi-phone-in-talk
                            </v-icon>
                            <h2 class="display-1 white--text font-weight-light">Title 5</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
            <!--适应移动端-->
            <v-timeline
                    class="hidden-md-only hidden-lg-only hidden-xl-only"
                    align-top
                    dense
            >
                <v-timeline-item
                        color="pink"
                        small
                >
                    <v-layout pt-3>
                        <v-flex xs3>
                            <strong>5pm</strong>
                        </v-flex>
                        <v-flex>
                            <strong>New Icon</strong>
                            <div class="caption">Mobile App</div>
                        </v-flex>
                    </v-layout>
                </v-timeline-item>

                <v-timeline-item
                        color="teal lighten-3"
                        small
                >
                    <v-layout wrap pt-3>
                        <v-flex xs3>
                            <strong>3-4pm</strong>
                        </v-flex>
                        <v-flex>
                            <strong>Design Stand Up</strong>
                            <div class="caption mb-2">Hangouts</div>
                            <v-avatar>
                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                                ></v-img>
                            </v-avatar>
                            <v-avatar>

                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                                ></v-img>
                            </v-avatar>
                            <v-avatar>
                                <v-img
                                        src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                                ></v-img>
                            </v-avatar>
                        </v-flex>
                    </v-layout>
                </v-timeline-item>

                <v-timeline-item
                        color="pink"
                        small
                >
                    <v-layout pt-3>
                        <v-flex xs3>
                            <strong>12pm</strong>
                        </v-flex>
                        <v-flex>
                            <strong>Lunch break</strong>
                        </v-flex>
                    </v-layout>
                </v-timeline-item>

                <v-timeline-item
                        color="teal lighten-3"
                        small
                >
                    <v-layout pt-3>
                        <v-flex xs3>
                            <strong>9-11am</strong>
                        </v-flex>
                        <v-flex>
                            <strong>Finish Home Screen</strong>
                            <div class="caption">Web App</div>
                        </v-flex>
                    </v-layout>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "TimeLog"
    }
</script>

<style scoped>

</style>
