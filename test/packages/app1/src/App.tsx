import React, { useState } from "react";
import "./App.css";
//@ts-expect-error
import Button from "app2/Button";
import OwnButton from "./Button";

import styled from "styled-components";
//@ts-expect-error
import { NameContextProvider } from 'shared-library';

function App() {
  const [name, setName] = useState("Mojca");

  return (
    <div className="App">
      This is app1
      <NameContextProvider.Provider value={{ name, setName }}>
        <React.Suspense fallback="loading">
          <Button />
          <OwnButton />
          <StyledButton />
        </React.Suspense>
      </NameContextProvider.Provider>
    </div>
  );
}

const StyledButton = styled(Button)`
  color: blue;
`;

export default App;
