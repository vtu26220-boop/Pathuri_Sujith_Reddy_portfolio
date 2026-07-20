import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi309lvmjq9_wktZ7LmBQF7n5IU-wEP_0",
  authDomain: "sujith-portfolio-931c7.firebaseapp.com",
  projectId: "sujith-portfolio-931c7",
  storageBucket: "sujith-portfolio-931c7.firebasestorage.app",
  messagingSenderId: "1011778531376",
  appId: "1:1011778531376:web:c7e98d2779442570b8bdf5",
  measurementId: "G-5RPP3NHKG4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;