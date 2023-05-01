/** @format */

import ReactDOM from "react-dom/client";

import "./App.css";
import ApolloProvider from "./ApolloProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(ApolloProvider);
