import React, { lazy } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LazyLoadElement from './components/LazyLoadElement'
import styles from './styles.module.scss'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import NotFound from './containers/NotFound'

const LazyTopPage = lazy(() => import('./containers/TopPage'))
const LazyColumnPage = lazy(() => import('./containers/ColumnPage'))
const LazyChalengePage = lazy(() => import('./containers/MyRecord'))
const LazyNotFoundPage = lazy(() => import('./containers/NotFound'))

const AuthenRoute = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
)

const LoginRoute = () => <Outlet />

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthenRoute />}>
            <Route path="/home" element={<LazyLoadElement element={<LazyTopPage />} />} />
          </Route>

          <Route element={<AuthenRoute />}>
            <Route path="/column-page" element={<LazyLoadElement element={<LazyColumnPage />} />} />
          </Route>
          <Route element={<AuthenRoute />}>
            <Route
              path="/challenge-record"
              element={<LazyLoadElement element={<LazyChalengePage />} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
