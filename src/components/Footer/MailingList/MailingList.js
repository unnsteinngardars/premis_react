import React from "react";
import styles from "./MailingList.module.css";
import text from "../../../assets/text.json";
import SubmitEmail from "../../SubmitEmail/SubmitEmail";

export default () => (
    <div className={styles.container}>
        <h2>{text.footer.mailingList.header}</h2>
        <p>{text.footer.mailingList.body}</p>
        <SubmitEmail/>
    </div>
)