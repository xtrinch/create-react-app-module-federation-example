import React from "react";
import Button from "./Button";
//@ts-expect-error
import { NameContextProvider } from 'shared-library';

function App() {
  const ctx = React.useContext(NameContextProvider) as any;

  return <>{ctx.name}<Button /></>;
}

export default App;
