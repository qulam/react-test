import React from "react";
import {findByTestAttr, checkProps} from '../../../Utils/index';
import SharedButton from "./index";
import {shallow} from "enzyme";

const setUp = (props = {}) => {
    const component = shallow(<SharedButton {...props} />);
    return component;
};


describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {
                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = setUp(props);
        });

        it('Should Render a button', function () {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

    });

});