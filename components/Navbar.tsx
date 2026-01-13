'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
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
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>newgency</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio') }}>Home</a></li>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>Services</a></li>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollToSection('servicios') }}>I'm In!</a></li>
            <li><a href="#video-carousel" onClick={(e) => { e.preventDefault(); scrollToSection('video-carousel') }}>Portfolio</a></li>
          </ul>
          <button 
            className={styles.ctaNav}
            onClick={() => scrollToSection('book-call')}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}


