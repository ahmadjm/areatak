import React from "react";
import {
  Isc,
  Container,
  BornaForm,
  Button,
  Title,
  AlignCenter,
} from "../../../components/generalStyled";

import BornaInput from "../../../components/BornaInput";
import Footer from "../../../components/Footer";
export const LoginPage = () => {
  return (
    <Container>
      <AlignCenter>
        <Title>
          برای ورود به سامانه برنا ایمیل و رمز عبور خود را وارد نمایید
        </Title>
        <BornaForm>
          <BornaInput type="text" placeholder="ایمیل" />
          <BornaInput type="password" placeholder="رمز" />
          <Button type="primary" block shape="round">
            ورود
          </Button>
        </BornaForm>
      </AlignCenter>
      <Footer />
    </Container>
  );
};
