import gql from 'graphql-tag';
// import { gql } from 'apollo-boost';

export const Q_TODO_LIST = gql`
    {
        todoList{
            id
            desc
            status
        }
    }
`;
