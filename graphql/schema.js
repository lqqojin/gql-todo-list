import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers'

const typeDefs = `
    type Todo {
        id: Int!
        desc: String
        status: String
    }
    
    type Query {
        todoList: [Todo]
        test: Todo
        getTodo(id: Int!): [Todo]
    }
    
    input TodoInput {
        id: Int!
        desc: String!
        status: String!
    }
    
    input updateInput{
        status: String!
    }
    
    type Mutation {
        createTodo(input: TodoInput): Todo
        updateTodo(id: Int!, input: updateInput): Todo
        deleteTodo(id: Int!): Todo
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
