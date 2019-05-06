import { actionTypes } from './actions';

const getInitialState = () => ({
  theme: 'dark',
});

const app = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.SET_THEME:
      return {
        // the keys of the state will be replaced by the keys in ...state that match — in this case theme.
        ...state,
        ...payload, // { theme: <VALUE> }
      };
    default:
      return state;
  }
};

export default app;
