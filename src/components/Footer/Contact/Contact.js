import React from "react";
import styles from "./Contact.module.css";
import Logo from "../../Logo/Logo";
import logo from "../../../assets/svg/premis-logo.svg"
import text from "../../../assets/text.json";

export default () => (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Logo logo={logo} size={70}/>
        </div>
        <div className={styles.text}>
            <p>{text.footer.contact.address}</p>
            <p>{text.footer.contact.province}</p>
            <p>{text.footer.contact.phone}</p>
            <p>{text.footer.contact.email}</p>
            <p>{text.footer.contact.ssn}</p>
            <p>{text.footer.contact.vsk}</p>
        </div>
    </div>
)