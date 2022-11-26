import { FC } from "react";
import styled from "styled-components";

const Button: FC<{ className?: string; text: string; onClick: () => void }> = ({
  className = "",
  text,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} className={"funny-button " + className}>
      {text}
    </StyledButton>
  );
};
export default Button;

const StyledButton = styled.button`
  font-family: JeanSunHo;
  color: red;
  font-size: 20px;
  height: 40px;
`;
