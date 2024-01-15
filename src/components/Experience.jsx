import { ExperienceCard } from "./ExperienceCard"

export const Experience = ({ experience, sections }) => {
  return (
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <h2 class={`font-heading font-bold text-[24px] sm:text-[18px] `}>
          {sections.experience}
        </h2>
        <span class="opacity-70 text-nowrap">2022-2024</span>
      </div>

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
