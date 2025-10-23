import classes from "./Navbar.module.css";
import cn from "classnames";
import React from "react";
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
      <div className={cn(classes.logo, "logo")}>
        <img src="null" alt="Konekt Logo" />
      </div>
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
        <button className={cn(classes.ctabtn)}>Login</button>
        <button className={cn(classes.ctabtn, classes.signupBtn)}>
          Signup
        </button>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Navbarr;
