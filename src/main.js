import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'


loadFonts()

const app = createApp(App);
const vuetify = createVuetify();

app.use(router);
app.use(vuetify).mount('#app');
