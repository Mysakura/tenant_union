<template>
    <v-layout row>
        <v-flex
                xs12
        >
            <v-card>
                <v-toolbar
                        color="teal"
                        dark
                >
                    <v-toolbar-title class="text-xs-center">
                        我的消息
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>

                <v-list subheader>
                    <v-subheader>Recent chat</v-subheader>
                    <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn dark depressed small color="teal">
                                <span>999+</span>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>

                <v-divider></v-divider>

                <v-list subheader>
                    <v-subheader>Previous chats</v-subheader>

                    <v-list-tile
                            v-for="item in items2"
                            :key="item.title"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "DirectMsg",
        data: () => ({
            items: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
            ],
            items2: [
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' }
            ]
        })
    }
</script>

<style scoped>

</style>
