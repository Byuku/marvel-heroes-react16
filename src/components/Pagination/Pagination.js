import React from 'react';

const Pagination = ({ herosPerPage, totalHeros, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalHeros / herosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <button className="page-btn" onClick={() => paginate(number)}>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
      </nav>
    );
};

export default Pagination;