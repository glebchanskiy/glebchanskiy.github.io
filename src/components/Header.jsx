import { Langs } from "@utils"

export const Header = ({ personName, lang, changeLanguage }) => {
  return (
    <div class="flex flex-row justify-between">
      <div>
        <h3 class="font-title">WEB-DEVELOPER</h3>
        <h2
          class={`font-heading text-[30px] sm:text-[25px] font-bold  tracking-[-0.3px]`}
        >
          {personName}
        </h2>
      </div>
      <div class="flex flex-col ">
        <button
          onClick={() => changeLanguage(Langs.en)}
          class={`px-[3px] py-[1px] ${
            lang === Langs.en ? "bg-gray-300 rounded-sm" : ""
          } transition-all duration-700 ease-out`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage(Langs.ru)}
          class={`px-[3px] py-[1px] ${
            lang === Langs.ru ? "bg-gray-300 rounded-sm" : ""
          } transition-all duration-700 ease-out`}
        >
          RU
        </button>
      </div>
    </div>
  )
}
