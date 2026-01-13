'use client'

import { useState, useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import styles from './VideoCarousel.module.css'

// Array de videos - puedes agregar más videos aquí
const videos = [
  '/assets/video/carousel-1.mp4',
  '/assets/video/carousel-2.mp4',
  '/assets/video/carousel-3.mp4',
  '/assets/video/carousel-4.mp4',
  '/assets/video/carousel-5.mp4',
]

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    // Auto-play current video
    const currentVideo = videoRefs.current[currentIndex]
    if (currentVideo) {
      currentVideo.play().catch(err => console.log('Auto-play prevented:', err))
    }
    
    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [currentIndex])
  
  // Auto-advance to next video when current ends
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex]
    if (!currentVideo) return
    
    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }
    
    currentVideo.addEventListener('ended', handleEnded)
    return () => currentVideo.removeEventListener('ended', handleEnded)
  }, [currentIndex])

  return (
    <section className={`section ${styles.videoCarousel}`} id="video-carousel">
      <div className={styles.videoBackgroundContainer}>
        {videos.map((videoSrc, index) => (
          <video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el
            }}
            className={`${styles.backgroundVideo} ${
              index === currentIndex ? styles.active : ''
            }`}
            src={videoSrc}
            muted
            autoPlay={index === currentIndex}
            loop={false}
            playsInline
          />
        ))}
        <div className={styles.videoOverlay}></div>
      </div>
      
      <div className={styles.contentContainer}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Fire your influencers</h2>
              <p className={styles.subtitle}>
                You provide the scripts, we provide the execution
              </p>
              <p className={styles.description}>
                No more negotiations. No more reshoot requests. No more waiting. Just your winning scripts transformed into hyper-realistic ad creatives that perform. We generate multiple variants, tests them instantly, and scales your winners, faster and cheaper than any influencer ever could.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

