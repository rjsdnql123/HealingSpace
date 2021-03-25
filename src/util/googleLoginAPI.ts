import firebase from "firebase/app";
import "firebase/auth";
import "core-js/stable";
import "regenerator-runtime/runtime";

function googleLoginAPI() {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          return res.user;
        });
    });
}

export default googleLoginAPI;
