import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [filter, setFliter] = useState;
  return (
    <div className={styles.mp}>
      <input type="text" placeholder="filter By Name" value={filter} />
    </div>
  );
};

export default Filter;
