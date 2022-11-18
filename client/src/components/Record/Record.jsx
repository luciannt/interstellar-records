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

const Record = ({ name, price, cover, artist }) => {
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
        <div>
          <h2>{name}</h2>
          {artist && <p className={styles.artist}>by: {artist?.name}</p>}
          <p className={styles.price}>${price}</p>
        </div>
        <button className={styles.wishlist}>
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" />
        </button>
      </div>
    </div>
  );
};

export default Record;
