import { auth, db } from "../../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { setDoc } from "firebase/firestore";

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user };
  } catch (error) {
    // Check for common authentication error codes
    if (
      error.code === "auth/user-not-found" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/invalid-credential"
    ) {
      // Return a single, generic error message
      return {
        error: { message: "Invalid email or password. Please try again." },
      };
    } else {
      // For other unexpected errors, return the original message
      return {
        error: { message: "An unexpected error occurred. Please try again." },
      };
    }
  }
};

export const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Update the user's display name
    await updateProfile(userCredential.user, { displayName });

    // Create a user document in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      displayName,
      email,
      createdAt: new Date(),
    });

    return { user: userCredential.user };
  } catch (error) {
    // Check for common authentication error codes
    if (error.code === "auth/email-already-in-use") {
      return {
        error: {
          message: "Email is already in use. Please use a different email.",
        },
      };
    } else if (error.code === "auth/weak-password") {
      return {
        error: {
          message: "Password is too weak. Please choose a stronger password.",
        },
      };
    } else {
      // For other unexpected errors, return the original message
      return {
        error: { message: "An unexpected error occurred. Please try again." },
      };
    }
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
