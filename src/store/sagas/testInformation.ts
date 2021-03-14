import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
  setUserName,
  setGoogleLogin,
  loadPreviousTest,
  setPreviousTests,
  setUid,
  loginError,
} from "../reducers/userProFile";
import { getUserTestCount } from "../../util/firebase";

function* TestInformationAsync({ payload }: any) {
  try {
    const a = yield call(getUserTestCount, payload);

    yield put(setPreviousTests(a));
  } catch (e) {}
}

function* watchTestInformation() {
  yield takeLatest(loadPreviousTest, TestInformationAsync);
}

export default function* inFormationSaga() {
  yield all([fork(watchTestInformation)]);
}
