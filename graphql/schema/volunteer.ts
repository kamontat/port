import { gql } from "apollo-server";

export default gql`
  type Volunteer {
    organization: String!
    position: String!
    website: String
    gallery: Gallery
    highlights: [String]
    tags: [String]
    action: Action!
  }
`;
