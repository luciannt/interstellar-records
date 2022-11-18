import React, { useContext } from "react";
import Record from "../../components/Record/Record";
import { StateContext } from "../../context/AppContext";

import styles from "./styles/Records.module.scss";

const Records = () => {
  const { records } = useContext(StateContext);
  console.log(records);
  return (
    <div className={styles.container}>
      {records?.records?.length &&
        records?.records?.map((record) => (
          <Record
            name={record.name}
            price={record.price}
            cover={record.cover}
          />
        ))}
    </div>
  );
};

export default Records;
