import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui' // js
import 'element-ui/lib/theme-chalk/index.css' // css
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(elementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
