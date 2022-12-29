import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/stylus/index.styl'
import FastClick from 'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
