import React from "react";

export default React.createContext({
  name: "Mr.Noname" as string,
  setName: (name: string) => {},
});
