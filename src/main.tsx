import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "@chakra-ui/pro-theme";
import {
  ChakraProvider,
  SimpleGrid,
  extendTheme,
  Text,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "@fontsource-variable/playfair-display";
import { Category, categories } from "./_data";
import { CategoryCard } from "./components/CategoryCard";

import { GoogleSheetCard } from "./components/GoogleSheetCard";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Text fontSize="3xl" fontWeight="extrabold" id="recherches">
              Recherches
            </Text>
            <SimpleGrid
              columns={{ base: 2, md: 3, lg: 4 }}
              gap={{ base: "4", md: "6", lg: "8" }}
              pb="8"
            >
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </SimpleGrid>
          </>
        ),
      },
      ...categories.map((category: Category) => ({
        path: category.url,
        element: (
          <SimpleGrid
            key={category.name}
            columns={{ base: 2, md: 3, lg: 4 }}
            gap={{ base: "4", md: "6", lg: "8" }}
            py="8"
          >
            {category.items?.map((item) => (
              <CategoryCard key={item.name} category={item} />
            ))}
          </SimpleGrid>
        ),
      })),
      ...categories.flatMap(
        (category) =>
          category.items?.map((subCategory) => ({
            path: `${category.url}/${subCategory.url}`,
            element: (
              <SimpleGrid
                key={subCategory.name}
                columns={{ base: 2, md: 3, lg: 4 }}
                gap={{ base: "4", md: "6", lg: "8" }}
                py="8"
              >
                {subCategory.items?.map((item) => (
                  <GoogleSheetCard
                    key={item.name}
                    title={item.name}
                    sheetUrl={item.url}
                  />
                ))}
              </SimpleGrid>
            ),
          })) ?? []
      ),
    ],
  },
]);

const proTheme = extendTheme(theme);
const extendedConfig = {
  colors: {
    ...proTheme.colors,
    brand: {
      400: "#644E5C",
      500: "#644E5C",
      600: "#644E5C",
      700: "#644E5C",
      800: "#644E5C",
      900: "#644E5C",
    },
  },
  fonts: {
    ...proTheme.fonts,
    heading: "'Playfair Display', serif",
    body: "sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "none",
      },
    },
  },
};
const myTheme = extendTheme(extendedConfig, proTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
