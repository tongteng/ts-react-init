import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'

import './index.scss'

import App from '@views/App'

const render = () => {
    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    )
}

render()