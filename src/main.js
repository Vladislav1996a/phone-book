import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'
import store from './store/index.js'

Vue.use(VueRouter)

Vue.config.productionTip = false

export const bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
