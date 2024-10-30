import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import styles from './Portfolio.module.css'
function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <Header />
      <div className={styles.portfolioHeader}>
        <h2 className={styles.portfolioTitle}>My portfolio</h2>
        <h3 className={styles.portfolioSubtitle}>Some of my works</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
