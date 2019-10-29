import { gql } from "apollo-server";

import Definitions from "./root";
import Information from "./information";

import Language from "./language";
import Interest from "./interest";
import Project from "./project";
import Work from "./work";
import Education from "./education";
import Skill from "./skill";
import Volunteer from "./volunteer";
import Reference from "./reference";

const Query = gql`
  type Query {
    information(lang: String): Information
  }
`;

const obj = {
  Definitions,
  Language,
  Interest,
  Education,
  Project,
  Work,
  Skill,
  Volunteer,
  Reference,
  Information,
  Query,
};
const array = Object.values(obj);

export default array;
export { obj };
