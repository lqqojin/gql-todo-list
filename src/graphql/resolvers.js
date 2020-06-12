// const { people, getById } = require("./db");
//
// const resolvers = {
// 	Query: {
// 		people: () => people,
// 		person: (a, pp) => {
// 			return getById(pp.id);
// 		}
// 	}
// }
//
//
//
// module.exports = resolvers;
import TodoList from '../models/todo';
const data = {
	id: 1,
		desc: '하이',
	status: 'complete'
}
export const resolvers = {
	Query: {
		test: () => data,
		todoList: async () => {
			const todoList  = await TodoList.find();
			console.log(todoList);
			return todoList;
		},
		getTodo: async (root, { id }) => {
			console.log(id);
			return await TodoList.find({ id })
		}
	},
	Mutation: {
		async createTodo(root, { input }) {
			console.log('input', { input });
			const createRst = await TodoList.create(input);
			console.log(createRst);
			return createRst;
		},
		deleteTodo: async (root, { id }) => {
			const deleteRst = await TodoList.findOneAndDelete({ id });
			console.log('deleteRst', deleteRst);
			return deleteRst;
		},
		updateTodo: async (root, {id, input}) => {
			const updateRst = await TodoList.findOneAndUpdate(
				{id},
				input,
				{new: false}
			);
			console.log('updateRst', updateRst);
			return updateRst;
		}
	}
}
