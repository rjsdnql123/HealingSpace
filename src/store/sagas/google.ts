import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
  GOOGLE_LOGIN,
  SET_USER_NAME,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from "../../actions/actionTypes";
import googleLoginAPI from "../../util/api/googleLoginAPI";

function* login() {
  try {
    const user = yield call(googleLoginAPI);
    yield put({
      type: SET_USER_NAME,
      payload: user.displayName,
    });
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGIN_ERROR,
      payload: e.message,
    });
  }
}

function* watchLogin() {
  yield takeLatest(GOOGLE_LOGIN, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
