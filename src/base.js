import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  "projectId": "frb-albums1",
  "appId": "1:53618991816:web:7848405358d57f9f5bbbfd",
  "storageBucket": "frb-albums1.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyCUkn1Wfk_2wtef1veSlOI4XcytIx1ODSg",
  "authDomain": "frb-albums1.firebaseapp.com",
  "messagingSenderId": "53618991816"
};

// const config = {
//   apiKey: "AIzaSyCUkn1Wfk_2wtef1veSlOI4XcytIx1ODSg",
//   authDomain: "frb-albums1.firebaseapp.com",
//   projectId: "frb-albums1",
//   storageBucket: "frb-albums1.appspot.com",
//   messagingSenderId: "53618991816",
//   appId: "1:53618991816:web:7848405358d57f9f5bbbfd"
// };

const fire = firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default fire;

