import React from "react";

import NameContextProvider from "library/NameContextProvider";

const Button = (props: { text: string }) => {
  const ctx = React.useContext(NameContextProvider);

  return (
    <button
      onClick={() => {
        ctx.setName("Lojza");
      }}
    >
      {props.text}
    </button>
  );
};
export default Button;
