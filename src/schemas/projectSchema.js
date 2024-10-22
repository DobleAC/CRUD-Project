const {gql} = require('apollo-server');

const typeDefs = gql`
    type Project {
        _id: ID!
        title: String!
        completed: Boolean!
        description: String!
        fechaInicio: String!   
        fechaFin: String!
        status: String!
        presupuesto: Float!
    }
    type Query {
        projects: [Project]! 
    }
    type Mutation {
        createProject(title: String!, 
            completed: Boolean!, 
            description: String!, 
            fechaInicio: String!, 
            fechaFin: String!, 
            status: String!, 
            presupuesto: Float!
            ): Project!
        updateProject(_id: ID!, 
            completed: Boolean!, 
            description: String!, 
            fechaInicio: String!, 
            fechaFin: String!, 
            status: String!, 
            presupuesto: Float!
            ): Project!
        deleteProject(_id: ID!): Project!
    }
`;

module.exports = typeDefs;