import classes from "./ProfilePage.module.css";
import cn from "classnames";

const ProfilePage = () => {
  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <h1>Profile</h1>
        <p>Manage your profile and settings</p>
      </div>
    </main>
  );
};

export default ProfilePage;
