import { ExperienceCard } from "./ExperienceCard"

export const Experience = ({ experience, sections }) => {
  return (
    <div class="flex flex-col gap-2">
      <h2 class={`font-heading font-bold text-[24px] sm:text-[18px] `}>
        {sections.experience}
      </h2>
      <div class="flex flex-col gap-3">
        {experience.map((e) => (
          <ExperienceCard
            key={e.name}
            name={e.name}
            description={e.description}
          />
        ))}
      </div>
    </div>
  )
}
