export const ExperienceCard = ({ name, description, link = undefined }) => (
  <div class="flex flex-col">
    <h3
      class={`font-heading text-[20px] sm:text-[16px] font-bold ${
        link ? "underline" : ""
      }`}
    >
      {link ? <a href={link}>{name}</a> : <>{name}</>}
    </h3>

    <p
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></p>
  </div>
)
