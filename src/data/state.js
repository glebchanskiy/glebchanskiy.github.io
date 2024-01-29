import { makeItSkill } from "@utils"

import educationEn from "./educationEn.json"
import educationRu from "./educationRu.json"

import experienceEnRow from "./experienceEn.json"
import experienceRuRow from "./experienceRu.json"

const experienceEn = experienceEnRow.map((e) => ({
  link: e.link,
  name: e.name,
  description: makeItSkill(e.description),
}))
const experienceRu = experienceRuRow.map((e) => ({
  link: e.link,
  name: e.name,
  description: makeItSkill(e.description),
}))

const skillsRu = [
  "Основные языки: `Java`, `TypeScript`",
  "Фреймворки: `Spring`, `Hibernate`, `React`, `Preact`, `AstroJS`, `Redux`",
  "Базы данных: `PostgreSQL`, `Neo4j`",
  "`Docker`, `docker compose`",
  "Написание скриптов: `bash`, `python`",
  "Работал с: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Не основные языки: `python`, `c++`",
  "Прочее: `CSS`, `HTML`, `Tailwind`",
  "Разработка диаграмм при помощи `UML`",
  "Операционные системы: Linux / MacOS",
  "Опыт разработки в команде",
  "Понимание устройства сетей",
  "Опыт работы с linux серверами",
  "Языки: Russian - `native`, `English` - intermediate"
].map(makeItSkill)
const skillsEn = [
  "Primary languages: `Java`, `TypeScript`",
  "Frameworks: `Spring`, `Hibernate`, `React`, `Preact`, `Astro`, `Redux`",
  "Databases: `PostgreSQL`, `Neo4j`",
  "`Docker`, `docker compose`",
  "Scripting: `bash`, `python`",
  "Worked with: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Additional languages: `python`, `c++`",
  "Other skills: `CSS`, `HTML`, `Tailwind`",
  "Application design with `UML`",
  "Operating systems: `Linux` / `MacOS`",
  "Teamwork experience",
  "Understanding of network architecture",
  "Experience with Linux servers",
  "Languages: `Russian` - native, `English` - intermediate"
].map(makeItSkill)

const profileEn =
  "I love coding, and it's more than just a skill for me — it's a passion. I've spent the last three years studying information technology at university. While I haven't worked professionally yet, I've gained a lot of experience through education projects and pet-projects. I've mainly focused on learning backend technologies, but recently, I've been diving into frontend stack too. I've played around with different web frameworks and libraries and have worked with relation and non-relation databases. Right now, I'm on the lookout for an internship to keep learning and kickstart my journey as a web developer."
const profileRu =
  "Программирование для меня - это не просто навык, а страсть. Последние 3 года я активно изучаю  информационные технологии в универе. На данный момент у меня отсутствует коммерческий опыт разработки, однако имеется большой опыт работы над учебными и пет-проектами. Основной акцент делал на изучении backend технологий, но последнее время также активно изучаю frontend стек. Есть опыт работы с различными web-фреймворками и библиотеками. Опыт работы с реляционными и не реляционными базами данных, а также обширные знания в области графовых баз данных. В настоящее время активно ищу стажировку для своего дальнейшего развития и становления в роли web-разработчика."

const contactsEn = [
  { label: "Belarus, Minsk" },
  { label: "levkov.gleb.dev@gmail.com" },
  { label: "+375-44-59-25-888" },
  { label: "www.github.com/glebchanskiy" },
  { label: "www.linkedin.com/in/glebchanskiy" },
  { label: "www.t.me/glebchanskiy" },
]
const contactsRu = [
  { label: "Беларусь, Минск" },
  { label: "levkov.gleb.dev@gmail.com" },
  { label: "+375-44-59-25-888" },
  { label: "www.github.com/glebchanskiy" },
  { label: "www.linkedin.com/in/glebchanskiy" },
  { label: "www.t.me/glebchanskiy" },
]

const namEn = "Levkov Gleb"
const nameRu = "Левков Глеб"

export const state = {
  ru: {
    sections: {
      profile: "Профиль",
      contacts: "Контакты",
      education: "Образование",
      experience: "Проекты",
      skills: "Навыки",
    },
    personal: {
      education: educationRu,
      experience: experienceRu,
      profile: profileRu,
      contacts: contactsRu,
      name: nameRu,
      skills: skillsRu,
    },
  },
  en: {
    sections: {
      profile: "Summary",
      contacts: "Contacts",
      education: "Education",
      experience: "Projects",
      skills: "Skills",
    },
    personal: {
      education: educationEn,
      experience: experienceEn,
      profile: profileEn,
      contacts: contactsEn,
      name: namEn,
      skills: skillsEn,
    },
  },
}
