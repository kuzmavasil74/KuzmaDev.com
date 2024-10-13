import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img
          src="/images/KuzmaDevComLogo.svg"
          alt="KuzmaDev Logo"
          width="80px"
          className={styles.footerLogoImage}
        />
      </div>
    </footer>
  )
}

export default Footer
