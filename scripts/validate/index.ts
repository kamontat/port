import { Ajv, ValidateFunction, ErrorObject } from "ajv";
import { resolve, basename } from "path";

const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";

export default class Validate {
  private errors: { [key: string]: ErrorObject[] };
  private validate?: ValidateFunction;

  constructor(private ajv: Ajv, private schemaFilename: string, private definitionsFilename: string) {
    this.errors = {};
  }

  loadDefinition(root: string) {
    const path = resolve(root, this.definitionsFilename);
    this.ajv = this.ajv.addSchema(require(path));
  }

  loadSchema(root: string) {
    const path = resolve(root, this.schemaFilename);
    this.validate = this.ajv.compile(require(path));
  }

  precheck(path: string) {
    return !path.includes(this.schemaFilename) && !path.includes(this.definitionsFilename);
  }

  check(path: string) {
    process.stdout.write(`            at file:${basename(path).padEnd(25)} `);
    const data = require(path);
    const valid = this.validate(data);
    if (!valid) {
      this.errors[path] = this.validate.errors;
      console.log(`${red}%s${reset}`, "FAILURE");
    } else {
      console.log(`${green}%s${reset}`, "SUCCESS");
    }

    return !!valid;
  }

  isError() {
    const keys = Object.keys(this.errors);
    return keys.length > 0;
  }

  countError() {
    const values = Object.values(this.errors);
    return values.reduce((p, c) => p + c.length, 0);
  }

  public toString() {
    const keys = Object.keys(this.errors);
    if (keys.length <= 0) return "No errors.";

    let str = "";
    keys.forEach(key => {
      const values = this.errors[key];

      str += `Error: ${key}\n`;
      values.forEach((value, i) => {
        str += `   ${i + 1}). ${value.keyword}(${value.dataPath}) ${value.message}\n`;
      });
    });

    return str;
  }
}
