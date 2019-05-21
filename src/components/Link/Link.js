import React from "react";
import styles from "./Link.module.css";
import PropTypes from "prop-types";

const Link = ({ title }) => (
    <div className={styles.container}>
        <p>{title}</p>
    </div>
)

Link.propTypes = {
    title: PropTypes.string.isRequired
}

export default Link;