import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useFetch } from 'hooks/useFetch';
import { getBooks } from 'services/books-api';
import { Spinner } from 'components/Spinner';
import { BookCard } from './BookCard';

import s from './BooksList.module.scss';
import { useEffect, useState } from 'react';

export const BooksList = () => {
  const [count, setCount] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get('page') ? searchParams.get('page') : 1);
  const booksPerPage = 6;

  const handlePageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
  };

  const handleDelete = () => {
    setCount(prev => {
      if (prev === 1) {
        setSearchParams({ page: page - 1 });
        setCount(null);
      } else {
        setCount(prev - 1);
      }
    });
  };

  const { data, loading } = useFetch(() => getBooks(page), [page, count]);

  useEffect(() => {
    if (data) {
      setCount(data.count);
    }
  }, [data]);
  return (
    <div className={s.container}>
      {loading && <Spinner />}
      {!loading && data && (
        <ul className={s.list}>
          {data.books.map(book => {
            return (
              <li key={book._id}>
                <BookCard count={count} book={book} onDelete={handleDelete} />
              </li>
            );
          })}
        </ul>
      )}
      {!loading && data && (
        <ReactPaginate
          initialPage={page - 1}
          pageCount={Math.ceil(data.total / booksPerPage)}
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
