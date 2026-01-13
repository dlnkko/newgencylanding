'use client'

import styles from './Footer.module.css'

export default function Footer() {
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
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <span className={styles.logoText}>newgency</span>
            </div>
            <p>AI-powered ad generation for exceptional results.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Home</a></li>
              <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>Services</a></li>
              <li><a href="#video-carousel" onClick={(e) => { e.preventDefault(); scrollToSection('video-carousel') }}>Portfolio</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li><a href="#servicios">Ad Creation</a></li>
              <li><a href="#servicios">Analysis & Optimization</a></li>
              <li><a href="#servicios">Complete Campaigns</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Social Media</h4>
            <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 AI Ads Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


