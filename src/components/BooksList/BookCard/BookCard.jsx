import { ICONS } from 'assets/icons';
import React from 'react';
import PropTypes from 'prop-types';
import s from './BookCard.module.scss';
import { Link } from 'react-router-dom';

export const BookCard = ({
  favorite,
  onClickFavorite,
  onClickAdd,
  onClickEdit,
  onClickDelete,
  book,
}) => {
  return (
    <Link to={book._id}>
      <div className={s.container}>
        <button className={s.favorite} onClick={onClickFavorite}>
          {favorite ? (
            <ICONS.FAVORITE_ACTIVE />
          ) : (
            <ICONS.FAVORITE fill="var(--red)" />
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
          <button className={s.addButton} onClick={onClickAdd}>
            <ICONS.PLUS className={s.addIcon} />
            Додати до кошика
          </button>
        </div> */}
        <ul className={s.editButtonContainer}>
          <li>
            <button className={s.editButton} onClick={onClickEdit}>
              <ICONS.EDIT />
            </button>
          </li>
          <li>
            <button className={s.deleteButton} onClick={onClickDelete}>
              <ICONS.TRASH />
            </button>
          </li>
        </ul>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  favorite: PropTypes.bool,
  onClickFavorite: PropTypes.func,
  onClickAdd: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  book: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    small_image: PropTypes.string,
    reviews: PropTypes.string,
    inStock: PropTypes.bool,
  }),
};
