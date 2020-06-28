import React from "react";
import {shallow} from "enzyme";
import Headline from "./index";
import {findByTestAttr} from "../../../Utils";

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
};

describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "Test Description."
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', function () {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('Should render a desc', () => {
            const component = findByTestAttr(wrapper, 'descWrapper');
            expect(component.length).toBe(1);
        })
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should no render',  () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });
});