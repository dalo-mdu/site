import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.STRAPI_ADDRESS,
    cache: new InMemoryCache(),
});

export default client;