import React from "react";


const Pagination = ({
  totalItems,
  currentPage,
  setCurrentPage,
  pageSize,
  offsetentry,
  entry,
  setPageSize
}) => {


  // console.log("pageno",currentPage)

  const nextPage = () => {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(totalItems / pageSize);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSelect=(e)=>{
    let value=Number(e.target.value)
    console.log(value)

    console.log(typeof(value))
    if(typeof(value)=="number" ){
       setCurrentPage(1)
       setPageSize(+value);
    }

  }

  return (
    <>
      {totalItems > 0 && (
        <div className="table-footer d-md-flex justify-content-md-between align-items-center">
          <p className="mb-0">
            Showing {offsetentry + 1} to {entry} of{" "}
            <span id="total-entries">{totalItems}</span> entries
          </p>
          <nav>
      
            <ul className="pagination pagination-md">
              <select className="form-select mx-2" aria-label="Default select example" onChange={handleSelect} value={pageSize} >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option className="my-5" value="100">100</option>

              </select>
              <li className="page-item">
                <button
                  className="page-link text-dark"
                  onClick={prevPage}
                  disabled={currentPage ==1}
                >
                  {/* &laquo; */}
                  Previous
                </button>
              </li>

              {pageNumbers.map((pageNumber) => {
                let pagetominus = 2;
                let pagetoplus = 2;

                if (currentPage == 1) {
                  pagetominus = 1;
                  pagetoplus = 4;
                } else if (currentPage == 2) {
                  pagetominus = 2;
                  pagetoplus = 3;
                } else if (currentPage == 3) {
                  pagetominus = 3;
                  pagetoplus = 2;
                } else if (currentPage + 1 == totalPages) {
                  pagetominus = 3;
                  pagetoplus = 2;
                } else if (currentPage == totalPages) {
                  pagetominus = 4;
                  pagetoplus = 2;
                }

                const minPage = Math.max(1, currentPage - pagetominus);
                const maxPage = Math.min(totalPages, currentPage + pagetoplus);

                // console.log("minPage", minPage);
                // console.log("maxPage", maxPage);

                if (pageNumber >= minPage && pageNumber <= maxPage) {
                  return (
                    <li
                      key={pageNumber}
                      className={`page-item ${
                        currentPage == pageNumber ? "active" : ""
                      }`}
                    >
                      {console.log("pageNumber",pageNumber,currentPage)}
                      <button
                        className={`page-link ${
                          currentPage === pageNumber
                            ? "bg-dark text-white border-dark"
                            : "text-dark"
                        }`}
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        <b>{pageNumber}</b>
                      </button>
                    </li>
                  );
                }
                return null;
              })}

              <li className="page-item">
                <button className="page-link text-dark" onClick={nextPage} disabled={currentPage === totalPages}>
                  {/* &raquo; */}
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Pagination;
