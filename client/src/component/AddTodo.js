import React from 'react';

function AddTodo(props) {
    return (
        <form action="/create_process" onSubmit={
            (event) => {
                event.preventDefault();
                console.log('button')
                let data = event.target.content.value;
                if (!data.trim()) return;
                props.submit({desc: data, status: 'active'})
            }
        }>
            <input
                type="text"
                name="content"
                placeholder="GraphQL Apollo React TodoList"
                maxLength={200}
                className="todo"
            />
            <input type="submit" value="Add Todo"/>
        </form>
    )
}

export default AddTodo;
