'use client'

import { useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './Calendly.module.css'

declare global {
  interface Window {
    Calendly: any
  }
}

export default function Calendly() {
  useEffect(() => {
    // Cargar el script de Calendly si no está cargado
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className={`section ${styles.calendlySection}`} id="book-call">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Book a Call</h2>
            <p className="section-subtitle">
              Select a time that works for you and let's talk about how we can help you
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className={styles.calendlyContainer}>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/newgencyai/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

