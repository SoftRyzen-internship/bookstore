import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useFetch } from 'hooks/useFetch';
import { getBooks } from 'services/books-api';
import { Spinner } from 'components/Spinner';
import { BookCard } from './BookCard';

import s from './BooksList.module.scss';

export const BooksList = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get('page') ? searchParams.get('page') : 1);

  const handlePageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
  };

  const { data, loading } = useFetch(() => getBooks(page), [page]);
  return (
    <div className={s.container}>
      {loading && <Spinner />}
      {!loading && data && (
        <ul className={s.list}>
          {data.books.map(book => {
            return (
              <li key={book._id}>
                <BookCard book={book} />
              </li>
            );
          })}
        </ul>
      )}
      {!loading && data && (
        <ReactPaginate
          initialPage={page - 1}
          pageCount={data.count}
          nextLabel=">"
          previousLabel="<"
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={s.pagination}
          activeClassName={s.active}
        />
      )}
    </div>
  );
};
