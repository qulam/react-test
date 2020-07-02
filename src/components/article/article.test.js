import React from 'react';
import {findByTestAttr, checkProps} from '../../../Utils/index';
import ArticleComponent from "./index";
import {checkPropTypes} from "prop-types";
import {shallow} from 'enzyme';

const setUp = (props = {}) => {
    const component = shallow(<ArticleComponent {...props} />);
    return component;
};

describe('Component ArticleComponent', () => {

    describe('Checking PropTypes', function () {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example title',
                desc: 'Example description'
            };

            const propsError = checkProps(ArticleComponent, expectedProps);
            expect(propsError).toBeUndefined();
        });

        describe('Renders', () => {
            let wrapper;

            beforeEach(() => {
                const props = {
                    title: 'Example title',
                    desc: 'Example description'
                };
                wrapper = setUp(props);
            });

            it('Should render article component', function () {
                const component = findByTestAttr(wrapper, 'articleComponent');
                expect(component.length).toBe(1);
            });

            it('Should render a title', () => {
                const title = findByTestAttr(wrapper, 'articleComponentTitle');
                expect(title.length).toBe(1);
            });

            it('Should render a description', () => {
                const desc = findByTestAttr(wrapper, 'articleComponentDesc');
                expect(desc.length).toBe(1);
            });
        });

        describe('Should NOT render', () => {
            let wrapper;

            beforeEach(() => {
                const props = {
                    desc: 'Example description'
                };
                wrapper = setUp();
            });

            it('Should no render component', () => {
                const component = findByTestAttr(wrapper, 'articleComponent');
                expect(component.length).toBe(0);
            });
        })

    });

});