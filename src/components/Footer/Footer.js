import React from "react";
import styles from "./Footer.module.css";
import Contact from "./Contact/Contact";
import WebTree from "./WebTree/WebTree";
import SocialMedia from "./SocialMedia/SocialMedia";
import MailingList from "./MailingList/MailingList";

export default () => (
    <div className={styles.container}>
        <Contact/>
        <WebTree/>
        <SocialMedia/>
        <MailingList/>
    </div>
)