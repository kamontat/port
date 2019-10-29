import { readdirSync as dir, lstatSync as check } from "fs";
import { resolve } from "path";
import Ajv from "ajv";

import Validation from "./validate/index";

const ajv = new Ajv({
  allErrors: true,
  format: "full",
}); // options can be passed, e.g. {allErrors: true}

const schemaFilename = "_schema.json";
const definitionsFilename = "_definitions.json";

const fullpath = resolve("graphql/data"); // full data path

const validation = new Validation(ajv, schemaFilename, definitionsFilename);

console.log(`Checking... root`);
// validate information at root path
validation.loadDefinition(fullpath);
validation.loadSchema(fullpath);
validation.check(resolve(fullpath, "information.json"));

dir(fullpath).forEach(d => {
  const dPath = resolve(fullpath, d);
  if (check(dPath).isDirectory()) {
    console.log(`Checking... ${d}`);

    // validation.loadDefinition(fullpath);
    validation.loadSchema(dPath);

    dir(dPath).forEach(f => {
      const fPath = resolve(dPath, f);
      if (validation.precheck(fPath)) {
        validation.check(fPath);
      }
    });
  }
});

if (!validation.isError()) process.exit(0);

console.log(`
#######################################
# Reports                             #
#######################################
`);
console.log(validation.toString());

process.exit(validation.countError());
