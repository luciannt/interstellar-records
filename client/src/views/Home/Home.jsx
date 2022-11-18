import React, { useContext, useEffect } from "react";
import { StateContext } from "../../context/AppContext";
import axios from "axios";
import Records from "../Records/Records";

const Home = () => {
  const { setUser, setRecords } = useContext(StateContext);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/me")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const intervalId = setInterval(() => {
      axios
        .get("http://127.0.0.1:3000/me")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          setUser({ loggedIn: false });
        });
    }, 120000); /* 2 minutes */

    return () => clearInterval(intervalId);
  }, []);

  return <div></div>;
};

export default Home;
