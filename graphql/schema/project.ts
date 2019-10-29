import { gql } from "apollo-server";

export default gql`
  type ProjectDate {
    start: String
    end: String
  }

  type Project {
    id: Int!
    name: String!
    link: String
    sourcecode: String
    date: ProjectDate
    summary: String
    body: [String]
    gallery: Gallery
    tags: [String]
    highlights: [String]
    action: Action!
  }
`;
