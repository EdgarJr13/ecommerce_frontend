import App from './App.vue'
import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import router from './router/index'
import store from './store'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/css/materialdesignicons.css';


loadFonts()

const app = createApp(App);
const vuetify = createVuetify();

app.use(store);
app.use(router);
app.use(vuetify).mount('#app');
