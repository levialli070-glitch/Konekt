import React, { useState } from "react";
import classes from "./SignUpForm.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <h2 className={classes.title}>Sign Up</h2>
        <p className={classes.subtitle}>
          Create your account and join our community
        </p>

        <form onSubmit={handleSubmit} className={classes.formContent}>
          <div className={classes.inputRow}>
            <div className={classes.inputGroup}>
              <label htmlFor="firstName" className={classes.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={classes.input}
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="lastName" className={classes.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={classes.input}
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="email" className={classes.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={classes.input}
              placeholder="Enter your email"
              value={formData.email}
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className={classes.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="confirmPassword" className={classes.label}>
              Confirm Password
            </label>
            <div className={classes.passwordField}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className={classes.input}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className={classes.eyeBtn}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>
          </div>

          <div className={classes.checkboxGroup}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              className={classes.checkbox}
              checked={formData.agreeTerms}
              onChange={handleInputChange}
            />
            <label htmlFor="agreeTerms" className={classes.checkboxLabel}>
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

          <button type="submit" className={classes.submitBtn}>
            Create Account
          </button>
        </form>

        <p className={classes.loginText}>
          Already have an account?{" "}
          <a href="/login" className={classes.loginLink}>
            Log in
          </a>
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

export default SignUpForm;
