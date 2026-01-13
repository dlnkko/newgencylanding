'use client'

import ScrollReveal from './ScrollReveal'
import styles from './CTA.module.css'

export default function CTA() {
  const telegramUsername = 'dlnkko'
  const telegramUrl = `https://t.me/${telegramUsername}`

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>No time or tired of calls? Let's chat on telegram</h2>
            <a 
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-large"
            >
              Chat with Founder
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


