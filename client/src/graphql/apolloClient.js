import { ApolloClient } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import {toggleLikeTodo, isLiked} from './resolvers'

const httpLink = new createHttpLink({
    uri: "http://localhost:2999/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    resolvers: {
        Todo: {
            isLiked
        },
        Mutation: {
            toggleLikeTodo
        }
    },
});

export default client;
