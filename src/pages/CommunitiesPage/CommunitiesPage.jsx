import classes from "./CommunitiesPage.module.css";
import cn from "classnames";

const CommunitiesPage = () => {
  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <h1>Communities</h1>
        <p>Explore and join communities that interest you</p>
      </div>
    </main>
  );
};

export default CommunitiesPage;
