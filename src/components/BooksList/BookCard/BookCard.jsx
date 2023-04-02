import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ICONS } from 'assets/icons';
import { routesPath } from 'router/routesPath';
import { deleteBook } from 'services/books-api';
import { SpinnerButton } from 'components/SpinnerButton';
import s from './BookCard.module.scss';

export const BookCard = ({ book, onDelete, count }) => {
  const [favorite, setFavorite] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Link to={book._id} state={{ from: location, count: count }}>
      <div className={s.container}>
        <button
          type="button"
          className={s.favorite}
          onClick={e => {
            e.preventDefault();
            setFavorite(!favorite);
          }}
        >
          {favorite ? (
            <ICONS.FAVORITE_ACTIVE />
          ) : (
            <ICONS.FAVORITE width={24} height={24} fill="var(--red)" />
          )}
        </button>
        <img className={s.poster} src={book.small_image} alt="book poster" />
        <p className={s.reviews}>{`${book.reviews} відгуків`}</p>
        <p className={s.title}>{book.title}</p>
        <p className={s.author}>{book.author}</p>
        <p className={s.price}>{`${book.price}.00 грн`}</p>
        <div className={s.inStock}>
          {book.inStock ? (
            <ICONS.CHECK fill="var(--accent-cl)" />
          ) : (
            <ICONS.CHECK fill="var(--gray)" />
          )}
          <p className={book.inStock ? s.inStockText : s.outOfStockText}>
            {book.inStock ? 'Є в наявності' : 'Немає в наявності'}
          </p>
        </div>
        {/* <div className={s.addButtonContainer}>
          <button type='button' className={s.addButton} onClick={(e)=>{e.preventDefault();}}>
            <ICONS.PLUS className={s.addIcon} />
            Додати до кошика
          </button>
        </div> */}
        <ul className={s.editButtonContainer}>
          <li>
            <button
              type="button"
              className={s.editButton}
              onClick={e => {
                e.preventDefault();
                navigate(book._id + '/' + routesPath.BOOK_EDIT, {
                  state: {
                    from: location,
                  },
                });
              }}
            >
              <ICONS.EDIT />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={s.deleteButton}
              onClick={async e => {
                e.preventDefault();
                try {
                  setIsDeleting(true);
                  await deleteBook(book._id);
                  setIsDeleting(false);
                  onDelete();
                } catch (error) {
                  setIsDeleting(false);
                  console.log(error.message);
                }
              }}
            >
              {isDeleting ? <SpinnerButton /> : <ICONS.TRASH />}
            </button>
          </li>
        </ul>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  count: PropTypes.number,
  onDelete: PropTypes.func,
  book: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    small_image: PropTypes.string,
    reviews: PropTypes.string,
    inStock: PropTypes.bool,
  }),
};
