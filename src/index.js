import React from 'react'
import ReactDom from 'react-dom'
import Routers from './routers'

if (!window.__POWERED_BY_QIANKUN__) {
  ReactDom.hydrate(
    <Routers />,
    document.getElementById('root')
  )
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}
  
export async function mount(props) {
  console.log('[react16] props from main framework', props)
  ReactDom.render(
    <Routers />,
    props.container?props.container.getElementById('root'):
      document.getElementById('root')
  )
}
  
export async function unmount(props) {
  const { container } = props
  ReactDom.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

// window['react-ssr-ch'] = {
//   bootstrap,
//   mount,
//   unmount
// }