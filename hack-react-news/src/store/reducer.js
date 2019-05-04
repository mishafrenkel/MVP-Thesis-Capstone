import { combineReducers } from 'redux';
import app from './app/reducer';

// Combines all reducers to build out single state tree
const rootReducer = combineReducers({
    app,
});

export default rootReducer;