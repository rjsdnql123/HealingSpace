import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import { PreviousTestAsync, setPreviousTests } from "./testSlice";
import { getUserTestCount } from "../../util/firebase";

interface InformationAsyncType {
  payload: string;
}

function* InformationAsync({ payload }: InformationAsyncType) {
  try {
    if (payload) {
      const testList = yield call(getUserTestCount, payload);
      yield put(setPreviousTests(testList));
    } else {
      yield put(setPreviousTests([]));
    }
  } catch (e) {
    console.log(e, "e");
  }
}

function* watchInformation() {
  yield takeLatest(PreviousTestAsync, InformationAsync);
}

export default function* inFormationSaga() {
  yield all([fork(watchInformation)]);
}
