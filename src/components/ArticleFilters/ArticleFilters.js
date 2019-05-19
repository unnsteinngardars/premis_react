import React, { Component } from "react";
import styles from "./ArticleFilter.module.css";
import filters from "../../data/filters";
import PropTypes from "prop-types";
import { FILTER_NOTHING } from "../../constants";

filters.push(FILTER_NOTHING); // TODO refactor

class ArticleFilters extends Component {
   
    render() {
        const { selected } = this.props;
        return (
            <div className={styles.container}>
                {filters.map((filter, index) => {
                    if (filter === selected) {
                        return <h3 style={{color: 'goldenrod'}} key={index} onClick={this.filter}>{filter}</h3>    
                    } else {
                        return <h3 key={index} onClick={this.filter}>{filter}</h3>
                    }
                })}
            </div>
        )
    }

    filter  = (event) => {
        // this.setState({selected: event.target.innerHTML});
        const { filter } = this.props;
        filter(event.target.innerHTML);
    }
}


ArticleFilters.propTypes = {
    filter: PropTypes.func.isRequired
}

export default ArticleFilters;