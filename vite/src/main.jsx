import React from "react";
import App from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ContextProvider } from "./context";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      <Router>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
