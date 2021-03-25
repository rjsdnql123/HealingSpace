import google from "./google";
import { all } from "redux-saga/effects";
import Information from "./information";
export default function* rootSaga() {
  yield all([google(), Information()]);
}
