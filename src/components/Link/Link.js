import React from "react";
import styles from "./Link.module.css";

export default ({ title }) => (
    <div className={styles.container}>
        <p>{title}</p>
    </div>
)