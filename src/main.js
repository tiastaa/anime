import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

//1.Імпортуємо файл налаштувань роутера
import router from './router'
//Імпортуємо файл налаштувань стора
import store from './store'

//2.Додаємо роутер дододатку
createApp(App).use(router).use(store).mount('#app')