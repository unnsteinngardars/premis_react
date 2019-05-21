import React from "react";
import styles from "./Header.module.css";
import { NavBar } from "../NavBar/NavBar";
import arrow from "../../assets/svg/down-arrow.svg";

export default () => (
    <div className={styles.container}>
        <div className={styles.navBar}>
            <NavBar/>
        </div>
        <div className={styles.arrowContainer}>
            <img className={styles.arrow} src={arrow} alt=""/>
        </div>
    </div>
)