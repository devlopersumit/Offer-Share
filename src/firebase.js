// @ts-nocheck
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfclPXBPTJ4hOowvBhDE0itGmRoub7qJs",
  authDomain: "offer-share-8801c.firebaseapp.com",
  projectId: "offer-share-8801c",
  storageBucket: "offer-share-8801c.firebasestorage.app",
  messagingSenderId: "356670247942",
  appId: "1:356670247942:web:4cb301e3cc2d848d595f87",
  measurementId: "G-6ZLXPBHGW6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 