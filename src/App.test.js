import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttr, testStore} from "../Utils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initalState = {
            posts: [
                {
                    title: 'Test title 1',
                    body: 'Test text 1'
                },
                {
                    title: 'Test title 2',
                    body: 'Test text 2'
                }, {
                    title: 'Test title 3',
                    body: 'Test text 4'
                },
            ]
        };
        wrapper = setUp(initalState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });

    it('exampleMethod_updatesState Method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updateState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    });

    it('exampleMethod_returnAValue Method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const nextValue = classInstance.exampleMethod_returnAValue(1);
        expect(nextValue).toBe(2);
    });
});