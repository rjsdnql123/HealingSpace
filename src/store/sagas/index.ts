import google from "./google";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([google()]);
}
