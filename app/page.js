import Navbar          from '@/components/Navbar'
import Hero             from '@/components/Hero'
import Accomplishments  from '@/components/Accomplishments'
import Leadership       from '@/components/Leadership'
import Service          from '@/components/Service'
import Recommendations  from '@/components/Recommendations'
import Footer           from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <>
      {/* Fixed animated background — sits beneath everything */}
      <AnimatedBackground />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Accomplishments />
          <Leadership />
          <Service />
          <Recommendations />
        </main>
        <Footer />
      </div>
    </>
  )
}
