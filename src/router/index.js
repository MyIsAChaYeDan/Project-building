import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import teacher from '@/components/teacher/teacher'
import student from '@/components/student/student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld', //示例组件
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/', //最大的父组件
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/teacher',
          name: 'teacher',
          component: teacher,
        },
        {
          path: '/student',
          name: 'student',
          component: student,
        },
      ]
    }
  ]
})
