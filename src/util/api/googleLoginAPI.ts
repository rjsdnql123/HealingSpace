import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function googleLoginAPI() {
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

export default googleLoginAPI;
