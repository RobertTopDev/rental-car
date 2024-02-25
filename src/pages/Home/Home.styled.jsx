import styled from "styled-components";
import heroImg from "@/assets/heroBg.jpg";
import { primaryFont } from "../../components/fonts";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  background: url(${heroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  align-items: end;
  justify-content: end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    background-size: 100%;
    min-height: auto;
    padding: 3.2rem;
    overflow: visible;
  }

  @media (min-width: 1440px) {
    min-height: 60rem;
    padding: 3.2rem;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  width: 60%;
  background-color: ${(p) => p.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  color: ${(p) => p.theme.colors.lightWhiteColor};
`;

export const HeroTitleSpan = styled.span`
  font-size: 54px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  &::before {
    content: "Cruise Wheels";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${(p) => p.theme.colors.lightWhiteColor};
    z-index: -5;
  }
`;

export const HeroText = styled.p`
  color: ${(p) => p.theme.colors.lightWhiteColor};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
`;

export const CatalogBtn = styled(Link)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;
