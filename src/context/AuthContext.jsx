import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export const AuthContext =
  createContext(null);

function AuthProvider({ children }) {
  const [admin, setAdmin] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // Check Firebase login status
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            setAdmin({
              uid: user.uid,
              email: user.email,
            });
          } else {
            setAdmin(null);
          }

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  // Firebase admin login
  const login = async (
    email,
    password
  ) => {
    try {
      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      return {
        success: true,
        user: result.user,
      };
    } catch (error) {
      console.error(
        "Admin login failed:",
        error
      );

      let message =
        "Unable to login. Please check your email and password.";

      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        message =
          "Invalid email or password.";
      }

      if (
        error.code ===
        "auth/too-many-requests"
      ) {
        message =
          "Too many failed attempts. Please try again later.";
      }

      return {
        success: false,
        message,
      };
    }
  };

  // Firebase logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(
        "Logout failed:",
        error
      );
    }
  };

  const value = {
    admin,
    loading,
    login,
    logout,
    isAuthenticated:
      Boolean(admin),
  };

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;