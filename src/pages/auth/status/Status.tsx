import * as React from "react";
import {
  Container,
  Title,
  AlignCenter,
  Button,
} from "../../../components/generalStyled";
import Footer from "../../../components/Footer";
import BornaInput from "../../../components/BornaInput";
const StatusPage = () => {
  return (
    <Container>
      <AlignCenter>
        <img src={"../../../assets/img/mark.svg"} />
        <Title>پروفایل شما مورد تایید قرار گرفته است</Title>
        <Button shape="round" type="primary" block>
          مرحله بعد
        </Button>
      </AlignCenter>
      <Footer />
    </Container>
  );
};

export default StatusPage;
