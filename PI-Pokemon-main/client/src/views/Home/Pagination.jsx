import style from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, handleClick }) => {
  return (
    <div className={style.bigcontainer}>
      {totalPages === 0 ? (
        <div />
      ) : (
        <div className={style.container}>
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
        </div>
      )}
    </div>
  );
};

export default Pagination;
