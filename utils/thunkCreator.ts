import { Dispatch } from 'redux';

export const thunkCreator = (thunkAction: thunkAction) => {
  const { types, promise, ...rest } = thunkAction;
  const [REQUESTED, RESOLVED, REJECTED] = types;

  return (dispatch: Dispatch) => {
    dispatch({ ...rest, type: REQUESTED });
    return promise
      .then((result: any) => {
        if (result.error) throw new Error(result.error);
        dispatch({ ...rest, type: RESOLVED, result });
        return result;
      })
      .catch((error: any) => {
        dispatch({ ...rest, type: REJECTED, error });
        throw error;
      });
  };
};

/** Usage:
 *
 * // Action
 * export const someFetchThing = () => thunkCreator({
 *   types: [FETCH_STUFF_REQUEST, FETCH_STUFF_SUCCESS, FETCH_STUFF_FAILURE],
 *   promise: fetch('http://www.someplace.com/api/stuff').then(response => response.json()
 * }
 *
 * In component:
 * import { someFetchThing } from 'place/where/file/is';
 * import { useDispatch } from 'react-redux';
 *
 * const users = dispatch(someFetchThing());
 *
 */
