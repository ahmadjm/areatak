import React, { useState } from "react";
import { Input, Eye, BornaInputContainer } from "./generalStyled";

type InputProps = {
  name?: string;
  placeholder?: string;
  type: "password" | "text";
};

const BornaInput = (props: InputProps) => {
  const { name, placeholder, type } = props;

  const [inputType, setInputType] = useState(type);
  const toggleInputType = () => {
    setInputType((type) => (type === "password" ? "text" : "password"));
  };

  return (
    <BornaInputContainer>
      <Input type={inputType} name={name} placeholder={placeholder} />
      {type === "password" && (
        <Eye
          onClick={toggleInputType}
          src={require("../assets/img/eyeIon.svg")}
        />
      )}
    </BornaInputContainer>
  );
};
export default BornaInput;
