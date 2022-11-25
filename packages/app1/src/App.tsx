import React, { useState } from "react";
import "./App.css";
import OwnButton from "./Button";

import Logo from "library/Logo";
import NameContextProvider from "library/NameContextProvider";

import App2 from "app2/App2Index";

import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const app1RoutingPrefix = "app2";

function App() {
  const [name, setName] = useState("Mojca");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                Hello {name}. This is app1 - container app
                <NameContextProvider.Provider value={{ name, setName }}>
                  <React.Suspense fallback="loading">
                    <Logo style={{ width: 90 }} />
                    <OwnButton text="Change name" />
                    <Outlet />
                  </React.Suspense>
                </NameContextProvider.Provider>
              </div>
            }
          >
            <Route index element={<Navigate to={`/${app1RoutingPrefix}`} />} />
            <Route path={`/${app1RoutingPrefix}`} element={<App2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
