import React, { Component } from "react";
import styles from "./FrontPage.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleList from "../../components/ArticleList/ArticleList";
import data from "../../data/articles";

export default class FrontPage extends Component {
    render(){
        return (
            <div>
                <Header/>
                <div className={styles.bodyAndFooter}>
                    <ArticleList articles={data}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}