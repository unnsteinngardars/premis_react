import React from "react";
import styles from "./NavBar.module.css";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import premis from "../../assets/svg/P-logo.svg";
import facebookIcon from "../../assets/svg/facebook-logo-button.svg"
import text from "../../assets/text.json";

export const NavBar = () => (
    <div className={styles.container}>
        <div className={styles.premisLogo}>
            <Logo logo={premis}/>
        </div>
        <div className={styles.links}>
            <Link title={text.navBar.aboutUs}/>
            <Link title={text.navBar.products}/>
            <Link title={text.navBar.history}/>
        </div>
        <div className={styles.facebookLogo}>
            <Logo logo={facebookIcon}/>
        </div>
    </div>
)