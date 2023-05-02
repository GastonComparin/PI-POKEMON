import { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  handleClick,
  handlePrev,
  handleNext,
  handleStart,
  currentPage,
}) => {
  return (
    <div className={style.bigcontainer}>
      {totalPages === 0 ? (
        <div />
      ) : (
        <div className={style.container}>
          {currentPage !== 1 ? (
            <button className={style.button} onClick={handleStart}>
              &lt;&lt;
            </button>
          ) : (
            <div />
          )}
          <button className={style.button} onClick={handlePrev}>
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((item, index) => {
            return (
              <button
                key={index}
                id={index + 1}
                onClick={handleClick}
                className={style.button}
              >
                {index + 1}
              </button>
            );
          })}
          <button className={style.button} onClick={handleNext}>
          &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
