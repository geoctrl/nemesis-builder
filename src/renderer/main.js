import Vue from 'vue'

import App from './app'
import router from './router'
import store from './store'
import './components/index';
import './styles/main.scss';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
