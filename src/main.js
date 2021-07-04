import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { Plugin } from 'vue2-storage';
import router from "./router.js"

Vue.config.productionTip = false
Vue.use(Plugin);

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
