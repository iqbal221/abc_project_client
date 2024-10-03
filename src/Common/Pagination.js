import React from 'react';
import { NavLink
 } from 'react-router-dom';

const Pagination = ({ DataListPerPage, totalDataList, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDataList / DataListPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='d-flex justify-content-center align-items-center '>
      <ul className='pagination mt-1 '>
        {pageNumbers.map(number => (
          <li key={number} className='page-item '>
            <NavLink onClick={() => paginate(number)} to='#' className='page-link'>
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;