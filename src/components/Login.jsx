import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Login Successfully");
    } catch (err) {
      setError("Invaild Email or password");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            {error ? (
              <p className="message danger">{error}</p>
            ) : (
              <p className="message success">{success}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <div className="links">
              <Link to="#">Forgot Password?</Link>
              <Link to="#">Sign Up</Link>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img
            src="https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/master/pass/books.jpg"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
