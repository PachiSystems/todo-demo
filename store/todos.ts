import { AnyAction } from 'redux';
import { createAction } from 'redux-actions';

export const initialState: State['todos'] = [];

// Action types
export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

// Actions
export const addTodo = createAction(
  actionTypes.ADD_TODO,
  (title: Todo['title']) => title
);
export const removeTodo = createAction(
  actionTypes.REMOVE_TODO,
  (id: Todo['id']) => id
);

// Selectors
export const getTodos = (state: State) => state.todos;

// Reducer
export const reducer = (
  state: State['todos'] = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { title: action.payload, id: Date.now() }];
    case actionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
