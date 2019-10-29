interface Json<T = any> {
  [key: string]: Json<T> | string;
}

export class Translatable<T = string> {
  constructor(private instance: Json<T>) {}

  get(key: string, lang: string) {
    const instance = this.instance[lang] ? this.instance[lang] : this.instance["en"];
    return instance[key] as string;
  }
}
