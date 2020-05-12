import React from "react";
import {
  Container,
  Caption,
  Title,
  Logo,
  Dashboard,
  Isc,
} from "../../components/generalStyled";
export const DashboardPage = () => {
  return (
    <>
      <Container>
        <Dashboard>
          <Logo />
          <Caption>بُرنا, بستر نوین اعتماد</Caption>
          <Title>سامانه ثبت شرکت های فینتک</Title>
        </Dashboard>
        <div>
          <Isc />
          <span>شرکت خدمات انفورماتیک</span>
        </div>
      </Container>
    </>
  );
};
