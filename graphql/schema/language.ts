import { gql } from "apollo-server";

export default gql`
  type Language {
    name: String!
    proficiency: String!
    action: Action!
  }
`;
