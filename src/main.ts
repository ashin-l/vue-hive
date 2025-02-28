import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

// 读取环境变量
const baseURL = import.meta.env.VITE_API_BASE_URL || "/api";

// 配置 axios 的全局 baseURL
axios.defaults.baseURL = baseURL;

const app = createApp(App);

app.use(router);

app.mount("#app");
