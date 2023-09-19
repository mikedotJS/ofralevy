import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "@chakra-ui/pro-theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <div>Hello world</div> }],
  },
]);

const proTheme = extendTheme(theme);
const extendedConfig = {
  colors: { ...proTheme.colors, brand: proTheme.colors.purple },
};
const myTheme = extendTheme(extendedConfig, proTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
