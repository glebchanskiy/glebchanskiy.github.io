import { makeItSkill } from "@utils"

import educationEn from "./educationEn.json"
import educationRu from "./educationRu.json"

import experienceEnRow from "./experienceEn.json"
import experienceRuRow from "./experienceRu.json"

const experienceEn = experienceEnRow.map((e) => ({
  name: e.name,
  description: makeItSkill(e.description),
}))
const experienceRu = experienceRuRow.map((e) => ({
  name: e.name,
  description: makeItSkill(e.description),
}))

const skillsRu = [
  "Основные языки: `Java`, `TypeScript`",
  "Фреймворки: `Spring`, `Hibernate`, `React`, `Preact`, `AstroJS`, `Redux`",
  "Базы данных: `PostgreSQL`, `Neo4j`",
  "`Docker` и инструменты оркестрирвания такие как `docker compose`",
  "Написание скриптов: `bash`, `python`",
  "Работал с: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Не основные языки: `python`, `c++`",
  "Прочее: `CSS`, `HTML`, `Tailwind`",
  "Умение читать и создавать `UML` диаграммы",
  "Операционные системы: Linux / MacOS",
  "Опыт командной разработки",
  "Понимание устройства сетей",
  "Опыт работы с linux серверами",
].map(makeItSkill)
const skillsEn = [
  "Primary languages: `Java`, `TypeScript`",
  "Frameworks: `Spring`, `Hibernate`, `React`, `Preact`, `Astro`, `Redux`",
  "Databases: `PostgreSQL`, `Neo4j`",
  "`Docker` and orchestration tools such as `docker compose`",
  "Scripting: `bash`, `python`",
  "Worked with: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Additional languages: `python`, `c++`",
  "Other skills: `CSS`, `HTML`, `Tailwind`",
  "The ability to read and create `UML` diagrams",
  "Operating systems: `Linux` / `MacOS`",
  "Experience in team development",
  "Understanding of network architecture",
  "Experience with Linux servers",
].map(makeItSkill)

const profileEn =
  "Programming for me is not just a skill, but a passion. For the last 3 years, I have been actively studying information technology at the university. At the moment, I have no commercial development experience, but I have extensive experience on educational and pet-projects. The main focus was on studying backend technologies, but lately I have also been actively studying the frontend stack. I have experience working with various web frameworks and libraries. Experience working with relational and non-relational databases, as well as extensive knowledge in the field of graph databases. I am currently actively looking for an internship for my further development and becoming a web developer."
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
