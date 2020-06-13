import { ApolloClient } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
const httpLink = new createHttpLink({
    uri: "http://localhost:2999/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    resolvers: {
        Todo: {
            isLiked: () => false
        },
        Mutation: {
            // 백엔드로 보내지 않음 로컬에서 처리함
            toggleLikeMovie: (_, {id, isLiked}, {cache}) => {
                console.log(id);
                cache.writeData({id:`Todo:${id}`, data:  {isLiked: !isLiked, medium: 'lalalala'} });
            }
        }
    },
});

export default client;
