import { makeItSkill } from "@utils"

const educationEn = [
  {
    name: "Belarusian State University of Informatics and Radioelectronics",
    description: "Bachelor's degree in Engineering",
    period: "2021-2025",
  },
]
const educationRu = [
  {
    name: "Белорусский Государственный Университет Информатики и Радиоэлектроники",
    description: "Степень бакалавра, специальность Искусственный Интеллект",
    period: "2021-2025",
  },
]

// const experienceRu = [
//   {
//     name: "variants.world",
//     description:
//       "В рамках данного проекта разрабатывался сервис, позволяющий пользователям chess.com предлагать и обсуждать новые варианты шахмат. Основные технологии на этом проекте это `Astro`,  `Preact`,  `prisma` + `supabase` client. На этом проекте я впервые познакомился с `Supabase`, с его помощью  было сделано частично serverless приложение с аутентификацией и авторизацией на уровне базы данных `Postgres` (RLS). ",
//   },
//   {
//     name: "ostis-deploy",
//     description:
//       "На кафедре моей специальности разрабатывается технология открытых семантических систем (OSTIS). Там же разрабатывается её реализация в виде графовой базы знаний. Изначально ostis-deploy планировался как платформа, на которой студенты нашей специальности могли бы хостить свои базы знаний (в виду специфики её запуска) и иметь к ним удобный доступ. Проект разрабатывался совместно с товарищем как часть курсового проекта. В рамках этого проекта я впервые столкнулся и использовал `Deno`, `Fresh`, `Tailwind` и Github Apps. Также была реализована довольно сложная система менеджмента докер контейнеров. ",
//   },
//   {
//     name: "pie-tunes",
//     description:
//       "Курсовой проект в рамках которого разрабатывался стриминговый сервис с системой рекомендаций. Проект написан c использованием событийно-ориентированного подхода с графовой памятью в роли среды для общения компонентов системы. Использовались такие технологии как `MinIO` (для хранения файлов вне базы знаний), `Spring Boot` (сервисы приложения),  `Preact` + `Redux` (интерфейс).",
//   },
// ].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

// const experienceEn = [
//   {
//     name: "variants.world",
//     description:
//       "Within the framework of this project, was crafted a service empowering chess.com users to propose and engage in discussions about innovative chess variants. The primary technologies at play include `Astro`, `Preact`, and the dynamic combination of `prisma` with the `supabase` client. It was my first encounter with `Supabase` on this project, allowing the development of a partially serverless application with authentication and authorization integrated at the `Postgres` database level (RLS).",
//   },
//   {
//     name: "ostis-deploy",
//     description:
//       "The technology of open semantic systems (OSTIS) is being developed at the department of my specialty. Its implementation in the form of a graph knowledge base is also being developed there. Initially, ostis-deploy was planned as a platform on which students of our specialty could host their knowledge bases (due to launch difficulties) and have convenient access to them. The project was developed jointly with my friend as part of a course project. As part of this project, I first encountered and used `Deno`, `Fresh`, `Tailwind` and Github Apps. A rather complex management system for docker containers was also implemented.",
//   },
//   {
//     name: "pie-tunes",
//     description:
//       "A course project within the framework of which a streaming service with a recommendation system. The project is written using an event-oriented approach with graph memory as an environment for communication between system components. Technologies such as `MinIO` (for storing files outside the knowledge base), `Spring Boot` (application services), `Preact` + `Redux` (interface) were used.",
//   },
// ].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

//

const experienceRu = [
  {
    name: "variants.world",
    description:
      "В рамках данного проекта разрабатывался сервис, позволяющий пользователям chess.com предлагать и обсуждать новые варианты шахмат.<br>Стек: `AstroJS`,  `Preact`,  `Prisma` + `Supabase`, `PostgreSQL`, `Tailwind`.",
  },
  {
    name: "ostis-deploy",
    description:
      "Платформа, на которой студенты универа нашей специальности могли бы хостить свои базы знаний и иметь к ним удобный доступ.<br>Стек: `Deno`, `Fresh`, `Docker`, `GitHub App`, `Tailwind`.",
  },
  {
    name: "pie-tunes",
    description:
      "Курсовой проект в рамках которого разрабатывался стриминговый сервис с системой рекомендаций на основе графовой базы знаний.<br>Стек:  `Spring Boot` (Security, Web),  `MinIO`,  `Preact`, `Redux`, `Gradle`,  `Docker`.",
  },
  {
    name: "http-server",
    description:
      "Простая реализация http сервера при помощи Java NIO, позволяющая создавать простейшие веб-приложения.<br>Стек: `Java`.",
  },
  {
    name: "dnd-lists",
    description:
      "Приложение позволяющее создавать/редактировать листы персонажей для игры Dungeons & Dragons.<br>Стек: `Spring Boot` (Security, Web, Data JPA), `PostgreSQL`, `TypeScript`, `Preat`, `Redux`, `Bootstrap`",
  },
].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

const experienceEn = [
  {
    name: "variants.world",
    description:
      "A service that allows users to chess.com to propose and discuss new chess variants.<br>Stack: `AstroJS`,  `Preact`,  `Prisma` + `Supabase`, `PostgreSQL`, `Tailwind`.",
  },
  {
    name: "ostis-deploy",
    description:
      "A platform on which university students of our specialty could host their knowledge bases and have convenient access to them.<br>Stack: `Deno`, `Fresh`, `Docker`, `GitHub App`, `Tailwind`.",
  },
  {
    name: "pie-tunes",
    description:
      "A course project in which a streaming service was developed with a recommendation system based on a graph knowledge base.<br>Stack: `Spring Boot` (Security, Web), `MinIO`, `Preact`, `Redux`, `Gradle`, `Docker`.",
  },
  {
    name: "http-server",
    description:
      "A simple implementation of an http server using Java NIO, allowing you to create simple web applications.<br>Stack: `Java`.",
  },
  {
    name: "dnd-lists",
    description:
      "An application that allows you to create/edit character sheets for the game Dungeons & Dragons.<br>Stack: `Spring Boot` (Security, Web, Data JPA), `PostgreSQL`, `TypeScript`, `Preat`, `Redux`, `Bootstrap`",
  },
].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

const skillsRu = [
  "Основные языки: `Java`, `Typescript`",
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
  "Primary languages: `Java`, `Typescript`",
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
