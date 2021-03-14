import firebase from "firebase/app";

import "firebase/firebase-database";

export const firebaseConfig = {
  apiKey: "AIzaSyCod9hK0LpcMsVHrnE6BYqEW5ep5hwtiKQ",
  authDomain: "healingspace-c26ce.firebaseapp.com",
  databaseURL: "https://healingspace-c26ce-default-rtdb.firebaseio.com",
  projectId: "healingspace-c26ce",
  storageBucket: "healingspace-c26ce.appspot.com",
  messagingSenderId: "655277714798",
  appId: "1:655277714798:web:7494ab9b8112d24021a57f",
  measurementId: "G-K0W21H67HV",
};
export const fire = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  let database = firebase.database();
  console.log(database);
};
export const getUserTestCount = (uid: any) => {
  return firebase
    .database()
    .ref(`/users/${uid}`)
    .once("value")
    .then((res) => {
      return res.val();
    });
};
export function writeUserData(
  uuid: string,
  name: string,
  score: number,
  worry: string
) {
  firebase
    .database()
    .ref("users/" + uuid)
    .push({
      name: name,
      score: score,
      worry: worry,
    });
}

export function usercheck() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // return user;
      console.log(user, "userProFile");
    } else {
    }
  });
}
