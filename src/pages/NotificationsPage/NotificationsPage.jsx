import React, { useState } from "react";
import classes from "./NotificationsPage.module.css";
import cn from "classnames";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { PiUserPlus } from "react-icons/pi";
import { MdOutlineShare } from "react-icons/md";
import { IoCheckmark, IoClose } from "react-icons/io5";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "like",
      user: "Sarah Code",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      action: "liked your post",
      timestamp: "2 minutes ago",
      icon: AiOutlineLike,
      read: false,
    },
    {
      id: 2,
      type: "comment",
      user: "John Tech",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      action: "commented on your post: 'Great design!'",
      timestamp: "15 minutes ago",
      icon: AiOutlineComment,
      read: false,
    },
    {
      id: 3,
      type: "follow",
      user: "Design Team",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      action: "started following you",
      timestamp: "1 hour ago",
      icon: PiUserPlus,
      read: false,
    },
    {
      id: 4,
      type: "share",
      user: "Alex Developer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      action: "shared your post",
      timestamp: "3 hours ago",
      icon: MdOutlineShare,
      read: true,
    },
    {
      id: 5,
      type: "like",
      user: "Emma Designer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      action: "liked your post",
      timestamp: "5 hours ago",
      icon: AiOutlineLike,
      read: true,
    },
    {
      id: 6,
      type: "comment",
      user: "Mike Frontend",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      action: "commented on your post: 'Amazing work!'",
      timestamp: "1 day ago",
      icon: AiOutlineComment,
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((notif) => !notif.read).length;

  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.notificationsWrapper}>
        {/* Header */}
        <div className={classes.header}>
          <h1>Notifications</h1>
          {unreadCount > 0 && (
            <span className={classes.unreadBadge}>{unreadCount}</span>
          )}
        </div>

        {/* Notifications List */}
        <div className={classes.notificationsList}>
          {notifications.length > 0 ? (
            notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={cn(classes.notificationItem, {
                    [classes.unread]: !notification.read,
                  })}
                >
                  {/* Icon */}
                  <div
                    className={cn(classes.iconContainer, {
                      [classes[notification.type]]: true,
                    })}
                  >
                    <IconComponent />
                  </div>

                  {/* Content */}
                  <div className={classes.content}>
                    <div className={classes.userInfo}>
                      <img
                        src={notification.avatar}
                        alt={notification.user}
                        className={classes.avatar}
                      />
                      <div className={classes.textContent}>
                        <p className={classes.action}>
                          <strong>{notification.user}</strong>{" "}
                          {notification.action}
                        </p>
                        <span className={classes.timestamp}>
                          {notification.timestamp}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className={classes.actions}>
                      {!notification.read && (
                        <button
                          className={cn(classes.actionBtn, classes.readBtn)}
                          onClick={() => markAsRead(notification.id)}
                          title="Mark as read"
                        >
                          <IoCheckmark />
                        </button>
                      )}
                      <button
                        className={cn(classes.actionBtn, classes.dismissBtn)}
                        onClick={() => dismissNotification(notification.id)}
                        title="Dismiss"
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={classes.empty}>
              <p>No notifications yet</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default NotificationsPage;
