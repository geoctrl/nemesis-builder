import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'world',
      component: require('@/pages/world/world').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
