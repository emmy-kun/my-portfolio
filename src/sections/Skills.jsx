import SectionHeading from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiExpress,
  SiFirebase,
} from 'react-icons/si'
import { FiGlobe } from 'react-icons/fi'

function VsCodeIcon({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z"
        fill="#0065A9"
      />
      <path
        d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z"
        fill="#007ACC"
      />
      <path
        d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z"
        fill="#1F9CF0"
      />
    </svg>
  )
}

function FigmaIcon({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
      <path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
      <path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
      <path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
      <path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
    </svg>
  )
}

function Css3Icon({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 100 362.734 412"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-74.633,0)">
        <polygon fill="#264de4" points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62" />
        <polygon fill="#2965f1" points="376.03,447.246 404.27,130.894 256,130.894 256,480.523" />
        <polygon fill="#ebebeb" points="150.31,268.217 154.38,313.627 256,313.627 256,268.217" />
        <polygon fill="#ebebeb" points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716" />
        <polygon fill="#ebebeb" points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457" />
        <polygon fill="#ffffff" points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627" />
      </g>
    </svg>
  )
}

const skills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: Css3Icon },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'Express', Icon: SiExpress, color: '#808080' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'VS Code', Icon: VsCodeIcon, color: '#007ACC' },
  { name: 'REST APIs', Icon: FiGlobe, color: '#3B82F6' },
]

export default function Skills() {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${isInView ? 'active' : ''}`}>
        <SectionHeading label="My Skills" title="Technologies & Tools" />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => {
            const Icon = skill.Icon
            return (
              <div
                key={skill.name}
                className={`bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col items-center justify-center gap-3 tech-glow ${
                  isInView ? 'animate-drop-shake' : ''
                }`}
                style={{
                  animationDelay: isInView ? `${i * 0.07}s` : undefined,
                  opacity: isInView ? undefined : 0,
                }}
              >
                <Icon
                  className="w-10 h-10"
                  style={skill.color ? { color: skill.color } : undefined}
                />
                <span className="text-sm font-medium text-gray-300 text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}



