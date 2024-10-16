import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './About.module.css'

function About() {
  const handleDownload = (fileName) => {
    const link = document.createElement('a')
    link.href = `/Resume/${fileName}`
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={styles.aboutContainer}>
      <Header />
      <section className={styles.aboutSectionAbout}>
        <div className={styles.aboutHeader}>
          {' '}
          <h2 className={styles.aboutSectionAboutTitle}>
            About <span className={styles.aboutSectionAboutTitleSpan}>Me</span>
          </h2>
          <h3 className={styles.aboutSectionAboutSubtitle}>
            Get to Know{' '}
            <span className={styles.aboutSectionAboutSubtitleSpan}>me</span>
          </h3>
        </div>
        <article className={styles.aboutSectionAboutArticle}>
          <div className={styles.aboutSectionAboutArticleContentContainer}>
            <div className={styles.aboutSectionAboutArticleContent}>
              <h3 className={styles.aboutSectionAboutArticleTitle}>
                I'm creative{' '}
                <span className={styles.aboutSectionAboutArticleSpan}>
                  web developer{' '}
                </span>
                based in Praha, Czech Republic
              </h3>
              <p className={styles.aboutSectionAboutArticleText}>
                I'm a Frontend Developer specializing in React.js, with a
                passion for building scalable web applications. I focus on
                delivering clean, efficient code and great user experiences.
              </p>
            </div>
            <div className={styles.resumeButton}>
              <button
                type="button"
                className={styles.downloadButton}
                onClick={() => handleDownload('Vasyl_Kuzma_Resume.pdf')}
              >
                Download CV
              </button>
            </div>
          </div>
          <img
            className={styles.homeSectionAboutImage}
            src="/images/About Me.jpg"
            alt="Avatar_Kuzma_Vasyl.png"
          />
        </article>
      </section>
      <section className={styles.myServices}>
        <h2 className={styles.servicesTitle}>
          <span className={styles.servicesTitleSpan}>My </span>Services
        </h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-frontend-development-64.png"
                alt="Frontend Development"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>Frontend Development</h3>
            <p className={styles.serviceCardDescription}>
              I build modern web apps with React.js and TypeScript, focusing on
              clean code and great user experiences.
            </p>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-design-50.png"
                alt="UI/UX Design"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>UI/UX Design</h3>
            <p className={styles.serviceCardDescription}>
              I design intuitive interfaces with a focus on usability and user
              satisfaction.
            </p>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-responsive-design-50.png"
                alt="Responsive Design"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>Responsive Design</h3>
            <p className={styles.serviceCardDescription}>
              I create mobile-first, responsive websites that work seamlessly
              across all devices.
            </p>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-backend-development-64.png"
                alt="Backend Development"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>Backend Development</h3>
            <p className={styles.serviceCardDescription}>
              I develop efficient REST APIs using Node.js and MongoDB for data
              management.
            </p>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-performance-smartphone-80.png"
                alt="Performance Optimization"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>
              Performance Optimization
            </h3>
            <p className={styles.serviceCardDescription}>
              I optimize website performance to ensure fast load times and
              smooth user experience.
            </p>
          </li>
          <li className={styles.serviceCard}>
            <div className={styles.serviceCardImageContainer}>
              <img
                className={styles.serviceCardImage}
                src="/images/about/icons8-collaboration-50.png"
                alt="Collaboration & Agile"
              />
            </div>
            <h3 className={styles.serviceCardTitle}>Collaboration & Agile</h3>
            <p className={styles.serviceCardDescription}>
              I work well in teams using Git and Agile methodologies to deliver
              quality projects on time.
            </p>
          </li>
        </ul>
      </section>
      <section id="my-skills" className={styles.skillssSection}>
        {' '}
        <h2 className={styles.skillsSectionTitle}>
          <span className={styles.skillsSectionTitleSpan}>My</span> Skills
        </h2>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>Frontend Development</h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  React.js
                </strong>
                : Building dynamic web applications using React and its
                ecosystem.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  TypeScript
                </strong>
                : Ensuring type safety and enhanced code quality.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  JavaScript (ES6+)
                </strong>
                : Mastering modern JavaScript, including async/await and
                promises.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  State Management
                </strong>
                : Using context, hooks, and state management libraries for
                efficient data handling.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Responsive Design
                </strong>
                : Creating mobile-first, adaptive layouts using Flexbox and CSS
                Grid.
              </li>
            </ul>
          </div>

          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>Backend Development</h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Node.js
                </strong>
                : Creating server-side logic and handling API requests.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  MongoDB
                </strong>
                : Designing and managing databases for scalable applications.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  REST API
                </strong>
                : Developing APIs to integrate frontend with backend.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Authentication
                </strong>
                : Implementing user authentication and security measures.
              </li>
            </ul>
          </div>

          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>UI/UX & Web Design</h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  UI/UX Design
                </strong>
                : Crafting intuitive, user-friendly interfaces.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  CSS Animations
                </strong>
                : Enhancing user experience with smooth animations and
                transitions.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Tailwind CSS
                </strong>
                : Leveraging utility-first CSS for rapid and responsive design.
              </li>
            </ul>
          </div>

          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>
              Performance Optimization
            </h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Code Splitting
                </strong>
                : Optimizing web performance by lazy loading resources.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Image Optimization
                </strong>
                : Reducing load times through image compression and responsive
                images.
              </li>
            </ul>
          </div>

          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>
              Collaboration & Tools
            </h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Git/GitHub
                </strong>
                : Managing version control and collaborating with teams.
              </li>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Task Automation
                </strong>
                : Streamlining development workflows using Webpack.
              </li>
            </ul>
          </div>

          <div className={styles.skillsCategory}>
            <h3 className={styles.skillsCategoryTitle}>Project Management</h3>
            <ul className={styles.skillsCategoryList}>
              <li className={styles.skillsCategoryListItem}>
                <strong className={styles.skillsCategoryListItemStrong}>
                  Deployment
                </strong>
                : Deploying applications to platforms like Vercel, ensuring
                smooth production releases.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
