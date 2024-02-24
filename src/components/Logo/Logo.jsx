import { LogoWrapper, LogoText, LogoIcon } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper to="/rental-car/">
      <LogoIcon />
      <LogoText>Cruise Wheels</LogoText>
    </LogoWrapper>
  );
}

export default Logo;
