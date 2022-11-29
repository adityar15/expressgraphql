const { GraphQLString, GraphQLNonNull } = require("graphql");
const UserType = require("./typeDef");
const bcrypt = require("bcrypt");
const { connect } = require("../../dbconfig");
const User = require("../../models/User");


const createUser ={
    type: UserType,
    args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLString },
    },
    resolve: async (parent, args, context, info) => {
        args.password = bcrypt.hashSync(args.password, 10);
        await connect()
        const user = await User.create(args);
        return user; 
    }
}

module.exports = {
    createUser
}