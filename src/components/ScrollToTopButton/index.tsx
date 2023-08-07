import React, { useEffect, useState } from 'react'
import ScrollToTop from '../../assets/images/ScrollToTop'
import styles from './styles.module.scss'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', toggleVisible)
    return () => window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <>
      {visible && (
        <div className={styles.button} onClick={scrollToTop} title="Go to top">
          <ScrollToTop />
        </div>
      )}
    </>
  )
}

export default ScrollToTopButton
