import React, { useState, useEffect } from 'react';
import './Paginate.scss';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/products/productsSlice';

const Paginate = () => {
  const [skip, setSkip] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const maxPage = 9; 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(skip));
  }, [skip]);

  const handleNext = () => {
    if (activePage < maxPage) {
      const newPage = activePage + 1;
      setActivePage(newPage);
      setSkip((newPage - 1) * 12);
    }
  };

  const handlePrev = () => {
    if (activePage > 1) {
      const newPage = activePage - 1;
      setActivePage(newPage);
      setSkip((newPage - 1) * 12);
    }
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    setSkip((page - 1) * 12);
  };

  return (
    <div className="paginate">
      <div className="container">
        <div className="paginate__box">
          <button
            className="paginate__arrow"
            onClick={handlePrev}
            disabled={activePage === 1}
          >
            ←
          </button>

          {[activePage - 1, activePage, activePage + 1].map((page) =>
            page > 0 && page <= maxPage ? (
              <div
                key={page}
                className={`paginate__box-count ${activePage === page ? 'active' : ''}`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </div>
            ) : null
          )}

          <button
            className="paginate__arrow"
            onClick={handleNext}
            disabled={activePage === maxPage}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
