import SectionHeading from '../components/SectionHeading'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/emmy-kun' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/emmy-senpai-102aa7367' },
  { icon: FiTwitter, label: 'Twitter', href: 'https://x.com/emmyvarlc' },
  { icon: FiMail, label: 'Email', href: 'mailto:ceke76795@gmail.com' },
]

export default function Contact() {
  const [ref, isInView] = useInView()

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto text-center reveal ${isInView ? 'active' : ''}`}>
        <SectionHeading label="Contact" title="Let's Work Together" />
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects and opportunities.
          Let's create something amazing together!
        </p>
        <a
          href="mailto:ceke76795@gmail.com"
          className="inline-flex items-center gap-2 liquid-fill border border-primary text-white font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 mb-12"
        >
          Get In Touch
        </a>

        <div className="flex justify-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 group relative border border-dark-border rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/20 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-dark-card" />
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />
              <Icon size={20} className="relative z-10" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Or reach me on WhatsApp:{" "}
          <a
            href="https://wa.me/2349022773021"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light transition-colors"
          >
            +234 902 277 3021
          </a>
        </p>
      </div>
    </section>
  )
}


