import React from "react";
import styles from "./SubmitEmail.module.css";
import text from "../../assets/text.json";
import envelope from "../../assets/svg/envelope.svg";
import Logo from "../Logo/Logo";

export default () => (
    <div className={styles.container}>
        <input type="text" placeholder={text.footer.mailingList.placeholder}></input>
        <div className={styles.envelope}>
            <Logo logo={envelope} size={30}/>
        </div>
    </div>
)