import React, { useState } from "react";
import { auth, provider, signInWithPopup, saveUser } from "../firebase";

export default function Signup({ onNext }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  // 🔹 Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        provider: "google",
        photos: [], // empty photos array
      };

      await saveUser(user.uid, userData);
      onNext(userData);
    } catch (err) {
      console.error("Google Signup Error:", err);
    }
  };

  // 🔹 Manual Signup
  const handleNext = async () => {
    if (!name || !dob || !gender) {
      return alert("Please fill all fields");
    }

    const userId = "manual_" + Date.now().toString();
    const userData = {
      name,
      dob,
      gender,
      provider: "manual",
      uid: userId,
      photos: [],
    };

    try {
      await saveUser(userId, userData);
      onNext(userData);
    } catch (err) {
      console.error("Firestore save error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h1>
        <button
          onClick={handleGoogleSignup}
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg mb-4 hover:bg-gray-50 transition flex items-center justify-center gap-3"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google icon"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-200" />
          <span className="px-2 text-sm text-gray-400">OR</span>
          <hr className="flex-1 border-gray-200" />
        </div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3 focus:ring-2 focus:ring-yellow-400 outline-none transition"
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3 text-gray-500 focus:ring-2 focus:ring-yellow-400 outline-none transition"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6 focus:ring-2 focus:ring-yellow-400 outline-none transition"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button
          onClick={handleNext}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
