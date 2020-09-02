import produce from 'immer';

import { getJokes } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  jokes: [],
};

const JokeReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case getJokes.REQUEST:
        draft.loading = true;

        break;

      case getJokes.SUCCESS:
        draft.loading = false;
        draft.fetched = true;
        draft.jokes = payload;

        break;

      case getJokes.FAILURE:
        draft.loading = false;
        draft.fetched = false;
        draft.error = payload;

        break;
    }
  });

export default JokeReducer;
