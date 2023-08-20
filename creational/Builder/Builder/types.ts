export type SectionData = any

export type SectionAbout = {
  name: string
  phone: string
  address: string
}

export type SectionEducation = {
  name: string
  started: Date
  finished: Date
}

export type SectionExperience = {
  name: string
  from: Date
  to: Date
  summary: string
  position: string
  tasks: string
}
