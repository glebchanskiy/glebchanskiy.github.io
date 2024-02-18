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
  "Базы данных: `PostgreSQL`, `MongoDB`, `Neo4j`",
  "`Docker`, `docker compose`",
  "Опыт с `Git`",
  "Написание скриптов: `bash`, `python`",
  "Работал с: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Не основные языки: `python`, `c++`",
  "Прочее: `CSS`, `HTML`, `Tailwind`",
  "Разработка диаграмм при помощи `UML`",
  "Операционные системы: Linux / MacOS",
  "Опыт управления серверами `Linux` через `SSH`",
  "Понимание устройства сетей",
  "Опыт разработки в команде",
  "Языки: Russian - `native`, `English` - intermediate"
].map(makeItSkill)
const skillsEn = [
  "Primary languages: `Java`, `TypeScript`",
  "Frameworks: `Spring`, `Hibernate`, `React`, `Preact`, `Astro`, `Redux`",
  "Databases: `PostgreSQL`, `MongoDB`, `Neo4j`",
  "`Docker`, `docker compose`",
  "Experience with `Git`",
  "Scripting: `bash`, `python`",
  "Worked with: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`",
  "Additional languages: `python`, `c++`",
  "Other skills: `CSS`, `HTML`, `Tailwind`",
  "Operating systems: `Linux` / `MacOS`",
  "Experience managing `Linux` servers via `SSH`",
  "Understanding of network architecture",
  "Teamwork experience",
  "Languages: `Russian` - native, `English` - intermediate"
].map(makeItSkill)

const profileEn =
  "I am a senior IT student at the university, currently looking for an internship to start working as a web developer.<br/>My main focus is backend development with the following key technologies: java, spring, hibernate, postgreSQL. I am an advanced linux/macOS user, and have hands-on experience managing remote Linux servers via ssh. Additionally, I am familiar with Docker and Docker Compose. As for version control systems, I have experience working with Git. Also, recently I’ve started learning frontend stack: typescript, react, redux, tailwind.<br/>I have several completed projects (study and personal) in my background, you can find their description below."
const profileRu =
  "Я студент старшего курса IT-специальности в университете и в данный момент ищу стажировку, чтобы начать работать web-разработчиком.<br/>Мое основное направление - разработка backend с использованием следующих ключевых технологий: Java, Spring, PostgreSQL. Я продвинутый пользователь linux/macOS и имею практический опыт управления удаленными серверами Linux через ssh. Я знаком с Docker и Docker Compose. Что касается систем контроля версий, у меня есть опыт работы с Git. Кроме того, недавно я начал изучать frontend stack: TypeScript, React, Redux, Tailwind.<br/>У меня есть несколько завершённых проектов (учебных и пет), вы можете найти их описание ниже."

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
