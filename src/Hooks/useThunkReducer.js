import { useReducer, useCallback } from "react";
import { isFunction } from "lodash";

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = useCallback(
    (action) => {
      if (isFunction(action)) {
        return action(enhancedDispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, enhancedDispatch];
};

export default useThunkReducer;
