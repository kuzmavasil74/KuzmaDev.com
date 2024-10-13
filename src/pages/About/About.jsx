import React from 'react'

import styles from './About.module.css'
function About() {
  return (
    <section className={styles.homeSectionAbout}>
      <h2 className={styles.homeSectionAboutTitle}>Vasyl Kuzma</h2>
      <img
        className={styles.homeSectionAboutImage}
        src="/images/Avatar_Kuzma_Vasyl.png"
        alt="Avatar_Kuzma_Vasyl.png"
      />
      <p className={styles.homeSectionAboutDescription}>
        I'm a Frontend Developer specializing in React.js, with a passion for
        building scalable web applications. I focus on delivering clean,
        efficient code and great user experiences.
      </p>
    </section>
  )
}
export default About
