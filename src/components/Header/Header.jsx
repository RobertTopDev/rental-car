import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderLink,
  HeaderTextWrapper,
  NavBar,
} from "./Header.styled";
// import { useEffect, useState } from "react";
import MenuBurger from "../MenuBurger/MenuBurger";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  const location = useLocation();

  // const [favoriteCars, setFavoriteCars] = useState(false);

  // useEffect(() => {
  //   async function getFavoriteCars() {
  //     try {
  //       const favoritesFromStorage =
  //         JSON.parse(localStorage.getItem("favorites")) || [];
  //       if (favoritesFromStorage.length !== 0) {
  //         setFavoriteCars(true);
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }

  //   getFavoriteCars();
  // }, []);

  return (
    <HeaderContainer>
      <Logo />
      <HeaderTextWrapper>
        <NavBar>
          <HeaderLink
            $active={location.pathname === "/rental-car/"}
            to="/rental-car/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            $active={location.pathname === "/rental-car/catalog"}
            to="catalog"
          >
            Catalog
          </HeaderLink>
          <HeaderLink
            $active={location.pathname === "/rental-car/favorites"}
            to="favorites"
          >
            Favorites
          </HeaderLink>
        </NavBar>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderTextWrapper>
      <MenuBurger toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </HeaderContainer>
  );
}

export default Header;
