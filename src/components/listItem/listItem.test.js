import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../Utils/index';
import ListItem from "./index";

const setUp = (props = {}) => {
    const component = shallow(<ListItem {...props} />);
    return component;
};

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', function () {
            const expectedProps = {
                title: 'Example title',
                desc: 'Some description'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example title',
                desc: 'Example description'
            };
            wrapper = setUp(props);
        });

        it('Should renders without errors', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Should NOT render', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                desc: 'Exampel description',
            };
            wrapper = setUp();
        });

        it('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'componentTitle');
            expect(component.length).toBe(0);
        });

    });
});