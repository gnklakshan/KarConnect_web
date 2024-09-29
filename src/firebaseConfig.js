// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";

// import { getAuth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey : process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyA5p87B5rzBCliWH3gBK_ZeUtfrtBThRTU",
  authDomain: "karconnect-2bf95.firebaseapp.com",
  projectId: "karconnect-2bf95",
  storageBucket: "karconnect-2bf95.appspot.com",
  messagingSenderId: "777592963925",
  appId: "1:777592963925:web:9598cf64472774837925dc",
  measurementId: "G-64SFDLR6BX"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyD05_naft-dQrgbTHllUar1AHBzLodMPLQ",
//   authDomain: "karconnect-new.firebaseapp.com",
//   projectId: "karconnect-new",
//   storageBucket: "karconnect-new.appspot.com",
//   messagingSenderId: "782031587700",
//   appId: "1:782031587700:web:f36e492d91cbd9944c0421",
//   measurementId: "G-Q1X7T2CZS0"
// };


if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }else {
      console.log("Analytics is not supported in this environment.");
    }
  });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// const analytics = getAnalytics(app);

export{app,auth,db};