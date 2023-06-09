<script setup>
    import { EditorView } from 'codemirror';
    import { ref } from 'vue'
</script>


<template>
    <v-app>
        <v-system-bar window>
            <v-icon icon="mdi-lightning-bolt" class="me-2"></v-icon>
            <span>ViteBlitz</span>

            <v-spacer></v-spacer>

            <v-icon icon="mdi-source-repository"></v-icon>
            <span>repo-name</span>

            <v-spacer></v-spacer>

            <v-icon icon="mdi-content-save-cog"></v-icon>
            <v-icon icon="mdi-source-commit-next-local"></v-icon>
            <span>commit</span>
        </v-system-bar>

        <v-main>
            <v-container fluid class="w-100 h-100 ma-0 pa-0">
                <v-row class="w-100 h-100 ma-0">
                    <v-col cols="3" class="ma-0 pa-0">
                        <Toolbox />
                    </v-col>
                    <v-col cols="4" class="ma-0 pa-0">
                        <Editor />
                    </v-col>
                    <v-col cols="5" class="ma-0 pa-0">
                        <Preview />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
    body, main {
        overflow: hidden;
    }
</style>
