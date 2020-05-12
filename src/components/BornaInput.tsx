import React, { useState } from "react";
import { Input, Eye, BornaInputContainer } from "./generalStyled";

type InputProps = {
  name?: string;
  placeholder?: string;
  type: string;
};

const BornaInput = (props: InputProps) => {
  const { name, placeholder, type } = props;

  const [inputType, setInputType] = useState(type);
  const toggleInputType = () => {
    setInputType((type) => (type === "password" ? "text" : "password"));
  };
  let eye;
  if (type === "password") {
    eye = (
      <Eye
        onClick={toggleInputType}
        src={require("../assets/img/eyeIon.svg")}
      />
    );
  } else {
    eye = "";
  }
  return (
    <BornaInputContainer>
      <Input type={inputType} name={name} placeholder={placeholder} />
      {eye}
    </BornaInputContainer>
  );
};
export default BornaInput;
