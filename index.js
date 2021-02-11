const express = require('express')
const { ApolloServer, gql } = require ('apollo-server-express')

const schema = gql(`
    type Query {
        helloWorld: String!
    }
`)

const resolvers = {
    Query: {
        helloWorld: () => 'Hello World! Our first query :)'
    }
}

const server = new ApolloServer({ typeDefs: schema, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`Server running on port localhost:4000/${server.graphqlPath}`))