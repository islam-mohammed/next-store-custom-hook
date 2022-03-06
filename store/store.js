import { useState, useEffect } from "react";

let state = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(state)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](state, payload);
    state = { ...state, ...newState };

    for (const listener of listeners) {
      listener(state);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [state, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    state = { ...state, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
