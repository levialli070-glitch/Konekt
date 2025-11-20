import classes from "./Navbar.module.css";
import cn from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Toaster, toast } from "react-hot-toast";

const Navbarr = () => {
  const [query, setQuery] = React.useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    toast.success(`Searching for "${query}"`);
  };
  return (
    <div className={cn(classes.navbar, "navbar")}>
      <Link to="/" className={cn(classes.logo, "logo")}>
        <img src="/icon/konect.png" alt="Konekt Logo" />
      </Link>
      <form onSubmit={handleSearchSubmit} className={cn(classes.searchbar)}>
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>
      <div className={cn(classes.ctabtns)}>
        <Link to="/signup" className={cn(classes.ctabtn)}>
          Sign Up
        </Link>
        <Link to="/login" className={cn(classes.ctabtn, classes.signupBtn)}>
          Log in
        </Link>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Navbarr;
