import React, { FC } from "react";
import styled from "styled-components";
import NameContextProvider from "../NameContextProvider";

const Button: FC<{ className?: string }> = ({ className = "" }) => {
  const ctx = React.useContext(NameContextProvider) as any;

  return (
    <StyledButton className={"funny-button " + className}>
      {ctx.name}
      Hello from app2
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button`
  font-family: JeanSunHo;
  color: red;
  font-size: 50px;
  height: 80px;
`;
