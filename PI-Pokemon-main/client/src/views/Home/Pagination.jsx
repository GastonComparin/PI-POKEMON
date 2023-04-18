const Pagination = ({ totalPages, currentPage, handleClick }) => {
  return (
    <div>
      {Array.from({ length: totalPages }).map((item, index) => {
        return (
          <button key={index} id={index + 1} onClick={handleClick}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
