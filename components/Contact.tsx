'use client'

import { FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }
    
    // Here you can send the data to your server
    console.log('Form submitted:', data)
    
    alert('Message sent successfully! We will contact you soon.')
    e.currentTarget.reset()
  }

  return (
    <section className={`section ${styles.contact}`} id="contacto">
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <ScrollReveal>
              <h2 className="section-title">Contact</h2>
              <p className={styles.contactDescription}>
                Have questions? We're here to help. Contact us and we'll get back to you as soon as possible.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>info@aiadspro.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>City, Country</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className={styles.formGroup}>
                <textarea name="message" placeholder="Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}


