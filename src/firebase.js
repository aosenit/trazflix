import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEDmRsvBLLQRgGCoPTfcVXrMhQKr3yNtA',
  authDomain: 'netflix-clone-e9b07.firebaseapp.com',
  projectId: 'netflix-clone-e9b07',
  storageBucket: 'netflix-clone-e9b07.appspot.com',
  messagingSenderId: '729382620059',
  appId: '1:729382620059:web:95437c0c66499030e52f3e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
