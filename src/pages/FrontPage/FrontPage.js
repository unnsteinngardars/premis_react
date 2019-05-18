import React, { Component } from "react";
import styles from "./FrontPage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleList from "../../components/ArticleList/ArticleList";
import data from "../../data/articles";

export default class FrontPage extends Component {
    render(){
        console.log(data);
        return (
            <div className={styles.container}>
                <Header/>
                <ArticleList articles={data}/>
                <Footer/>
            </div>
        )
    }
}