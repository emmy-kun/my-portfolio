import SectionHeading from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

function StatCard({ end, suffix, label, icon: Icon, delayClass }) {
  const [ref, count] = useCountUp(end, 2000)
  return (
    <div
      ref={ref}
      className={`gradient-border-card p-5 flex flex-col items-center justify-center text-center gap-2 tech-glow animate-float group relative overflow-hidden ${delayClass}`}
    >
      <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
        <Icon className="w-6 h-6 text-primary mb-1 group-hover:text-white transition-colors" />
        <span className="text-3xl md:text-4xl font-bold text-white tabular-nums">
          {count}{suffix}
        </span>
        <span className="text-xs text-gray-400 uppercase tracking-wider font-medium group-hover:text-white transition-colors">
          {label}
        </span>
      </div>
    </div>
  )
}

const focusPills = [
  { icon: FiCode, label: 'Clean Code' },
  { icon: FiSmartphone, label: 'Responsive' },
  { icon: FiLayers, label: 'Scalable' },
]




export default function About() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" className="py-24 px-6 bg-dark-card/30 overflow-hidden">
      <div ref={ref} className={`max-w-7xl mx-auto reveal ${isInView ? 'active' : ''}`}>
        <SectionHeading label="About Me" title="Get to know me" />

        {/* Main bento grid */}
        <div className="grid lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {/* Left: Large bio card */}
          <div
            className={`lg:col-span-3 gradient-border-card p-6 md:p-8 relative overflow-hidden ${
              isInView ? 'animate-drop-shake' : ''
            }`}
            style={{ animationDelay: isInView ? '0.1s' : undefined, opacity: isInView ? undefined : 0 }}
          >
            {/* Watermark */}
            <span className="watermark-text absolute -top-2 -left-2 md:top-2 md:left-4">
              01
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                I'm a <span className="text-primary">Full Stack Developer</span> who loves
                turning ideas into reality.
              </h3>

              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  I'm Eke Chukwuemeka, a passionate Full Stack Developer building modern,
                  responsive, and scalable digital products. My work sits at the intersection
                  of <span className="text-primary font-medium">great design</span> and{' '}
                  <span className="text-primary font-medium">reliable engineering</span>.
                </p>
                <p>
                  From front-end interfaces to back-end logic and APIs, I enjoy turning ideas
                  into products that are useful, performant, and easy to use. I care about clean
                  architecture, smooth user flow, and experiences that feel intentional from the
                  first click to the final interaction.
                </p>
              </div>

              {/* Focus pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {focusPills.map(({ icon: PillIcon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-dark border border-dark-border rounded-full px-4 py-2 text-sm text-gray-300"
                  >
                    <PillIcon className="w-4 h-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div
              className={isInView ? 'animate-drop-shake' : ''}
              style={{ animationDelay: isInView ? '0.2s' : undefined, opacity: isInView ? undefined : 0 }}
            >
              <StatCard end={3} suffix="+" label="Years Exp" icon={FiTrendingUp} delayClass="" />
            </div>
            <div
              className={isInView ? 'animate-drop-shake' : ''}
              style={{ animationDelay: isInView ? '0.3s' : undefined, opacity: isInView ? undefined : 0 }}
            >
              <StatCard end={10} suffix="+" label="Projects" icon={FiLayers} delayClass="animate-float-delay-1" />
            </div>
            <div
              className={isInView ? 'animate-drop-shake' : ''}
              style={{ animationDelay: isInView ? '0.4s' : undefined, opacity: isInView ? undefined : 0 }}
            >
              <StatCard end={15} suffix="+" label="Technologies" icon={FiCode} delayClass="animate-float-delay-2" />
            </div>
            <div
              className={isInView ? 'animate-drop-shake' : ''}
              style={{ animationDelay: isInView ? '0.5s' : undefined, opacity: isInView ? undefined : 0 }}
            >
              <StatCard end={100} suffix="%" label="Commitment" icon={FiZap} delayClass="animate-float-delay-3" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}