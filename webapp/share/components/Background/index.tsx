import React from 'react'
import Helmet from 'react-helmet'

import styles from './index.less'

export function Background(props) {
  return (
    <div className={`${styles.container} ${styles.share}`}>
      <Helmet title="Login" />
      <img
        className={styles.logo}
        src={require('assets/images/logo_light.svg')}
      />
      <div className={`${styles.window} ${styles.wrapper}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Background
