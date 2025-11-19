import classes from "./NotificationsPage.module.css";
import cn from "classnames";

const NotificationsPage = () => {
  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <h1>Notifications</h1>
        <p>Stay updated with your notifications</p>
      </div>
    </main>
  );
};

export default NotificationsPage;
