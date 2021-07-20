import React from 'react';
import ReactDom from 'react-dom';
import Routers from './routers';

ReactDom.hydrate(
    <Routers />,
    document.getElementById('root')
)