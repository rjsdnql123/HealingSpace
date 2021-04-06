import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import { setUserName, setGoogleLogin, setUid, loginError } from "./loginSlice";
import googleLoginAPI from "../../util/googleLoginAPI";
import "core-js/stable";
import "regenerator-runtime/runtime";

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
