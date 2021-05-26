import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import {
  initialState as alertsInitialState,
  reducer as alerts,
} from './alerts';
import { initialState as todosInitialState, reducer as todos } from './todos';

const defaultState = {
  todos: todosInitialState,
  alerts: alertsInitialState,
};

const rootReducer = combineReducers({
  todos,
  alerts,
});

const makeConfiguredStore = (reducer: any, initialState = defaultState) =>
  createStore(
    reducer,
    initialState as any, // type definition error: https://github.com/rt2zz/redux-persist/issues/1169
    composeWithDevTools(applyMiddleware(thunk))
  );

const makeStore = () => makeConfiguredStore(rootReducer);
// Check for server here and return store if on server or persisted store if on client.
// Not sure if we'll be using redux-persist, so haven't included it.

// @ts-ignore
export const wrapper = createWrapper(makeStore, { debug: false });
export default wrapper;
