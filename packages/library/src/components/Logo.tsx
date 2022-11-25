import LogoImg from "assets/logo.svg";
import { FC } from "react";
import { CSSProperties } from "styled-components";

const Logo: FC<{ className?: string; style?: CSSProperties }> = ({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) => {
  return <img src={LogoImg} alt="logo" className={className} style={style} />;
};
export default Logo;
