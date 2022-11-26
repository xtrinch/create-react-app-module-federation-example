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
            <div style={{ marginBottom: 20 }}>
              Hello again {ctx.name}. This is app2. The button &amp; context
              used is from components app.
            </div>
            <div>
              <Button
                text="Change name from app2"
                onClick={() => ctx.setName("Jozica")}
              />
            </div>
          </div>
        }
        index
      />
    </Routes>
  );
}

export default Homepage;
