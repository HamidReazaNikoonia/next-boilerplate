import { createRoutine } from 'redux-saga-routines';

import { GET_JOKES } from './constants';

// We Have
// TRIGGER, REQUEST, SUCCESS, FAILURE, FULFILL attributes
// with createRoutine

export const getJokes = createRoutine(GET_JOKES);
