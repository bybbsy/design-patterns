import { DocumentBuilder } from './DocumentBuilder.interface'
import {
  SectionAbout,
  SectionEducation,
  SectionExperience
} from './types'
import {
  Document,
  HeadingLevel,
  Paragraph,
  TextRun
} from 'docx'
import { FileChild } from 'docx/build/file/file-child'

export class DocxBuilder implements DocumentBuilder {
  private sectionAbout: FileChild[] = []
  private sectionEducation: FileChild[] = []
  private sectionExperience: FileChild[] = []

  constructor () {}

  setAbout (data: SectionAbout) {
    this.sectionAbout = [
      new Paragraph({
        text: data.name,
        heading: HeadingLevel.HEADING_2
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Phone ${data.phone}`,
            break: 1
          }),
          new TextRun({
            text: `Address ${data.address}`,
            break: 1
          })
        ]
      })
    ]
    return this
  }

  setEducation (education: SectionEducation[]) {
    this.sectionEducation.push(
      new Paragraph({
        text: 'Section Education',
        heading: HeadingLevel.HEADING_3
      })
    )

    const educationData = [
      ...education.map(
        data =>
          new Paragraph({
            children: [
              new TextRun({
                text: data.name,
                bold: true
              }),
              new TextRun({
                text: 'Started: ' + data.started.toString(),
                break: 1,
                italics: true
              }),
              new TextRun({
                text: 'Finished: ' + data.finished.toString(),
                break: 1,
                italics: true
              })
            ]
          })
      )
    ]

    this.sectionEducation.push(...educationData)
    return this
  }

  setExperience (experience: SectionExperience[]) {
    this.sectionExperience.push(
      new Paragraph({
        text: 'Section Experience',
        heading: HeadingLevel.HEADING_3
      })
    )

    const experienceData = [
      ...experience.map(
        data =>
          new Paragraph({
            children: [
              new TextRun({
                text: 'Name: ' + data.name,
                bold: true
              }),
              new TextRun({
                text: 'From: ' + data.from.toString(),
                break: 1
              }),
              new TextRun({
                text: 'To: ' + data.to.toString(),
                break: 1
              }),
              new TextRun({
                text: 'Position: ' + data.position,
                break: 1,
                bold: true
              }),
              new TextRun({
                text: 'Tasks: ' + data.tasks,
                break: 1
              }),
              new TextRun({
                text: data.summary,
                break: 1
              })
            ]
          })
      )
    ]

    this.sectionExperience.push(...experienceData)

    return this
  }

  build () {
    return new Document({
      sections: [
        {
          children: [
            ...this.sectionAbout,
            ...this.sectionEducation,
            ...this.sectionExperience
          ]
        }
      ]
    })
  }
}
