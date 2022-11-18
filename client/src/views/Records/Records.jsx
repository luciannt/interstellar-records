import React, { useContext, useEffect } from "react";
import Record from "../../components/Record/Record";
import { StateContext } from "../../context/AppContext";
import InfinitScroll from "react-infinite-scroll-component";

import styles from "./styles/Records.module.scss";

const Records = () => {
  const { records, getAllRecords, loading } = useContext(StateContext);

  useEffect(() => {
    if (!records?.records?.length) {
      getAllRecords();
    }
  }, []);

  return (
    <div className={styles.container}>
      {records?.records?.length &&
        records?.records?.map((record) => (
          <Record
            name={record.name}
            price={record.price}
            cover={record.cover}
            artist={record.artist}
          />
        ))}
      <button className={styles["load-more"]} onClick={getAllRecords}>
        Load more
      </button>
    </div>
  );
};

export default Records;
