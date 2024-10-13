import React from 'react'

import styles from './Contact.module.css'
function Contact() {
  return (
    <section className={styles.homeSectionContact}>
      <h2 className={styles.homeSectionContactTitle}>Contact Me</h2>
      <p className={styles.homeSectionContactDescription}>
        If you have any questions, feel free to get in touch. I'd love to hear
        from you.
      </p>
      <a href="" className={styles.homeSectionContactLink}>
        Contact Me →
      </a>
    </section>
  )
}
export default Contact
