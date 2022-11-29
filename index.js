const express = require('express');
const app = express();





const db = require('./dbconfig');
const { graphqlHTTP } = require('express-graphql');
const {GraphQLObjectType, GraphQLSchema} = require('graphql');
// db.init()
const userMutations = require('./graphql/user/mutations');
const userQuery = require('./graphql/user/query');
const todoMutations = require('./graphql/todo/mutations');
const todoQuery = require('./graphql/todo/query');
const User = require('./models/User');
const Todo = require('./models/Todo');


User.hasMany(Todo,{as: "todos"})
Todo.belongsTo(User)

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...userQuery, ...todoQuery
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        ...userMutations, ...todoMutations
    })
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: new GraphQLSchema({
        query: Query,
        mutation: Mutation
    })
}))

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

