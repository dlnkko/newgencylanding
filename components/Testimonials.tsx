'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    stars: 5,
    text: '"Increíble servicio. Los anuncios generados por IA superaron todas nuestras expectativas. El ROI se triplicó en el primer mes."',
    name: 'María González',
    role: 'CEO, TechStart',
    image: '/assets/images/testimonial-1.jpg'
  },
  {
    stars: 5,
    text: '"La velocidad de entrega es impresionante. Lo que antes tomaba semanas, ahora lo hacemos en horas."',
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing',
    image: '/assets/images/testimonial-2.jpg'
  },
  {
    stars: 5,
    text: '"La calidad es excepcional. Cada anuncio está perfectamente optimizado para nuestra audiencia."',
    name: 'Ana Martínez',
    role: 'Fundadora, DigitalBrand',
    image: '/assets/images/testimonial-3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          </div>
        </ScrollReveal>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {'★'.repeat(testimonial.stars)}
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={styles.testimonialAvatar}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                  <div className={styles.testimonialPlaceholder}></div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}



