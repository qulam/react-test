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
});