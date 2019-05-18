import React, { Component } from "react";

export default class ArticleList extends Component {
    render(){
        const { articles } = this.props;
        return (
            <div>
                {articles.map((article, index) => {
                    return <div key={index}>{article.title}</div>
                })}
            </div>
        )
    }
}