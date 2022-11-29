const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");
const TodoType = require("../todo/typeDef");

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({ 
        id: { type: GraphQLInt },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        // password: { type: GraphQLString },
        todos: {type: GraphQLList(TodoType)}
    })
})

module.exports = UserType