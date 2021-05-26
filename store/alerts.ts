import { AnyAction } from 'redux';
import { createSelector } from 'reselect';
import { createAction } from 'redux-actions';

export const initialState: State['alerts'] = [];

// Action types
export const actionTypes = {
  ADD_ALERT: 'ADD_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT',
  REMOVE_ALL_ALERTS: 'REMOVE_ALL_ALERTS',
};

// Actions
export const addAlert = createAction(
  actionTypes.ADD_ALERT,
  (message: string, variant: MessageVariant) => ({
    message,
    variant,
  })
);

export const removeAlert = createAction(
  actionTypes.REMOVE_ALERT,
  (key: number) => key
);

export const removeAllAlerts = createAction(actionTypes.REMOVE_ALL_ALERTS);

// Selectors
export const getAlerts = (state: State) => state.alerts;
export const getLastAlert = createSelector(getAlerts, (alerts) => alerts.pop());

// Reducer
export const reducer = (
  state: State['alerts'] = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypes.ADD_ALERT:
      return [
        ...state,
        {
          key: Date.now(),
          message: action.payload.message,
          variant: action.payload.variant,
        },
      ];
    case actionTypes.REMOVE_ALERT:
      return [state.filter((alert) => alert.key !== action.payload.key)];
    case actionTypes.REMOVE_ALL_ALERTS:
      return [];
    default:
      return state;
  }
};
