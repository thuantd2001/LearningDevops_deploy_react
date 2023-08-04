import { FETCH_USER, FETCH_USER_SUCCESS } from './actionTypes';
import { IUser, TodoActions, TodoState } from './types';

const initialState: TodoState = {
  user: <IUser>{},
};

function todoReducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return {
        ...state,
      };
  }
}
export default todoReducer;
