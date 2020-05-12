import * as React from "react";
import {
  Container,
  Title,
  AlignCenter,
  Button,
} from "../../../components/generalStyled";
import Footer from "../../../components/Footer";
import BornaInput from "../../../components/BornaInput";
const VerificationPage = () => {
  return (
    <Container>
      <AlignCenter>
        <Title>کد ارسالی به ایمیل خود را وارد نمایید</Title>
        <BornaInput type="text" placeholder="*****" />
        <Button shape="round" type="primary" block>
          ورود
        </Button>
      </AlignCenter>
      <Footer />
    </Container>
  );
};

export default VerificationPage;
