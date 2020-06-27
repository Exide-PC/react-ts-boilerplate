import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState } from 'store/types/common';

import * as Tasks from './reducers/tasks';

export default function configureStore(initialState?: ApplicationState) {
    const middleware = [
        thunk
    ];

    const rootReducer = combineReducers({
        tasks: Tasks.reducer
    });

    const enhancers = [];

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
