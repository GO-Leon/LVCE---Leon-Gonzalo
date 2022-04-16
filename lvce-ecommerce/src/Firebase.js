// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-r5o36bwdGbmesTNpA6PRBTBvLQM38Ec",
  authDomain: "lvce-ecommerce.firebaseapp.com",
  projectId: "lvce-ecommerce",
  storageBucket: "lvce-ecommerce.appspot.com",
  messagingSenderId: "988157552266",
  appId: "1:988157552266:web:7a83177c20cb03dc6def73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
