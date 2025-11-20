import React, { useState } from "react";
import classes from "./LogInForm.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <h2 className={classes.title}>Log In</h2>
        <p className={classes.subtitle}>
          Welcome back! please enter your details
        </p>

        <form onSubmit={handleSubmit} className={classes.formContent}>
          <div className={classes.inputGroup}>
            <label htmlFor="emailOrPhone" className={classes.label}>
              Email or Phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              className={classes.input}
              placeholder="Enter your email or phone"
              value={formData.emailOrPhone}
              onChange={handleInputChange}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="password" className={classes.label}>
              Password
            </label>
            <div className={classes.passwordField}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={classes.input}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className={classes.eyeBtn}
                onClick={handleTogglePassword}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            <a href="" className={classes.forgotPassword}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className={classes.submitBtn}>
            Log in
          </button>
        </form>

        <p className={classes.signupText}>
          Don't have an account?{" "}
          <Link to="/signup" className={classes.signupLink}>
            Sign up
          </Link>
        </p>

        <div className={classes.divider}>
          <span>or continue with</span>
        </div>

        <div className={classes.socialButtons}>
          <a href="" className={classes.socialBtn}>
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a href="" className={classes.socialBtn}>
            <FaGoogle />
            <span>Google</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
