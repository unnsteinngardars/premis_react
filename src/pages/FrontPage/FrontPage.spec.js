import React from "react";
import { shallow } from "enzyme";
import FrontPage from "./FrontPage";
import ArticleList from "../../components/ArticleList/ArticleList";
import Footer from "../../components/Footer/Footer";

describe("FrontPage test suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FrontPage/>)
    });

    it("Should render the component", () => {
        expect(wrapper).toHaveLength(1);
    });

    it("Should render ArticleList and Footer components", () => {
        expect(wrapper.find(ArticleList)).toHaveLength(1);
        expect(wrapper.find(Footer)).toHaveLength(1);
    });
});