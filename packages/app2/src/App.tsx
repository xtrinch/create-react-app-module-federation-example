import React from "react";
import Button from "./Button";
import NameContextProvider from 'library/NameContextProvider';

function App() {
  console.log(NameContextProvider)
  const ctx = React.useContext(NameContextProvider) as any;

  return <>{ctx.name}<Button /></>;
}

export default App;
