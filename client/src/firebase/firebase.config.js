// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };
const firebaseConfig = {
  apiKey: "AIzaSyDKo0d2y4k0lHVeg-CDmJej-wcHjsPnGqg",
  authDomain: "khuda-lag.firebaseapp.com",
  projectId: "khuda-lag",
  storageBucket: "khuda-lag.appspot.com",
  messagingSenderId: "73551145883",
  appId: "1:73551145883:web:37fb1d6e2b1c331ac3cf3e",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);