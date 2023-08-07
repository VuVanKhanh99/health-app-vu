import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar'
import styles from './styles.module.scss'
import DateMemo from '../../assets/images/DateMemo.jpg'
import { Line } from 'react-chartjs-2'
import clsx from 'clsx'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import BodyRecord from '../../assets/images/BodyRecord.jpg'
import MyExerciseRecord from '../../assets/images/MyExerciseRecord.jpg'
import MyDiaryRecord from '../../assets/images/MyDiaryRecord.jpg'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      border: {
        display: false
      },
      ticks: {
        font: {
          size: 10
        },
        color: '#FFFFFF'
      },
      grid: {
        color: '#FFFFFF'
      }
    },
    y: {
      ticks: {
        display: false
      },
      grid: {
        drawBorder: false,
        display: false
      },
      border: {
        display: false
      }
    }
  }
}

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月'
]

export const data = {
  labels,
  datasets: [
    {
      data: [500, 450, 350, 380, 370, 310, 369, 305, 295, 290, 280, 290],
      borderColor: '#FFCC21'
    },
    {
      data: [500, 400, 370, 360, 300, 295, 270, 265, 260, 250, 245, 240],
      borderColor: '#8FE9D0'
    }
  ]
}

const dataRecordItems = [
  {
    srcImg: BodyRecord,
    title: 'Body Record',
    description: '自分のカラダの記録'
  },
  {
    srcImg: MyExerciseRecord,
    title: 'My Exercise',
    description: '自分のカラダの記録'
  },
  {
    srcImg: MyDiaryRecord,
    title: 'My Diary',
    description: '自分のカラダの記録'
  }
]

const dataFilterDurables = ['日', '週', '月', '年']

function Home() {
  const [filterDurable, setFilterDurable] = useState(
    dataFilterDurables[dataFilterDurables.length - 1]
  )

  return (
    <div className={styles.myRecordContainer}>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid
          xs={11}
          sm={10}
          className={clsx(styles.flexCenter, styles.marginTop10, styles.flexBetween)}
        >
          {dataRecordItems.map((dataRecordItem) => (
            <Grid
              className={clsx(styles.recordItem, styles.circleElement, styles.flexCenter)}
              key={dataRecordItem.title}
            >
              <div className={styles.containerRecordItem}>
                <img
                  loading="lazy"
                  src={dataRecordItem.srcImg}
                  alt="date memo"
                  className={styles.imgRecordItem}
                />
                <div className={styles.shadowBox} />
                <div className={clsx(styles.aboutRecord, styles.flexCenter)}>
                  <h3 className={styles.titleRecord}>{dataRecordItem.title}</h3>
                  <div className={styles.descriptionRecord}>{dataRecordItem.description}</div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className={styles.flexCenter} xs={12}>
        <Grid xs={11} sm={10} className={clsx(styles.bodyRecord, styles.marginTop10)}>
          <Grid
            xs={3}
            sm={2}
            className={clsx(styles.flexCenter, styles.flexBetween, styles.filterContainer)}
          >
            <div>
              <p className={clsx(styles.dateRecord, styles.fontSize29)}>BODY</p>
              <p className={clsx(styles.dateRecord, styles.fontSize29)}>RECORD</p>
            </div>
            <div className={styles.dateRecord} style={{ marginLeft: '2rem' }}>
              2021.05.21
            </div>
          </Grid>
          <Grid className={clsx(styles.flexCenter, styles.graph)} xs={12}>
            <Line options={options} data={data} />
          </Grid>
          <Grid
            className={clsx(styles.flexCenter, styles.blackBackground, styles.filterContainer)}
            xs={5}
          >
            {dataFilterDurables.map((durable) => (
              <div
                className={clsx(styles.btnFilterDurable, {
                  [styles.activeFilter]: durable === filterDurable
                })}
                key={durable}
                onClick={() => setFilterDurable(durable)}
              >
                {durable}
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.flexCenter} xs={12}>
        <Grid xs={11} sm={10} className={clsx(styles.bodyRecord, styles.marginTop10)}>
          <Grid
            xs={3}
            sm={2}
            className={clsx(styles.flexCenter, styles.flexBetween, styles.filterContainer)}
          >
            <div>
              <p className={clsx(styles.dateRecord, styles.fontSize29)}>MY</p>
              <p className={clsx(styles.dateRecord, styles.fontSize29)}>EXERCISE</p>
            </div>
            <div className={styles.dateRecord} style={{ marginLeft: '2rem' }}>
              2021.05.21
            </div>
          </Grid>
          <Grid xs={12} className={styles.containerExercises}>
            <Grid
              xs={11}
              style={{ paddingLeft: '4rem' }}
              className={clsx(styles.flexCenter, styles.flexBetween, styles.wrapFlex)}
            >
              {Array.from({ length: 8 }).map((v, i) => (
                <Grid className={clsx(styles.exerciseInfo)} xs={5} key={i}>
                  <div
                    className={clsx(styles.flexCenter, styles.flexBetween)}
                    style={{ width: '60%' }}
                  >
                    <p className={styles.notateItemExercise}>.</p>
                    <div className={styles.exercise}>
                      <p className={clsx(styles.dateRecord, styles.fontSize29)}>
                        家事全般（立位・軽い）
                      </p>
                      <p className={clsx(styles.dateRecord, styles.fontSize29, styles.colorEnergy)}>
                        26kcal
                      </p>
                    </div>
                  </div>

                  <div className={styles.timeDo}>10min</div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={11} sm={10} className={styles.marginTop10}>
          <h2 className={styles.titleDiary}>My Diary</h2>
          <Grid className={styles.recordMyDiary}>
            {Array.from({ length: 8 }).map((v, i) => (
              <div className={clsx(styles.containerDiary, styles.circleElement)} key={i}>
                <div className={clsx(styles.flexCenter, styles.flexStart)}>
                  <div>
                    <p className={clsx(styles.dateRecord, styles.titleDiary)}>2021.05.21</p>
                    <p className={clsx(styles.dateRecord, styles.titleDiary)}>23:25</p>
                  </div>
                </div>
                <div className={styles.titleDiary}>
                  <p>私の日記の記録が一部表示されます｡</p>
                </div>
                <p className={styles.lineHeight3}>
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト
                  テキストテキストテキストテキスト 
                  テキストテキストテキストテキスト
                  テキストテキスト...
                </p>
              </div>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={6} sm={3} className={clsx(styles.marginTop10, styles.marginBottom10)}>
          <div className={clsx(styles.loadMoreRecordBtn, styles.flexCenter)}>
            自分の日記をもっと見る
          </div>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </div>
  )
}

export default Home
