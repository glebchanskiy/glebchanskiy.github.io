import { render } from "preact"
import { useStateTranslation } from "@hooks"
import { Header } from "@components/Header"
import { ProfileAndContacts } from "@components/ProfileAndContacts"
import { Education } from "@components/Education"
import { Experience } from "@components/Experience"
import { Skills } from "@components/Skills"
import { state } from "./state"

import "@styles/computed.css"
import { Langs } from "@utils"

export function App() {
  const { localizedState, changeLanguage } = useStateTranslation({
    initialState: state,
    initialLanguage: Langs.en,
  })

  return (
    <div
      class={`font-primary text-[18px] sm:text-[14px] font-normal tracking-[0.1px] text-text container bg-gray-100 mx-auto p-2 pb-20 sm:my-5  sm:p-8`}
    >
      <Header
        personName={localizedState.personal.name}
        changeLanguage={changeLanguage}
        lang={localizedState.lang}
      />
      <hr class="separator" />

      <ProfileAndContacts
        profileText={localizedState.personal.profile}
        contacts={localizedState.personal.contacts}
        sections={localizedState.sections}
      />
      <hr class="separator" />

      <Education
        education={localizedState.personal.education}
        sections={localizedState.sections}
        lang={localizedState.lang}
      />
      <hr class="separator" />

      <Experience
        experience={localizedState.personal.experience}
        sections={localizedState.sections}
      />
      <hr class="separator" />

      <Skills skills={localizedState.personal.skills} sections={localizedState.sections} />
    </div>
  )
}

render(<App />, document.getElementById("app"))
