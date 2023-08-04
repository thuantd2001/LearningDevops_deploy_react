import { FETCH_USER, FETCH_USER_SUCCESS } from './actionTypes';

export interface IUser {
  user: any;
}

export interface TodoState {
  user: any;
}

export interface FetchUserSuccessPayload {
  user: any;
}

export interface FetchTodoFailurePayload {
  error: string;
}

export interface FetchUser {
  type: typeof FETCH_USER;
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type TodoActions = FetchUser | FetchUserSuccess;
