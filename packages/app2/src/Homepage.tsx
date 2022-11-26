import Button from "library/Button";

import NameContextProvider from "library/NameContextProvider";
import React from "react";
import { Route, Routes } from "react-router-dom";

function Homepage() {
  const ctx = React.useContext(NameContextProvider);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <div>Hello {ctx.name} from app2!</div>
            <Button
              text="Click to change name"
              onClick={() => ctx.setName("Jozica")}
            />
          </div>
        }
        index
      />
    </Routes>
  );
}

export default Homepage;
