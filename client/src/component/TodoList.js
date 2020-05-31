import React from 'react';
import { Query } from 'react-apollo';
import { Q_TODO_LIST } from '../graphql/todoQuery';

function TodoList() {
    return (
        <Query query={Q_TODO_LIST}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error!</p>
                console.log('%cDATA','color:orange');
                console.log();

                return <ul>{
                    data.todoList.map(item => {
                        console.log(item);
                        return <li key={item.id}>{item.id} {item.desc} {item.status}</li>
                    })
                }</ul>
            }}
        </Query>
    )
}

export default TodoList;
