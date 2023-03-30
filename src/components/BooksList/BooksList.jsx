import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from 'hooks/useFetch';
import { getBooks } from 'services/books-api';
import { Spinner } from 'components/Spinner';
import { BookCard } from './BookCard';

import s from './BooksList.module.scss';

export const BooksList = () => {
  const handleClickFavorite = e => {
    e.preventDefault();
  };
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const { data, loading } = useFetch(
    () => getBooks(currentPage),
    [currentPage]
  );
  // console.log(data);
  return loading ? (
    <Spinner />
  ) : (
    data && (
      <>
        <ul className={s.container}>
          {data.books.map(book => {
            return (
              <li key={book._id}>
                <BookCard
                  onClickFavorite={handleClickFavorite}
                  onClickAdd={handleClickFavorite}
                  onClickEdit={handleClickFavorite}
                  onClickDelete={handleClickFavorite}
                  book={book}
                />
              </li>
            );
          })}
        </ul>
        <ReactPaginate
          initialPage={currentPage}
          pageCount={data.count}
          nextLabel=">"
          previousLabel="<"
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={s.pagination}
          activeClassName={s.active}
        />
      </>
    )
  );
};
