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
    <v-content class="d-flex flex-column ma-0 pa-0 w-100 h-100">
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
        <iframe ref="previewIframe" class="w-100 h-100" style="border:none;" :src="url"></iframe>
    </v-content>
</template>
