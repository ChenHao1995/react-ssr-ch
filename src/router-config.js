import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
import ZhiHuDemo from '@src/pages/zhihu-demo'
import ZhihuHeader from '@src/pages/header'
const routerConfig = [
  {
    path:'/zhihu-demo',
    componentServe:ZhiHuDemo,
    component:() => import('./pages/zhihu-demo'),
  },
  {
    path:'/zhihu-header',
    componentServe:ZhihuHeader,
    component:() => import('./pages/header'),
  },
  {
    path:'/ios-keyboard',
    componentServe:IosKeyboard,
    component:() => import('./pages/iosKeyboard'),
    childrens: [{
      path:'/ios-keyboard/test-page-img',
      componentServe:TestPageImg,
      component:() => import('./pages/testPageImg'),
    }]
  }
]

export default routerConfig