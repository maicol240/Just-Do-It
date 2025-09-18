import { auth } from "../../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

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

export async function signUp(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // Set the display name
    await updateProfile(userCredential.user, { displayName: name });

    return { user: userCredential.user };
  } catch (error) {
    // Return both the error code and the message
    return { error: { code: error.code, message: error.message } };
  }
}
