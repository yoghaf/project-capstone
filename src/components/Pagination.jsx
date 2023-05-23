import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center mt-8">
      <ul className="flex space-x-2">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`${pageNumber === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} px-4 py-2 rounded-lg cursor-pointer`} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
