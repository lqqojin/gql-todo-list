import React, {useEffect, useState} from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./graphql/apolloClient";
import './App.css';
import Subject from "./component/Subject";
import TodoListContainer from './container/TodoListContainer'

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App container">
                <Subject />
                <TodoListContainer/>
            </div>
        </ApolloProvider>
    );
}

export default App;
