import { useState, useEffect, useCallback } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { useInView } from '../hooks/useInView'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    title: 'IronPulse',
    description:
      'Premium fitness and recovery web experience focused on training, recovery, and a modern digital experience.',
    liveUrl: 'https://ironpulse-fit-orpin.vercel.app/',
    repoUrl: 'https://github.com/emmy-kun/ironpulse',
    image: '/images/ironpulse.png',
  },
  {
    title: 'Apex Horizon',
    description:
      'Premium real-estate web experience with Firebase authentication, a polished property browsing flow, and a modern UI designed to showcase luxury listings.',
    liveUrl: 'https://apex-horizon-co.vercel.app/',
    repoUrl: 'https://github.com/emmy-kun/Apex-Horizon',
    image: '/images/apexhorizon.png',
  },
  {
    title: 'CineVibe',
    description:
      'Modern movie discovery and entertainment platform designed around exploring and discovering movies and other entertainment content.',
    liveUrl: 'https://cinevibe-stream.vercel.app/',
    repoUrl: 'https://github.com/emmy-kun/cinevibe',
    image: '/images/cinevibe.png',
  },
  {
    title: 'BuySmart',
    description:
      'Modern e-commerce platform with Firebase authentication, a functional backend, Paystack payment integration, cart and checkout flows, and invoice generation for a complete shopping experience.',
    liveUrl: 'https://buysmart-cart.vercel.app/',
    repoUrl: 'https://github.com/emmy-kun/buysmart',
    image: '/images/buysmart.png',
  },
]

export default function Projects() {
  const [ref, isInView] = useInView()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const navigate = useCallback((index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, currentIndex])

  const next = useCallback(() => {
    navigate((currentIndex + 1) % projects.length)
  }, [navigate, currentIndex])

  const prev = useCallback(() => {
    navigate((currentIndex - 1 + projects.length) % projects.length)
  }, [navigate, currentIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  return (
    <section id="projects" className="py-24 px-6 bg-dark-card/30 overflow-hidden">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${isInView ? 'active' : ''}`}>
        <SectionHeading label="Portfolio" title="Featured Projects" />

        <div className="relative mt-16">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-20 z-10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl border border-accent/30 text-accent items-center justify-center hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300"
            aria-label="Previous project"
          >
            <FiChevronLeft size={20} className="md:hidden" />
            <FiChevronLeft size={24} className="hidden md:block" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-20 z-10 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl border border-accent/30 text-accent items-center justify-center hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300"
            aria-label="Next project"
          >
            <FiChevronRight size={20} className="md:hidden" />
            <FiChevronRight size={24} className="hidden md:block" />
          </button>

          {/* Card container */}
          <div className="mx-0 md:mx-10 lg:mx-24">
            <div className="relative bg-dark-card/80 border border-dark-border/50 rounded-3xl backdrop-blur-sm card-glow overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="w-full flex-shrink-0 min-w-full p-6 md:p-10 lg:p-12 min-h-[420px] md:min-h-[480px] flex items-center"
                  >
                    <div className="w-full">
                      <ProjectCard {...project} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-accent w-8 shadow-lg shadow-accent/40'
                    : 'bg-gray-600 w-2.5 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
