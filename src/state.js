import { makeItSkill } from "@utils"

const educationEn = [
  {
    name: "Belarusian State University of Informatics and Radioelectronics",
    description: "Bachelor's degree of Artificial Intelligence (Incomplete)",
    period: "2021-2025",
  },
]
const educationRu = [
  {
    name: "Белорусский Государственный Университет Информатики и Радиоэлектроники",
    description: "Специальность - искусственный интеллект (незаконченная)",
    period: "2021-2025",
  },
]

const experienceRu = [
  {
    name: "variants.world",
    description:
      "В рамках данного проекта разрабатывался сервис, позволяющий пользователям chess.com предлагать и обсуждать новые варианты шахмат. Основные технологии на этом проекте это `Astro`,  `Preact`,  `prisma` + `supabase` client. На этом проекте я впервые познакомился с `Supabase`, с его помощью  было сделано частично serverless приложение с аутентификацией и авторизацией на уровне базы данных `Postgres` (RLS). ",
  },
  {
    name: "ostis-deploy",
    description:
      "На кафедре моей специальности разрабатывается технология открытых семантических систем (OSTIS). Там же разрабатывается её реализация в виде графовой базы знаний. Изначально ostis-deploy планировался как платформа, на которой студенты нашей специальности могли бы хостить свои базы знаний (в виду специфики её запуска) и иметь к ним удобный доступ. Проект разрабатывался совместно с товарищем как часть курсового проекта. В рамках этого проекта я впервые столкнулся и использовал `Deno`, `Fresh`, `Tailwind` и Github Apps. Также была реализована довольно сложная система менеджмента докер контейнеров. ",
  },
  {
    name: "pie-tunes",
    description:
      "Курсовой проект в рамках которого разрабатывался стриминговый сервис с системой рекомендаций. Проект написан c использованием событийно-ориентированного подхода с графовой памятью в роли среды для общения компонентов системы. Использовались такие технологии как `MinIO` (для хранения файлов вне базы знаний), `Spring Boot` (сервисы приложения),  `Preact` + `Redux` (интерфейс).",
  },
].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

const experienceEn = [
  {
    name: "variants.world",
    description:
      "Within the framework of this project, was crafted a service empowering chess.com users to propose and engage in discussions about innovative chess variants. The primary technologies at play include `Astro`, `Preact`, and the dynamic combination of `prisma` with the `supabase` client. It was my first encounter with `Supabase` on this project, allowing the development of a partially serverless application with authentication and authorization integrated at the `Postgres` database level (RLS).",
  },
  {
    name: "ostis-deploy",
    description:
      "The technology of open semantic systems (OSTIS) is being developed at the department of my specialty. Its implementation in the form of a graph knowledge base is also being developed there. Initially, ostis-deploy was planned as a platform on which students of our specialty could host their knowledge bases (due to launch difficulties) and have convenient access to them. The project was developed jointly with my friend as part of a course project. As part of this project, I first encountered and used `Deno`, `Fresh`, `Tailwind` and Github Apps. A rather complex management system for docker containers was also implemented.",
  },
  {
    name: "pie-tunes",
    description:
      "A course project within the framework of which a streaming service with a recommendation system. The project is written using an event-oriented approach with graph memory as an environment for communication between system components. Technologies such as `MinIO` (for storing files outside the knowledge base), `Spring Boot` (application services), `Preact` + `Redux` (interface) were used.",
  },
].map((e) => ({ name: e.name, description: makeItSkill(e.description) }))

const skillsRu = [
  "Основные языки: `Java`, `Typescript`",
  "Фреймворки / библиотеки: `Spring`, `Astro`, `Preact`, `Redux`",
  "Базы данных: `Postrges` (углубленный), `Neo4j`. Соответственно `SQL` и `Cypher`",
  "`Docker` и инструменты оркестрирвания такие как `docker compose`",
  "Операционные системы: Linux / Unix / MacOS",
  "Написание скриптов: `bash`, `python`",
  "Не основные языки: `python`, `c++`",
  "Работал с: `FastAPI`, `React`, `Kafka`",
  "Прочее: `CSS`, `HTML`, `Tailwind`",
  "Умение читать и писать `UML` диаграммы",
  "Опыт командной разработки",
  "Понимание устройства сетей",
  "Опыт работы с linux серверами",
].map(makeItSkill)
const skillsEn = [
  "Primary languages: `Java`, `Typescript`",
  "Frameworks / libraries: `Spring`, `Astro`, `Preact`, `Redux`",
  "Databases: `Postgres` (in-depth), `Neo4j`. Correspondingly, `SQL` and `Cypher`",
  "`Docker` and orchestration tools such as `docker compose`",
  "Operating systems: `Linux` / `Unix` / `MacOS`",
  "Scripting: `bash`, `python`",
  "Additional languages: `python`, `c++`",
  "Worked with: `FastAPI`, `React`, `Kafka`",
  "Other skills: `CSS`, `HTML`, `Tailwind`",
  "Ability to read and write `UML` diagrams",
  "Experience in team development",
  "Understanding of network architecture",
  "Experience with Linux servers",
].map(makeItSkill)

const profileEn =
  "A developer with a wide range of skills across various information technology domains. I have been deeply immersed in information technology during the last 3 years of my university education. While lacking commercial development experience presently, I have amassed substantial hands-on involvement in educational and personal projects. My core programming languages include Java and Typescript. While my focus predominantly leaned towards mastering backend technologies, I have recently been actively immersing myself in frontend stacks. I have experience with diverse web frameworks and libraries, proficiency in relational databases and a substantial understanding of graph databases. Actively leveraging modern development tools to enhancing work efficiency. I am currently actively seeking job opportunities or internships to gain commercial experience in web development."
const profileRu =
  "Разработчик с широким спектром навыков в различных областях информационных технологий. Углубленно изучаю информационные технологии в течение 3-х лет учёбы в университете. На данный момент отсутствует коммерческий опыт разработки, однако имею большой опыт работы над учебными и пет-проектами. Мои основные языки программирования - Java и Typescript. Основной акцент делался на изучении backend технологий, однако последнее время активно изучаю frontend стек. Есть опыт работы с различными web-фреймворками и библиотеками. Опыт работы с реляционными базами данных, а также обширные знания в области графовых баз данных. Активно использую современные инструменты разработки для повышения эффективности работы (Docker, Git и прочие). В настоящее время активно ищу работу/стажировку для получения коммерческого опыта в области web-разработки."

const contactsEn = [
  { label: "Belarus, Minsk" },
  { label: "kiss-shot-heart-under-blade@yandex.by" },
  { label: "+375-44-59-25-888" },
]
const contactsRu = [
  { label: "Беларусь, Минск" },
  { label: "kiss-shot-heart-under-blade@yandex.by" },
  { label: "+375-44-59-25-888" },
]

const namEn = "Levkov Gleb"
const nameRu = "Левков Глеб"

export const state = {
  ru: {
    sections: {
      profile: "Профиль",
      contacts: "Контакты",
      education: "Образование",
      experience: "Опыт",
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
      profile: "Profile",
      contacts: "Contacts",
      education: "Education",
      experience: "Experience",
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
