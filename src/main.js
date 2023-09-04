import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import router from "./router";
import component from "@/components/index";

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(component)
app.mount('#app')
