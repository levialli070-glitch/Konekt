import React from "react";
import classes from "./LogInPage.module.css";
import LogInForm from "../../components/LogInForm/LogInForm";

const LogInPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.orb1}></div>
      <div className={classes.orb2}></div>
      <div className={classes.orb3}></div>
      <div className={classes.ring}></div>
      <img src="/icon/konektLogo.png" alt="" />

      <LogInForm />
    </div>
  );
};

export default LogInPage;
