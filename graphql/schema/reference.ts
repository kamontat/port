import { gql } from "apollo-server";

export default gql`
  type Reference {
    referee: String!
    refereeLink: String
    attachment: String # should be pdf or image files
    text: String
    link: String
    action: Action!
  }
`;
