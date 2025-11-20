import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import classes from "./SignUpPage.module.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <div className={classes.container}>
      <Link to="/" className={classes.backBtn}>
        <MdArrowBack />
      </Link>
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
