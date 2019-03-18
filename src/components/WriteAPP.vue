<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" color="info" class="hidden-md-only hidden-lg-only hidden-xl-only">
            <v-icon>fas fa-signature</v-icon>
            <span></span>
        </v-btn>
        <v-card>
            <v-toolbar dark color="teal darken-1">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>
                <v-toolbar-title>写帖子</v-toolbar-title>
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
                                <v-list-tile-title>帖子标题</v-list-tile-title>
                                <v-text-field
                                        single-line
                                        clearable
                                        color="blue"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-list-tile-title>帖子分类</v-list-tile-title>
                                <v-combobox
                                        v-model="select"
                                        :items="items"
                                        color="blue"
                                ></v-combobox>
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
                            <v-list-tile-title>帖子正文</v-list-tile-title>
                            <v-textarea
                                    outline
                                    name="input-7-4"
                                    label="Outline textarea"
                                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-list>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Write",
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            select: 'Programming',
            items: [
                {text:'Programming',value:'1'},
                {text:'Design',value:'2'},
                {text:'Vue',value:'3'},
                {text:'Vuetify',value:'4'}
            ]
        })
    }
</script>

<style scoped>

</style>
