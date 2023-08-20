import { Packer } from 'docx'
import { DocxBuilder } from './Builder/DocxBuilder'
import * as fs from 'fs'

const docx = new DocxBuilder()
  .setAbout({
    name: 'Jeff Doe',
    phone: '(000) 000-0000',
    address: 'California street, USA'
  })
  .setEducation([
    {
      name: 'California state Uni',
      started: new Date(),
      finished: new Date()
    }
  ])
  .setExperience([
    {
      name: 'Microsoft',
      from: new Date(),
      to: new Date(),
      summary: 'zxczxczx',
      position: 'Junior dev',
      tasks: 'Fixing bugs'
    }
  ])
  .build()

Packer.toBuffer(docx).then(buffer => {
  fs.writeFileSync('My Document.docx', buffer)
})
