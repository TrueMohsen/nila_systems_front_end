"use client";

import { useState } from "react";
import "./login.css";
import SignUpForm from '@/app/(auth)/login/signup/signup';
import SignInForm from '@/app/(auth)/login/signin/signin';

export default function LoginPage() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");


  return (
    <div className="App">
      {/*<h2>Sign in/up Form</h2>*/}
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>!خوش آمدید</h1>
              <p>
                برای برقراری ارتباط با ما لطفا وارد شوید
              </p>
              <button
                className="button ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                ورود
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>درود بر تو</h1>
              <p>مشخصات فردی خودتو وارد کن تا عضو وبسایت شوی</p>
              <button
                className="button ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
