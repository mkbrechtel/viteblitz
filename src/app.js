import { createApp } from 'vue'

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import App from './App.vue'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
    },
})

createApp(App).use(vuetify).mount('#app')
