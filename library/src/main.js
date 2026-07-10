import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './catalog/router'
import { useThemeStore } from './catalog/stores/theme'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

useThemeStore().init()

app.mount('#app')
