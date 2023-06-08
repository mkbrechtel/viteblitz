<script setup>

    import { ref, watch, onMounted } from 'vue'

    const url = ref(window.location.hash.startsWith('#/') && window.location.hash.substring(1) || '/')
    
    const barIcon = ref('mdi-link')
    const previewIframe = ref(null)

    function setIframeURL(iframeURL){
        previewIframe.value.contentWindow.location = iframeURL

    }
    onMounted(()=>{
        setIframeURL(url.value)
    })

    function previewGoBack() {
        try {
            previewIframe.value.contentWindow.history.back()
        } catch {
            setIframeURL(url.value)
        }
    }

    function previewRefresh() {
        previewIframe.value.contentWindow.location.reload()
    }

    function submitBar() {
        //console.log("submitBar")
        previewIframe.value.contentWindow.location.href = url.value
    }

    function previewLink() {
        //console.log('previewLink', previewIframe.value.contentWindow.location)
    }

    function onIframeLocationChange(){
        const location = previewIframe.value.contentWindow.location
        try {
            if(window.location.origin == location.origin) {
                url.value = location.pathname + location.search + location.hash;
                barIcon.value = "mdi-link"
                window.location.hash = '#' + url.value
            } else {
                url.value = location.toString();
                barIcon.value = "mdi-web"
            }
        } catch {
            barIcon.value = "mdi-web"
        }
    }

    function onHashChange(){
        const hash = window.location.hash
        if ( hash.startsWith('#/__viteblitz#') ) {
            window.location.hash = hash.substring(14)
        } else {
            if ( hash.startsWith('#/') && url.value != hash.substring(1) ) {
                url.value = hash.substring(1)
            }
        }
    }
    window.addEventListener("hashchange", onHashChange, false);

    function onUrlChange(newURL,oldURL){
        const location = previewIframe.value.contentWindow.location
        try {
            if((window.location.origin == location.origin) && (newURL == (location.pathname + location.search + location.hash))){
                //console.log("onUrlChange/ignore",newURL)
            } else {
                //console.log("onUrlChange/set",newURL)
                setIframeURL(newURL)
            }
        } catch {
            //console.log("onUrlChange/catch",newURL)
            setIframeURL(newURL)
        }
    }
    watch(url, onUrlChange)

</script>

<template>
    <v-container fluid class="d-flex flex-column ma-0 pa-0 w-100 h-100">
        <v-toolbar density="compact">
            <v-btn icon @click="previewGoBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn icon @click="previewRefresh">
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-text-field
                label="URL"
                hide-details
                single-line
                v-model="url"
                :prepend-inner-icon="barIcon"
                @onsubmit="submitBar"
            ></v-text-field>
            <v-btn icon @click="previewLink">
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-layers-edit</v-icon>
            </v-btn>
        </v-toolbar>
        <iframe ref="previewIframe" class="w-100 h-100" style="border:none;" @load="onIframeLocationChange"></iframe>
    </v-container>
</template>
