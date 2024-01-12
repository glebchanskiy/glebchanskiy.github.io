export const ExperienceCard = ({ name, description }) => (
  <div class="flex flex-col">
    <h3 class={`font-heading text-[20px] sm:text-[16px] font-bold`}>{name}</h3>
    <p
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></p>
  </div>
)
