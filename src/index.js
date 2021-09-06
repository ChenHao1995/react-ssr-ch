import React from 'react'
import ReactDom from 'react-dom'
import Routers from './routers'
import singleSpaReact, {SingleSpaContext} from 'single-spa-react'

ReactDom.render(
  <Routers />,
  document.getElementById('root')
)

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM:ReactDom,
  rootComponent:Routers,
  errorBoundary(err, info, props) {
    // https://reactjs.org/docs/error-boundaries.html
    return (
      <div>This renders when a catastrophic error occurs</div>
    )
  },
  domElementGetter: () => document.getElementById('react-ssr-ch')
})

export const {bootstrap} = reactLifecycles
export const { mount } = reactLifecycles
export const { unmount } = reactLifecycles
