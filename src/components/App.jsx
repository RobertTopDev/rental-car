import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmet";
import { ThemeProvider } from "styled-components";
import { lazy, useState } from "react";
import RootLayout from "../layouts/RootLayout/RootLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainBgColor: "#f7f7fb",
      accentColor: "#3470ff",
      accentColorHover: "#0b44cd",
      white: "#fff",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainBgColor: "#242424",
      accentColor: "#3470ff",
      accentColorHover: "#0b44cd",
      white: "#fff",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout toggleTheme={toggleTheme} />}>
        <Route path="" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <FontsHelmet />
      <ToastContainer />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
