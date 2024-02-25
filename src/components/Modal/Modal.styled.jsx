import styled from "styled-components";
import { primaryFont } from "../fonts";

export const ModalWrapper = styled.div``;

export const ModalImg = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 1.4rem;
  border-top-left-radius: 1.4rem;
`;

export const ModalTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 1.4rem;
`;

export const ModalTitleDescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColorReverse};
`;

export const ModalTitleText = styled.span`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: #121417;
  color: ${(p) => p.theme.colors.mainTextColorReverse};
`;

export const ModalBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  padding: 2rem 5rem;
  border-radius: 1.4rem;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.accentColorHover};
    cursor: pointer;
  }
`;
