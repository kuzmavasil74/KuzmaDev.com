import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.homeSectionHero}>
        <h1 className={styles.homeSectionHeroTitle}>
          Transforming Ideas into Scalable Web Applications
        </h1>
      </section>
      <p className={styles.homeSectionHeroDescription}>
        From front-end design to back-end architecture, I'm dedicated to
        crafting high-quality, functional, and visually appealing web
        experiences.
      </p>

      <section className={styles.homeSectionAbout}>
        <h2 className={styles.homeSectionAboutTitle}>About Me</h2>
        <p className={styles.homeSectionAboutDescription}>
          I'm a full-stack developer specializing in React.js and Node.js, with
          a passion for building scalable web applications. I focus on
          delivering clean, efficient code and great user experiences.
        </p>
      </section>

      <section className={styles.homeSectionProjects}>
        <h2 className={styles.homeSectionProjectsTitle}>Recent Projects</h2>
        <ul className={styles.homeSectionProjectsList}>
          <li className={styles.homeSectionProjectsCard}>
            <img
              src=""
              alt=""
              className={styles.homeSectionProjectsCardImage}
            />
            <h3 className={styles.homeSectionProjectsCardTitle}>
              First Project
            </h3>
            <p className={styles.homeSectionProjectsCardDescription}>
              A brief description of the project goes here.
            </p>
            <a href="" className={styles.homeSectionProjectsCardLink}>
              Learn More
            </a>
          </li>

          <li className={styles.homeSectionProjectsCard}>
            <img
              src=""
              alt=""
              className={styles.homeSectionProjectsCardImage}
            />
            <h3 className={styles.homeSectionProjectsCardTitle}>
              Second Project
            </h3>
            <p className={styles.homeSectionProjectsCardDescription}>
              A brief description of the project goes here.
            </p>
            <a href="" className={styles.homeSectionProjectsCardLink}>
              Learn More
            </a>
          </li>

          <li className={styles.homeSectionProjectsCard}>
            <img
              src=""
              alt=""
              className={styles.homeSectionProjectsCardImage}
            />
            <h3 className={styles.homeSectionProjectsCardTitle}>
              Third Project
            </h3>
            <p className={styles.homeSectionProjectsCardDescription}>
              A brief description of the project goes here.
            </p>
            <a href="" className={styles.homeSectionProjectsCardLink}>
              Learn More
            </a>
          </li>

          <li className={styles.homeSectionProjectsCard}>
            <img
              src=""
              alt=""
              className={styles.homeSectionProjectsCardImage}
            />
            <h3 className={styles.homeSectionProjectsCardTitle}>
              Fourth Project
            </h3>
            <p className={styles.homeSectionProjectsCardDescription}>
              A brief description of the project goes here.
            </p>
            <a href="" className={styles.homeSectionProjectsCardLink}>
              Learn More
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.homeSectionSkills}>
        <h2 className={styles.homeSectionSkillsTitle}>Technical Skills</h2>
        <ul className={styles.homeSectionSkillsList}>
          <li className={styles.homeSectionSkillsListItem}>React</li>
          <li className={styles.homeSectionSkillsListItem}>Node.js</li>
          <li className={styles.homeSectionSkillsListItem}>MongoDB</li>
          <li className={styles.homeSectionSkillsListItem}>Express</li>
          <li className={styles.homeSectionSkillsListItem}>HTML</li>
          <li className={styles.homeSectionSkillsListItem}>CSS</li>
          <li className={styles.homeSectionSkillsListItem}>JavaScript</li>
          <li className={styles.homeSectionSkillsListItem}>Git</li>
          <li className={styles.homeSectionSkillsListItem}>GitHub</li>
          <li className={styles.homeSectionSkillsListItem}>Figma</li>
        </ul>

        <h2 className={styles.homeSectionSkillsTitle}>Soft Skills</h2>
        <ul className={styles.homeSectionSkillsList}>
          <li className={styles.homeSectionSkillsListItem}>Leadership</li>
          <li className={styles.homeSectionSkillsListItem}>Communication</li>
          <li className={styles.homeSectionSkillsListItem}>Problem-solving</li>
          <li className={styles.homeSectionSkillsListItem}>Teamwork</li>
          <li className={styles.homeSectionSkillsListItem}>Creativity</li>
          <li className={styles.homeSectionSkillsListItem}>Self-motivation</li>
          <li className={styles.homeSectionSkillsListItem}>Time management</li>
          <li className={styles.homeSectionSkillsListItem}>Collaboration</li>
          <li className={styles.homeSectionSkillsListItem}>Adaptability</li>
        </ul>
      </section>

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
    </div>
  )
}

export default Home
