// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_c2w60VksOQmKdp-6aWhoC_cdL49OXA",
  authDomain: "catauapp-85de9.firebaseapp.com",
  projectId: "catauapp-85de9",
  storageBucket: "catauapp-85de9.appspot.com",
  messagingSenderId: "810803215028",
  appId: "1:810803215028:web:100af659736a080755f5e1",
  measurementId: "G-C27VQB4WHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);