import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './styles.module.scss'

function NotFound() {
  return (
    <div className={clsx(styles.containerNotFound, styles.flexCenter)}>
      <div className={clsx(styles.flexCenter, styles.directionColumn)}>
        <p className={styles.notFound}>Not found page</p>
        <Link to="/home">
          <p className={styles.backToHome}>Back to home</p>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
