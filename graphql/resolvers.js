const { people, getById } = require("./db");

const resolvers = {
	Query: {
		people: () => people,
		person: (a, pp) => {
			return getById(pp.id);
		}
	}
}

module.exports = resolvers;
