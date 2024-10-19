import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import styles from './Blog.module.css'

function Blog() {
  return (
    <div>
      <Header />
      <section className={styles.blogSection}>
        <div className={styles.blogHeader}>
          <h2 className={styles.blogSectionTitle}>Blogs</h2>
          <p className={styles.blogSectionTitleDesc}>
            My latest{' '}
            <span className={styles.blogSectionListItemDescSpan}>
              blog posts.
            </span>
          </p>
        </div>
        <ul className={styles.blogSectionList}>
          <li className={styles.blogSectionListItem}>
            <a href={`/blog/$/{blog.slug}`} alt="">
              <div className={styles.blogSectionListItemImgCard}>
                <img
                  className={styles.blogSectionListItemImg}
                  src="/images/blogs/post-one.jpg"
                  alt="post-one"
                />
                <p className={styles.blogSectionListItemImgDate}>
                  19 Sep, 2024
                </p>
              </div>
              <div className={styles.blogSectionListItemText}>
                <h3 className={styles.blogSectionListItemTextTitle}>
                  How I Built My First Fully Functional Portfolio Website for a
                  Hairdresser
                </h3>
                <p className={styles.blogSectionListItemTextDesc}>
                  In this blog post, I'll share my experience building my first
                  fully functional portfolio website for a hairdresser. The
                  process involved multiple stages, from gathering requirements
                  to implementing the backend. This project was not only a
                  technical challenge but also an opportunity to apply my skills
                  in React, CSS modules, responsive design, and Node.js.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.blogSectionListItem}>
            <a href="" alt="">
              <div className={styles.blogSectionListItemImgCard}>
                <img
                  className={styles.blogSectionListItemImg}
                  src="/images/blogs/post-two.jpg"
                  alt="post-one"
                />
                <p className={styles.blogSectionListItemImgDate}>1 Oct, 2024</p>
              </div>
              <div className={styles.blogSectionListItemText}>
                <h3 className={styles.blogSectionListItemTextTitle}>
                  My Journey in Web Development: From Beginner to Frontend
                  Developer
                </h3>
                <p className={styles.blogSectionListItemTextDesc}>
                  In this blog, I want to share my journey into the world of web
                  development. As a beginner, I had no idea how challenging yet
                  fascinating this process would be. Web development is not just
                  about technical skills but also about continuous learning and
                  improvement. Here's how I went from my first steps to where I
                  am today.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.blogSectionListItem}>
            <a href="" alt="">
              <div className={styles.blogSectionListItemImgCard}>
                <img
                  className={styles.blogSectionListItemImg}
                  src="/images/blogs/post-three.jpg"
                  alt="post-one"
                />
                <p className={styles.blogSectionListItemImgDate}>
                  18 Oct, 2024
                </p>
              </div>
              <div className={styles.blogSectionListItemText}>
                <h3 className={styles.blogSectionListItemTextTitle}>
                  Practical Project Breakdown: Solving Technical Challenges
                </h3>
                <p className={styles.blogSectionListItemTextDesc}>
                  In this post, I'll break down several projects I've worked on
                  and explain how I approached and solved different technical
                  challenges. Practical examples like these help demonstrate how
                  to tackle development issues and which tools or methods can
                  come in handy.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}
export default Blog
