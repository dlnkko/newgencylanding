'use client'

import { useState, FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './FreeDemo.module.css'

type MediaType = 'video' | 'image' | null
type VideoOption = 'UGC' | 'Product Video' | null
type ImageOption = 'Studio Product Photo' | 'UGC' | null

export default function FreeDemo() {
  const [email, setEmail] = useState('')
  const [productLink, setProductLink] = useState('')
  const [mediaType, setMediaType] = useState<MediaType>(null)
  const [videoOption, setVideoOption] = useState<VideoOption>(null)
  const [imageOption, setImageOption] = useState<ImageOption>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email || !productLink || !mediaType) {
      alert('Please complete all required fields')
      return
    }

    if (mediaType === 'video' && !videoOption) {
      alert('Please select a video type')
      return
    }

    if (mediaType === 'image' && !imageOption) {
      alert('Please select an image type')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = {
      email,
      productLink,
      mediaType,
      option: mediaType === 'video' ? videoOption : imageOption,
      timestamp: new Date().toISOString()
    }

    try {
      // Aquí puedes enviar los datos a tu API o servicio de email
      // Por ahora, lo mostraremos en consola y enviaremos una notificación
      console.log('Form Data:', formData)
      
      // Simular envío (reemplaza esto con tu lógica real)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Enviar notificación por email usando un servicio
      // Puedes usar servicios como EmailJS, SendGrid, o tu propia API
      await sendNotification(formData)
      
      setSubmitStatus('success')
      // Reset form
      setEmail('')
      setProductLink('')
      setMediaType(null)
      setVideoOption(null)
      setImageOption(null)
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendNotification = async (data: any) => {
    // Enviar a la API de Next.js
    const response = await fetch('/api/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    
    if (!response.ok) {
      throw new Error('Error sending request')
    }
    
    const result = await response.json()
    console.log('📧 Solicitud enviada:', result)
  }

  return (
    <section className={`section ${styles.freeDemo}`} id="free-demo">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Request Your Free Demo</h2>
            <p className="section-subtitle">
              Fill out the form and we'll show you how we can help you
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.formContainer}>
          <ScrollReveal delay={0.2}>
            <form className={styles.demoForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="productLink">Product Link *</label>
                <input
                  type="url"
                  id="productLink"
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder="https://your-product.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Content Type *</label>
                <div className={styles.optionButtons}>
                  <button
                    type="button"
                    className={`${styles.optionButton} ${
                      mediaType === 'video' ? styles.active : ''
                    }`}
                    onClick={() => {
                      setMediaType('video')
                      setImageOption(null)
                    }}
                  >
                    Video
                  </button>
                  <button
                    type="button"
                    className={`${styles.optionButton} ${
                      mediaType === 'image' ? styles.active : ''
                    }`}
                    onClick={() => {
                      setMediaType('image')
                      setVideoOption(null)
                    }}
                  >
                    Imagen
                  </button>
                </div>
              </div>

              {mediaType === 'video' && (
                <div className={styles.formGroup}>
                  <label>Video Type *</label>
                  <div className={styles.optionButtons}>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${
                        videoOption === 'UGC' ? styles.active : ''
                      }`}
                      onClick={() => setVideoOption('UGC')}
                    >
                      UGC
                    </button>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${
                        videoOption === 'Product Video' ? styles.active : ''
                      }`}
                      onClick={() => setVideoOption('Product Video')}
                    >
                      Product Video
                    </button>
                  </div>
                </div>
              )}

              {mediaType === 'image' && (
                <div className={styles.formGroup}>
                  <label>Image Type *</label>
                  <div className={styles.optionButtons}>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${
                        imageOption === 'Studio Product Photo' ? styles.active : ''
                      }`}
                      onClick={() => setImageOption('Studio Product Photo')}
                    >
                      Studio Product Photo
                    </button>
                    <button
                      type="button"
                      className={`${styles.optionButton} ${
                        imageOption === 'UGC' ? styles.active : ''
                      }`}
                      onClick={() => setImageOption('UGC')}
                    >
                      UGC
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className={`btn-primary ${styles.submitButton}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Request sent successfully! We'll contact you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  ❌ There was an error sending. Please try again.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

