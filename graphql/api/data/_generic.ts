import { resolve } from "path";
import { readdirSync as dir } from "fs";

export const generateAllLanguages = (obj: any) => {
  const keys = Object.keys(obj);
  if (keys.length <= 1) return obj;

  const defaultValue = obj["en"];
  return keys.reduce((p, key) => {
    const value = obj[key];

    p[key] = Object.assign({ ...defaultValue }, value);
    return p;
  }, {});
};

export const requireAll = (path: string) => {
  return dir(path)
    .map(v => {
      if (v.includes("_")) return undefined;

      const filepath = resolve(path, v);

      const _data = require(filepath);
      return generateAllLanguages(_data);
    })
    .filter(v => v !== undefined);
};

export const updateAllLanguages = (obj: any, transform: (obj: any, lang: string) => any) => {
  const langs = Object.keys(obj);
  return langs.reduce((p, lang) => {
    p[lang] = transform(p[lang], lang);
    return p;
  }, obj);
};

export const getTranslate = (obj: any, lang: string) => {
  return obj[lang] ? obj[lang] : obj["en"];
};
