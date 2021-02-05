import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import { RATE_SET_NAME_GOOGLE, SET_USER_NAME } from "../reducers/userProFile";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();
  console.log("이게넘어가고");
  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      console.log("여기가 그냥 넘어?");
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res.user, "asdfsadf");
          return res.user;
        });
    });
}

function* login(action: any) {
  try {
    //   yield delay(3000);
    console.log("1넘어가니");
    const user = yield call(googleLogin);
    console.log(user.displayName, "2넘어가니");
    yield put({
      type: SET_USER_NAME,
      payload: user.displayName,
    });
    console.log("3넘어가니");
  } catch (e) {
    console.log(e);
  }
}

function* watchLogin() {
  yield takeLatest(RATE_SET_NAME_GOOGLE, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
