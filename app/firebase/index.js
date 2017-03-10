import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAqCvxzdEjSYiDw4i7Qr7lFCJ_eaXWX0qo",
    authDomain: "huy-todo-app.firebaseapp.com",
    databaseURL: "https://huy-todo-app.firebaseio.com",
    storageBucket: "huy-todo-app.appspot.com",
    messagingSenderId: "547213356048"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;