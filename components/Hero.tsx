'use client'

import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * 0.5
        if (scrolled < window.innerHeight) {
          videoRef.current.style.transform = `translateY(${rate}px)`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.heroTitle}>
              <span className="gradient-text">More creatives = More winners.</span><br />
              Make it unfair.
            </h1>
            <p className={styles.heroSubtitle}>
              One $1K video hoping it works, or 20 variants testing what actually converts? Easy choice.
            </p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" onClick={() => scrollToSection('book-call')}>
                Book a call
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('free-demo')}>
                Free Demo
              </button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Ads Generated</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Conversion Rate</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <div className={styles.heroVideoContainer}>
        <video 
          ref={videoRef}
          className={styles.heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/assets/video/hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoPlaceholder}></div>
        <div className={styles.videoOverlay}></div>
      </div>
    </section>
  )
}


