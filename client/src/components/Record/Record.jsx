import React, { useEffect, useState } from "react";
import styles from "./styles/Record.module.scss";

import { randomNumber } from "../../utils/randomNumber";

import v1 from "../../assets/vinylrecord1.png";
import v2 from "../../assets/vinylrecord2.png";
import v3 from "../../assets/vinylrecord3.png";
import v4 from "../../assets/vinylrecord4.png";
import v5 from "../../assets/vinylrecord5.png";
import v6 from "../../assets/vinylrecord6.png";
import v7 from "../../assets/vinylrecord7.png";
import v8 from "../../assets/vinylrecord8.png";

const Record = ({ name, price, cover }) => {
  const [placeholder, setPlaceholder] = useState(cover);
  const placeholderImages = [v1, v2, v3, v4, v5, v6, v7, v8];

  useEffect(() => {
    if (!cover && !placeholder) {
      setPlaceholder(placeholderImages[Math.floor(randomNumber(1, 8))]);
    }
  }, [cover]);

  return (
    <div className={styles.container}>
      <img src={placeholder} alt={`${name} cover`} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Record;
