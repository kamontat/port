import { SkillLevel } from "./skill";

export const skillLevelToString = (key: string, lang: string) => {
  return new SkillLevel(key).get(lang);
};
