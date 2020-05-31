import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/apolloClient";
import './App.css';
import TodoList from './component/TodoList'

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h1>My first Apollo App</h1>
                <TodoList client={client}/>
            </div>
        </ApolloProvider>
    );
}

export default App;
