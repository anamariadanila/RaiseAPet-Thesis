import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer() {
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

  if (admin.apps.length === 0) {
    initializeApp({
      credential: cert({
        clientEmail,
        privateKey,
        projectId,
      }),
    });
  }

  const db = getFirestore();
  const auth = getAuth();

  return {
    db,
    auth,
  };
}
