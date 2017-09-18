import Vue from 'vue'
import Router from 'vue-router'
import UserTab from 'components/user-tab/user-tab'
import Activities from 'components/activities/activities'
import Roles from 'components/roles/roles'
import Test from 'components/test/test'
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
    },
    {
      path: '/activities',
      component: Activities
    },
    {
      path: '/roles',
      component: Roles
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
