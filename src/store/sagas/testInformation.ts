import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import { PreviousTestAsync, setPreviousTests } from "../reducers/userProFile";
import { getUserTestCount } from "../../util/firebase";

function* TestInformationAsync({ payload }: any) {
  try {
    const testList = yield call(getUserTestCount, payload);

    yield put(setPreviousTests(testList));
  } catch (e) {}
}

function* watchTestInformation() {
  yield takeLatest(PreviousTestAsync, TestInformationAsync);
}

export default function* inFormationSaga() {
  yield all([fork(watchTestInformation)]);
}
