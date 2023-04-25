import React from "react";
import style from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <p className={style.gif}>
        <iframe
        title="404"
          src=" https://i.giphy.com/media/rAm0u2k17rM3e/giphy.webp"
          width="480"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </p>
    </div>
  );
};

export default NotFound;
