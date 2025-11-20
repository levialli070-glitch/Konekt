import React from "react";
import classes from "./SignUpPage.module.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.orb1}></div>
      <div className={classes.orb2}></div>
      <div className={classes.orb3}></div>
      <div className={classes.ring}></div>
      <img src="/icon/konektLogo.png" alt="" />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
