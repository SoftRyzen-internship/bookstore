import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux/operations/operations-books';
import * as selectors from 'redux/selectors';

import { Spinner } from 'components/Spinner';
import { BookCard } from './BookCard';

import s from './BooksList.module.scss';

export const BooksList = () => {
  const books = useSelector(selectors.getBooks);
  const isLoading = useSelector(selectors.getBooksIsLoading);
  const countOnPage = useSelector(selectors.getCountBooksOnPage);
  const totalBooks = useSelector(selectors.getTotalCountBooks);

  const dispatch = useDispatch();

  const [count, setCount] = useState(countOnPage);
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page') || '1';
  const booksPerPage = 6;
  const changed = useRef(false);

  useEffect(() => {
    if (!changed.current && count === 0 && page > 1) {
      setSearchParams({ page: page - 1 });
      changed.current = true;
    } else {
      dispatch(operations.getBooks(page));
      setCount(countOnPage);
      changed.current = false;
    }
  }, [dispatch, count, page, setSearchParams, totalBooks, countOnPage]);

  const handlePageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
  };

  return (
    <div className={s.container}>
      {isLoading && <Spinner />}
      {!isLoading && books && (
        <ul className={s.list}>
          {books.map(book => {
            return (
              <li key={book._id}>
                <BookCard count={countOnPage} book={book} setCount={setCount} />
              </li>
            );
          })}
        </ul>
      )}
      {!isLoading && totalBooks && (
        <ReactPaginate
          initialPage={page - 1}
          pageCount={Math.ceil(totalBooks / booksPerPage)}
          nextLabel=">"
          previousLabel="<"
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={s.pagination}
          activeClassName={s.active}
          disabledClassName={s.disabled}
        />
      )}
    </div>
  );
};
