import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AppIcon from '../../assets/images/AppIcon'
import MainPageIcon from '../../assets/images/MainPageIcon'
import clsx from 'clsx'
import ChallengeIcon from '../../assets/images/ChallengeIcon'
import InfoIcon from '../../assets/images/InfoIcon'
import MenuIcon from '../../assets/images/MenuIcon'
import { Grid } from '@material-ui/core'
import styles from './styles.module.scss'
import { Popover } from '@mui/material'

function NavBar() {
  const [currentRoute, setCurrentRoute] = useState('/main-page')
  const [displayDrawMenu, setDisplayDrawMenu] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()

  const id = anchorEl ? 'draw-menu-health-app' : undefined
  console.log('324', anchorEl)
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
            <li>
              <Link to="/main-page">
                <div className={styles.subItemNavbar}>
                  <div className={styles.iconItem}>
                    <MainPageIcon />
                  </div>
                  <p
                    className={clsx(
                      styles.nameMenuItem,
                      currentRoute.includes('/main-page') ? styles.activeItem : styles.nonActiveItem
                    )}
                  >
                    自分の記録
                  </p>
                </div>
              </Link>
            </li>
            <li>
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
            <li>
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
            <li>
              <div className={styles.subItemNavbar}>
                <div
                  className={styles.iconItem}
                  id="iconMenuDraw"
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <MenuIcon />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Grid>
      <Popover
        id={id}
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(undefined)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        sx={{
          root: {
            position: 'absolute !important'
          }
        }}
      >
        <Grid className={styles.containerMenu} xs={8} sm={5}>
          <div style={{ boxShadow: '1px 0 0 #444' }}>
            <div>自分の記録</div>
          </div>
          <div>体重グラフ</div>
          <div>目標</div>
          <div>選択中のコース</div>
          <div>コラム一覧</div>
          <div>設定</div>
        </Grid>

        <ul id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Categories</a>
            <ul>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Development tools</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </Popover>
    </Grid>
  )
}

export default NavBar
