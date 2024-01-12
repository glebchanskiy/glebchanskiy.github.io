import { GitHubIcon, LinkedinIcon, TelegramIcon } from "@icons"
import { Langs, copyTextToClipboard } from "@utils"

export const ProfileAndContacts = ({
  profileText,
  contacts,
  sections,
}) => {
  return (
    <div class="flex flex-col sm:flex-row sm:gap-5">
      <div class="sm:w-96 flex flex-col gap-2">
        <h2
          class={`font-heading font-bold text-[24px] sm:text-[18px]`}
        >
          {sections.profile}
        </h2>
        <p class="text-balance">{profileText}</p>
      </div>

      <hr class="sm:hidden separator" />

      <div class="flex flex-col gap-2">
        <h2
          class={`hidden sm:inline font-heading font-bold text-[24px] sm:text-[18px]`}
        >
          {sections.contacts}
        </h2>
        <ul class="flex flex-col list-none sm:list-disc gap-2 text-center sm:text-left">
          {contacts.map((c) => (
            <li
              onClick={() => copyTextToClipboard(c.label)}
              class="cursor-pointer"
              key={c.label}
            >
              <span class="px-1 rounded border border-gray-100 hover:border-gray-300 transition-all duration-300 ease-out">
                {c.label}
              </span>
            </li>
          ))}
          <li class="flex sm:flex-row flex-col gap-2 items-center justify-center mt-2 sm:mt-0 sm:justify-start">
            <a class="flex items-center" href="https://github.com/glebchanskiy">
              <GitHubIcon class="my-auto" />
              <span class="sm:hidden inline">github</span>
            </a>
            <a class="flex items-center" href="https://glebkun.t.me">
              <TelegramIcon class="my-auto" />
              <span class="sm:hidden inline">telegram</span>
            </a>
            <a
              class="flex items-center"
              href="https://www.linkedin.com/in/glebchanskiy"
            >
              <LinkedinIcon class="my-auto" />
              <span class="sm:hidden inline">linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
