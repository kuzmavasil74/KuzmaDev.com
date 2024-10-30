import React from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import styles from './Contact.module.css'
function Contact() {
  return (
    <section className={styles.contactSection}>
      <Header />
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>
          <span className={styles.contactTitleSpan}> Contact</span> Me
        </h2>
        <h3 className={styles.contactSubtitle}>
          <span className={styles.contactSubtitleSpan}>Get</span> In Touch.
        </h3>
      </div>
      <Footer />
    </section>
  )
}
export default Contact
