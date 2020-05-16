import React, { useState, useEffect } from "react";

type InputProps = {
  value: number;
  isOdd?: boolean;
};
const Counter = (props: InputProps) => {
  const { value, isOdd } = props;
  const [counterValue, setCounterValue] = useState(value);
  let className = "red";
  useEffect(() => {
    setTimeout(function () {
      setCounterValue((counterValue) => counterValue + 1);
    }, 1000);
  });
  if (isOdd && counterValue % 2) className = "yellow";
  if (!isOdd && !(counterValue % 2)) className = "yellow";

  return <span className={className}> {counterValue}</span>;
};
export default Counter;
