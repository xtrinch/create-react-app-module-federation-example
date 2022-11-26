import React, { useState } from "react";
import "./App.css";

import Logo from "library/Logo";
import NameContextProvider from "library/NameContextProvider";

import Button from "library/Button";
import { Outlet } from "react-router-dom";

function Homepage() {
  const [name, setName] = useState("Mojca");

  return (
    <div>
      <NameContextProvider.Provider value={{ name, setName }}>
        <React.Suspense fallback="loading">
          <div style={{ marginBottom: 20, marginTop: 20 }}>
            <Logo style={{ width: 90 }} />
          </div>
          <div style={{ marginBottom: 20 }}>
            Hello {name}. This is app1 - container app. The button &amp; context
            used is from the components app.
          </div>
          <div style={{ marginBottom: 60 }}>
            <Button
              text="Change name from app1"
              onClick={() => setName("Lojza")}
            />
          </div>
          <Outlet />
        </React.Suspense>
      </NameContextProvider.Provider>
    </div>
  );
}

export default Homepage;
