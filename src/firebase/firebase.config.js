import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn0pWh-zhLH08glRB4eZTBLSkX1_TSc1M",
  authDomain: "client-portfolio-c33e0.firebaseapp.com",
  projectId: "client-portfolio-c33e0",
  storageBucket: "client-portfolio-c33e0.appspot.com",
  messagingSenderId: "739112745781",
  appId: "1:739112745781:web:5582db2cd42927647aea7c",
  measurementId: "G-EHY5LYKDPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);