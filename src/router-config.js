import IosKeyboard from '@src/pages/iosKeyboard'
import TestPageImg from '@src/pages/testPageImg'
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
    }
]

export default routerConfig