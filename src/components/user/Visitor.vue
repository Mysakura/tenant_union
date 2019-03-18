<template>
    <v-card flat>
        <v-layout>
            <v-spacer></v-spacer>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <v-list subheader>
                    <v-subheader>最近访客</v-subheader>
                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            avatar
                            @click=""
                            href="/"
                    >
                        <v-list-tile-avatar>
                            <v-btn fab small>
                                <v-avatar size="36" color="blue lighten-4">
                                    <img :src="item.avatar">
                                </v-avatar>
                            </v-btn>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-spacer></v-spacer>
                            <v-btn flat>2019-01-10 16:46</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "Visitor",
        data: () => ({
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
            ],
        })
    }
</script>

<style scoped>

</style>
