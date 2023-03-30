import { Spinner } from 'components/Spinner';
import React, { useEffect, useState } from 'react';
import { getBooks } from 'services/books-api';

import s from './BooksList.module.scss';

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks(4)
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(books);
  return (
    <div className={s.container}>
      <Spinner className={s.spinner} />
    </div>
  );
};
