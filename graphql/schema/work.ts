import { gql } from "apollo-server";

export default gql`
  type WorkDate {
    start: String
    end: String
  }

  type Work {
    id: Int!
    company: String!
    position: String!
    website: String
    date: WorkDate
    summary: String!
    body: [String]
    gallery: Gallery
    tags: [String]
    highlights: [String]
    action: Action!
  }
`;
