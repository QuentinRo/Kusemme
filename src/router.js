import Vue from 'vue'
import Router from 'vue-router'
import Quizz from './views/Quizz.vue'
import Login from './views/Login.vue'
import listQuiz from './components/HelloWorld'
import Subscribe from './views/Subscribe'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      name: 'listQuiz',
      component: listQuiz
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login

    },
    {
        path: '/quizz/:id',
        name: 'quizz',
        component: Quizz
    },
      {
          path: '/Subscribe',
          name: 'subscribe',
          component: Subscribe
      }
  ]
})
