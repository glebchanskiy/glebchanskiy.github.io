export async function copyTextToClipboard(text) {
  try {
    console.log(text)
    await navigator.clipboard.writeText(text)
    console.log("Content copied to clipboard")
    alert(`"${text}" - copied`)
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}

export function makeItSkill(text) {
  return text.replace(/`(.+?)`/g, '<span class="skill">$1</span>')
}

export const Langs = {
  ru: "ru",
  en: "en",
}
