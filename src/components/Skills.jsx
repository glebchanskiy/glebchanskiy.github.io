export const Skills = ({ skills, sections }) => {
  return (
    <div class="flex flex-col gap-2">
      <h2
        class={`font-heading font-bold text-[24px] sm:text-[18px]`}
      >
        {sections.skills}
      </h2>
      <ul class="list-disc">
        {skills.map((skill, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{
              __html: skill,
            }}
          ></li>
        ))}
      </ul>
    </div>
  )
}
