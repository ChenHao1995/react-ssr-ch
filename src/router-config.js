import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
import Demo from '@src/pages/demo'
import NewLine from '@src/pages/newLine'

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
  },
  {
    path:'/new-line/:id',
    componentServe: NewLine,
    component:() => import('@src/pages/newLine'),
  }
]

export default routerConfig