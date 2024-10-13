import React from 'react'
import Header from '../../components/Header/Header'

import styles from './Portfolio.module.css'
function Portfolio() {
  return (
    <div className={styles.resumecontainer}>
      <Header />
      <div className={styles.resumecolumn}>
        <h1 className={styles.resumetitle}>Vasyl Kuzma</h1>
        <h2 className={styles.resumesubtitle}>
          Frontend Developer | React Specialist
        </h2>
        <p className={styles.resumedescription}>
          I am an enthusiastic Frontend Developer specializing in React, with a
          strong foundation in JavaScript and TypeScript. My goal is to create
          scalable, high-performance web applications that provide excellent
          user experiences. I am passionate about continuous learning and
          actively contribute to open-source projects.
        </p>

        <section className={styles.contactInfo}>
          <h2 className={styles.resumesubtitle}>Contact Information:</h2>
          <ul className={styles.resumelist}>
            <li className={styles.resumelistitem}>
              Phone:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="tel:+420776788319"
              >
                +420 776 788 319
              </a>
            </li>
            <li className={styles.resumelistitem}>
              Email:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="mailto:kuzmavasil.v@gmail.com"
              >
                kuzmavasil.v@gmail.com
              </a>
            </li>
            <li className={styles.resumelistitem}>
              Telegram:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="https://t.me/Vasyl_Kuzma"
              >
                https://t.me/Vasyl_Kuzma
              </a>
            </li>
            <li className={styles.resumelistitem}>
              LinkedIn:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="https://www.linkedin.com/in/vasylkuzma/"
              >
                My LinkedIn Profile
              </a>
            </li>
            <li className={styles.resumelistitem}>
              GitHub:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="https://github.com/kuzmavasil74"
              >
                https://github.com/kuzmavasil74
              </a>
            </li>
            <li className={styles.resumelistitem}>
              Portfolio:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="https://kuzma-dev-com.vercel.app/"
              >
                https://kuzma-dev-com.vercel.app/
              </a>
            </li>
            <li className={styles.resumelistitem}>
              Location:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.resumelink}
                href="https://maps.app.goo.gl/C2faa2FxK1v27mVS8"
              >
                Prague, Czech Republic
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.techSkills}>
          <h2 className={styles.resumesubtitle}>Tech Skills</h2>
          <ul className={styles.resumelist}>
            <li className={styles.resumelistitem}>React (Hooks, Redux)</li>
            <li className={styles.resumelistitem}>JavaScript / TypeScript</li>
            <li className={styles.resumelistitem}>
              HTML5 / CSS3 (SCSS, Responsive Design)
            </li>
            <li className={styles.resumelistitem}>Node.js</li>
            <li className={styles.resumelistitem}>MongoDB</li>
            <li className={styles.resumelistitem}>Git / GitHub</li>
            <li className={styles.resumelistitem}>VS Code</li>
          </ul>
        </section>

        <section className={styles.softSkills}>
          <h2 className={styles.resumesubtitle}>Soft Skills</h2>
          <ul className={styles.resumelist}>
            <li className={styles.resumelistitem}>Attention to detail</li>
            <li className={styles.resumelistitem}>Teamwork</li>
            <li className={styles.resumelistitem}>Creativity</li>
            <li className={styles.resumelistitem}>Critical thinking</li>
            <li className={styles.resumelistitem}>Problem Solving</li>
          </ul>
        </section>

        <section className={styles.languages}>
          <h2 className={styles.resumesubtitle}>Languages</h2>
          <ul className={styles.resumelist}>
            <li className={styles.resumelistitem}>
              English - B1 (Intermediate)
            </li>
            <li className={styles.resumelistitem}>Ukrainian - C1 (Native)</li>
            <li className={styles.resumelistitem}>Russian - B2 (Fluent)</li>
            <li className={styles.resumelistitem}>
              Czech - A2 (Pre-Intermediate)
            </li>
          </ul>
        </section>
      </div>

      <div className={styles.resumecolumn}>
        <h2 className={styles.resumesubtitle}>Work Experience</h2>
        <h3 className={styles.resumesubtitle}>Novares Group, Czech Republic</h3>
        <p className={styles.resumedescription}>
          <em className={styles.resumelinkem}>
            Operator - Inspector - Master - Electrotechnician (2020 - 2023)
          </em>
        </p>
        <p className={styles.resumedescription}>
          Worked in various roles starting as an operator and progressing to the
          position of electrotechnician. Responsibilities included quality
          control, team supervision, and electrical maintenance.
        </p>

        <h3 className={styles.resumesubtitle}>Yazaki LLC, Ukraine</h3>
        <p className={styles.resumedescription}>
          <em className={styles.resumelinkem}>Operator (2018)</em>
        </p>
        <p className={styles.resumedescription}>
          Ensured smooth operation of assembly lines, performing quality checks
          and ensuring efficient production workflow.
        </p>

        <h3 className={styles.resumesubtitle}>
          Lecturer Assistant, University of Physics
        </h3>
        <p className={styles.resumedescription}>
          <em className={styles.resumelinkem}>Junior Lecturer (2015 - 2019)</em>
        </p>
        <p className={styles.resumedescription}>
          Delivered lectures and assisted students in physics-related subjects.
          Conducted practical lab sessions and guided students in their
          research.
        </p>

        <section className={styles.education}>
          <h2 className={styles.resumesubtitle}>Education</h2>
          <h3 className={styles.resumesubtitle}>
            Fullstack Developer Course (HTML, CSS, JavaScript, React, Node.js)
          </h3>
          <p className={styles.resumedescription}>
            <em className={styles.resumelinkem}>GoIT Global, 2023 - 2024</em>
          </p>
          <p className={styles.resumedescription}>
            Successfully completed a comprehensive Fullstack development course
            covering frontend and backend technologies such as HTML, CSS,
            JavaScript, React, and Node.js. This program provided in-depth
            training in creating scalable web applications and mastering modern
            development practices.
          </p>
          <p className={styles.resumedescription}>
            <em className={styles.resumelinkem}>
              Certificate issued by CEO of GoIT
            </em>
          </p>

          <h3 className={styles.resumesubtitle}>Ph.D. in Physics</h3>
          <p className={styles.resumedescription}>
            Completed postgraduate studies with a focus on advanced physics
            research. Gained deep expertise in both theoretical and experimental
            physics.
            <br />
            <br />
            <em className={styles.resumelinkem}>
              Uzhgorod National University, 2013 - 2015
            </em>
          </p>

          <h3 className={styles.resumesubtitle}>
            Bachelor's and Master's in Physics
          </h3>
          <p className={styles.resumedescription}>
            Obtained both Bachelor's and Master's degrees in physics. Developed
            a solid foundation in various branches of physics, from classical
            mechanics to quantum physics.
            <br />
            <br />
            <em className={styles.resumelinkem}>
              Uzhgorod National University, 2007 - 2012
            </em>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
