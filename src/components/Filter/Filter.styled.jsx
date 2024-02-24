import styled from "styled-components";
import { primaryFont } from "../fonts";

export const FormWrapper = styled.form`
  display: flex;
  align-items: end;
  gap: 1.8rem;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FormBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 1.4rem;
  padding: 1.4rem 4.4rem;
  background-color: ${(p) => p.theme.colors.accentColor};
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.accentColorHover};
  }
`;

export const SelectInput = styled.select`
  border: none;
  outline: none;
  background: none;
  border-radius: 14px;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 1.8rem;
  height: 4.8rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};
`;

export const FormLabel = styled.label`
  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
`;

export const FormInputRight = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 16rem;
  height: 4.8rem;
  border-radius: 0 14px 14px 0;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }
`;
export const FormInputLeft = styled.input`
  border: none;
  outline: none;
  background: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 14px 0 0 14px;
  width: 16rem;
  height: 4.8rem;
  background-color: ${(p) => p.theme.colors.inputBgColor};
  padding: 1.4rem 2.4rem;

  font-family: ${primaryFont};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.11111;
  color: ${(p) => p.theme.colors.black};

  &::placeholder {
    font-family: ${primaryFont};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.11111;
    color: ${(p) => p.theme.colors.black};
  }
`;
