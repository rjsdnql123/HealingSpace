import { createAction, ActionType, createReducer } from "typesafe-actions";

export const SET_USER_NAME = "user/SET_NAME";
export const SET_USER_SCORE = "user/SET_SCORE";
export const SET_USER_WORRY = "user/SET_WORRY";
export const RATE_SET_NAME = "user/RATE_SET_NAME";
export const setUserName = createAction(SET_USER_NAME)<string>();
export const setUserScore = createAction(SET_USER_SCORE)<number>();
export const setUserWorry = createAction(SET_USER_WORRY)<string>();
export const setRateUserName = createAction(RATE_SET_NAME)<string>();

type UserState = {
  userName: string;
  userScore: number;
  userWorry: string;
};

const actions = { setUserName, setUserScore, setUserWorry };
type UserAction = ActionType<typeof actions>;

const initialState: UserState = {
  userName: "",
  userScore: 0,
  userWorry: "",
};

const UserReducer = createReducer<UserState, UserAction>(initialState, {
  [SET_USER_NAME]: (state, { payload: userName }) => {
    console.log("지나가니?");
    console.log(userName, "이름이 뭘까요");
    return Object.assign({}, state, { userName: userName });
  },
  [SET_USER_SCORE]: (state, { payload: userScore }) =>
    Object.assign({}, state, { userScore: state.userScore += userScore }),
  [SET_USER_WORRY]: (state, { payload: userWorry }) => {
    console.log("지나가니");
    return Object.assign({}, state, { userWorry: userWorry });
  },
});

export default UserReducer;
