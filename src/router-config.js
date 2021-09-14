import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
import Demo from '@src/pages/demo'

const routerConfig = [
  {
    path:'/ios-keyboard',
    componentServe:IosKeyboard,
    component:() => import('./pages/iosKeyboard'),
    childrens: [{
      path:'/ios-keyboard/test-page-img',
      componentServe:TestPageImg,
      component:() => import('./pages/testPageImg'),
    }]
  },
  {
    path:'/demo',
    componentServe:Demo,
    component:() => import('@src/pages/demo'),
  }
]

export default routerConfig