import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

// const config = {
//   "projectId": "frb-albums1",
//   "appId": "1:53618991816:web:7848405358d57f9f5bbbfd",
//   "storageBucket": "frb-albums1.appspot.com",
//   "locationId": "us-central",
//   "apiKey": "AIzaSyCUkn1Wfk_2wtef1veSlOI4XcytIx1ODSg",
//   "authDomain": "frb-albums1.firebaseapp.com",
//   "messagingSenderId": "53618991816"
// };

// const config = {
//   apiKey: "AIzaSyCUkn1Wfk_2wtef1veSlOI4XcytIx1ODSg",
//   authDomain: "frb-albums1.firebaseapp.com",
//   projectId: "frb-albums1",
//   storageBucket: "frb-albums1.appspot.com",
//   messagingSenderId: "53618991816",
//   appId: "1:53618991816:web:7848405358d57f9f5bbbfd"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyD0SWN-h4CvElFIXpdXjxxqed_kdw0ez2g",
  authDomain: "photodocumentation-cf82e.firebaseapp.com",
  databaseURL: "https://photodocumentation-cf82e-default-rtdb.firebaseio.com",
  projectId: "photodocumentation-cf82e",
  storageBucket: "photodocumentation-cf82e.appspot.com",
  messagingSenderId: "1035861943070",
  appId: "1:1035861943070:web:944c1485cb3c651885df0f",
  measurementId: "G-21F20F44DQ"
};

const fire = firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default fire;

