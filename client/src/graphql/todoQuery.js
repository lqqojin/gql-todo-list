// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';

export const Q_TODO_LIST = gql`
    {
        todoList {
            id
            desc
            status
            isLiked @client
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
// @client 백엔드로 보내지 않음
export const LIKE_TODO = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`
