<script setup>

import { ref } from 'vue'

const url = ref('/')
const previewIframe = ref(null)

function previewGoBack() {
    console.log(previewIframe.value.contentWindow)
    previewIframe.value.contentWindow.history.back()
}

function previewRefresh() {
    previewIframe.value.contentWindow.location.reload()
}

function previewLink() {
    console.log('previewLink', previewIframe.value.contentWindow.location)
}

</script>

<template>
    <v-toolbar density="compact">
        <v-btn icon @click="previewGoBack">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn icon @click="previewRefresh">
            <v-icon>mdi-refresh</v-icon>
        </v-btn>
        <v-text-field
            hide-details
            single-line
            v-model="url"
            prepend-inner-icon="mdi-link"
        ></v-text-field>
        <v-btn icon @click="previewLink">
            <v-icon>mdi-link-variant</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-layers-edit</v-icon>
        </v-btn>
    </v-toolbar>
    <iframe ref="previewIframe" src="/"></iframe>
</template>

<style scoped>
iframe {
    border: none;
    width: 100%;
    height: 100%;
}
</style>
