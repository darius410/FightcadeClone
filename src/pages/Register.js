import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { setDoc, doc} from "firebase/firestore";

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
  const [username, setUserName] = useState("");

  const handleRegistration = async(e) => {
    e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          
          
          await setDoc(doc(db, "Users", user.uid), {
            email: email,
            lastLogin: serverTimestamp(),
            username: username
          });

         
        console.log("User registered:", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error registering user:", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center ">
        <h2>Register</h2>
        <form onSubmit={handleRegistration} className="">
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
          <label>User Name</label>
            <input
            type="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <button type="submit" className="rounded-sm bg-red-600">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
