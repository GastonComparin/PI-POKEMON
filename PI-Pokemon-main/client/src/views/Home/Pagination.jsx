import style from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  handleClick,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className={style.bigcontainer}>
      {totalPages === 0 ? (
        <div />
      ) : (
        <div className={style.container}>
          <button className={style.button} onClick={handlePrev}>
            Prev
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
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
