import { Langs } from "@utils"
import { EducationCard } from "./EducationCard"

export const Education = ({ lang, sections, education }) => {
  return (
    <div class="flex flex-col gap-2">
      <h2
        class={`font-heading font-bold text-[24px] sm:text-[18px]`}
      >
        {sections.education}
      </h2>
      <div>
        {education.map((e) => (
          <EducationCard
            key={e.name}
            name={e.name}
            description={e.description}
            period={e.period}
            lang={lang}
          />
        ))}
      </div>
    </div>
  )
}
