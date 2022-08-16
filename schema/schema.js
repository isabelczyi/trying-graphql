const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

//hardcoding data for now
const users = [
  {id: '1', firstName: 'billie', age: 57},
  {id: '2', firstName: 'jean', age: 20},
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt},
  }
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  field: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return _.find(users, {id: args.id});
        // _.find is from lodash
      }
    }
  }
})
