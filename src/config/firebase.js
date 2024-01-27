"use client";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
  measurementId: process.env.firebase_measurementId,
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const signupUser = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Registration Successful");
        // alert("Registration Successful");

        redirect(user, 200, "/home");
      })
      .catch((err) => {
        toast.error("Singup Failed!");
        alert("Error:", err.message);
      });
  };

  const signinUser = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login Successful");
      })
      .catch((err) => {
        // alert("Login Failed!");
        toast.error("Login Failed!");
        console.log("Login not successful:", err);
      });
  };
  const signout = () => {
    signOut(auth)
      .then((res) => {
        alert("Logout Successful");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const State = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return true;
      }
      return false;
    });
  };
  const fetchAllJobs = () => {
    try {
      const response = axios.get();
      if (response) {
        return response;
      }
    } catch (error) {
      toast.error(error);
    }
  };
  const fetchAJobs = (id) => {
    try {
      const response = axios.get();
      if (response) {
        return response;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUser,
        signinUser,
        signout,
        State,
        fetchAJobs,
        fetchAllJobs,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
