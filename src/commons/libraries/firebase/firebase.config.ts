import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCURUmV6Nwa_Ncrj50wotWSgZBUoAeJFZY",
  authDomain: "portfolio-c1747.firebaseapp.com",
  projectId: "portfolio-c1747",
  storageBucket: "portfolio-c1747.appspot.com",
  messagingSenderId: "249654151149",
  appId: "1:249654151149:web:143ddfe92c16de593fc9e4",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
