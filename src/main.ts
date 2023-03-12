import { createApp } from "vue";
import App from "../src/App.vue";
import registerComponents from "@/register-components";
import "@mdi/font/css/materialdesignicons.min.css";

const app = createApp(App);
app.use(registerComponents);

app.mount("#app");
