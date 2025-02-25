"use server";

import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signInFromSchema } from "../validators";


//signIn user with credentials

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = signInFromSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    const result = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (result?.error) {
      console.error("Sign-in failed:", result.error);
      return { success: false, message: "Invalid email or password" };
    }

    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.error("Unexpected Sign-in Exception:", error);
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "Invalid email or password" };
  }
}

// Sign user Out

export async function signOutUser(){
      await signOut()
} 