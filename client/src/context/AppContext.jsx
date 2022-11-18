import React from "react";
import { useState } from "react";

export const StateContext = React.createContext({ setUser: () => {} });
const StateProvider = StateContext.Provider;

function StateContextProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });
  const [records, setRecords] = useState({});

  return (
    <StateProvider value={{ user, setUser, records, setRecords }}>
      {children}
    </StateProvider>
  );
}

export default StateContextProvider;
