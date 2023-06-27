import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'
import store from './store'


loadFonts()

const app = createApp(App);
const vuetify = createVuetify();

app.use(store);
app.use(router);
app.use(vuetify).mount('#app');
