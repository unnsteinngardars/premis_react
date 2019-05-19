import React from "react";
import styles from "./WebTree.module.css";
import text from "../../../assets/text.json";
import Link from "../../Link/Link";

export default () => (
    <div className={styles.container}>
        <h2>{text.footer.webTree.header}</h2>
        <div className={styles.links}>
            <Link title={text.footer.webTree.about}/>
            <Link title={text.footer.webTree.products}/>
            <Link title={text.footer.webTree.history}/>
        </div>
    </div>
)