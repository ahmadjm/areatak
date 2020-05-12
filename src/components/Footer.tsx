import React from "react";
import {
  Isc,
  Logo,
  Caption,
  FooterContainer,
  BornaFoot,
  IscFoot,
} from "./generalStyled";
const Footer = () => {
  return (
    <FooterContainer>
      <IscFoot>
        <Isc />
        <span>شرکت خدمات انفورماتیک</span>
      </IscFoot>
      <BornaFoot>
        <Logo />
        <Caption>بُرنا, بستر نوین اعتماد</Caption>
      </BornaFoot>
    </FooterContainer>
  );
};

export default Footer;
