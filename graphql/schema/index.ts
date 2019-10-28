import { gql } from "apollo-server";

import Definitions from "./root";
import Information from "./information";

import Language from "./language";
import Interest from "./interest";
import Work from "./work";

const Query = gql`
  type Query {
    information(lang: String): Information
  }
`;

const obj = { Definitions, Language, Interest, Work, Information, Query };
const array = Object.values(obj);

export default array;
export { obj };
