<template>
    <v-card
            class="mx-auto text-xs-center"
            color="green"
            dark
    >
        <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline
                        :value="value"
                        color="rgba(255, 255, 255, .7)"
                        height="100"
                        padding="16"
                        line-width="2"
                        stroke-linecap="round"
                        smooth
                >
                    <template
                            slot="label"
                            slot-scope="item"
                    >
                        {{ item.value }}
                    </template>
                </v-sparkline>
            </v-sheet>
        </v-card-text>

        <v-card-text>
            <div class="display-1 font-weight-thin">每月/每天的帖子数量</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
            <v-btn block flat>Go to Report</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "PostStat",
        data: () => ({
            value: [
                423,
                446,
                675,
                553,
                872,
                453,
                322,
                510,
                590,
                610,
                760,
                1250
            ]
        })
    }
</script>

<style scoped>

</style>
