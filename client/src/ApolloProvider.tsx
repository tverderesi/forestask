/** @format */

import App from './App';
import { InMemoryCache, createHttpLink, ApolloProvider, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import DotenvWebpackPlugin from 'dotenv-webpack';


const httpLink = createHttpLink({ uri: 'localhost:4000' });
// https://florestarefa-server.onrender.com/graphql
console.log(process.env.SERVER_URI);

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  //@ts-ignore
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
