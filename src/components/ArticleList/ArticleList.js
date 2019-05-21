import React, { Component } from "react";
import styles from "./ArticleList.module.css";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import ArticleFilters from "../ArticleFilters/ArticleFilters";
import { FILTER_NOTHING } from "../../constants";
export default class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: FILTER_NOTHING
        }
    }
    render(){
        const { articles } = this.props;
        const { filter } = this.state;
        const filtered = this.filterByType(articles, filter);
        return (
            <div className={styles.container}>
                <ArticleFilters selected={filter} filter={filter => this.updateFilter(filter)}/>
                <div id="articles" className={styles.articles}>
                    {filtered.map((article, index) => {
                         return <ArticleListItem bodyCutoff={150} key={index} article={article}/>;
                    })}
                </div>
            </div>
        )
    }

    updateFilter = (filter) => {
        this.setState({filter});
    };

    filterByType = (articles, type) => {
        return articles.filter(article => article.type === type ||  type === FILTER_NOTHING);
    };
}