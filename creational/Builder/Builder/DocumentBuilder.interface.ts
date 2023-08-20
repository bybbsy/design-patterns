import { SectionAbout, SectionEducation, SectionExperience } from "./types";

export interface DocumentBuilder {
    setAbout: (data: SectionAbout) => this,
    setEducation: (data: SectionEducation[]) => this,
    setExperience: (data: SectionExperience[]) => this,
    build: () => any;
  }