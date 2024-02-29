import styled from "styled-components";
import { BsQuestionLg } from "react-icons/bs";

export const NeedHelpBtnIcon = styled(BsQuestionLg)`
  font-size: 2.4rem;
  /* padding: 1rem; */
  color: ${(p) => p.theme.colors.accentColor};
  /* color: ${(p) => p.theme.colors.mainBgColor}; */
  transition: all 0.3s linear;
  cursor: pointer;

  @media (min-width: 1440px) {
    font-size: 2.4rem;
    /* padding: 1rem; */
  }
`;

export const NeedHelpBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  /* position: fixed;
  bottom: 4rem;
  left: 4rem;
  border-radius: 2rem;
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  font-size: 0px;
  transition: all var(--primary-transition);
  z-index: 250;

  @media (min-width: 1440px) {
    bottom: 2.4rem;
    left: 3.2rem;
    border-radius: 2.5rem;
  }

  &:hover {
    border-color: ${(p) => p.theme.colors.lightWhiteColor};
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }

  &:hover {
    ${NeedHelpBtnIcon} {
      color: ${(p) => p.theme.colors.lightWhiteColor};
    }
  } */
`;

export const NeedHelpModal = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 4rem;
  border-radius: ${(p) => (p.$needHelp ? "1.2rem" : "2rem")};
  background-color: ${(p) =>
    p.$needHelp ? p.theme.colors.mainBgColor : "transparent"};
  border: 1px solid ${(p) => p.theme.colors.accentColor};
  border: ${(p) => (p.$needHelp ? "0.1px" : "1px")} solid
    ${(p) => p.theme.colors.accentColor};
  font-size: 0px;
  transition: all var(--primary-transition);
  z-index: 250;

  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: ${(p) => (p.$needHelp ? "2.4rem" : "0")}; */
  width: ${(p) => (p.$needHelp ? "30rem" : "3.6rem")};
  height: ${(p) => (p.$needHelp ? "32rem" : "3.6rem")};

  @media (min-width: 1440px) {
    bottom: 2.4rem;
    left: 3.2rem;
    border-radius: 2.5rem;
  }

  &:hover {
    border-color: ${(p) => (p.$needHelp ? "" : p.theme.colors.lightWhiteColor)};
    background-color: ${(p) =>
      p.$needHelp ? "" : p.theme.colors.accentColorHover};
    cursor: pointer;
  }

  &:hover {
    ${NeedHelpBtnIcon} {
      color: ${(p) => p.theme.colors.lightWhiteColor};
    }
  }
`;
