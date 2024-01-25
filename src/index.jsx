import { render } from "preact"
import { useStateTranslation } from "@hooks"
import { Header } from "@components/Header"
import { ProfileAndContacts } from "@components/ProfileAndContacts"
import { Education } from "@components/Education"
import { Experience } from "@components/Experience"
import { Skills } from "@components/Skills"
import { state } from "./data/state"

import "@styles/computed.css"
import { Langs } from "@utils"

export function App() {
  const { localizedState, changeLanguage } = useStateTranslation({
    initialState: state,
    initialLanguage: Langs.en,
  })

  return (
    <div
      class={`font-primary text-[16px] sm:text-[14px] font-normal tracking-[0.1px] text-text container sm:bg-gray-100 mx-auto p-6 pb-20 sm:my-5  sm:p-8`}
    >
      <Header
        personName={localizedState.personal.name}
        changeLanguage={changeLanguage}
        lang={localizedState.lang}
      />
      <hr class="separator" />

      <div class="flex gap-2 flex-wrap justify-center sm:justify-start">
        <span class="skill !px-3">Java</span>
        <span class="skill !px-3">Spring Framework</span>
        <span class="skill !px-3">TypeScript</span>
        <span class="skill !px-3">React</span>
      </div>
      
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

      <Skills
        skills={localizedState.personal.skills}
        sections={localizedState.sections}
      />
    </div>
  )
}

render(<App />, document.getElementById("app"))
