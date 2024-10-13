import React from 'react'

import styles from './Projects.module.css'
function Projects() {
  return (
    <section className={styles.homeSectionProjects}>
      <h2 className={styles.homeSectionProjectsTitle}>Recent Projects</h2>
      <ul className={styles.homeSectionProjectsList}>
        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/webstudio.jpg"
            alt="webstudio.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>WebStudio</h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            - A professional website for a WebStudio company featuring
            responsive design, transform effects, and modal windows. Role:
            Developer. Individual project.
          </p>
          <a
            href="https://kuzmavasil74.github.io/goit-markup-hw-08/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>

        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/bestsellersbooks.jpg"
            alt="bestsellersbooks.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>
            Best Sellers Books
          </h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            - A dynamic website for a book product company with adaptive design,
            animations, modal windows, and a burger menu for ordering. Role:
            Scrum Master, Developer of the All Categories Section.
          </p>
          <a
            href="https://volodymyrkozel.github.io/renderrangers/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>

        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/moviesearch.jpg"
            alt="moviesearch.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>Movie Search</h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            - A movie search application with routing to search for movies by
            title. Implemented advanced state management and optimized API
            interactions. Role: Sole Developer. Individual project.
          </p>
          <a
            href="https://goit-react-hw-05-azure-mu.vercel.app/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>

        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/contactsbooks.jpg"
            alt="contactsbooks.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>Contacts Book</h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            - A "Contact Book" application with registration and login
            functionalities, managing a private collection of contacts. Utilized
            secure authentication and optimized data handling.
          </p>
          <a
            href="https://goit-react-hw-08-lac-chi.vercel.app/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>
        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/trackerofwater.jpg"
            alt="trackerofwater.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>
            Trecker of Water
          </h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            - This project is designed to provide users with a simple and
            effective tool for monitoring water consumption. The app's interface
            is intuitive, allowing for quick setup of health goals.
          </p>
          <a
            href="https://team-project-watter-app.vercel.app/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>
        <li className={styles.homeSectionProjectsCard}>
          <img
            src="/images/projects/taisiyastyle.jpg"
            alt="taisiyastyle.jpg"
            className={styles.homeSectionProjectsCardImage}
          />
          <h3 className={styles.homeSectionProjectsCardTitle}>TaisiyaStyle</h3>
          <p className={styles.homeSectionProjectsCardDescription}>
            Developed TaisiyaStyle.com, a personal website for a hairdresser
            using React, featuring responsive design and an intuitive booking
            form. Currently working on the backend with MongoDB to enable
            appointment scheduling.
          </p>
          <a
            href="https://taisiyastyle.vercel.app/"
            className={styles.homeSectionProjectsCardLink}
          >
            Learn More
          </a>
        </li>
      </ul>
    </section>
  )
}
export default Projects
