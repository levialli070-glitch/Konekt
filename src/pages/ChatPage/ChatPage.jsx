import classes from "./ChatPage.module.css";
import cn from "classnames";

const ChatPage = () => {
  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.content}>
        <h1>Chat</h1>
        <p>Connect and chat with your friends</p>
      </div>
    </main>
  );
};

export default ChatPage;
