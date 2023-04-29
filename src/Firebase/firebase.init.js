// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8EduEd_SK5emQIVcPEnshTvLOVvNe6_8",
  authDomain: "my-portfolio-d82ad.firebaseapp.com",
  projectId: "my-portfolio-d82ad",
  storageBucket: "my-portfolio-d82ad.appspot.com",
  messagingSenderId: "528880430122",
  appId: "1:528880430122:web:ab1b4da2c47046fd01a753",
  measurementId: "G-RPCX6J8GQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;