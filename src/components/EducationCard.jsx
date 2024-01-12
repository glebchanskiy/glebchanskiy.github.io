import { Langs } from "@utils"

export const EducationCard = ({ name, description, period, lang }) => (
  <div>
    <div class="flex gap-5 justify-between">
      <h3
        class={`font-heading ${
          lang === Langs.ru
            ? "text-[16px] sm:text-[14px]"
            : "text-[20px] sm:text-[16px]"
        } text-balance  font-bold`}
      >
        {name}
      </h3>
      <span class="opacity-70 text-nowrap">{period}</span>
    </div>

    <p class="text-pretty">{description}</p>
  </div>
)
