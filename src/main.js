// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.use(store)
app.mount('#app')