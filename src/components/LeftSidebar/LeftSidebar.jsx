import classes from "./LeftSidebar.module.css";
import cn from "classnames";
import { HiOutlineHome } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import { HiOutlineBell } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiChat3Line } from "react-icons/ri";

const LeftSidebar = () => {
  return (
    <div className={cn(classes.container, "container")}>
      <ul className={classes.list}>
        <li>
          <a href="">
            {" "}
            <HiOutlineHome className={classes.icon} /> Home
          </a>
        </li>
        <li>
          <a href="">
            <PiUsersThreeBold className={classes.icon} /> Communities
          </a>
        </li>
        <li>
          <a href="">
            <RiChat3Line className={classes.icon} /> Chat
          </a>
        </li>
        <li>
          <a href="">
            <HiOutlineBell className={classes.icon} /> Notifications
          </a>
        </li>
        <li>
          <a href="">
            <CgProfile className={classes.icon} /> Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
