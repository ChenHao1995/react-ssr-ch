import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
const routerConfig = [
    {
        path:'/react-ssr-ch',
        componentServe:IosKeyboard,
        component:() => import('./pages/iosKeyboard'),
        childrens: [{
            path:'/react-ssr-ch/test-page-img',
            componentServe:TestPageImg,
            component:() => import('./pages/testPageImg'),
        }]
    }
]

export default routerConfig