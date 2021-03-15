import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
  setUserName,
  setGoogleLogin,
  setUid,
  loginError
} from "../reducers/userProFile";
import googleLoginAPI from "../../util/api/googleLoginAPI";
import "@babel/polyfill";

function* login() {
  try {
    const { displayName, uid } = yield call(googleLoginAPI);
    yield put(setUserName(displayName));
    yield put(setUid(uid));
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
