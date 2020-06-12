import gql from 'graphql-tag';
// import { gql } from 'apollo-boost';

export const Q_TODO_LIST = gql`
    {
        todoList {
            id
            desc
            status
        }
    }
`;

export const CREATE_TODO = gql`
    mutation createTodo($input: TodoInput) {
        createTodo(input: $input) {
            id
            desc
            status
        }
    }
`

export const DELETE_TODO = gql`
    mutation deleteTodo($id: Int!) {
        deleteTodo(id: $id) {
            id
            desc
            status
        }
    }
`

export const UPDATE_TODO = gql`
    mutation updateTodo($id: Int!, $input: updateInput) {
        updateTodo(id: $id, input: $input) {
            id
            desc
            status
        }
    }
`
