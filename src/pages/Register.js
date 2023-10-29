import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAtwr7cA0EvfKNL6o8gonuF8A6MUe3InU",
  authDomain: "fightcade-clone.firebaseapp.com",
  projectId: "fightcade-clone",
  storageBucket: "fightcade-clone.appspot.com",
  messagingSenderId: "749981233145",
  appId: "1:749981233145:web:6f0d31f5051da3ef059728",
  measurementId: "G-62Y66S0C70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
