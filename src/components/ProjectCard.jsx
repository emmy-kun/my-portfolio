import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ title, description, liveUrl, repoUrl, image }) {
  const [imgError, setImgError] = useState(false)
  const hasImage = Boolean(image)

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
      {/* Image side */}
      <div className="relative group/image">
        <div className="relative rounded-2xl overflow-hidden border border-dark-border/50 bg-dark-card aspect-[16/10] lg:aspect-[16/9]">
          {!imgError && hasImage ? (
            <img
              src={image}
              alt={`${title} preview`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={1600}
              height={1000}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-card to-dark">
              <span className="text-gray-600 text-sm font-medium">{title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 via-transparent to-accent/5 pointer-events-none" />
        </div>

        <div className="absolute -inset-1 bg-accent/10 rounded-2xl blur-xl -z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl btn-gradient-cyan text-white hover:scale-105 transition-transform"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl border border-accent/30 text-accent hover:border-accent hover:text-accent-light hover:bg-accent/10 transition-all hover:scale-105"
            >
              <FiGithub size={16} /> View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
