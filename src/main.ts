import { createApp } from "vue";
import "./index.css";
import App from './App.vue';
 
import { createPinia } from "pinia";
const pinia = createPinia()

import router from "./router";

createApp(App).use(router).use(pinia).mount("#app");
