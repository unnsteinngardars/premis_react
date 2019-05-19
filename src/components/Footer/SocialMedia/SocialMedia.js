import React from "react";
import styles from "./SocialMedia.module.css";
import facebook from "../../../assets/svg/facebook-logo-button.svg";
import instagram from "../../../assets/svg/instagram-logo.svg";
import twitter from "../../../assets/svg/twitter-logo-button.svg";
import dribble from "../../../assets/svg/dribble-logo-button.svg";
import Logo from "../../Logo/Logo";
import text from "../../../assets/text.json";

export default () => (
    <div className={styles.container}>
        <h2>{text.footer.socialMedia.header}</h2>
        <div className={styles.logos}>
            <Logo logo={facebook} size={30}/>
            <Logo logo={instagram} size={30}/>
            <Logo logo={twitter} size={30}/>
            <Logo logo={dribble} size={30}/>
        </div>
    </div>
)