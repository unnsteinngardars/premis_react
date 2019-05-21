import React from "react";
import { shallow } from "enzyme";
import ArticleList from "./ArticleList";
import articles from "../../data/articles";
import ArticleFilters from "../ArticleFilters/ArticleFilters";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

describe("ArticleList test suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ArticleList articles={articles}/>)
    });

    it("Should render the component", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("Should render the ArticleFilters component", () => {
        expect(wrapper.find(ArticleFilters)).toHaveLength(1);
    });

    it("Should render ArticleListItem components", () => {
        expect(wrapper.find(ArticleListItem)).toHaveLength(articles.length);
    });

    it("filterByType function should filter out type Fréttir", () => {
        let filtered = wrapper.instance().props.articles.filter(article => article.type === "Fréttir");
        expect(wrapper.instance().filterByType(wrapper.instance().props.articles, "Fréttir")).toEqual(filtered);
    });

    it("updateFilter function should update filters on callback from ArticleFilters", () => {
        const filter = "Fréttir";
        const func = jest.spyOn(wrapper.instance(), "updateFilter");
        wrapper.find(ArticleFilters).props().filter(filter);
        expect(func).toHaveBeenCalledWith(filter);
    });
});