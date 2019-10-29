import { gql } from "apollo-server";

export default gql`
  type Skill {
    name: String!
    description: String!
    level: String
    tags: [String]
    action: Action!
  }
`;
