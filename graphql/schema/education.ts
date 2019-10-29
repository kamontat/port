import { gql } from "apollo-server";

export default gql`
  type EducationDate {
    start: String
    end: String
  }

  type Education {
    institution: String!
    area: String!
    type: String!
    date: EducationDate
    evaluate: String
    certificate: String
    action: Action!
  }
`;
