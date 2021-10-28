import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 normalize css
import 'normalize.css'
import './style/base.scss'

createApp(App).use(store).use(router).mount('#app')
