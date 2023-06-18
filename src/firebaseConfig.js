import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOuDOpsCFjgj_TuB6sWjcxZ169KQwjlTg",
  authDomain: "disneyplus-clone-d233b.firebaseapp.com",
  projectId: "disneyplus-clone-d233b",
  storageBucket: "disneyplus-clone-d233b.appspot.com",
  messagingSenderId: "777861171053",
  appId: "1:777861171053:web:a67458bce6b8daf3e6bc64",
  measurementId: "G-XQTF856EYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;