export type Action = { type: string };

export type State = number | undefined;

type Reducer = <T, A>(state: T | undefined, action: A) => T;

export const myCreateStore = <T, A>(reducer: any) => {
  let state: T;
  let listeners: Array<any> = [];
  const getState = () => state;
  const dispatch = (action: A) => {
    state = reducer(state, action);
    listeners.forEach((listener: () => any) => listener());
  };
  const subscribe = (listener: any) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listeners);
    };
  };
  dispatch({} as A);
  return {
    getState,
    dispatch,
    subscribe,
  };
};
