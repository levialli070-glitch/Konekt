import React, { useState } from "react";
import classes from "./LazyImage.module.css";
import cn from "classnames";

const LazyImage = ({ src, alt, className, width, height, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const defaultAvatar =
    "https://api.dicebear.com/7.x/avataaars/svg?seed=default";

  return (
    <>
      {!isLoaded && <div className={cn(classes.skeleton, className)} />}
      <img
        src={hasError ? defaultAvatar : src}
        alt={alt}
        className={cn(className, { [classes.loaded]: isLoaded })}
        style={style}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
};

export default LazyImage;
