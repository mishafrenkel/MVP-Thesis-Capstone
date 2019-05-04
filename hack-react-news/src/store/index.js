import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

// initial state will be supplied at runtime
const configureStore = initalState => {
    const store = createStore(reducer, initialState, middleware)
    return store;
};

export default configureStore;
