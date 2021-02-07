import { createReducer } from "typesafe-actions";
import {
  SET_USER_NAME,
  SET_USER_SCORE,
  SET_USER_WORRY,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../../actions/actionTypes";
import { UserAction } from "../../actions/index";

export type UserState = {
  userName: string;
  userScore: number;
  userWorry: string;
  error: string;
  status: boolean;
};

const initialState: UserState = {
  userName: "",
  userScore: 0,
  userWorry: "",
  error: "",
  status: false,
};

const UserReducer = createReducer<UserState, UserAction>(initialState, {
  [SET_USER_NAME]: (state, { payload: userName }) => {
    return Object.assign({}, state, { userName: userName });
  },
  [SET_USER_SCORE]: (state, { payload: userScore }) =>
    Object.assign({}, state, { userScore: state.userScore += userScore }),
  [SET_USER_WORRY]: (state, { payload: userWorry }) => {
    return Object.assign({}, state, { userWorry: userWorry });
  },
  [LOGIN_ERROR]: (state, { payload: error }) => {
    return Object.assign({}, state, { error: error });
  },
  [LOGIN_SUCCESS]: (state) => {
    return Object.assign({}, state, { status: true });
  },
});

export default UserReducer;
