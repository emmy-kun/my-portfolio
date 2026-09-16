import { FiPhone, FiArrowUpRight } from 'react-icons/fi'
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'
import { useTypewriter } from '../hooks/useTypewriter'

const techStack = [
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Vite', icon: SiVite, color: 'text-violet-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-400' },
]

function ProfileImage({ className = '' }) {
  return (
    <div className={`profile-glow ${className}`}>
      <img
        src="/images/port_img-removebg-preview.png"
        alt="Eke Chukwuemeka"
        className="w-64 sm:w-72 md:w-80 lg:w-[28rem] h-auto object-contain rounded-3xl"
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}

export default function Hero() {
  const { displayText } = useTypewriter('Eke Chukwuemeka', 120, 600, 2000)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob pointer-events-none" style={{ animationDelay: '-5s' }} />

      <div className="relative max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-2xl">
          <span className="inline-block text-xs font-bold tracking-widest text-primary uppercase mb-4 animate-fade-in-up">
            FULL STACK Developer
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{' '}
            <span className="relative inline-block text-primary max-w-full">
              {/* Invisible placeholder reserves full width/height so layout never shifts */}
              <span className="invisible" aria-hidden="true">
                Eke Chukwuemeka
              </span>
              <span className="absolute left-0 top-0 w-full">
                {displayText}
              </span>
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            I build scalable products that blend solid engineering with great UX.
          </h2>

          {/* Mobile image — appears after tagline */}
          <div className="flex md:hidden justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <ProfileImage />
          </div>

          <p className="text-gray-400 leading-relaxed mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            A passionate Full Stack Developer focused on building scalable digital products,
            responsive interfaces, and seamless user experiences with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 liquid-fill border border-primary text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Work <FiArrowUpRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 liquid-fill border border-primary text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              Contact Me <FiPhone />
            </a>
          </div>

          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-5">
              Technologies I work with
            </p>
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              {techStack.map((tech, i) => {
                const Icon = tech.icon
                return (
                  <div
                    key={tech.name}
                    className={`tech-glow flex flex-col items-center gap-2 bg-dark-card border border-dark-border rounded-xl px-2 py-3 cursor-default reveal-delay-${i + 1}`}
                    style={{ animationDelay: `${1 + i * 0.1}s` }}
                  >
                    <Icon className={`w-8 h-8 ${tech.color}`} />
                    <span className="text-[10px] font-medium text-gray-400 leading-none">
                      {tech.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Desktop image — side column, locked size so it never shifts */}
        <div className="hidden md:flex flex-shrink-0 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}



