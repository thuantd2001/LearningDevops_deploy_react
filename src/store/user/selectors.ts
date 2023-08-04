import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getUser = (state: AppState) => state.user.user;

export const getUserSelector = createSelector(getUser, (user) => user);
