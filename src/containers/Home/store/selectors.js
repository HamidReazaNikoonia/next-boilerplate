import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectJokesDomain = state => state.jokes || initialState;

const selectJokes = () => createSelector(selectJokesDomain, subState => subState);

export { selectJokes, selectJokesDomain };
