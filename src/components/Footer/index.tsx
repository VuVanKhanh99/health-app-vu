import React from 'react'
import styles from './styles.module.scss'
import { Grid } from '@material-ui/core'
import { clsx } from 'clsx'

const dataFooterItems: string[] = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ'
]

function Footer() {
  return (
    <Grid xs={12} className={clsx(styles.footer, styles.flexCenter)}>
      <Grid xs={11} sm={10} className={styles.containerFooter} container>
        {dataFooterItems.map((footerItems) => (
          <>
            <p>{footerItems}</p>
            <div className={styles.spacingBetweenItems} />
          </>
        ))}
      </Grid>
    </Grid>
  )
}

export default Footer
