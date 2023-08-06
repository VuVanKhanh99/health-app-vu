import React, { lazy } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LazyLoadElement from './components/LazyLoadElement'
import styles from './styles.module.scss'

const LazyTopPage = lazy(() => import('./containers/MyRecord'))

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LazyLoadElement element={<LazyTopPage />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
