import React from 'react'
import { Button, DatePicker, message } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import styles from './index.scss'

const PageA = ({ history }: RouteComponentProps) => {
    return (
        <div>
            <div className={styles.test}>HandsomeTT  PageA</div>
            <div className={styles.test}>{process.env.NODE_ENV}</div>
            <DatePicker></DatePicker>
            <Button onClick={() => history.push('/HandsomeTT_PageB')}>点一下又怎样</Button>
        </div>
    )
}

export default PageA