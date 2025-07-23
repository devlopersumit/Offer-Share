// @ts-nocheck
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Email/password login
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Email/password signup with role
  const signup = async (email, password, role = 'user', displayName = '') => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName || role) {
      await updateProfile(res.user, {
        displayName: displayName || '',
        photoURL: role, // Store role in photoURL for demo (replace with Firestore for production)
      });
    }
  };

  // Google sign-in
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  // Get role (from photoURL for demo)
  const getRole = () => user?.photoURL || 'user';

  const value = { user, loading, login, signup, loginWithGoogle, logout, getRole };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext); 