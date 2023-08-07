import React from 'react'
import styles from './styles.module.scss'
import { Grid } from '@material-ui/core'
import { clsx } from 'clsx'

function Footer() {
  return (
    <Grid xs={12} className={clsx(styles.footer, styles.flexCenter)}>
      <Grid xs={11} sm={10} className={styles.containerFooter} container>
        <p>会員登録</p>
        <div className={styles.spacingBetweenItems} />
        <p>運営会社</p>
        <div className={styles.spacingBetweenItems} />
        <p>利用規約</p>
        <div className={styles.spacingBetweenItems} />
        <p>個人情報の取扱について</p>
        <div className={styles.spacingBetweenItems} />
        <p>特定商取引法に基づく表記</p>
        <div className={styles.spacingBetweenItems} />
        <p>お問い合わせ</p>
      </Grid>
    </Grid>
  )
}

export default Footer
