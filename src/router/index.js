import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import People from '@/components/People'
import Planets from '@/components/Planets'
import StarShips from '@/components/StarShips'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/People',
      name: 'People',
      component: People
    },
    {
      path: '/Planets',
      name: 'Planets',
      component: Planets
    },
  {
    path: '/StarShips',
    name: 'StarShips',
    component: StarShips
  }

  ]
})
