/** @format */

import App from './App';
import { InMemoryCache, createHttpLink, ApolloProvider, ApolloClient } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
require('dotenv').config();

const httpLink = createHttpLink({ uri: process.env.SERVER_URI });
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
