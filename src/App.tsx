import React, { lazy } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LazyLoadElement from './components/LazyLoadElement'
import styles from './styles.module.scss'
import Footer from './components/Footer'

const LazyTopPage = lazy(() => import('./containers/TopPage'))

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LazyLoadElement element={<LazyTopPage />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
