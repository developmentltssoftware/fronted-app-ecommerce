import App from "./App.tsx";
import * as React from "react";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { ContextBagProvider } from "./components/context/contextBag.tsx";
import { ContextProductsProvider } from "./components/context/contextProducts.tsx";
import { AuthProvider } from "./components/auth/context/AuthProvider/index.tsx";
import { theme } from "./components/services/theme.tsx";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../sw.ts")
    .then((registration) => {
      console.log("Service Worker registrado com sucesso:", registration);
    })
    .catch((error) => {
      console.error("Falha ao registrar o Service Worker:", error);
    });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CSSReset/>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ContextBagProvider>
            <ContextProductsProvider>
              <App />
            </ContextProductsProvider>
          </ContextBagProvider>
        </AuthProvider>
      </ChakraProvider>
  </React.StrictMode>
);
