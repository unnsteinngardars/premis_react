import React from "react";
import styles from "./ArticleListItem.module.css";

export default ({ article, bodyCutoff }) => (
    <div className={styles.container}>
        <img className={styles.image} src={article.image} alt="article_image"></img>
        <div className={styles.type}>
            <p>{article.type.toUpperCase()}</p>
        </div>
        <div className={styles.title}>
            <h2>{article.title.toUpperCase()}</h2>
        </div>
        <div className={styles.date}>
            {formatDateString(article.date)}
        </div>
        <div className={styles.body}>
            <p>{article.body.substr(0, bodyCutoff)}...</p>
        </div>
    </div>
);

function formatDateString(string) {
    // TODO: format date string myself, moment.js to heave package for this use case
    return <p>{string.toString()}</p>
}
