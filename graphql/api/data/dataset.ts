import { resolve } from "path";
import { requireAll, updateAllLanguages, generateAllLanguages, getTranslate } from "./_generic";

export class Dataset {
  private data: { information?: any; languages?: any[]; interests?: any[]; works?: any[] };

  constructor() {
    this.data = {};
  }

  loadAll() {
    const root = resolve(__dirname, "..", "..", "data");

    this.data.information = this.updateInformation(generateAllLanguages(require(resolve(root, "information.json"))));

    this.data.languages = requireAll(resolve(root, "languages"));
    this.data.interests = this.updateInterest(requireAll(resolve(root, "interests")));
    this.data.works = this.updateWork(requireAll(resolve(root, "works")));

    // console.log(JSON.stringify(this.data.interests, undefined, " "));
  }

  graphql(lang?: string) {
    if (!lang) lang = "en"; // fallback to default languages

    return {
      ...this.data.information[lang],
      languages: this.data.languages.map(l => getTranslate(l, lang)),
      interests: this.data.interests.map(i => getTranslate(i, lang)),
      works: this.data.works.map(w => getTranslate(w, lang))
    };
  }

  private updateInformation(obj: any) {
    // update socials
    return updateAllLanguages(obj, o => {
      o.socials = Object.values(o.social);
      return o;
    });
  }

  private updateInterest(arr: any[]) {
    return arr.map(obj => {
      const newObject = generateAllLanguages(obj);

      return updateAllLanguages(newObject, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        return obj;
      });
    });
  }

  private updateWork(arr: any[]) {
    return arr.map(obj => {
      const newObject = generateAllLanguages(obj);

      return updateAllLanguages(newObject, obj => {
        obj.tags = this.__transformToArray(obj.tags);
        obj.highlights = this.__transformToArray(obj.highlights);
        return obj;
      });
    });
  }

  // you must use this as a transform of updateAllLanguages
  private __transformToArray(obj: any) {
    return obj ? Object.values(obj) : [];
  }
}
