import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import RecommendedIcon1 from '../../assets/images/RecommendedIcon1.jpg'
import RecommendedIcon2 from '../../assets/images/RecommendedIcon2.jpg'
import RecommendedIcon3 from '../../assets/images/RecommendedIcon3.jpg'
import RecommendedIcon4 from '../../assets/images/RecommendedIcon4.jpg'
import RecommendedIcon5 from '../../assets/images/RecommendedIcon5.jpg'
import RecommendedIcon6 from '../../assets/images/RecommendedIcon6.jpg'
import RecommendedIcon7 from '../../assets/images/RecommendedIcon7.jpg'
import RecommendedIcon8 from '../../assets/images/RecommendedIcon8.jpg'
import clsx from 'clsx'
import styles from './styles.module.scss'
import ScrollToTopButton from '../../components/ScrollToTopButton'

const dataRecommendedColumnItems = [
  {
    key: 1,
    title: (
      <div className={clsx(styles.flexCenter, styles.directionColumn, styles.flexStart)}>
        <p className={clsx(styles.titleRecommended, styles.marginBottom02)}>Recommended</p>
        <p className={clsx(styles.titleRecommended)}>Column</p>
        <p className={styles.underlineRecommended} />
      </div>
    ),
    description: 'オススメ'
  },
  {
    key: 2,
    title: (
      <div className={clsx(styles.flexCenter, styles.directionColumn, styles.flexStart)}>
        <p className={clsx(styles.titleRecommended, styles.marginBottom02)}>Recommended</p>
        <p className={clsx(styles.titleRecommended)}>Diet</p>
        <p className={styles.underlineRecommended} />
      </div>
    ),
    description: 'ダイエット'
  },
  {
    key: 3,
    title: (
      <div className={clsx(styles.flexCenter, styles.directionColumn, styles.flexStart)}>
        <p className={clsx(styles.titleRecommended, styles.marginBottom02)}>Recommended</p>
        <p className={clsx(styles.titleRecommended)}>Beauty</p>
        <p className={styles.underlineRecommended} />
      </div>
    ),
    description: '美容'
  },
  {
    key: 4,
    title: (
      <div className={clsx(styles.flexCenter, styles.directionColumn, styles.flexStart)}>
        <p className={clsx(styles.titleRecommended, styles.marginBottom02)}>Recommended</p>
        <p className={clsx(styles.titleRecommended)}>Health</p>
        <p className={styles.underlineRecommended} />
      </div>
    ),
    description: '健康'
  }
]

const dataRecommendillustrates = [
  {
    srcImg: RecommendedIcon1,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon2,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon3,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon4,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon5,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon6,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon7,
    time: '2021.05.17  23:25'
  },
  {
    srcImg: RecommendedIcon8,
    time: '2021.05.17  23:25'
  }
]

function ColumnPage() {
  return (
    <div className={styles.columnContainer}>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid
          xs={11}
          sm={10}
          className={clsx(
            styles.flexCenter,
            styles.marginTop10,
            styles.flexBetween,
            styles.recommendedColumnItems
          )}
        >
          {dataRecommendedColumnItems.map((recommendedColumnItem) => (
            <Grid
              className={clsx(styles.recommendedColumnItem, styles.flexCenter)}
              xs={5}
              sm={3}
              key={recommendedColumnItem.key}
            >
              <div className={styles.containerRecommendedItem}>
                <div className={clsx(styles.aboutRecommended, styles.flexCenter, styles.flexStart)}>
                  {recommendedColumnItem.title}
                  <div className={styles.descriptionRecommended}>
                    {recommendedColumnItem.description}
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={11} sm={10} className={styles.marginTop10}>
          <Grid xs={12} className={styles.recommends}>
            {dataRecommendillustrates.map((dataRecommendillustrate, i) => (
              <div className={clsx(styles.containerRecommended, styles.circleElement)} key={i}>
                <div className={clsx(styles.recommendedTime)}>
                  <div className={styles.recommendedIllustrate}>
                    <img
                      loading="lazy"
                      src={dataRecommendillustrate.srcImg}
                      className={styles.recommendedImg}
                    />
                    <div className={styles.time}>{dataRecommendillustrate.time}</div>
                  </div>
                </div>
                <div className={styles.title}>
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
                </div>
                <div className={styles.tagHealths}>
                  <p>#魚料理 &nbsp; #和食 &nbsp; #DHA</p>
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={6} sm={3} className={clsx(styles.marginTop10, styles.marginBottom10)}>
          <div className={clsx(styles.loadMoreRecordBtn, styles.flexCenter)}>
            コラムをもっと見る
          </div>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </div>
  )
}

export default ColumnPage
