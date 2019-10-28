import { gql } from "apollo-server";

export default gql`
  type Interest {
    name: String!
    tags: [String]
    action: Action!
  }
`;
