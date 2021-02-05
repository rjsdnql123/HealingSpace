import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import { RATE_SET_NAME, SET_USER_NAME } from "../reducers/userProFile";
function* login(action: any) {
  console.log("닉네임");
  yield delay(3000);
  console.log(action, "엑션d");
  yield put({
    type: SET_USER_NAME,
    payload: action.payload,
  });
}

function* watchLogin() {
  yield takeLatest(RATE_SET_NAME, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
