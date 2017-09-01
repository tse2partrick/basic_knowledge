import Vue from 'vue'
import Router from 'vue-router'
import UserTab from 'components/user-tab/user-tab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/usertab'
    },
    {
      path: '/usertab',
      component: UserTab
    }
  ]
})
