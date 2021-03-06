import React from "react";
import styles from "./ArticleListItem.module.css";

export default ({ article, bodyCutoff }) => (
    <div className={styles.container}>
        <img className={styles.image} src={article.image} alt="article_image"></img>
        <div className={styles.type}>
            <h3>{article.type.toUpperCase()}</h3>
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

/**
 * Formats the dateString to icelandic with month in text form.
 * Example of input Sat Mar 09 2019 19:04:42 GMT+0000 (Greenwich Mean Time) 
 * Example of outpyt 9. Mars 2019
 * @param string the dateString to format
 * @returns The formated string
 */
function formatDateString(string) {
    const dateString = new Date(string).toDateString().slice(4, string.length); // Remove Date from DateString with slice
    const monthMap = {
        "Jan": "Janúar", 
        "Feb": "Febrúar", 
        "Mar": "Mars", 
        "Apr": "Apríl", 
        "May": "Maí", 
        "Jun": "Júní", 
        "Jul": "Júlí", 
        "Aug": "Ágúst", 
        "Sep": "September", 
        "Oct": "Október", 
        "Nov": "Nóvember", 
        "Dec": "Desember"
    };
    const toParse = dateString.split(" ");
    let day = toParse[1];
    const month = toParse[0];
    const year = toParse[2];
    day = day.length === 2 && day.substring(0, 1) === "0" ? day.slice(1, 2) : day; // Remove leading 0 if it exists.
    const finalString = `${day}. ${monthMap[month]} ${year}`;
    return <p>{finalString.toString()}</p>
}
