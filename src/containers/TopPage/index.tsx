import React from 'react'
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
import SnackMenuItem from '../../assets/images/SnackMenuItem'
import MorningMenuItem from '../../assets/images/MorningMenuItem'
import LunchMenuItem from '../../assets/images/LunchMenuItem'
import DinnerMenuItem from '../../assets/images/DinnerMenuItem'
import RecordMenuDate1 from '../../assets/images/RecordMenuDate1.jpg'
import RecordMenuDate2 from '../../assets/images/RecordMenuDate2.jpg'
import RecordMenuDate3 from '../../assets/images/RecordMenuDate3.jpg'
import RecordMenuDate4 from '../../assets/images/RecordMenuDate4.jpg'
import RecordMenuDate5 from '../../assets/images/RecordMenuDate5.jpg'
import RecordMenuDate6 from '../../assets/images/RecordMenuDate6.jpg'
import RecordMenuDate7 from '../../assets/images/RecordMenuDate7.jpg'
import RecordMenuDate8 from '../../assets/images/RecordMenuDate8.jpg'
import ScrollToTopButton from '../../components/ScrollToTopButton'
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

const fakeRecordMenuDates: string[] = [
  RecordMenuDate1,
  RecordMenuDate2,
  RecordMenuDate3,
  RecordMenuDate4,
  RecordMenuDate5,
  RecordMenuDate6,
  RecordMenuDate7,
  RecordMenuDate8
]

function Home() {
  return (
    <div className={styles.topPageContainer}>
      <Grid className={styles.recordFilter}>
        <Grid className={clsx(styles.recordDate, styles.flexCenter)} xs={12} sm={6}>
          <img loading="lazy" src={DateMemo} alt="date memo" className={styles.imgRecordDate} />
          <CircularProgressbarWithChildren
            value={1}
            maxValue={1}
            circleRatio={0.75}
            strokeWidth={1.2}
            styles={buildStyles({
              rotation: 0,
              strokeLinecap: 'butt',
              pathTransitionDuration: 0,
              pathColor: '#FFFFFF',
              textColor: '#f88'
            })}
          >
            <div className={styles.recordDateInfo}>
              <p className={styles.date}>05/21</p>
              <p className={styles.percentFinish}>75%</p>
            </div>
          </CircularProgressbarWithChildren>
        </Grid>
        <Grid className={clsx(styles.flexCenter, styles.graph)} xs={12} sm={6}>
          <Line options={options} data={data} />
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={11} sm={8} className={styles.containerMenuItem}>
          <MorningMenuItem />
          <LunchMenuItem />
          <DinnerMenuItem />
          <SnackMenuItem />
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={11} sm={10} className={styles.recordDatesFollowMenuItem}>
          {fakeRecordMenuDates.map((srcImg: string) => (
            <img
              loading="lazy"
              src={srcImg}
              alt={srcImg}
              key={srcImg}
              className={styles.recordMenuDate}
            />
          ))}
        </Grid>
      </Grid>
      <Grid xs={12} className={styles.flexCenter}>
        <Grid xs={6} sm={3} className={styles.marginTop3}>
          <div className={clsx(styles.loadMoreRecordBtn, styles.flexCenter)}>記録をもっと見る</div>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </div>
  )
}

export default Home
