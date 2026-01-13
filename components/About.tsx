'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './About.module.css'

const features = [
  {
    icon: '⚡',
    title: 'Velocidad',
    description: 'Genera anuncios en minutos, no en días'
  },
  {
    icon: '🎯',
    title: 'Precisión',
    description: 'Algoritmos que entienden a tu audiencia'
  },
  {
    icon: '💎',
    title: 'Calidad',
    description: 'Diseños profesionales de nivel premium'
  }
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="sobre-nosotros">
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <ScrollReveal>
              <h2 className="section-title">¿Por Qué Elegirnos?</h2>
              <p className={styles.aboutDescription}>
                Somos pioneros en la generación de anuncios con inteligencia artificial. 
                Combinamos tecnología de vanguardia con creatividad humana para ofrecer 
                resultados excepcionales.
              </p>
              <div className={styles.featuresList}>
                {features.map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className={styles.featureItem}>
                      <span className={styles.featureIcon}>{feature.icon}</span>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className={styles.aboutMedia}>
            <ScrollReveal delay={0.3}>
              <div className={styles.mediaContainer}>
                <Image
                  src="/assets/images/about-image.jpg"
                  alt="Generación de ads con IA"
                  width={600}
                  height={400}
                  className={styles.aboutImage}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className={styles.mediaPlaceholder}></div>
                <div className={styles.mediaOverlay}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}



