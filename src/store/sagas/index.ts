import google from "../../feature/loginForm/saga";
import { all } from "redux-saga/effects";
import Information from "./information";
export default function* rootSaga() {
  yield all([google(), Information()]);
}
