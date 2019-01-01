import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpzCb1wKV-7vMPRtSYrdbLZ0LLN6SEgGI",
  authDomain: "catch-of-the-day-yuhanas.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-yuhanas.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
