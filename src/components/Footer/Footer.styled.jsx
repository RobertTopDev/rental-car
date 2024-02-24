import styled from "styled-components";
import { primaryFont } from "../fonts";
import { FaPhone } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.8rem 2.4rem 2.4rem;
  gap: 4.8rem;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.headerBgColor};
`;

export const FooterMainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterContactBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const FooterCallBtn = styled.a`
  background: none;
  outline: none;
  border: none;
  border-radius: 1.4rem;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.green};
  width: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: #5fc171;
  }
`;

export const FooterEmailBtn = styled.a`
  background: none;
  outline: none;
  border: none;
  border-radius: 1.4rem;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.mail};
  width: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  transition: all var(--primary-transition);

  &:hover {
    cursor: pointer;
    background-color: #de5353;
  }
`;

export const FooterCallIcon = styled(FaPhone)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.white};
`;

export const FooterEmailIcon = styled(IoMailOutline)`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.white};
`;

export const FooterInfoWrapper = styled.div`
  border-top: 1px solid ${(p) => p.theme.colors.mainTextColorLowOp};
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterInfoText = styled.p`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
`;

export const FooterInfoLink = styled(Link)`
  color: ${(p) => p.theme.colors.mainTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainTextColor};
  }
`;
