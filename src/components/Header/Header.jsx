import React from "react";
import "./Header.css";

export default function Header({ loginModal, signUpModal }) {
  return (
    <nav>
      <h1 className="header-title">Just Do It</h1>
      <div className="modal-buttons">
        <button className="login" onClick={loginModal}>
          Login
        </button>
        <button className="sign-up" onClick={signUpModal}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}
