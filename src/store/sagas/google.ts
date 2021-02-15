import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
  setUserName,
  setGoogleLogin,
  loginError,
} from "../reducers/userProFile";
import googleLoginAPI from "../../util/api/googleLoginAPI";

function* login() {
  try {
    const { displayName } = yield call(googleLoginAPI);
    console.log(displayName, "user");
    yield put(setUserName(displayName));
  } catch (e) {
    yield put(loginError(e));
  }
}

function* watchLogin() {
  yield takeLatest(setGoogleLogin, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
