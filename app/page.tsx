import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoCarousel from '@/components/VideoCarousel'
import FreeDemo from '@/components/FreeDemo'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Calendly from '@/components/Calendly'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VideoCarousel />
      <FreeDemo />
      <Services />
      <CTA />
      <Calendly />
      <Footer />
    </main>
  )
}


