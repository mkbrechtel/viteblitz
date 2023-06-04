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

        <!-- <v-navigation-drawer rail temporary>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-file-multiple" title="Files" value="files"></v-list-item>
                <v-list-item prepend-icon="mdi-search" title="Search" value="search"></v-list-item>
            </v-list>
        </v-navigation-drawer> -->

        <v-main class="d-flex w-100">
            <div class="w-50">
                <Editor />
            </div>
            <div class="w-50">
                <Preview />
            </div>
        </v-main>
    </v-app>
</template>

<style scoped>
    body, main {
        overflow: hidden;
    }
</style>
