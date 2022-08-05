import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
// import Demo from '@src/pages/demo'
import NewLine from '@src/pages/newLine'

const routerConfig = [
  {
    path:'/ios-keyboard',
    component: IosKeyboard,
    getServeData: IosKeyboard.getServeData,
    routes: [{
      path:'/ios-keyboard/test-page-img',
      component: TestPageImg,
    }]
  },
  {
    path:'/demo',
    // component: Demo,
    isLazy: true,
    component: () => import('@src/pages/demo')
  },
  {
    path:'/new-line/:id',
    component: NewLine,
  }
]

export default routerConfig