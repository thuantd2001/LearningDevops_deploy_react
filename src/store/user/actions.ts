import { FETCH_USER, FETCH_USER_SUCCESS } from './actionTypes';
import { FetchUser, FetchUserSuccess, FetchUserSuccessPayload } from './types';

export const fetchUser = (): FetchUser => ({
  type: FETCH_USER,
});

export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});
