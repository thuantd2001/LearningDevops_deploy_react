import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchUserSuccess } from './actions';
import { FETCH_USER } from './actionTypes';
import { IUser } from './types';

const getUser = () => axios.get<IUser[]>('https://randomuser.me/api/');

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchUserSaga() {
  try {
    const response: AxiosResponse<any> = yield call(getUser);
    yield put(
      fetchUserSuccess({
        user: response.data.results[0],
      })
    );
  } catch (e: any) {}
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_USER, fetchUserSaga)]);
}

export default todoSaga;
