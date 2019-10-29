export class SkillLevel {
  public static instance = {
    en: {
      beginner: "Beginner",
      basic: "Basic",
      intermediate: "Intermediate",
      advanced: "Advanced",
      superior: "Superior",
    },
    th: {
      beginner: "ระดับเริ่มต้น",
      basic: "ระดับพื้นฐาน",
      intermediate: "ระดับกลาง",
      advanced: "ระดับสูง",
      superior: "ผู้เชี่ยวชาญ",
    },
  };

  constructor(private key: string) {}

  get(lang: string) {
    const instance = SkillLevel.instance[lang] ? SkillLevel.instance[lang] : SkillLevel.instance["en"];
    return instance[this.key] as string;
  }
}
