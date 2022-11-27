import NameContextProvider from "library/NameContextProvider";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

function App2() {
  const [name, setName] = useState("Mojca");

  return (
    <BrowserRouter>
      <NameContextProvider.Provider value={{ name, setName }}>
        <Homepage />
      </NameContextProvider.Provider>
    </BrowserRouter>
  );
}

export default App2;
