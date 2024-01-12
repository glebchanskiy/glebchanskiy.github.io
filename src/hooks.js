import { useState } from "preact/hooks"

export const useStateTranslation = ({ initialState, initialLanguage }) => {
  const [state, setState] = useState(initialState)
  const [lang, setLang] = useState(initialLanguage)

  const changeLanguage = (lang) => {
    setLang(lang)
  }

  const localizedState = state[lang]

  return {
    localizedState: { ...localizedState, lang },
    changeLanguage,
  }
}
