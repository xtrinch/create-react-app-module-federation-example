import Button from "library/Button";

import NameContextProvider from "library/NameContextProvider";
import React from "react";

function App() {
  console.log(NameContextProvider);
  const ctx = React.useContext(NameContextProvider) as any;

  return (
    <>
      <div>Hello {ctx.name} from app2!</div>
      <Button />
    </>
  );
}

export default App;
