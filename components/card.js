import React from "react";
import styles from "../src/app/page.module.css";

function Card() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.head}>
          <h3>Header</h3>
        </div>
        <div className={styles.body}>
          <p>Here is the body</p>
        </div>
        <div className={styles.foot}>
          <p>foot</p>
        </div>
      </div>
      <h1 className={styles.cardTitle}>title</h1>
    </div>
  );
}

export default Card;
