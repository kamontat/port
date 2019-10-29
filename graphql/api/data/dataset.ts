/* eslint-disable @typescript-eslint/no-explicit-any */

import { resolve } from "path";
import { requireAll, updateAllLanguages, generateAllLanguages, getTranslate } from "./_generic";
import { skillLevel, educationType } from "./translate";

export class Dataset {
  private data: {
    information?: any;
    languages?: any[];
    interests?: any[];
    skills?: any[];
    educations?: any[];
    projects?: any[];
    works?: any[];
    volunteers?: any[];
    references?: any[];
  };

  constructor() {
    this.data = {};
  }

  loadAll() {
    const root = resolve(__dirname, "..", "..", "data");

    this.data.information = this.updateInformation(generateAllLanguages(require(resolve(root, "information.json"))));

    this.data.languages = requireAll(resolve(root, "languages"));
    this.data.interests = this.updateInterest(requireAll(resolve(root, "interests")));

    this.data.educations = this.updateEducation(requireAll(resolve(root, "educations")));
    this.data.projects = this.updateProject(requireAll(resolve(root, "projects")));
    this.data.works = this.updateWork(requireAll(resolve(root, "works")));
    this.data.volunteers = this.updateVolunteer(requireAll(resolve(root, "volunteers")));

    this.data.references = this.updateReference(requireAll(resolve(root, "references")));

    this.data.skills = this.updateSkill(requireAll(resolve(root, "skills")));

    // console.log(JSON.stringify(this.data.interests, undefined, " "));
  }

  graphql(lang?: string) {
    if (!lang) lang = "en"; // fallback to default languages

    return {
      ...this.data.information[lang],
      languages: this.data.languages.map(l => getTranslate(l, lang)),
      interests: this.data.interests.map(i => getTranslate(i, lang)),
      works: this.data.works.map(w => getTranslate(w, lang)),
      educations: this.data.educations.map(s => getTranslate(s, lang)),
      volunteers: this.data.volunteers.map(s => getTranslate(s, lang)),
      skills: this.data.skills.map(s => getTranslate(s, lang)),
      projects: this.data.projects.map(s => getTranslate(s, lang)),
      references: this.data.references.map(s => getTranslate(s, lang)),
    };
  }

  private updateInformation(obj: any) {
    // update socials
    return updateAllLanguages(obj, o => {
      o.socials = Object.values(o.social);
      return o;
    });
  }

  private updateSkill(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, (obj, lang) => {
        obj.tags = this.__transformToArray(obj.tags);
        obj.level = skillLevel.get(obj.level, lang);
        return obj;
      });
    });
  }

  private updateInterest(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        return obj;
      });
    });
  }

  private updateEducation(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, (obj, lang) => {
        obj.type = educationType.get(obj.type, lang);
        return obj;
      });
    });
  }

  private updateProject(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        obj.highlights = this.__transformToArray(obj.highlights);
        return obj;
      });
    });
  }

  private updateWork(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        obj.highlights = this.__transformToArray(obj.highlights);
        return obj;
      });
    });
  }

  private updateVolunteer(arr: any[]) {
    return arr.map(o => {
      return updateAllLanguages(o, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        obj.highlights = this.__transformToArray(obj.highlights);
        return obj;
      });
    });
  }

  private updateReference(arr: any[]) {
    return arr;
  }

  // you must use this as a transform of updateAllLanguages
  private __transformToArray(obj: any) {
    return obj ? Object.values(obj) : [];
  }
}

/* eslint-enable */
