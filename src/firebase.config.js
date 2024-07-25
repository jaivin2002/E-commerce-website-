// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAx99gp5iVQI4xcukKbMy5SIqVc9PUvA24",
  authDomain: "vrmart-249f1.firebaseapp.com",
  projectId: "vrmart-249f1",
  storageBucket: "vrmart-249f1.appspot.com",
  messagingSenderId: "115582582638",
  appId: "1:115582582638:web:29cc7c9568eb14ea88cb7f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// export const provider = auth.GoogleAuthProvider(); 
export default app;


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export const storage = getStorage(); 

// export { auth, provider, db };
// export default firebaseApp;