import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJFqPgjRj0JdUsERgeIyKoVZ1zUpe-eDI",
  authDomain: "chat-app-d7313.firebaseapp.com",
  projectId: "chat-app-d7313",
  storageBucket: "chat-app-d7313.appspot.com",
  messagingSenderId: "86778051108",
  appId: "1:86778051108:web:f95f9a125288447de036b1",
  measurementId: "G-86K0919YPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);