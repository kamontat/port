import { Translatable } from "./translatable";

const skillLevel = new Translatable({
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
});

const educationType = new Translatable({
  en: {
    junior: "Junior High School",
    senior: "Senior High School",
    "high-vocational": "High Vocational Certificate",
    "technical-certificate": "Technical Certificate",
    "non-formal": "Non-Formal Education",
    online: "Online courses",
    bachelor: "Bachelor's degree",
    master: "Master's degree",
    phd: "Doctor of Philosophy (Ph.D.)",
  },
  th: {
    junior: "มัธยมต้น",
    senior: "มัธยมปลาย",
    "high-vocational": "ประกาศนียบัตรวิชาชีพชั้นสูง",
    "technical-certificate": "ประกาศนียบัตรวิชาชีพเทคนิค",
    "non-formal": "การศึกษานอกโรงเรียน",
    online: "คอร์สออนไลน์",
    bachelor: "ปริญญาตรี",
    master: "ปริญญาโท",
    phd: "ปริญญาเอก",
  },
});

export { skillLevel, educationType };
