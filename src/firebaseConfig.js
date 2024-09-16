// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5p87B5rzBCliWH3gBK_ZeUtfrtBThRTU",
  authDomain: "karconnect-2bf95.firebaseapp.com",
  projectId: "karconnect-2bf95",
  storageBucket: "karconnect-2bf95.appspot.com",
  messagingSenderId: "777592963925",
  appId: "1:777592963925:web:9598cf64472774837925dc",
  measurementId: "G-64SFDLR6BX"
};



if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);