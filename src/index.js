import React from 'react'
import ReactDom from 'react-dom'
import Routers from './routers'

if (!window.__POWERED_BY_QIANKUN__) {
  ReactDom.hydrate(
    <Routers />,
    document.getElementById('root')
  )
}

export  function bootstrap() {
  console.log('[react16] react app bootstraped')
}
  
export  function mount(props) {
  console.log('[react16] props from main framework', props)
  ReactDom.hydrate(
    <Routers />,
    document.getElementById('root')
  )
}
  
export  function unmount(props) {
  const { container } = props
  ReactDom.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

export default function chen(){console.log('---')}

// window['react-demo'] = {
//   bootstrap,
//   mount,
//   unmount
// }