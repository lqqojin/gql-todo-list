// const { GraphQLServer } = require('graphql-yoga');
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require('./graphql/resolvers');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const server = new GraphQLServer({
	typeDefs: 'graphql/shema.graphql',
	resolvers
})

server.start(() =>
	console.log(
		`Server started, listening on port for incoming requests.`,
	),
)
