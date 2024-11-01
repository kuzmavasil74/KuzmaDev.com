import React, { useEffect, useRef } from 'react'
import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'

function Home() {
  const canvasRef = useRef(null)

  const opts = {
    particleColor: 'rgb(200,200,200)',
    lineColor: 'rgb(200,200,200)',
    particleAmount: 30,
    defaultSpeed: 1,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 200,
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      return
    }

    const canvasBody = canvasRef.current
    const drawArea = canvasBody.getContext('2d')

    const parentElement = canvasBody.parentElement
    let w = (canvasBody.width = parentElement.clientWidth)
    let h = (canvasBody.height = parentElement.clientHeight)

    const resizeReset = () => {
      w = canvasBody.width = window.innerWidth
      h = canvasBody.height = window.innerHeight
    }

    let particles = []

    // Particle class
    function Particle() {
      this.x = Math.random() * w
      this.y = Math.random() * h
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed
      this.directionAngle = Math.floor(Math.random() * 360)
      this.color = opts.particleColor
      this.radius = opts.defaultRadius + Math.random() * opts.variantRadius
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      }
      this.update = function () {
        this.border()
        this.x += this.vector.x
        this.y += this.vector.y
      }
      this.border = function () {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1
        }
      }
      this.draw = function () {
        drawArea.beginPath()
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        drawArea.closePath()
        drawArea.fillStyle = this.color
        drawArea.fill()
      }
    }

    const linkPoints = (point1, hubs) => {
      for (let i = 0; i < hubs.length; i++) {
        let distance = Math.sqrt(
          Math.pow(point1.x - hubs[i].x, 2) + Math.pow(point1.y - hubs[i].y, 2)
        )
        let opacity = 1 - distance / opts.linkRadius
        if (opacity > 0) {
          drawArea.lineWidth = 0.5
          drawArea.strokeStyle = `rgba(${opts.lineColor
            .match(/\d+/g)
            .join(', ')}, ${opacity})`
          drawArea.beginPath()
          drawArea.moveTo(point1.x, point1.y)
          drawArea.lineTo(hubs[i].x, hubs[i].y)
          drawArea.closePath()
          drawArea.stroke()
        }
      }
    }

    const setup = () => {
      particles = []
      resizeReset()
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle())
      }
      window.requestAnimationFrame(loop)
    }

    const loop = () => {
      window.requestAnimationFrame(loop)
      drawArea.clearRect(0, 0, w, h)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      particles.forEach((particle) => {
        linkPoints(particle, particles)
      })
    }

    setup()
    window.addEventListener('resize', resizeReset)

    return () => {
      window.removeEventListener('resize', resizeReset)
    }
  }, [])

  return (
    <div className={styles.home}>
      <Header />
      <canvas ref={canvasRef} id="canvas"></canvas>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>
          Vasyl <span className={styles.homeSpanTitle}>Kuzma</span>
        </h1>
        <p className={styles.homeDescription}>
          I am a{' '}
          <span className={styles.homeSpanDescription}>
            {' '}
            Frontend Developer
          </span>
        </p>
        <Link to={`/contact`}>
          <button className={styles.homeButton}>Contact me</button>
        </Link>
      </div>
      <nav className={styles.homeNavSocialMedia}>
        <ul className={styles.homeNavSocialMediaList}>
          <li className={styles.homeNavSocialMediaListItem}>
            <a
              href="https://www.instagram.com/kuzmavasil"
              target="_blank"
              rel="noreferrer"
              className={styles.homeNavSocialMediaListItemLink}
            >
              <img
                src="/images/instagramLogo.svg"
                alt="instagram-link"
                className={styles.homeNavSocialMediaListItemLinkImg}
              />
            </a>
          </li>
          <li className={styles.homeNavSocialMediaListItem}>
            <a
              href="https://www.facebook.com/vova.muka.1"
              target="_blank"
              rel="noreferrer"
              className={styles.homeNavSocialMediaListItemLink}
            >
              <img
                src="/images/facebookLogo.svg"
                alt="facebook-link"
                className={styles.homeNavSocialMediaListItemLinkImg}
              />
            </a>
          </li>
          <li className={styles.homeNavSocialMediaListItem}>
            <a
              href="https://www.linkedin.com/in/vasylkuzma"
              target="_blank"
              rel="noreferrer"
              className={styles.homeNavSocialMediaListItemLink}
            >
              <img
                src="/images/linkedinLogo.svg"
                alt="LinkedIn-link"
                className={styles.homeNavSocialMediaListItemLinkImg}
              />
            </a>
          </li>
          <li className={styles.homeNavSocialMediaListItem}>
            <a
              href="https://github.com/kuzmavasil74"
              target="_blank"
              rel="noreferrer"
              className={styles.homeNavSocialMediaListItemLink}
            >
              <img
                src="/images/gitHubLogo.svg"
                alt="github-link"
                className={styles.homeNavSocialMediaListItemLinkImg}
              />
            </a>
          </li>
          <li className={styles.homeNavSocialMediaListItem}>
            <a
              href="https://t.me/Vasyl_Kuzma"
              target="_blank"
              rel="noreferrer"
              className={styles.homeNavSocialMediaListItemLink}
            >
              <img
                src="/images/telegramLogo.svg"
                alt="telegram-link"
                className={styles.homeNavSocialMediaListItemLinkImg}
              />
            </a>
          </li>
        </ul>
      </nav>
      <nav className={styles.homeContactsNav}>
        <ul className={styles.homeContactsNavList}>
          <li className={styles.homeContactsNavListItem}>
            <a
              href="tel:+420776788319"
              className={styles.homeContactsNavListItemLink}
            >
              <img
                src="/images/telephoneLogo.png"
                alt="telephone-link"
                className={styles.homeContactsNavListItemLinkImg}
              />
            </a>
          </li>
          <li className={styles.homeContactsNavListItem}>
            <a
              href="mailto:kuzmavasil.v@gmail.com"
              className={styles.homeContactsNavListItemLink}
            >
              <img
                src="/images/mailLogo.svg"
                alt="mail-link"
                className={styles.homeContactsNavListItemLinkImg}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
