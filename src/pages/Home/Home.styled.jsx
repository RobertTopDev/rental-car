import styled from "styled-components";
import heroImg from "@/assets/heroBg.jpg";

export const HomeContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
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
  gap: 1.2rem;
  padding: 2.4rem;
  width: 40%;
  background-color: white;
  border-radius: 1.2rem;
`;

export const CatalogBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: 1.2rem;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accentColor};
`;
