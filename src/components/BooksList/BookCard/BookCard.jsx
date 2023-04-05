import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from 'redux/slice/slice-cart';
import * as selectors from 'redux/selectors';
import { userRoles } from 'constants/userRoles';
import { ICONS } from 'assets/icons';
import { routesPath } from 'router/routesPath';
import { deleteBook } from 'services/books-api';
import { SpinnerButton } from 'components/SpinnerButton';

import s from './BookCard.module.scss';

export const BookCard = ({ book, count, onDelete }) => {
  const userRole = useSelector(selectors.getUserRole);
  const cartItems = useSelector(selectors.getCartItems);
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Link to={book._id} state={{ from: location, count: count }} replace={true}>
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
        <p className={s.reviews}>{`${
          book.reviews ? book.reviews : 0
        } відгуків`}</p>
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

        <div className={s.hoverContainer}>
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
          <p className={s.reviews}>{`${
            book.reviews ? book.reviews : 0
          } відгуків`}</p>
          <p className={s.hoverTitle}>{book.title}</p>
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
          {userRole === userRoles.BUYER && (
            <div className={s.addButtonContainer}>
              <button
                type="button"
                className={s.addButton}
                disabled={!book.inStock}
                onClick={e => {
                  e.preventDefault();
                  dispatch(setItem(book));
                }}
              >
                <ICONS.PLUS className={s.addIcon} />
                {cartItems.find(item => item._id === book._id)
                  ? 'Додано до кошика'
                  : 'Додати до кошика'}
              </button>
            </div>
          )}
          {userRole === userRoles.ADMIN && (
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
                      const response = await deleteBook(book._id);
                      setIsDeleting(false);
                      if (response.status === 200) {
                        onDelete();
                      }
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
          )}
        </div>
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
