import React from "react";
import styles from "./Logo.module.css";

export default ({ logo, size }) => (
    <div className={styles.container}>
        <img style={{height: size}} src={logo} alt=""/>
    </div>
)
