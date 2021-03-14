import google from "./google";
import { all } from "redux-saga/effects";
import testInformation from "./testInformation";
export default function* rootSaga() {
  yield all([google(), testInformation()]);
}
