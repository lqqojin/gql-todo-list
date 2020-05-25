const lqqojin = {
	name: 'JJ',
	age: 20,
	gender: 'male'
}

const resolvers = {
	Query: {
		person: () => lqqojin
	}
}

module.exports = resolvers;
