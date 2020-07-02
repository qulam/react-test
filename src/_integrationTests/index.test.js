import moxios from 'moxios';
import {testStore} from '../../Utils/index';
import {fetchPosts} from "../actions";

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store updated is correctly', () => {

        const expectedState = [
            {
                title: 'Example title 1',
                body: 'Some text 1'
            },
            {
                title: 'Example title 2',
                body: 'Some text 2'
            },
            {
                title: 'Example title 3',
                body: 'Some text 3',
            },
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toStrictEqual(expectedState);
            })
    });

});