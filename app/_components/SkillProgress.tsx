
export default function SkillProgress({skill, percent, skillColor=''}: {skill: string, percent: number, skillColor: string}) {
  return (
    <div className="mb-7 w-full md:w-5/12">
      <div className="flex justify-between py-1">
        <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6] capitalize">{skill}</span>
        <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">{percent}%</span>
      </div>
      <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
        <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
        <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke={skillColor || "#FF6464"} strokeWidth="1" fillOpacity="0" style={{strokeDasharray: `${percent}px, 100px`, strokeDashoffset: "0px", transition: "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s"}}>
        </path>
      </svg>
    </div>
  )
}

