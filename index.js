// const { GraphQLServer } = require('graphql-yoga');
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({
	typeDefs: 'graphql/shema.graphql',
	resolvers
})

const option = {
	port: 3333
}
server.start(option, () =>
	console.log(
		`Server started, listening on port for incoming requests.`,
	),
)
