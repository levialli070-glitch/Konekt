import classes from "./RightSideBar.module.css";
import cn from "classnames";

const RightSideBar = () => {
  return (
    <aside className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <p>Trending topics</p>
        <ul>
          <li>
            <a href="">Christianity</a>
          </li>
          <li>
            <a href="">Barbs Beef</a>
          </li>
          <li>
            <a href="">Food</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Gym tips</a>
          </li>
          <li>
            <a href="">Rapture</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSideBar;
