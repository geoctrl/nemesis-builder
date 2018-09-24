import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'getStarted',
      component: require('@/pages/get-started/get-started').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
