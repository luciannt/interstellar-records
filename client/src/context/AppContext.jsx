import axios from "axios";
import React from "react";
import { useState } from "react";

export const StateContext = React.createContext({ setUser: () => {} });
const StateProvider = StateContext.Provider;

function StateContextProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });
  const [records, setRecords] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllRecords = () => {
    setLoading(true);
    axios(
      `http://127.0.0.1:3000/records?page=${
        records.page && records.length < 500 ? records.page + 1 : 1
      }`
    )
      .then((data) => {
        console.log(data);
        let list;

        if (records?.records?.length) {
          list = [...records.records, ...data.data.records];
        } else {
          list = [...data.data.records];
        }

        setRecords({
          page: data.data.page,
          records: list,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  console.log(records);

  return (
    <StateProvider
      value={{
        user,
        setUser,
        records,
        setRecords,
        getAllRecords,
        loading,
        setLoading,
      }}
    >
      {children}
    </StateProvider>
  );
}

export default StateContextProvider;
