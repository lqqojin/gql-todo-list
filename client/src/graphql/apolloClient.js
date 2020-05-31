import { ApolloProvider } from 'react-apollo'           // 수정
import { ApolloClient } from 'apollo-boost'            // 수정
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'   // 수정
const httpLink = new createHttpLink({
    uri: "http://localhost:2999/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;
