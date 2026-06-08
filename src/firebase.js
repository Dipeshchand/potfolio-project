import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtTkOncGmp4SPeriYfPRTlYSNi8o98KFw",
  authDomain: "ondating-d8c1f.firebaseapp.com",
  projectId: "ondating-d8c1f",
  storageBucket: "ondating-d8c1f.appspot.com",
  messagingSenderId: "131775391730",
  appId: "1:131775391730:web:d11dd5a45454977d66ad6b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export const saveUser = async (id, data) => {
  try {
    await setDoc(doc(db, "users", id), data, { merge: true });
    console.log("User saved:", data);
  } catch (err) {
    console.error("Firestore Error:", err);
  }
};

export const uploadPhoto = async (userId, file) => {
  if (!userId || !file) throw new Error("User ID and file are required for upload.");

  const storageRef = ref(storage, `users/${userId}/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);

  // ✅ Must get the download URL
  const url = await getDownloadURL(storageRef);

  // ✅ Save to Firestore user doc
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, { photos: arrayUnion(url) });

  return url; // ✅ Important for component
};

export { auth, provider, signInWithPopup, db, storage };
