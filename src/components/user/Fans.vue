<template>
    <v-card flat>
        <v-card-title>
            <v-subheader>粉丝列表</v-subheader>
        </v-card-title>
        <v-card-title>
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    avatar
                    @click=""
                    href="/"
                    class="py-4"

            >
                <v-layout align-center justify-center row fill-height>
                    <v-flex>
                        <v-btn fab small>
                            <v-avatar size="36" color="blue lighten-4">
                                <img :src="item.avatar">
                            </v-avatar>
                        </v-btn>
                    </v-flex>
                    <v-flex>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-flex>
                </v-layout>
            </v-list-tile>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "Fans",
        data: () => ({
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy BakerBakerBakerBakerBakerBakerBakerBakerBakerBakerBaker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
            ],
        })
    }
</script>

<style scoped>

</style>
