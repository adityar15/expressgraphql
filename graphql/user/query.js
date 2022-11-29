const { GraphQLInt } = require("graphql");
const { connect } = require("../../dbconfig");
const User = require("../../models/User");
const UserType = require("./typeDef");


const getUser = {
    type: UserType,
    args: {
        id: { type: GraphQLInt },
    },
    resolve: async (parent, args, context, info) => {
        await connect()
        const user = await User.findByPk(args.id, {
            include: ["todos"]
        });
        return user
    }
}

module.exports = {
    getUser
}