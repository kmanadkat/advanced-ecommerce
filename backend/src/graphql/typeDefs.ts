export default `#graphql
  type User {
    id: ID!
    role: String!
    displayName: String!
    email: String!
    isDeactivated: Boolean
    createdAt: String!
    lastActivityAt: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(displayName: String!, email: String!, password: String): User
  }
`;
