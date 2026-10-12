import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.notFound}>
      <Header />
      <main className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>
          4<span className={styles.notFoundAccent}>0</span>4
        </h1>
        <p className={styles.notFoundText}>This page does not exist.</p>
        <Link to="/" className={styles.notFoundLink}>
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
