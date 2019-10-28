import { gql } from "apollo-server";

export default gql`
  type Action {
    created: String!
    updated: String!
  }

  type Gallery {
    banner: String!
    list: [String!]
  }
`;
