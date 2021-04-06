import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import { PreviousTestAsync, setPreviousTests } from "./testSlice";
import { getUserTestCount } from "../../util/firebase";

function* InformationAsync({ payload }: any) {
  try {
    const testList = yield call(getUserTestCount, payload);

    yield put(setPreviousTests(testList));
  } catch (e) {}
}

function* watchInformation() {
  yield takeLatest(PreviousTestAsync, InformationAsync);
}

export default function* inFormationSaga() {
  yield all([fork(watchInformation)]);
}
