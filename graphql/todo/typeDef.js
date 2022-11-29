const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const TodoType = new GraphQLObjectType({
    name: "Todo",
    fields: () => ({ 
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        // password: { type: GraphQLString },
        userId:{ type: GraphQLInt }
    })
})


module.exports = TodoType