import classes from "./LeftSidebar.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineBell } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiChat3Line } from "react-icons/ri";

const LeftSidebar = () => {
  return (
    <aside className={cn(classes.container, "container")}>
      <ul className={classes.list}>
        <li>
          <Link to="/">
            {" "}
            <HiOutlineHome className={classes.icon} /> Home
          </Link>
        </li>
        <li>
          <Link to="/communities">
            <PiUsersThreeBold className={classes.icon} /> Communities
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <RiChat3Line className={classes.icon} /> Chat
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <HiOutlineBell className={classes.icon} /> Notifications
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <CgProfile className={classes.icon} /> Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
