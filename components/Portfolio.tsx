'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './Portfolio.module.css'

const portfolioItems = [
  {
    image: '/assets/images/portfolio-1.jpg',
    title: 'Campaña E-commerce',
    description: '+250% en conversiones'
  },
  {
    image: '/assets/images/portfolio-2.jpg',
    title: 'Campaña Redes Sociales',
    description: '5M de impresiones'
  },
  {
    image: '/assets/images/portfolio-3.jpg',
    title: 'Campaña Video',
    description: '2M de visualizaciones'
  }
]

export default function Portfolio() {
  const handlePortfolioClick = (title: string) => {
    // Aquí puedes implementar un modal o navegación a página de detalle
    console.log('Portfolio item clicked:', title)
  }

  return (
    <section className={`section ${styles.portfolio}`} id="portafolio">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Nuestro Trabajo</h2>
            <p className="section-subtitle">Ejemplos de éxito que hablan por sí solos</p>
          </div>
        </ScrollReveal>
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className={styles.portfolioItem}>
                <div className={styles.portfolioImageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className={styles.portfolioImage}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className={styles.portfolioPlaceholder}></div>
                  <div className={styles.portfolioOverlay}>
                    <button 
                      className={styles.portfolioBtn}
                      onClick={() => handlePortfolioClick(item.title)}
                    >
                      Ver Proyecto
                    </button>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.45}>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioVideoContainer}>
                <video className={styles.portfolioVideo} controls>
                  <source src="/assets/video/portfolio-video-1.mp4" type="video/mp4" />
                </video>
                <div className={styles.portfolioInfo}>
                  <h3>Video Anuncio</h3>
                  <p>Ejemplo de calidad</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}



