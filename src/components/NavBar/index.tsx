import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import AppIcon from '../../assets/images/AppIcon'
import MainPageIcon from '../../assets/images/MainPageIcon'
import clsx from 'clsx'
import ChallengeIcon from '../../assets/images/ChallengeIcon'
import InfoIcon from '../../assets/images/InfoIcon'
import MenuIcon from '../../assets/images/MenuIcon'
import { Grid } from '@material-ui/core'
import styles from './styles.module.scss'

function NavBar() {
  const [currentRoute, setCurrentRoute] = useState('/main-page')

  return (
      <Grid xs={12} sm={12} className={styles.header}>
        <Grid xs={11} sm={9} md={8}>
          <nav className={styles.navbarContainer}>
            <ul>
              <li title="Home" className={styles.flexWidth30percent}>
                <Link to="/">
                  <div className={styles.appIcon}>
                    <AppIcon />
                  </div>
                </Link>
              </li>
              <li title="Main Page">
                <Link to="/main-page">
                  <div className={styles.subItemNavbar}>
                    <div className={styles.iconItem}>
                      <MainPageIcon />
                    </div>
                    <p
                      className={clsx(
                        styles.nameMenuItem,
                        currentRoute.includes('/main-page')
                          ? styles.activeItem
                          : styles.nonActiveItem
                      )}
                    >
                      自分の記録
                    </p>
                  </div>
                </Link>
              </li>
              <li title="News">
                <div className={styles.subItemNavbar}>
                  <div className={styles.iconItem}>
                    <ChallengeIcon />
                  </div>
                  <p
                    className={clsx(
                      styles.nameMenuItem,
                      currentRoute.includes('/main-page') ? styles.activeItem : styles.nonActiveItem
                    )}
                  >
                    チャレンジ
                  </p>
                </div>
              </li>
              <li title="Blog">
                <div className={styles.subItemNavbar}>
                  <div className={styles.iconItem}>
                    <InfoIcon />
                  </div>
                  <p
                    className={clsx(
                      styles.nameMenuItem,
                      currentRoute.includes('/main-page') ? styles.activeItem : styles.nonActiveItem
                    )}
                  >
                    お知らせ
                  </p>
                </div>
              </li>
              <li title="Blog">
                <div className={styles.subItemNavbar}>
                  <div className={styles.iconItem}>
                    <MenuIcon />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
  )
}

export default NavBar
