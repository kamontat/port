import { gql } from "apollo-server";

export default gql`
  type Name {
    first: String!
    last: String!
    short: String
  }

  type Address {
    name: String!
    name2: String
    city: String!
    country: String!
    code: String!
  }

  type SocialElement {
    network: String!
    username: String!
    url: String!
    action: Action!
  }

  type Social {
    fb: SocialElement
    tw: SocialElement
    gh: SocialElement
  }

  type Information {
    id: String!
    image: String!
    name: Name
    email: String!
    birthday: String
    mobile: String
    address: Address
    definition: String!
    summary: String!
    social: Social
    socials: [SocialElement]
    languages: [Language]
    interests: [Interest]
    works: [Work]
    action: Action!
  }
`;
