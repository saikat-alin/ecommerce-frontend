import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageIndex,
  pageCount,
  goToPage,
  nextPage,
  previousPage,
  totalItems,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <div className="text-sm text-gray-700">
        Showing {pageIndex * pageCount + 1}-
        {Math.min((pageIndex + 1) * pageCount, totalItems)} of {totalItems}{" "}
        results
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired, // Add totalItems as a required prop
};

export default Pagination;
