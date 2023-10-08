// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
 
  apiKey: "AIzaSyBhf-IWSeyuLw5alrZ9IHUy1X77gHYUKUg",
  authDomain: "chat-app-e6b06.firebaseapp.com",
  projectId: "chat-app-e6b06",
  storageBucket: "chat-app-e6b06.appspot.com",
  messagingSenderId: "410381595685",
  appId: "1:410381595685:web:d41eff35d14f6ea0fafbcc",
  measurementId: "G-9LDBHE20NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
