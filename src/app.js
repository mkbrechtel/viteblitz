import { createApp } from 'vue'
import App from './App.vue'


const meta = import.meta

const app = createApp(App)
app.config.globalProperties.meta = import.meta

app.mount('#app')
