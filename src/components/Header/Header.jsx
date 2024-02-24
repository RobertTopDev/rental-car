import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderLink,
  HeaderTextWrapper,
  NavBar,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderTextWrapper>
        <NavBar>
          <HeaderLink to="/rental-car/">Home</HeaderLink>
          <HeaderLink to="catalog">Catalog</HeaderLink>
        </NavBar>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderTextWrapper>
    </HeaderContainer>
  );
}

export default Header;
