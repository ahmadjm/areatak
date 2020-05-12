import React from "react";
import {
  Title,
  Container,
  BornaForm,
  Button,
} from "../../../components/generalStyled";
import BornaInput from "../../../components/BornaInput";
import Footer from "../../../components/Footer";
const RegisterPage = () => {
  console.log("RegisterPage");

  return (
    <>
      <Container>
        <Title>
          به منظور ثبت نام در سامانه برنا اطلاعات زیر را وارد نمایید
        </Title>
        <BornaForm>
          <BornaInput type="text" name="fName" placeholder="نام" />
          <BornaInput type="text" name="lName" placeholder="نام خانوادگی" />
          <BornaInput type="text" name="codeMeli" placeholder="شماره ملی" />
          <BornaInput type="text" name="email" placeholder="ایمیل" />
          <BornaInput type="password" name="password" placeholder="رمز" />
          <Button type="primary" block shape="round">
            ثبت نام
          </Button>
        </BornaForm>
        <Footer />
      </Container>
    </>
  );
};

export default RegisterPage;
