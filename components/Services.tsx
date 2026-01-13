'use client'

import ScrollReveal from './ScrollReveal'
import styles from './Services.module.css'

const telegramUrl = 'https://t.me/dlnkko'

const services = [
  {
    icon: '⭐',
    title: 'Starter',
    description: 'Perfect for brands getting started with video content.',
    features: [
      '10 Short-form videos (Up to 25 seconds)',
      'Editing: Dynamic subtitles, seamless cuts, strategic zoom-ins',
      '1 Revision per video',
      'Delivery: Organized Google Drive folder for easy access'
    ],
    price: '$750 USD'
  },
  {
    icon: '📈',
    title: 'Growth',
    description: 'Designed for brands ready to scale and outperform their competition.',
    features: [
      '20 Short-form videos (Up to 40 seconds)',
      'AI-Driven Competitor Ad Analysis: We use AI to analyze your competitors\' top-performing ads to see what\'s working in your niche',
      '5 Custom Hooks: We provide 5 high-converting opening lines for your videos to maximize retention',
      'Editing: Dynamic subtitles, seamless cuts, strategic zoom-ins',
      '2 Revisions per video',
      'Delivery: Organized Google Drive folder'
    ],
    price: '$1,500 USD'
  },
  {
    icon: '💎',
    title: 'Pro',
    description: 'The complete solution for serious brands.',
    features: [
      '30 Short-form videos (Up to 40 seconds)',
      'Full Scriptwriting Service: We handle the creative writing for every video, optimized for sales and engagement',
      'AI-Driven Competitor Ad Analysis: We use AI to analyze your competitors\' top-performing ads to see what\'s working in your niche',
      '5 Custom Hooks: Data-backed hooks to stop the scroll',
      'Editing: Dynamic subtitles, seamless cuts, strategic zoom-ins',
      '2 Revisions per video',
      'Delivery: Organized Google Drive folder'
    ],
    price: '$2,400 USD / month'
  }
]

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="servicios">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Our Packages</h2>
            <p className="section-subtitle">Choose the plan that fits your needs</p>
          </div>
        </ScrollReveal>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.priceButton}
                >
                  {service.price}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


